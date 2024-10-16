import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { authenticateLoader } from '../../loaders';

function Authenticate() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const [response, setResponse] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');
  const navigate=useNavigate();

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
  </div>
  );
}

export default Authenticate;
