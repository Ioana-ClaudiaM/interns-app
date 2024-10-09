import React, { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('');
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        body: JSON.stringify({ email }),
      })

      if (response.status === 200) {
        alert('Please verify your email to complete the login process!');
      } else if (response.status === 422) {
        alert('Email is required.');
      } else if (response.status === 500) {
        alert('Something went wrong. Please try again later.');
      } else {
        alert('Unexpected error occurred.');
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('Failed to login. Please check your connection and try again.');
    }
  }


  return (
    <div className='formular'>
      <label htmlFor="email">Email</label>
      <input type="text" id='email' onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleLogin}>Submit</button>
    </div>
  )
}

export default Login



