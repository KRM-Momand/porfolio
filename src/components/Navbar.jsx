 import React, { useRef } from 'react'
 import Collapse from 'bootstrap/js/dist/collapse';
 import '../styles/navbar.scss'; 
 
 function Navbar() {
  const navRef = useRef(null); 
  const closeMenu = () => {
    const collapse = Collapse.getInstance(navRef.current); 
    collapse?.hide(); 
  }
   return (
     <nav className='navbar navbar-expand-lg navbar-main sticky-top'>
        <div className='container'>
          <h1 className='navbar-brand fw-bold text-primary'>KRM-Momand </h1>
          <button className='navbar-toggler text-primary' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'> <span className='navbar-toggler-icon'></span></button>
          <div className='collapse navbar-collapse' id='navbarNav' ref={navRef}>
            <ul className='navbar-nav ms-auto gap-2 '>
              <li className='nav-item'> <a className='nav-link' href='#home' onClick={closeMenu}> Home </a></li>
              <li className='nav-item'> <a className='nav-link' href='#about' onClick={closeMenu}> About </a></li>
              <li className='nav-item'> <a className='nav-link' href='#projects' onClick={closeMenu}> Projects </a></li>
              <li className='nav-item'> <a className='nav-link' href='#contact' onClick={closeMenu}> Contact </a></li>
            </ul>
          </div>
        </div>

     </nav> 
   )
 }
 
 export default Navbar
 