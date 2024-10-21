import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../middleware';

function Connect() {
    const navigate = useNavigate();

    useEffect(() => {
        const userAuth = async () => {
            const result = await auth();
            if (result.success) {
                console.log('You are logged in!')
            } else {
                setTimeout(() => {
                    navigate('/connect');
                }, 2000);
            }
        };

        userAuth();
    }, []);

    return (
        <div className='formular'>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>
        </div>
    )
}

export default Connect
