import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { registerAction } from '/actions'; 
import { auth } from '../../middleware';

function Register() {
    const [email, setEmail] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); 

    useEffect(() => {
        const checkAuth = async () => {
            const result = await auth(); 
            if (result.success) {
                setIsAuthenticated(true); 
            } else {
                setIsAuthenticated(false); 
            }
            setLoading(false); 
        };

        checkAuth();
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/'); 
        }
    }, [isAuthenticated, navigate]);

    const submitForm = async (event) => {
        event.preventDefault();
        const result = await registerAction(email); 

        if (result.success) {
            alert(result.message);
        } else {
            setResponseMessage(result.message); 
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='formular'>
            <p style={{ color: 'red' }}>{responseMessage}</p>
            <label htmlFor="email">Email</label>
            <input 
                type="text" 
                id='email' 
                onChange={(e) => setEmail(e.target.value)} 
                required
            />
            <button onClick={submitForm}>Submit</button>
        </div>
    );
}

export default Register;
