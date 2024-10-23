import React, { useState } from 'react';
import { Form, useSearchParams } from 'react-router-dom';

function CreateUser() {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code'); 
    const [name, setName] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value); 
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
                        onChange={handleNameChange}
                    />
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </div>
    );
}

export default CreateUser;
