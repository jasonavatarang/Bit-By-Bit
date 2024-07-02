// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container"> {/* Use .container class */}
        <div className="d-flex align-items-center">
          <img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-text-top me-2" />
          <p className="font-dm-mono-bold mb-0" style={{fontSize: '1.5rem'}}>Bit by Bit</p>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active ms-4 font-poppins" style={{color: '#0C3F62'}} aria-current="page" to="/">Home</Link>
            <Link className="nav-link active ms-4 font-poppins" style={{color: '#0C3F62'}} to="/about">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
