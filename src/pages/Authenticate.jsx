import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { authenticateLoader } from '../../loaders';
import { auth } from '../../middleware';

function Authenticate() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
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

  const handleAuthentication = async () => {
    const result = await authenticateLoader(code);

    if (result.success) {
      setResponseMessage(result.message);
    } else {
      setResponseMessage(result.message);
    }
  };


  if (code) {
    handleAuthentication();
  }

  return (
    <div className='formular'>
      <h3>{responseMessage}</h3>
      <button onClick={navigate('/')}>Go on homepage</button>
  </div>
  );
}

export default Authenticate;
