'use server';

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';

export async function checkAuth() {
  const sessionCookie = cookies().get('appwrite-session');
  if (!sessionCookie) {
    return { isAuthenticated: false };
  }
  try {
    const { account } = createSessionClient(sessionCookie.value);
    const userData = await account.get();
    return {
      isAuthenticated: true,
      user: {
        $id: userData.$id,
        email: userData.email,
        name: userData.name,
      },
    };
  } catch (error) {
    return { isAuthenticated: false };
  }
}

export default checkAuth;
