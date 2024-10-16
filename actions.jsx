import axios from 'axios';

export const registerAction = async (email) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`, 
            { email }, 
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true, 
            }
        );

        return { success: true, message: 'A verification email with a code has been sent to you to complete your registration!' };
    } catch (error) {
        if (error.response) {
            const errorMessage = error.response.data?.error || 'Unexpected error occurred.';
            return { success: false, message: errorMessage };
        } else {
            console.error('Register failed', error);
            return { success: false, message: 'Failed to authenticate. Please check your connection and try again.' };
        }
    }
};

export const loginAction = async (email) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, 
            { email }, 
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true, 
            }
        );

        return { success: true, message: 'Please verify your email to complete the login process!' };
    } catch (error) {
        if (error.response) {
            const errorMessage = error.response.data?.error || 'Unexpected error occurred.';
            return { success: false, message: errorMessage };
        } else {
            console.error('Login failed', error);
            return { success: false, message: 'Failed to authenticate. Please check your connection and try again.' };
        }
    }
};

export const createUserAction = async (code, name) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/create-user`, 
            { code, name }, 
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true, 
            }
        );

        return { success: true, message: 'Your account has been created successfully!' };
    } catch (error) {
        if (error.response) {
            const errorMessage = error.response.data?.error || 'Unexpected error occurred.';
            return { success: false, message: errorMessage };
        } else {
            console.error('Create user failed', error);
            return { success: false, message: 'Failed to authenticate. Please check your connection and try again.' };
        }
    }
};
