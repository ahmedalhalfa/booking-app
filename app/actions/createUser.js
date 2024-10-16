'use server';

const { createAdminClient } = require('@/config/appwrite');
import { ID } from 'node-appwrite';

async function createUser(previousState, formData) {
  const email = formData.get('email');
  const name = formData.get('name');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirm-password');
  if (!email || !password || !name || !confirmPassword) {
    return { error: 'All fields are required' };
  }
  if (password.length < 8) {
    return { error: 'Password must be at least 8 characters' };
  }
  if (password !== confirmPassword) {
    return { error: 'Passwords do not match' };
  }
  const { account } = createAdminClient();
  try {
    const user = await account.create(ID.unique(), email, password, name);
    return { success: true };
  } catch (error) {
    return { error: error.message };
  }
}

export default createUser;
