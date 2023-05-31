import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";


function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg pt-4 animate__animated animate__fadeInDown">
      <div className="container container-fluid justify-content-end">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-4 fw-semibold">
            <li className="nav-item">
              <Link
                className="nav-link text-decoration-underline text-center"
                aria-current="page"
                to="/"
                style={{ color: '#2e266f' }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-center"
                to="./addrecipe"
                style={{ color: '#2e266f' }}
              >
                Add Recipe
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-center"
                to="./profile"
                style={{ color: '#2e266f' }}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item d-lg-none d-block">
              <Link
                className="nav-link text-center"
                to="/login"
                style={{ color: '#2e266f' }}
              >
                Login
              </Link>
            </li>
          </ul>
          <div>
            <Link
              to="/login"
              className="text-decoration-none d-flex justify-content-end align-items-center gap-3 d-lg-flex d-none fw-semibold"
              style={{ color: '#fff' }}
            >
              <img
                src="./img/user-icon.png"
                alt="user-icon"
                style={{ width: '15%' }}
              />
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
