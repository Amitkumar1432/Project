import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="navbar-light navbar-sticky navbar-transparent">
      {/* Logo Nav START */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Logo START */}
          <a className="navbar-brand me-0" href="index.html">
            <img
              className="light-mode-item navbar-brand-item"
              src="assets/images/logo.svg"
              alt="logo"
            />
            <img
              className="dark-mode-item navbar-brand-item"
              src="assets/images/logo-light.svg"
              alt="logo"
            />
          </a>
          {/* Logo END */}
          {/* Responsive navbar toggler */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-animation">
              <span />
              <span />
              <span />
            </span>
          </button>
          {/* Main navbar START */}
          <div className="navbar-collapse collapse" id="navbarCollapse">
            {/* Nav Search END */}
            <ul className="navbar-nav navbar-nav-scroll ms-auto">
              {/* Nav item 1 Demos */}
              <li className="nav-item dropdown">
                <NavLink
                  to="/"
                  className="nav-link active"
                  href="#"
                  id="demoMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                </NavLink>
              </li>
              {/* Nav item 2 Course */}
              <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  Course
                </a>
              </li>
              {/* Nav item 3 link*/}
              <li className="nav-item">
                <NavLink
                  to="/Aboutus"
                  className="nav-link"
                  href="contact-us.html"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Contactus"
                  className="nav-link"
                  href="contact-us.html"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Main navbar END */}
          {/* Dark mode options START */}
          <div className="dropdown">
            {/* <button
                className="btn btn-light btn-sm lh-1 p-2 mb-0"
                id="bd-theme"
                type="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                data-bs-display="static"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  fill="currentColor"
                  className="bi bi-circle-half fa-fw theme-icon-active"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                  <use href="#" />
                </svg>
              </button> */}
            <ul
              className="dropdown-menu min-w-auto dropdown-menu-end"
              aria-labelledby="bd-theme"
            >
              <li className="mb-1">
                <button
                  type="button"
                  className="dropdown-item d-flex align-items-center"
                  data-bs-theme-value="light"
                >
                  <svg
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-brightness-high-fill fa-fw mode-switch me-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    <use href="#" />
                  </svg>
                  Light
                </button>
              </li>
              <li className="mb-1">
                <button
                  type="button"
                  className="dropdown-item d-flex align-items-center"
                  data-bs-theme-value="dark"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-moon-stars-fill fa-fw mode-switch me-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                    <use href="#" />
                  </svg>
                  Dark
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="dropdown-item d-flex align-items-center active"
                  data-bs-theme-value="auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-circle-half fa-fw mode-switch me-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                    <use href="#" />
                  </svg>
                  Auto
                </button>
              </li>
            </ul>
          </div>
          {/* Dark mode options END */}
          {/* Signin button */}
          <div class="navbar-nav">
            {/* <button class="btn btn-sm btn-dark mb-0">
                <i class="bi bi-power me-2"></i>Sign Up
              </button> */}
          </div>
          <div className="Register">
            <button class="btn btn-sm btn-dark mb-0">
              <i class="bi bi-power me-2"></i>Register
            </button>
          </div>
        </div>
      </nav>
      {/* Logo Nav END */}
    </header>
  );
}

export default Header;
