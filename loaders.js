import { redirect } from 'react-router-dom';
import { authenticate } from './src/api';

export const authenticateLoader = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    
    try {
        await authenticate({ code: data.code });
        return redirect('/');
    } catch (err) {
        console.error('Eroare de la server:', err.message); 
        return null;
    }
};

