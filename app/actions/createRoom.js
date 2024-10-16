'use server';

import { createAdminClient } from '@/config/appwrite';
import { checkAuth } from '@/app/actions/checkAuth';
import { ID } from 'node-appwrite';
import { revalidatePath } from 'next/cache';

export async function createRoom(previousState, formData) {
  const { databases, storage } = createAdminClient();
  try {
    const { user } = await checkAuth();
    if (!user) {
      return { error: 'User not authenticated' };
    }

    let imageId;
    const image = formData.get('image');
    if (image && image.size > 0 && image.name !== undefined) {
      try {
        const { $id } = await storage.createFile(process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS, ID.unique(), image);
        imageId = $id;
      } catch (error) {
        console.log(error);
        return { error: "Error uploading image" };
      }
    } else {
      console.log('No image uploaded');
    }
    const name = formData.get('name');
    const description = formData.get('description');
    const sqft = formData.get('sqft');
    const capacity = formData.get('capacity');
    const location = formData.get('location');
    const address = formData.get('address');
    const price_per_hour = formData.get('price_per_hour');
    const amentities = formData.get('amentities');
    const availability = formData.get('availability');
    await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      ID.unique(),
      {
        user_id: user.$id,
        name,
        description,
        sqft,
        capacity,
        location,
        address,
        price_per_hour,
        amentities,
        availability,
        image: imageId,
      },
    );
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { error: error.response?.message || 'an unknown error occurred' };
  }
}
