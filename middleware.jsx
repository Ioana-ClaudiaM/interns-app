import axios from 'axios';

export const auth = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/me`, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });

        return { success: true, message: 'You are logged in!' };
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
