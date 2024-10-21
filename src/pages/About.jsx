import React, { useEffect } from 'react'
import { auth } from '../../middleware';
import { useNavigate } from 'react-router-dom';

function About() {
const navigate=useNavigate();
  useEffect(() => {
    const userAuth = async () => {
        const result = await auth();
        if (result.success) {
            console.log('You are logged in!')
        } else {
          setTimeout(() => {
            navigate('/connect');
        }, 500);
        }
    };

    userAuth();
}, []);


  return (
    <div className='content'>lorem...</div>
  )
}

export default About
