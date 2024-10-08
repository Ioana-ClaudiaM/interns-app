import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

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
        </div> 
      </div>
  )
}

export default Sidebar
