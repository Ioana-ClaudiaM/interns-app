import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { logoutAction } from '../../actions'

function Sidebar() {
  
  return (
    <div className='menu'>
        <h2>Menu</h2>
        <div className='links'>
        <Link to="/" params={{pageName:'Home'}}>Home</Link>  
        <Link to="/contact" params={{pageName:'Contact'}}>Contact</Link>  
        <Link to="/about" params={{pageName:'About'}}>About</Link> 
        <Link to="/register" params={{pageName:'Register'}}>Register</Link> 
        <Link to="/login" params={{pageName:'Login'}}>Login</Link> 
        <Link to="/connect" params={{pageName:'Connect'}}>Connect</Link> 
        <br></br>
        <button onClick={logoutAction}>Logout</button>
        </div> 
      </div>
  )
}

export default Sidebar
