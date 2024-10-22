import React, { useState } from 'react';

function Authenticate() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const [responseMessage, setResponseMessage] = useState('');

  return (
    <div>
      {code &&
        <div className='formular'>
          <h3>{responseMessage}</h3>
          <button onClick={navigate('/')}>Go on homepage</button>
        </div>
      }
    </div>
  );
}

export default Authenticate;
