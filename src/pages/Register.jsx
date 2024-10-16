import React, { useState } from 'react';
import { registerAction } from '/actions';
import { auth } from '../../middleware';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const userAuth = async () => {
        const result = await auth();
        console.log('auth')
        if (result.success) {
            setIsAuthenticated(true);
        }
        else {
            setIsAuthenticated(false);
        }
    }

    userAuth();

    const submitForm = async (event) => {
        event.preventDefault();
        if (!isAuthenticated) {
            const result = await registerAction(email);

            if (result.success) {
                alert(result.message);
            } else {
                setResponseMessage(result.message);
            }
        }
        else{
            navigate('/');
        }
    };

    return (
        <div className='formular'>
            <p style={{ color: 'red' }}>{responseMessage}</p>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' onChange={(e) => setEmail(e.target.value)} />
            <button onClick={submitForm}>Submit</button>
        </div>
    );
}

export default Register;
