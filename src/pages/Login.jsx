import React, { useState,useEffect } from 'react'
import { loginAction } from '../../actions';
import { auth } from '../../middleware';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const navigate=useNavigate();

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



