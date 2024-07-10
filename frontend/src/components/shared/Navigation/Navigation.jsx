import React from 'react'
import './Navigation.css'
import Logo from './../../../assets/logo (2).png'
import { useState } from 'react'
const Navigation = () => {
  const[menu,setMenu]=useState('home');
    return (
        <nav className="navbar">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul className="nav-links poppins-semibold">
            <li onClick={()=>setMenu('home')} className={menu=='home'?'active':''}>Home</li>
            <li onClick={()=>setMenu('FAQs')} className={menu=='FAQs'?'active':''}>FAQs</li>
            <li onClick={()=>setMenu('Resources')} className={menu=='Resources'?'active':''}>Resources</li>
            <li onClick={()=>setMenu('AboutUs')} className={menu=='AboutUs'?'active':''}>About Us</li>
            <li onClick={()=>setMenu('ContactUs')} className={menu=='ContactUs'?'active':''}>Contact Us</li>
          </ul>
          <div className="nav-buttons">
            <button className='navigate poppins-semibold'>Sign in</button>
            <button className='submit poppins-semibold'>Register</button>
          </div>
        </nav>
      );
}

export default Navigation
