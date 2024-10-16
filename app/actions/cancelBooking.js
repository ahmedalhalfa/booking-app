'use server';

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import checkAuth from './checkAuth';

const cancelBooking = async (bookingId) => {
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
    
    // we already pass the bookings of the logged in user in the getMyBookings action
    const booking = await databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      bookingId
    );
    if (booking.user_id !== user.$id) {
      return { error: 'You are not authorized to cancel this booking' };
    }
    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      bookingId,
    );

    revalidatePath('/bookings', 'layout');
    return { success: 'Booking cancelled successfully' };
  } catch (error) {
    console.log('failed to cancel booking', error);
    redirect('/error');
  }
};

export { cancelBooking };
