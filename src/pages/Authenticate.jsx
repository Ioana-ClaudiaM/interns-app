import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Authenticate() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const [response, setResponse] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');

  const handleAuthenticate = async () => {
    console.log(code);
    try {
      const response = await fetch('http://localhost:3000/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          withCredentials: true,
        },
        body: JSON.stringify({ code }),
      });

      setResponse(response);

      const data = await response.json();

      if (response.status === 200) {
        setResponseMessage('You have been logged in successfully!');
      } else if (response.status === 400) {
        setResponseMessage(data.error === 'invalid code' ? 'Invalid code provided.' : 'The code has expired.');
      } else if (response.status === 422) {
        setResponseMessage('Code is required.');
      } else if (response.status === 500) {
        setResponseMessage('Something went wrong. Please try again later.');
      } else {
        setResponseMessage('Unexpected error occurred.');
      }
    } catch (error) {
      console.error('Authentication failed', error);
      setResponseMessage('Failed to authenticate. Please check your connection and try again.');
    }
  };

  useEffect(() => {
    if (code) {
      handleAuthenticate();
    }
  }, [code]);

  return (
    <div className='formular'>
      <h3>{responseMessage}</h3>
    </div>
  );
}

export default Authenticate;
