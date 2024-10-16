'use server';

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';
import { Query } from 'node-appwrite';
import { redirect } from 'next/navigation';
import { DateTime } from 'luxon';

const checkRoomAvailability = async (roomId, checkIn, checkOut) => {
  const sessionCookie = cookies().get('appwrite-session');
  if (!sessionCookie) {
    redirect('/login');
  }
  try {
    const { databases } = createSessionClient(sessionCookie.value);
    const { documents: bookings } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      [
        Query.equal('room_id', roomId),
        Query.lessThan('check_in', DateTime.fromISO(checkOut).toISO()),
        Query.greaterThan('check_out', DateTime.fromISO(checkIn).toISO()),
      ],
    );
    if (bookings.length > 0) {
      return false;
    }

    return true;
  } catch (error) {
    console.log('failed to check room availability', error);
    redirect('/error');
  }
};

export { checkRoomAvailability };
