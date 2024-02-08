import React from 'react';
import './Navbar.css';
import logo from './image/logo.jpg'

function Homepage() {
  return (
    <nav className="navbar">
        <div className='img-div'>
            <img src={logo} alt="" srcset="" className='nav-logo'/>
        </div>
        <div className='nav-div'>
      <ul className="navbar-nav">
        <li className="nav-item"><button className="btn login-btn"><a href="/login">Login</a></button></li>
        <li className="nav-item"><button className="btn register-btn"><a href="/register">Register</a></button></li>
      </ul>
      </div>
    </nav>
  );
}

export default Homepage;
