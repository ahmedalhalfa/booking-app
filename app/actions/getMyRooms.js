'use server';

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';
import { Query } from 'node-appwrite';
import { redirect } from 'next/navigation';
const getMyRooms = async () => {
  const sessionCookie = cookies().get('appwrite-session');
  if (!sessionCookie) {
    redirect('/login');
  }
  try {
    const { account, databases } = createSessionClient(sessionCookie.value);
    const user = await account.get();
    const userId = user.$id;
    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      [Query.equal('user_id', userId)],
    );

    return rooms;
  } catch (error) {
    console.log('failed to get user rooms', error);
    redirect('/error');
  }
};

export { getMyRooms };
