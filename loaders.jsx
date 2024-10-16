import { auth } from '/middleware';

export const authenticateLoader = async (code) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        withCredentials: true,
      },
      body: JSON.stringify({ code }),
    });

    const data = await response.json();

    if (response.status === 200) {
      return { success: true, message: 'You have been logged in successfully!', data };
    } else {
      const errorMessage = data?.error || 'Unexpected error occurred.';
      return { success: false, message: errorMessage };
    }
  } catch (error) {
    console.error('Authentication failed', error);
    return { success: false, message: 'Failed to authenticate. Please check your connection and try again.' };
  }
};

export const logoutLoader = async () => {
  const result = await auth();
  if (!result.success) {
      return { success: false, message: 'You are not logged in.' };
  }

  try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/logout`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'include', 
      });

      if (!response.ok) {
        console.error('Logout failed with status:', response.status);
          const data = await response.json();
          const errorMessage = data?.error || 'Unexpected error occurred.';
          return { success: false, message: errorMessage };
      }

      return { success: true, message: 'You have been logged out successfully!' };
  } catch (error) {
      console.error('Logout failed', error);
      return { success: false, message: 'Failed to log out. Please check your connection and try again.' };
  }
};

