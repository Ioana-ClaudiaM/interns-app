import { redirect } from 'react-router-dom';
import { me } from './src/api';

export const meMiddleware = async () => {
    try {
        await me();  
        return null;  
    } catch (err) {
        return redirect('/login');
    }
};

export const authRedirectMiddleware = async () => {
    try {
        await me();  
        return redirect('/'); 
    } catch (err) {
        return null;  
    }
};