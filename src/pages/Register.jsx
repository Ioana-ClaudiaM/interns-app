import React, { useState, useEffect } from 'react';
import { Form, useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    return (
        <Form method="post" className='formular'>
        <p style={{ color: 'red' }}>{responseMessage}</p>
        <label htmlFor="email">Email</label>
        <input
            type="email"
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name='email'
        />
        <button type='submit'>Submit</button>
    </Form>
    
    );
}

export default Register;
