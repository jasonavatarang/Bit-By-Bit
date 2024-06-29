// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center">
            <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top" />
            <p className="fs-4 mb-0 ms-2">Bit by Bit</p>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto fs-4">
              <Link className="nav-link active ms-4" aria-current="page" to="/">Home</Link>
              <Link className="nav-link active ms-4" to="/about">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;