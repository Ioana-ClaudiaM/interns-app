import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { createUserAction } from '../../actions';

function CreateUser() {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const [name,setName] =useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result=await createUserAction(code,name);

        if(result.success){
          alert(result.message);
          navigate('/login');
        }
        else{
          setResponseMessage(result.message);
        }
    }

    return (

        <div>
            {code && (
                <div className='formular'>
                    <input type="text" id='code' hidden value={code} />
                    <p style={{ color: 'red' }}>{responseMessage}</p>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' onChange={(e) => setName(e.target.value)}/>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            )}
        </div>
    )
}

export default CreateUser
