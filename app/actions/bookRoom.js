'use server';

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';
import { ID } from 'node-appwrite';
import checkAuth from './checkAuth';
import { revalidatePath } from 'next/cache';
import { checkRoomAvailability } from './checkRoomAvailability';

const bookRoom = async (previousState, formData) => {
  const sessionCookie = cookies().get('appwrite-session');
  if (!sessionCookie) {
    redirect('/login');
  }
  try {
    const { databases } = createSessionClient(sessionCookie.value);
    const { user } = await checkAuth();
    if (!user) {
      return { error: 'User not authenticated' };
    }

    const checkInDate = formData.get('check_in_date');
    const checkInTime = formData.get('check_in_time');
    const checkOutDate = formData.get('check_out_date');
    const checkOutTime = formData.get('check_out_time');

    const checkInDateTime = `${checkInDate}T${checkInTime}`;
    const checkOutDateTime = `${checkOutDate}T${checkOutTime}`;

    const roomId = formData.get('room_id');
    const userId = user.$id;

    const isAvailable = await checkRoomAvailability(roomId, checkInDateTime, checkOutDateTime);
    if (!isAvailable) {
      return { error: 'Room is not available' };
    }

    const bookingData = {
      check_in: checkInDateTime,
      check_out: checkOutDateTime,
      room_id: roomId,
      user_id: userId,
    };

    await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      ID.unique(),
      bookingData,
    );
    revalidatePath('/bookings', 'layout');

    return { success: 'Room booked successfully' };
  } catch (error) {
    console.log('failed to book room', error);
    return { error: 'Failed to book room' };
  }
};

export { bookRoom };
