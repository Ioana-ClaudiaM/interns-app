import React, { useState } from 'react'
import './Header.css'
import { useLocation } from 'react-router-dom';
function Header() {

  const location = useLocation();
  const pageName = location.pathname.substring(1) || 'Home';

  return (
    <div className='header'>
      <h1>Interns</h1>
      <h2>{pageName.charAt(0).toUpperCase() + pageName.substring(1)}</h2>
    </div>
  )
}

export default Header
