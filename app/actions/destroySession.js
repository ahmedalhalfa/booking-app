'use server';

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';

export async function destroySession() {
  const sessionCookie = cookies().get('appwrite-session');
  if (!sessionCookie) {
    return { error: 'No session cookie found' };
  }

  try {
    const { account } = createSessionClient(sessionCookie.value);
    await account.deleteSession('current');
    cookies().delete('appwrite-session');
    return { success: true };
  } catch (error) {
    return { error: 'Error destroying session' };
  }
}
