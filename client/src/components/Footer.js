import React from 'react';
import logo from '../static/logo.png'

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          {/* First column */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <div className="d-flex align-items-center">
              <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2" />
              <h5 className="text mb-0">Bit by Bit</h5>
            </div>
            <p className="mt-3">
              By Carolina Aranguiz Dias and Jason Ang
            </p>
          </div>
          {/* First column */}

          {/* Second column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 3</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 4</a>
              </li>
            </ul>
          </div>
          {/* Second column */}

          {/* Third column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 3</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 4</a>
              </li>
            </ul>
          </div>
          {/* Third column */}
        </div>
        {/* Grid row */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:&nbsp;
        <a className="text-dark" href="https://bitbybit.com/">bitbybit.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
