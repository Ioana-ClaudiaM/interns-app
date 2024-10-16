export const auth = async() => {
    try{
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/me`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
            withCredentials:true,
        })

        const data = await response.json();

       
        if (response.status === 200) {
            return { success: true, message: 'You are logged in!' };
        } else {
            const errorMessage = data?.error || 'Unexpected error occurred.';
            return { success: false, message: errorMessage };
        }
    }
    catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to authenticate. Please check your connection and try again.' };
    }
}