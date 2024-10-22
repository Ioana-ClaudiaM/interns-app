import React, { useState } from 'react';
import { Form, useSearchParams } from 'react-router-dom';

function CreateUser() {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code'); // Obține codul din query params
    const [name, setName] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value); // Actualizează valoarea name
    };

    return (
        <div>
            {code && (
                <Form method="post" className='formular'>
                    <input type="hidden" id='code' name='code' value={code} />
                    <p style={{ color: 'red' }}>{responseMessage}</p>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id='name' 
                        name='name' 
                        value={name} 
                        onChange={handleNameChange} // Handler pentru actualizarea numelui
                    />
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </div>
    );
}

export default CreateUser;
