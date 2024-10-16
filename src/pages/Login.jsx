import React, { useState } from 'react'
import { loginAction } from '../../actions';

function Login() {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    const result = await loginAction(email);

    if (result.success) {
      alert(result.message);
    } else {
      setResponseMessage(result.message);
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



