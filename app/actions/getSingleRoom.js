'use server';

import { createAdminClient } from '@/config/appwrite';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const getSingleRoom = async (id) => {
  try {
    const { databases } = createAdminClient();
    const room = await databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      id
    );
    revalidatePath('/', 'layout');
    return room;
  } catch (error) {
    console.log('failed to get room', error);
    redirect('/error');
  }
};

export { getSingleRoom };
