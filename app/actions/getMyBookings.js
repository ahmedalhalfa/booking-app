'use server';

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';
import { Query } from 'node-appwrite';
import { redirect } from 'next/navigation';
import checkAuth from './checkAuth';
const getMyBookings = async () => {
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
    const { documents: bookings } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      [Query.equal('user_id', user.$id)],
    );

    return bookings;
  } catch (error) {
    console.log('Error: ', error);
    return { error: 'Failed to get user bookings' };
  }
};

export { getMyBookings };
