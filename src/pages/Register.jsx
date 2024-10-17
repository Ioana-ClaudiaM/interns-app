import React, { useState, useEffect } from 'react';
import { registerAction } from '/actions';
import { auth } from '../../middleware';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const userAuth = async () => {
            const result = await auth();
            if (result.success) {
                setTimeout(() => {
                    navigate('/');
                }, 500);
            } else {
                console.log('You are not logged in!')
            }
        };

        userAuth();
    }, []);

    const submitForm = async (event) => {
        event.preventDefault();
        const result = await registerAction(email);

        if (result.success) {
            alert(result.message);
        } else {
            setResponseMessage(result.message);
        }
    };

    return (
        <div className='formular'>
            <p style={{ color: 'red' }}>{responseMessage}</p>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={submitForm}>Submit</button>
        </div>
    );
}

export default Register;
