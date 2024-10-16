import axios from 'axios';
import { auth } from '/middleware';

export const authenticateLoader = async (code) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/authenticate`, 
      { code }, 
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, 
      }
    );

    return { success: true, message: 'You have been logged in successfully!', data: response.data };
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data?.error || 'Unexpected error occurred.';
      return { success: false, message: errorMessage };
    } else {
      console.error('Authentication failed', error);
      return { success: false, message: 'Failed to authenticate. Please check your connection and try again.' };
    }
  }
};

export const logoutLoader = async () => {
  const result = await auth();
  if (!result.success) {
    return { success: false, message: 'You are not logged in.' };
  }

  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/logout`, 
      {}, 
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, 
      }
    );

    return { success: true, message: 'You have been logged out successfully!' };
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data?.error || 'Unexpected error occurred.';
      return { success: false, message: errorMessage };
    } else {
      console.error('Logout failed', error);
      return { success: false, message: 'Failed to log out. Please check your connection and try again.' };
    }
  }
};
