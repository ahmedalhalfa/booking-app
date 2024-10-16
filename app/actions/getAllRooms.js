'use server';

import { createAdminClient } from '@/config/appwrite';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const getAllRooms = async () => {
  try {
    const { databases } = createAdminClient();
    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
    );
    revalidatePath('/', 'layout');
    return rooms;
  } catch (error) {
    console.log('failed to get rooms', error);
    redirect('/error');
  }
};

export { getAllRooms };
