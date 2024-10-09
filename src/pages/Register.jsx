import React, { useState } from 'react'

function Register() {
    const [email,setEmail]=useState('');
    const [invalidError,setInvalidError]=useState('');
    const [genericError,setGenericError]=useState('');

    const submitForm = async(event) => {
        event.preventDefault();
        try{
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                body: JSON.stringify({email}),
            });

            const data = await response.json();

            if (response.status === 200) {
                alert('A verification email with a code has been sent to you to complete your registration!');
            }else if (response.status === 422) {
                alert('Email is required.');
              } else if (response.status === 500) {
                alert('Something went wrong. Please try again later.');
              } else {
                alert('Unexpected error occurred.');
              }
            } catch (error) {
              console.error('Authentication failed', error);
              alert('Failed to authenticate. Please check your connection and try again.');
            }
    }

  return (
    <div className='formular'>
      <p style={{color:'red'}}>{genericError}</p>
      <label htmlFor="email">Email</label>
      <input type="text" id='email' onChange={(e) =>setEmail(e.target.value)}/>
      <p style={{color:'red'}}>{invalidError}</p>
      <button onClick={submitForm}>Submit</button>
    </div>
  )
}

export default Register
