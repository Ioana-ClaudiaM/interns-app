import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Sidebar.css'
import { logoutLoader } from '../../loaders';

function Sidebar() {
  const navigate=useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();
    const result = await logoutLoader();
    if (result.success) {
        alert(result.message);
        navigate('/register');
    } else {
        alert(result.message);
    }
};

  return (
    <div className='menu'>
        <h2>Menu</h2>
        <div className='links'>
        <Link to="/" params={{pageName:'Home'}}>Home</Link>  
        <Link to="/contact" params={{pageName:'Contact'}}>Contact</Link>  
        <Link to="/about" params={{pageName:'About'}}>About</Link> 
        <Link to="/register" params={{pageName:'Register'}}>Register</Link> 
        <Link to="/login" params={{pageName:'Login'}}>Login</Link> 
        <br></br>
        <button onClick={handleLogout}>Logout</button>
        </div> 
      </div>
  )
}

export default Sidebar
