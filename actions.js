import { redirect } from "react-router-dom";
import { createUser, login, logout, register } from "./src/api";

export const loginAction = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await login({ email: data.email });
        return redirect('/authenticate');
    }
    catch (err) {
        console.log('Eroare de la server:', err.response?.data.error);
        return null;
    }
}

export const logoutAction = async ({ request }) => {
    await logout();
    return redirect('/');
}

export const createUserAction = async ({ request }) => { // Trebuie să primești `request`
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    
    console.log(data); // Verifică dacă datele sunt transmise corect
    
    try {
        await createUser({ name: data.name, code: data.code });
        return redirect('/login');
    } catch (err) {
        console.log('Eroare de la server:', err.response?.data.error);
        return null;
    }
};


export const registerAction = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        await register({ email: data.email });
        return redirect('/create-user');
    } catch (err) {
        console.log('Eroare de la server:', err.response?.data.error);
    }
};


