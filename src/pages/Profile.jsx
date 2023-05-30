import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Profile() {
  return (
    <div>
      <Navbar />
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
          <li className="nav-item text-center">
            <a
              className="nav-link"
              aria-current="page"
              href="/index.html"
              style={{ color: '#2e266f !important' }}
            >
              Home
            </a>
          </li>
          <li className="nav-item text-center">
            <a
              className="nav-link"
              href="./add-recipe.html"
              style={{ color: '#2e266f !important' }}
            >
              Add Recipe
            </a>
          </li>
          <li className="nav-item text-decoration-underline text-center">
            <a
              className="nav-link"
              href="./profile.html"
              style={{ color: '#2e266f !important' }}
            >
              Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="container py-5 mb-5">
      <div className="row justify-content-center pb-5 animate__animated animate__fadeInLeft">
        <div className="col text-center">
          <img src="./img/user-iconn.png" alt="user-icon" />
          <h3>Garneta Sharina</h3>
        </div>
      </div>
      <div className="row animate__animated animate__fadeInLeft">
        <div className="col">
          <ul className="navbar-nav d-flex flex-md-row gap-md-4 fs-6 text-center">
            <li className="nav-item">
              <a className="nav-link fw-bold" href="">My Recipe</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Saved Recipe</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Liked Recipe</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row animate__animated animate__fadeIn">
        <div className="col">
          <hr />
        </div>
      </div>
      <div className="row justify-content-center justify-content-md-start gap-1 gap-sm-2 gap-md-4 animate__animated animate__fadeInLeft">
        <a
          className="mb-1 col-sm-2 col-md-2 d-flex align-items-end img-popular-recipe text-decoration-none text-black"
          style={{backgroundImage: 'url(./img/Rectangle-314.png)'}}
          href="./detail-recipe.html"
        >
          <p className="fs-3 fw-medium">Chicken Kare</p>
        </a>
        <a
          className="mb-1 col-sm-2 col-md-2 d-flex align-items-end img-popular-recipe text-decoration-none text-black"
          style={{backgroundImage: 'url(./img/Rectangle-315.png)'}}
          href="./detail-recipe.html"
        >
          <p className="fs-3 fw-medium">Bomb Chicken</p>
        </a>
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default Profile;
