export const registerAction = async (email) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (response.status === 200) {
            return { success: true, message: 'A verification email with a code has been sent to you to complete your registration!' };
        } else {
            const errorMessage = data?.error || 'Unexpected error occurred.';
            return { success: false, message: errorMessage };
        }
    } catch (error) {
        console.error('Register failed', error);
        return { success: false, message: 'Failed to authenticate. Please check your connection and try again.' };
    }
};

export const loginAction = async (email) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            body: JSON.stringify({ email }),
        })

        if (response.status === 200) {
            return { success: true, message: 'Please verify your email to complete the login process!' };
        } else {
            const errorMessage = data?.error || 'Unexpected error occurred.';
            return { success: false, message: errorMessage };
        }
    } catch (error) {
        console.error('Login failed', error);
        return { success: false, message: 'Failed to authenticate. Please check your connection and try again.' };
    }
}

export const createUserAction = async (code, name) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/create-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            body: JSON.stringify({ code, name })
        })

        const data = await response.json();

        if (response.status === 200) {
            return { success: true, message: 'You account has been created successfully!' };
        } else {
            const errorMessage = data?.error || 'Unexpected error occurred.';
            return { success: false, message: errorMessage };
        }
    } catch (error) {
        console.error('Create user failed', error);
        return { success: false, message: 'Failed to authenticate. Please check your connection and try again.' };
    }

}
