import React, { useState } from 'react';
import { Form, useSearchParams } from 'react-router-dom';

function Authenticate() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  return (
    <div>
      {code && (
        <Form method="post" className='formular'>
          <input type="hidden" name="code" value={code} />
          <button type='submit'>Go on homepage</button>
        </Form>

      )}
    </div>
  );
}

export default Authenticate;
