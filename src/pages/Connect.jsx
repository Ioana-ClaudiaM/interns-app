import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Connect() {

    return (
        <div className='formular'>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>
        </div>
    )
}

export default Connect
