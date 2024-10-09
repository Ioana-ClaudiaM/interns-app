import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function CreateUser() {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const [name,setName] =useState('');
    const [invalidError, setInvalidError] = useState('');
    const [genericError, setGenericError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                body: JSON.stringify({ code,name })
            })

            const data= await response.json();

            if (response.status === 200) {
                alert('You account has been created successfully!');
                navigate('/login');
              } else if (response.status === 400) {
                alert(data.error === 'invalid code' ? 'Invalid code provided.' : 'The code has expired.');
              } else if (response.status === 422) {
                alert('Code and name are required.');
              } else if  (response.status === 500) {
                alert('Something went wrong. Please try again later.');
              } else {
                alert('Unexpected error occurred.');
              }
            } catch (error) {
              console.error('Register failed', error);
              alert('Failed to register. Please check your connection and try again.');
            }
    }

    return (

        <div>
            {code && (
                <div className='formular'>
                    <input type="text" id='code' hidden value={code} />
                    <p style={{ color: 'red' }}>{invalidError}</p>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' onChange={(e) => setName(e.target.value)}/>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            )}
        </div>
    )
}

export default CreateUser
