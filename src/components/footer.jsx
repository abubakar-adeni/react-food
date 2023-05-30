import React from 'react';


const Footer = () => {
  return (
    <footer
      style={{ height: '60vh', backgroundColor: '#efc81a', color: '#2e266f' }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className="fs-1" style={{ textAlign: 'center', color: '#2e266f' }}>Eat, Cook, Repeat</h1>
      <p className="fs-6">Share your best recipe by uploading here!</p>
      <ul className="navbar-nav d-flex flex-md-row gap-md-4 fs-6 text-center">
        <li className="nav-item"><a className="nav-link" href="">Product</a></li>
        <li className="nav-item"><a className="nav-link" href="">Company</a></li>
        <li className="nav-item"><a className="nav-link" href="">Learn More</a></li>
        <li className="nav-item"><a className="nav-link" href="">Get In Touch</a></li>
      </ul>
      <p className="mt-3">
        © Created by
        <a
          className="text-decoration-none fs-6 author"
          style={{ color: '#2e266f' }}
          href="https://github.com/abubakar-adeni"
          > Abubakar Adeni</a
        >
      </p>
    </footer>
  );
};

export default Footer;
