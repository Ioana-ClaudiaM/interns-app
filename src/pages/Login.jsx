import React, { useState,useEffect } from 'react'
import { Form, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');

  return (
    <Form className='formular' method='post'>
      <label htmlFor="email">Email</label>
      <input type="text" id='email' name='email' onChange={(e) => setEmail(e.target.value)} />
      <button type='submit'>Submit</button>
    </Form>
  )
}

export default Login



