import React from "react";
import "../styles/Auth.css";

import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
     <div className="row flex-column flex-md-row">
      <div className="col p-4 left-col d-flex justify-content-center align-items-center">
        <img
          className="image-fluid w-25 animate__animated animate__fadeInUp"
          src="./img/Group-697.png"
          alt="Mama-Recipe-Logo"
        />
      </div>
      <div className="col p-4 d-flex flex-column justify-content-center m-0 py-5 animate__animated animate__fadeInDown">
        <h1 className="text-center">Let's Get Started!</h1>
        <p className="text-center text-secondary">
          Create new account to access all features
        </p>
        <div className="row m-0 p-0 justify-content-start justify-content-md-center">
          <div className="col col-md-8">
            <hr />
            <form action="#" method="post">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="createNewPassword" className="form-label">Create New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="createNewPassword"
                  name="createNewPassword"
                  placeholder="Create New Password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  name="newPassword"
                  placeholder="New Password"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms-conditions"
                  name="terms-conditions"
                />
                <label className="form-check-label" htmlFor="terms-conditions">I agree to terms & conditions</label>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn message"
                  style={{ backgroundColor: '#efc81a', color: 'white' }}
                >
                  Register Account
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className="text-center mt-3">
          Already have an account?
          <Link
            to="/login"
            className="text-decoration-none"
            style={{ color: '#efc81a' }}
          > { " " }
            Log in Here
          </Link>
        </p>
      </div>
    </div>    
    </div>
  );
}

export default Register;
