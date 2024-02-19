import React from "react";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
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
      {/* Header END */}
      {/* **************** MAIN CONTENT START **************** */}
      <main>
        {/* =======================
Main Banner START */}
        <section className="position-relative">
          {/* SVG decoration */}
          <figure className="position-absolute top-50 end-0 translate-middle-y mt-n8">
            <svg
              className="rtl-flip"
              width="1360.5px"
              height="793px"
              viewBox="0 0 1360.5 793"
              style={{ enableBackground: "new 0 0 1360.5 793" }}
              xmlSpace="preserve"
            >
              <path
                className="fill-primary opacity-1"
                d="M33.5,766.3c75.3-24.2,124.5-20.3,155.2-62.8c35.4-49,53.1-184.7,138-191.2s100.9,55.6,208.8-21.2 s44.5-134.3,166.4-174.9c121.8-40.6,177,80.1,279.6,36s122.1-248.4,178.8-290.9c49.3-37,171.2-56.7,200.2-61.1v793H33.5 C33.5,793-41.9,790.4,33.5,766.3z"
              />
            </svg>
          </figure>
          <div className="container position-relative mt-0 mt-sm-5 pt-5">
            <div className="row align-items-center">
              <div className="col-md-5">
                {/* Title */}
                <h1 className="mb-3">
                  We will help you Grow your Knowledge and Skills
                </h1>
                <h6 className="mb-3">
                  1000+ professional Courses for Your Career
                </h6>
                {/* Button */}
                <a href="#" className="btn btn-primary">
                  Get Started
                </a>
              </div>
              <div className="col-md-7">
                {/* Image */}
                <img src="assets/images/element/05.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* =======================
Main Banner END */}

        <section className="py-0 py-xl-5">
          <div className="container">
            <div className="row g-4">
              {/* Counter item */}
              <div className="col-sm-6 col-xl-3">
                <div className="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-15 rounded-3">
                  <span className="display-6 lh-1 text-warning mb-0">
                    <i className="fas fa-tv" />
                  </span>
                  <div className="ms-4 h6 fw-normal mb-0">
                    <div className="d-flex">
                      <h5
                        className="purecounter mb-0 fw-bold"
                        data-purecounter-start={0}
                        data-purecounter-end={10}
                        data-purecounter-delay={200}
                      >
                        0
                      </h5>
                      <span className="mb-0 h5">K</span>
                    </div>
                    <p className="mb-0">Online Courses</p>
                  </div>
                </div>
              </div>
              {/* Counter item */}
              <div className="col-sm-6 col-xl-3">
                <div className="d-flex justify-content-center align-items-center p-4 bg-blue bg-opacity-10 rounded-3">
                  <span className="display-6 lh-1 text-blue mb-0">
                    <i className="fas fa-user-tie" />
                  </span>
                  <div className="ms-4 h6 fw-normal mb-0">
                    <div className="d-flex">
                      <h5
                        className="purecounter mb-0 fw-bold"
                        data-purecounter-start={0}
                        data-purecounter-end={200}
                        data-purecounter-delay={200}
                      >
                        0
                      </h5>
                      <span className="mb-0 h5">+</span>
                    </div>
                    <p className="mb-0">Expert Tutors</p>
                  </div>
                </div>
              </div>
              {/* Counter item */}
              <div className="col-sm-6 col-xl-3">
                <div className="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-10 rounded-3">
                  <span className="display-6 lh-1 text-purple mb-0">
                    <i className="fas fa-user-graduate" />
                  </span>
                  <div className="ms-4 h6 fw-normal mb-0">
                    <div className="d-flex">
                      <h5
                        className="purecounter mb-0 fw-bold"
                        data-purecounter-start={0}
                        data-purecounter-end={60}
                        data-purecounter-delay={200}
                      >
                        0
                      </h5>
                      <span className="mb-0 h5">K+</span>
                    </div>
                    <p className="mb-0">Online Students</p>
                  </div>
                </div>
              </div>
              {/* Counter item */}
              <div className="col-sm-6 col-xl-3">
                <div className="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3">
                  <span className="display-6 lh-1 text-info mb-0">
                    <i className="bi bi-patch-check-fill" />
                  </span>
                  <div className="ms-4 h6 fw-normal mb-0">
                    <div className="d-flex">
                      <h5
                        className="purecounter mb-0 fw-bold"
                        data-purecounter-start={0}
                        data-purecounter-end={6}
                        data-purecounter-delay={300}
                      >
                        0
                      </h5>
                      <span className="mb-0 h5">K+</span>
                    </div>
                    <p className="mb-0">Certified Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =======================
About START */}
        <section className="pb-0 pb-lg-5">
          <div className="container">
            <div className="row g-4 g-lg-5 align-items-center">
              <div className="col-lg-6 position-relative order-2">
                {/* SVG decoration */}
                <figure className="position-absolute top-50 start-50 translate-middle ms-n8 d-none d-sm-block">
                  <svg
                    width="625.8px"
                    height="550px"
                    viewBox="0 0 625.8 630.8"
                    style={{ enableBackground: "new 0 0 625.8 630.8" }}
                  >
                    <path
                      className="fill-primary opacity-1"
                      d="M445.8,133.5c59.7,50.3,122.9,96,149.7,161c26.5,64.6,15.9,148.6-29.9,197.7C520.3,541,439,555,364.9,578.1 c-74.5,23.1-142.1,55.2-200.4,42.3S57.2,549.7,32.6,487.3c-24.2-62-24.2-128.9-17.8-199.6C21.7,217,34.5,142.6,78.7,89.6 S198.6,5,264.4,16.7S386.1,83.2,445.8,133.5z"
                    />
                  </svg>
                </figure>
                {/* Image */}
                <img
                  src="assets/images/element/06.svg"
                  className="position-relative"
                  alt=""
                />
              </div>
              <div className="col-lg-6 position-relative order-1 order-lg-2">
                {/* Title */}
                <h2>Let Us Help You</h2>
                <p className="mb-2">
                  How promotion excellent curiosity yet attempted happiness Gay
                  prosperous impression had conviction For every delay death ask
                  to style Me mean able my by in they Extremity.
                </p>
                {/* Info list */}
                <ul className="list-group list-group-borderless mb-2">
                  <li className="list-group-item d-flex align-items-center px-0">
                    <p className="mb-0 h6 fw-light">
                      <i className="bi bi-arrow-right text-primary me-2" />
                      Setup and installation takes less time
                    </p>
                  </li>
                  <li className="list-group-item d-flex align-items-center px-0">
                    <p className="mb-0 h6 fw-light">
                      <i className="bi bi-arrow-right text-primary me-2" />
                      Professional and easy to use software
                    </p>
                  </li>
                  <li className="list-group-item d-flex align-items-center px-0">
                    <p className="mb-0 h6 fw-light">
                      <i className="bi bi-arrow-right text-primary me-2" />
                      Perfect for any device with pixel-perfect design
                    </p>
                  </li>
                  <li className="list-group-item d-flex align-items-center px-0">
                    <p className="mb-0 h6 fw-light">
                      <i className="bi bi-arrow-right text-primary me-2" />
                      Setup and installation too fast
                    </p>
                  </li>
                </ul>
                {/* Button */}
                <a href="#" className="btn btn-primary-soft mb-0">
                  More about us
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* =======================
About END */}
        {/* =======================
Listed course START */}
        <section className="position-relative pb-0 pb-sm-5">
          <div className="container">
            {/* Title */}
            <div className="row mb-4">
              <div className="col-lg-8 mx-auto text-center">
                <h2>Top Listed Subjects</h2>
                <p className="mb-0">
                  Perceived end knowledge certainly day sweetness why cordially
                </p>
              </div>
            </div>
            <div className="row g-4">
              {/* Item */}
              <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="bg-primary bg-opacity-10 rounded-3 text-center p-3 position-relative btn-transition">
                  {/* Image */}
                  <div className="icon-xl bg-body mx-auto rounded-circle mb-3">
                    <img src="assets/images/element/data-science.svg" alt="" />
                  </div>
                  {/* Title */}
                  <h5 className="mb-1">
                    <a href="#" className="stretched-link">
                      Data Science
                    </a>
                  </h5>
                  <span className="mb-0">15 Course</span>
                </div>
              </div>
              {/* Item */}
              <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="bg-primary bg-opacity-10 rounded-3 text-center p-3 position-relative btn-transition">
                  {/* Image */}
                  <div className="icon-xl bg-body mx-auto rounded-circle mb-3">
                    <img src="assets/images/element/online.svg" alt="" />
                  </div>
                  {/* Title */}
                  <h5 className="mb-1">
                    <a href="#" className="stretched-link">
                      Computer Science
                    </a>
                  </h5>
                  <span className="mb-0">22 Course</span>
                </div>
              </div>
              {/* Item */}
              <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="bg-primary bg-opacity-10 rounded-3 text-center p-3 position-relative btn-transition">
                  {/* Image */}
                  <div className="icon-xl bg-body mx-auto rounded-circle mb-3">
                    <img src="assets/images/element/engineering.svg" alt="" />
                  </div>
                  {/* Title */}
                  <h5 className="mb-1">
                    <a href="#" className="stretched-link">
                      Engineering
                    </a>
                  </h5>
                  <span className="mb-0">53 Course</span>
                </div>
              </div>
              {/* Item */}
              <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="bg-primary bg-opacity-10 rounded-3 text-center p-3 position-relative btn-transition">
                  {/* Image */}
                  <div className="icon-xl bg-body mx-auto rounded-circle mb-3">
                    <img src="assets/images/element/coding.svg" alt="" />
                  </div>
                  {/* Title */}
                  <h5 className="mb-1">
                    <a href="#" className="stretched-link">
                      Web Development
                    </a>
                  </h5>
                  <span className="mb-0">25 Course</span>
                </div>
              </div>
              {/* Item */}
              <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="bg-primary bg-opacity-10 rounded-3 text-center p-3 position-relative btn-transition">
                  {/* Image */}
                  <div className="icon-xl bg-body mx-auto rounded-circle mb-3">
                    <img src="assets/images/element/profit.svg" alt="" />
                  </div>
                  {/* Title */}
                  <h5 className="mb-1">
                    <a href="#" className="stretched-link">
                      Marketing
                    </a>
                  </h5>
                  <span className="mb-0">20 Course</span>
                </div>
              </div>
              {/* Item */}
              <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="bg-primary bg-opacity-10 rounded-3 text-center p-3 position-relative btn-transition">
                  {/* Image */}
                  <div className="icon-xl bg-body mx-auto rounded-circle mb-3">
                    <img src="assets/images/element/medical.svg" alt="" />
                  </div>
                  {/* Title */}
                  <h5 className="mb-1">
                    <a href="#" className="stretched-link">
                      Medical
                    </a>
                  </h5>
                  <span className="mb-0">10 Course</span>
                </div>
              </div>
              {/* Item */}
              <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="bg-primary bg-opacity-10 rounded-3 text-center p-3 position-relative btn-transition">
                  {/* Image */}
                  <div className="icon-xl bg-body mx-auto rounded-circle mb-3">
                    <img src="assets/images/element/home.svg" alt="" />
                  </div>
                  {/* Title */}
                  <h5 className="mb-1">
                    <a href="#" className="stretched-link">
                      Architecture
                    </a>
                  </h5>
                  <span className="mb-0">30 Course</span>
                </div>
              </div>
              {/* Item */}
              <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="bg-primary bg-opacity-10 rounded-3 text-center p-3 position-relative btn-transition">
                  {/* Image */}
                  <div className="icon-xl bg-body mx-auto rounded-circle mb-3">
                    <img src="assets/images/element/artist.svg" alt="" />
                  </div>
                  {/* Title */}
                  <h5 className="mb-1">
                    <a href="#" className="stretched-link">
                      Art &amp; Design
                    </a>
                  </h5>
                  <span className="mb-0">35 Course</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =======================
Listed course END */}

        {/* =======================
Download START */}
        <section className="overflow-hidden">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-md-5 position-relative z-index-9">
                {/* Title */}
                <h2>Learn on your mobile Anytime</h2>
                <p>
                  How promotion excellent curiosity yet attempted happiness Gay
                  prosperous impression had conviction For every delay death ask
                  to style Me mean able my by in they Extremity. had conviction
                  For every delay death ask to style Me mean able my by in they
                  Extremity.
                </p>
                {/* Download button */}
                <div className="row">
                  {/* Google play store button */}
                  <div className="col-6 col-sm-4 col-md-6 col-lg-4">
                    <a href="#">
                      <img
                        src="assets/images/element/google-play.svg"
                        className="btn-transition"
                        alt="google-play"
                      />
                    </a>
                  </div>
                  {/* App store button */}
                  <div className="col-6 col-sm-4 col-md-6 col-lg-4">
                    <a href="#">
                      <img
                        src="assets/images/element/app-store.svg"
                        className="btn-transition"
                        alt="app-store"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-7 text-md-end position-relative">
                {/* SVG decoration */}
                <figure className="position-absolute top-50 end-0 translate-middle-y me-n8">
                  <svg
                    width="632.6px"
                    height="540.4px"
                    viewBox="0 0 632.6 540.4"
                  >
                    <path
                      className="fill-primary opacity-1"
                      d="M531.4,46.9c46.3,27.4,81.4,79.8,91.1,136.2c9.7,56.8-6.4,117.7-38.3,166s-79.4,84.2-138.6,119.3 c-59.6,35.1-130.6,69.7-201.5,62.1c-70.5-7.7-141.4-57.6-185.4-126.5C14.4,335.5-2.9,247.2,23.7,179.5 c26.2-68.1,96.7-116.5,161.6-140.2c64.9-24.2,124.5-24.6,183.3-23.4C427,17.1,485.1,19.5,531.4,46.9z"
                    />
                  </svg>
                </figure>
                {/* Image */}
                <img
                  src="assets/images/element/07.svg"
                  className="position-relative"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* =======================
Download END */}
        <section>
          <div className="container">
            {/* Title */}
            <div className="row mb-4">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="fs-1">Most Popular Courses</h2>
                <p className="mb-0">
                  Choose from hundreds of courses from specialist organizations
                </p>
              </div>
            </div>
            {/* Tabs START */}
            <ul
              className="nav nav-pills nav-pills-bg-soft justify-content-sm-center mb-4 px-3"
              id="course-pills-tab"
              role="tablist"
            >
              {/* Tab item */}
              <li className="nav-item me-2 me-sm-5">
                <button
                  className="nav-link mb-2 mb-md-0 active"
                  id="course-pills-tab-1"
                  data-bs-toggle="pill"
                  data-bs-target="#course-pills-tabs-1"
                  type="button"
                  role="tab"
                  aria-controls="course-pills-tabs-1"
                  aria-selected="false"
                >
                  Web Design
                </button>
              </li>
              {/* Tab item */}
              <li className="nav-item me-2 me-sm-5">
                <button
                  className="nav-link mb-2 mb-md-0"
                  id="course-pills-tab-2"
                  data-bs-toggle="pill"
                  data-bs-target="#course-pills-tabs-2"
                  type="button"
                  role="tab"
                  aria-controls="course-pills-tabs-2"
                  aria-selected="false"
                >
                  Development
                </button>
              </li>
              {/* Tab item */}
              <li className="nav-item me-2 me-sm-5">
                <button
                  className="nav-link mb-2 mb-md-0"
                  id="course-pills-tab-3"
                  data-bs-toggle="pill"
                  data-bs-target="#course-pills-tabs-3"
                  type="button"
                  role="tab"
                  aria-controls="course-pills-tabs-3"
                  aria-selected="false"
                >
                  Graphic Design
                </button>
              </li>
              {/* Tab item */}
              <li className="nav-item me-2 me-sm-5">
                <button
                  className="nav-link mb-2 mb-md-0"
                  id="course-pills-tab-4"
                  data-bs-toggle="pill"
                  data-bs-target="#course-pills-tabs-4"
                  type="button"
                  role="tab"
                  aria-controls="course-pills-tabs-4"
                  aria-selected="false"
                >
                  Marketing
                </button>
              </li>
              {/* Tab item */}
              <li className="nav-item me-2 me-sm-5">
                <button
                  className="nav-link mb-2 mb-md-0"
                  id="course-pills-tab-5"
                  data-bs-toggle="pill"
                  data-bs-target="#course-pills-tabs-5"
                  type="button"
                  role="tab"
                  aria-controls="course-pills-tabs-5"
                  aria-selected="false"
                >
                  Finance
                </button>
              </li>
            </ul>
            {/* Tabs END */}
            {/* Tabs content START */}
            <div className="tab-content" id="course-pills-tabContent">
              {/* Content START */}
              <div
                className="tab-pane fade show active"
                id="course-pills-tabs-1"
                role="tabpanel"
                aria-labelledby="course-pills-tab-1"
              >
                <div className="row g-4">
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/08.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      {/* Card body */}
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-purple bg-opacity-10 text-purple"
                          >
                            All level
                          </a>
                          <a href="#" className="h6 mb-0">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Sketch from A to Z: for app designer</a>
                        </h5>
                        <p className="mb-2 text-truncate-2">
                          Proposal indulged no do sociable he throwing settling.
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="far fa-star text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            4.0/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            12h 56m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            15 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/02.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-success bg-opacity-10 text-success"
                          >
                            Beginner
                          </a>
                          <a href="#" className="text-danger">
                            <i className="fas fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Graphic Design Masterclass</a>
                        </h5>
                        <p className="mb-2 text-truncate-2">
                          Rooms oh fully taken by worse do Points afraid but may
                          end Rooms Points afraid but may end Rooms
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            4.5/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            9h 56m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            65 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/03.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-success bg-opacity-10 text-success"
                          >
                            Beginner
                          </a>
                          <a href="#" className="h6 fw-light mb-0">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Create a Design System in Figma</a>
                        </h5>
                        <p className="mb-2 text-truncate-2">
                          Rooms oh fully taken by worse do. Points afraid but
                          may end afraid but may end.
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            4.5/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            5h 56m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            32 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/07.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-success bg-opacity-10 text-success"
                          >
                            Beginner
                          </a>
                          <a href="#" className="text-danger">
                            <i className="fas fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Deep Learning with React-Native </a>
                        </h5>
                        <p className="mb-2 text-truncate-2">
                          Far advanced settling say finished raillery. Offered
                          chiefly farther
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="far fa-star text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            4.0/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            18h 56m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            99 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/11.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-purple bg-opacity-10 text-purple"
                          >
                            All level
                          </a>
                          <a href="#" className="text-danger">
                            <i className="fas fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Build Responsive Websites with HTML</a>
                        </h5>
                        <p className="mb-2 text-truncate-2">
                          Far advanced settling say finished raillery. Offered
                          chiefly farther
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="far fa-star text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            4.0/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            15h 30m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            68 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/12.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-success bg-opacity-10 text-success"
                          >
                            Beginner
                          </a>
                          <a href="#" className="h6 fw-light mb-0">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Build Websites with CSS</a>
                        </h5>
                        <p className="text-truncate-2 mb-2">
                          Far advanced settling say finished raillery. Offered
                          chiefly farther
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            4.5/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between mt-2">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            36h 30m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            72 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/04.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-purple bg-opacity-10 text-purple"
                          >
                            All level
                          </a>
                          <a href="#" className="text-danger">
                            <i className="fas fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Learn Invision</a>
                        </h5>
                        <p className="mb-2">
                          Arrived off she elderly beloved him Course regard to
                          up he hardly.
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="far fa-star text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            3.5/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between mt-2">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            6h 56m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            82 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/09.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-purple bg-opacity-10 text-purple"
                          >
                            All level
                          </a>
                          <a href="#" className="h6 fw-light mb-0">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">JavaScript: Full Understanding</a>
                        </h5>
                        <p className="text-truncate-2 mb-2">
                          Far advanced settling say finished raillery. Offered
                          chiefly farther.
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            5.0/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            35h 20m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            89 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                </div>
                {/* Row END */}
              </div>
              {/* Content END */}
              {/* Content START */}
              <div
                className="tab-pane fade"
                id="course-pills-tabs-2"
                role="tabpanel"
                aria-labelledby="course-pills-tab-2"
              >
                <div className="row g-4">
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/05.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-success bg-opacity-10 text-success"
                          >
                            Beginner
                          </a>
                          <a href="#" className="h6 fw-light mb-0">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">The Complete Web Development in python</a>
                        </h5>
                        <p className="text-truncate-2 mb-2">
                          Mention Mr manners opinion if garrets enabled.
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            4.5/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between mt-2">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            10h 00m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            26 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/06.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-info bg-opacity-10 text-info"
                          >
                            Intermediate
                          </a>
                          <a href="#" className="h6 fw-light mb-0">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Angular – The Complete Guider</a>
                        </h5>
                        <p className="text-truncate-2 mb-2">
                          Rooms oh fully taken by worse do. Points afraid but
                          may end.
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            4.5/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between mt-2">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            9h 32m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            42 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/07.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-success bg-opacity-10 text-success"
                          >
                            Beginner
                          </a>
                          <a href="#" className="text-danger">
                            <i className="fas fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Deep Learning with React-Native</a>
                        </h5>
                        <p className="text-truncate-2 mb-2">
                          Far advanced settling say finished raillery. Offered
                          chiefly farther
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="far fa-star text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            4.0/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            18h 56m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            99 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/09.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-purple bg-opacity-10 text-purple"
                          >
                            All level
                          </a>
                          <a href="#" className="h6 fw-light mb-0">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">JavaScript: Full Understanding</a>
                        </h5>
                        <p className="text-truncate-2 mb-2">
                          Far advanced settling say finished raillery. Offered
                          chiefly farther
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            5.0/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            35h 20m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            89 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/10.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-info bg-opacity-10 text-info"
                          >
                            Intermediate
                          </a>
                          <a href="#" className="text-danger">
                            <i className="fas fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Bootstrap 5 From Scratch</a>
                        </h5>
                        <p className="text-truncate-2 mb-2">
                          Far advanced settling say finished raillery. Offered
                          chiefly farther
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            4.5/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between mt-2">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            25h 56m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            38 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/13.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-success bg-opacity-10 text-success"
                          >
                            Beginner
                          </a>
                          <a href="#" className="h6 fw-light mb-0">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">PHP with - CMS Project</a>
                        </h5>
                        <p className="text-truncate-2 mb-2">
                          Far advanced settling say finished raillery. Offered
                          chiefly farther
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="far fa-star text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            4.0/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            21h 22m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            30 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                </div>
              </div>
              {/* Content END */}
              {/* Content START */}
              <div
                className="tab-pane fade"
                id="course-pills-tabs-3"
                role="tabpanel"
                aria-labelledby="course-pills-tab-3"
              >
                <div className="row g-4">
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/08.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-purple bg-opacity-10 text-purple"
                          >
                            All level
                          </a>
                          <a href="#" className="h6 fw-light mb-0">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Sketch from A to Z: for app designer</a>
                        </h5>
                        <p className="text-truncate-2 mb-2">
                          Proposal indulged no do sociable he throwing settling
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="far fa-star text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            4.0/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            12h 56m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            15 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/04.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-purple bg-opacity-10 text-purple"
                          >
                            All level
                          </a>
                          <a href="#" className="text-danger">
                            <i className="fas fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Learn Invision</a>
                        </h5>
                        <p className="mb-2">
                          Arrived off she elderly beloved him Course regard to
                          up he hardly.
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="far fa-star text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            3.5/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between mt-2">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            6h 56m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            82 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/02.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-success bg-opacity-10 text-success"
                          >
                            Beginner
                          </a>
                          <a href="#" className="text-danger">
                            <i className="fas fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Graphic Design Masterclass</a>
                        </h5>
                        <p className="text-truncate-2 mb-2">
                          Rooms oh fully taken by worse do. Points afraid but
                          may end.
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            4.5/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            9h 56m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            65 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/03.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-success bg-opacity-10 text-success"
                          >
                            Beginner
                          </a>
                          <a href="#" className="h6 fw-light mb-0">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Create a Design System in Figma</a>
                        </h5>
                        <p className="text-truncate-2 mb-2">
                          Rooms oh fully taken by worse do. Points afraid but
                          may end.
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            4.5/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            5h 56m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            32 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                </div>
              </div>
              {/* Content END */}
              {/* Content START */}
              <div
                className="tab-pane fade"
                id="course-pills-tabs-4"
                role="tabpanel"
                aria-labelledby="course-pills-tab-4"
              >
                <div className="row g-4">
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/01.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-success bg-opacity-10 text-success"
                          >
                            Beginner
                          </a>
                          <a href="#" className="text-danger">
                            <i className="fas fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Digital Marketing Masterclass</a>
                        </h5>
                        <p className="text-truncate-2 mb-2">
                          Delivered dejection necessary objection do Mr
                          prevailed.
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            4.5/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            6h 56m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            82 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/08.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-purple bg-opacity-10 text-purple"
                          >
                            All level
                          </a>
                          <a href="#" className="h6 fw-light mb-0">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Sketch from A to Z: for app designer</a>
                        </h5>
                        <p className="text-truncate-2 mb-2">
                          Proposal indulged no do sociable he throwing settling.
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="far fa-star text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            4.0/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            12h 56m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            15 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                </div>
              </div>
              {/* Content END */}
              {/* Content START */}
              <div
                className="tab-pane fade"
                id="course-pills-tabs-5"
                role="tabpanel"
                aria-labelledby="course-pills-tab-5"
              >
                <div className="row g-4">
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/04.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-purple bg-opacity-10 text-purple"
                          >
                            All level
                          </a>
                          <a href="#" className="text-danger">
                            <i className="fas fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">Learn Invision</a>
                        </h5>
                        <p className="text-truncate-2 mb-2">
                          Arrived off she elderly beloved him Course regard to
                          up he hardly.
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="far fa-star text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            3.5/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            6h 56m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            82 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow h-100">
                      {/* Image */}
                      <img
                        src="assets/images/courses/4by3/09.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a
                            href="#"
                            className="badge bg-purple bg-opacity-10 text-purple"
                          >
                            All level
                          </a>
                          <a href="#" className="h6 fw-light mb-0">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">JavaScript: Full Understanding</a>
                        </h5>
                        <p className="text-truncate-2 mb-2">
                          Far advanced settling say finished raillery. Offered
                          chiefly farther.
                        </p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            5.0/5.0
                          </li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            35h 20m
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            89 lectures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                </div>
              </div>
              {/* Content END */}
            </div>
            {/* Tabs content END */}
          </div>
        </section>

        <section className="pt-0 pt-lg-5">
          <div className="container position-relative">
            {/* SVG decoration START */}
            <figure className="position-absolute top-50 start-50 translate-middle ms-2">
              <svg>
                <path
                  className="fill-white opacity-4"
                  d="m496 22.999c0 10.493-8.506 18.999-18.999 18.999s-19-8.506-19-18.999 8.507-18.999 19-18.999 18.999 8.506 18.999 18.999z"
                />
                <path
                  className="fill-white opacity-4"
                  d="m775 102.5c0 5.799-4.701 10.5-10.5 10.5-5.798 0-10.499-4.701-10.499-10.5 0-5.798 4.701-10.499 10.499-10.499 5.799 0 10.5 4.701 10.5 10.499z"
                />
                <path
                  className="fill-white opacity-4"
                  d="m192 102c0 6.626-5.373 11.999-12 11.999s-11.999-5.373-11.999-11.999c0-6.628 5.372-12 11.999-12s12 5.372 12 12z"
                />
                <path
                  className="fill-white opacity-4"
                  d="m20.499 10.25c0 5.66-4.589 10.249-10.25 10.249-5.66 0-10.249-4.589-10.249-10.249-0-5.661 4.589-10.25 10.249-10.25 5.661-0 10.25 4.589 10.25 10.25z"
                />
              </svg>
            </figure>
            {/* SVG decoration END */}
            <div className="row">
              <div className="col-12">
                <div className="bg-info p-4 p-sm-5 rounded-3">
                  <div className="row position-relative">
                    {/* Svg decoration */}
                    <figure className="fill-white opacity-1 position-absolute top-50 start-0 translate-middle-y">
                      <svg width="141px" height="141px">
                        <path d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z" />
                      </svg>
                    </figure>
                    {/* Action box */}
                    <div className="col-11 mx-auto position-relative">
                      <div className="row align-items-center">
                        {/* Title */}
                        <div className="col-lg-7">
                          <h3 className="text-white">Become an Instructor!</h3>
                          <p className="text-white mb-3 mb-lg-0">
                            Speedily say has suitable disposal add boy. On forth
                            doubt miles of child. Exercise joy man children
                            rejoiced. Yet uncommonly his ten who diminution
                            astonished.
                          </p>
                        </div>
                        {/* Content and input */}
                        <div className="col-lg-5 text-lg-end">
                          <a href="#" className="btn btn-outline-warning mb-0">
                            Start Teaching Today
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Row END */}
                </div>
              </div>
            </div>
            {/* Row END */}
          </div>
        </section>

        {/* =======================
Action box START */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bg-light p-4 p-sm-5 rounded-3 position-relative overflow-hidden">
                  {/* SVG decoration */}
                  <figure className="position-absolute top-0 start-0 d-none d-lg-block ms-n7">
                    <svg
                      width="294.5px"
                      height="261.6px"
                      viewBox="0 0 294.5 261.6"
                      style={{ enableBackground: "new 0 0 294.5 261.6" }}
                    >
                      <path
                        className="fill-warning opacity-5"
                        d="M280.7,84.9c-4.6-9.5-10.1-18.6-16.4-27.2c-18.4-25.2-44.9-45.3-76-54.2c-31.7-9.1-67.7-0.2-93.1,21.6 C82,36.4,71.9,50.6,65.4,66.3c-4.6,11.1-9.5,22.3-17.2,31.8c-6.8,8.3-15.6,15-22.8,23C10.4,137.6-0.1,157.2,0,179 c0.1,28,11.4,64.6,40.4,76.7c23.9,10,50.7-3.1,75.4-4.7c23.1-1.5,43.1,10.4,65.5,10.6c53.4,0.6,97.8-42,109.7-90.4 C298.5,140.9,293.4,111.5,280.7,84.9z"
                      />
                    </svg>
                  </figure>
                  {/* SVG decoration */}
                  <figure className="position-absolute top-50 start-50 translate-middle">
                    <svg width="453px" height="211px">
                      <path
                        className="fill-orange"
                        d="M16.002,8.001 C16.002,12.420 12.420,16.002 8.001,16.002 C3.582,16.002 -0.000,12.420 -0.000,8.001 C-0.000,3.582 3.582,-0.000 8.001,-0.000 C12.420,-0.000 16.002,3.582 16.002,8.001 Z"
                      />
                      <path
                        className="fill-warning"
                        d="M176.227,203.296 C176.227,207.326 172.819,210.593 168.614,210.593 C164.409,210.593 161.000,207.326 161.000,203.296 C161.000,199.266 164.409,196.000 168.614,196.000 C172.819,196.000 176.227,199.266 176.227,203.296 Z"
                      />
                      <path
                        className="fill-primary"
                        d="M453.002,65.001 C453.002,69.420 449.420,73.002 445.001,73.002 C440.582,73.002 437.000,69.420 437.000,65.001 C437.000,60.582 440.582,57.000 445.001,57.000 C449.420,57.000 453.002,60.582 453.002,65.001 Z"
                      />
                    </svg>
                  </figure>
                  {/* SVG image */}
                  <img
                    src="assets/images/element/09.svg"
                    className="position-absolute bottom-0 end-0 z-index-1 d-none d-lg-block me-n3"
                    alt=""
                  />
                  {/* SVG decoration */}
                  <figure className="position-absolute top-0 end-0 mt-5 me-n5 d-none d-sm-block">
                    <svg width="285px" height="272px">
                      <path
                        className="fill-info opacity-4"
                        d="M142.500,-0.000 C221.200,-0.000 285.000,60.889 285.000,136.000 C285.000,211.111 221.200,272.000 142.500,272.000 C63.799,272.000 -0.000,211.111 -0.000,136.000 C-0.000,60.889 63.799,-0.000 142.500,-0.000 Z"
                      />
                    </svg>
                  </figure>
                  <div className="row g-4 justify-content-center align-items-center position-relative">
                    <div className="col-lg-3 text-center text-lg-start ps-0">
                      {/* Image */}
                      <img src="assets/images/element/08.svg" alt="" />
                    </div>
                    {/* Title */}
                    <div className="col-lg-6 text-center">
                      <span className="h6 fw-light">
                        Get a Free Tutorial of
                      </span>
                      <h3 className="mb-0 mt-2">
                        Exclusive Bootstrap 5 Responsive Website Coding Course
                      </h3>
                    </div>
                    {/* Content and input */}
                    <div className="col-lg-3 text-center text-lg-end z-index-9">
                      <a href="#" className="btn btn-warning mb-0">
                        Get a free trial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =======================
Action box END */}
        {/* =======================
Client feedback START */}
        <section className="bg-light position-relative">
          {/* SVG Image */}
          <figure className="position-absolute start-0 bottom-0 mb-0">
            <img
              src="assets/images/element/10.svg"
              className="h-200px"
              alt=""
            />
          </figure>
          <div className="container">
            {/* Title */}
            <div className="row mb-4">
              <div className="col-lg-8 mx-auto text-center">
                <h2>Our Customer Feedback</h2>
                <p className="mb-0">
                  Perceived end knowledge certainly day sweetness why cordially
                </p>
              </div>
            </div>
            {/* Feedback START */}
            <div className="row">
              {/* Slider START */}
              <div className="tiny-slider arrow-round arrow-creative arrow-dark arrow-hover">
                <div
                  className="tiny-slider-inner"
                  data-autoplay="true"
                  data-edge={5}
                  data-arrow="true"
                  data-dots="false"
                  data-items={4}
                  data-items-xl={3}
                  data-items-md={2}
                  data-items-xs={1}
                >
                  {/* Feedback item */}
                  <div>
                    <div className="bg-body text-center p-4 rounded-3 border border-1 position-relative">
                      {/* Avatar */}
                      <div className="avatar avatar-lg mb-3">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/05.jpg"
                          alt="avatar"
                        />
                      </div>
                      {/* Title */}
                      <h6 className="mb-2">Lori Stevens</h6>
                      {/* Content */}
                      <blockquote className="mt-1">
                        <p>
                          <span className="me-1 small">
                            <i className="fas fa-quote-left" />
                          </span>
                          Moonlight newspaper up its enjoyment agreeable
                          depending. Timed voice share led him to widen. At
                          weddings believed laughing
                          <span className="ms-1 small">
                            <i className="fas fa-quote-right" />
                          </span>
                        </p>
                      </blockquote>
                    </div>
                  </div>
                  {/* Feedback item */}
                  <div>
                    <div className="bg-body text-center p-4 rounded-3 border border-1 position-relative">
                      {/* Avatar */}
                      <div className="avatar avatar-lg mb-3">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/07.jpg"
                          alt="avatar"
                        />
                      </div>
                      {/* Title */}
                      <h6 className="mb-2">Billy Vasquez</h6>
                      {/* Content */}
                      <blockquote className="mt-1">
                        <p>
                          <span className="me-1 small">
                            <i className="fas fa-quote-left" />
                          </span>
                          Its enjoyment Moonlight newspaper up agreeable
                          depending. Timed voice share led him to widen. At
                          weddings believed laughing
                          <span className="ms-1 small">
                            <i className="fas fa-quote-right" />
                          </span>
                        </p>
                      </blockquote>
                    </div>
                  </div>
                  {/* Feedback item */}
                  <div>
                    <div className="bg-body text-center p-4 rounded-3 border border-1 position-relative">
                      {/* Avatar */}
                      <div className="avatar avatar-lg mb-3">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/09.jpg"
                          alt="avatar"
                        />
                      </div>
                      {/* Title */}
                      <h6 className="mb-2">Carolyn Ortiz</h6>
                      {/* Content */}
                      <blockquote className="mt-1">
                        <p>
                          <span className="me-1 small">
                            <i className="fas fa-quote-left" />
                          </span>
                          Newspaper up its enjoyment agreeable depending. Timed
                          voice share led him to widen. At weddings believed
                          laughing
                          <span className="ms-1 small">
                            <i className="fas fa-quote-right" />
                          </span>
                        </p>
                      </blockquote>
                    </div>
                  </div>
                  {/* Feedback item */}
                  <div>
                    <div className="bg-body text-center p-4 rounded-3 border border-1 position-relative">
                      {/* Avatar */}
                      <div className="avatar avatar-lg mb-3">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/01.jpg"
                          alt="avatar"
                        />
                      </div>
                      {/* Title */}
                      <h6 className="mb-2">Carolyn Ortiz</h6>
                      {/* Content */}
                      <blockquote className="mt-1">
                        <p>
                          <span className="me-1 small">
                            <i className="fas fa-quote-left" />
                          </span>
                          Newspaper up its enjoyment agreeable depending. Timed
                          voice share led him to widen. At weddings believed
                          laughing
                          <span className="ms-1 small">
                            <i className="fas fa-quote-right" />
                          </span>
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slider START */}
            </div>
            {/* Feedback END */}
          </div>
        </section>
        {/* =======================
Client feedback END */}
      </main>
      {/* **************** MAIN CONTENT END **************** */}
      {/* =======================
Footer START */}
      <footer>
        <div className="container">
          {/* Row START */}
          <div className="row g-4 justify-content-between pt-5">
            {/* Widget 1 START */}
            <div className="col-md-5 col-lg-4">
              {/* logo */}
              <a className="me-0" href="index.html">
                <img
                  className="light-mode-item h-40px"
                  src="assets/images/logo.svg"
                  alt="logo"
                />
                <img
                  className="dark-mode-item h-40px"
                  src="assets/images/logo-light.svg"
                  alt="logo"
                />
              </a>
              <p className="my-3">
                Eduport education theme, built specifically for the education
                centers which is dedicated to teaching and involve learners.
              </p>
              {/* Newsletter */}
              <form className="row row-cols-lg-auto g-2">
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-dark m-0">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            {/* Widget 1 END */}
            {/* Widget 2 START */}
            <div className="col-md-7 col-lg-6">
              <div className="row g-4 g-lg-5">
                {/* Link block */}
                <div className="col-6 col-sm-4">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link pt-0" href="#">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Documentation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Sitemap
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Link block */}
                <div className="col-6 col-sm-4">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link pt-0" href="#">
                        Become instructor
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Download
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Services
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Link block */}
                <div className="col-6 col-sm-4">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link pt-0" href="#">
                        <i className="fab fa-facebook-square text-facebook me-2" />
                        Facebook
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fab fa-instagram-square text-instagram-gradient me-2" />
                        Instagram
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fab fa-twitter-square text-twitter me-2" />
                        Twitter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fab fa-linkedin text-linkedin me-2" />
                        Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Widget 2 END */}
          </div>
          {/* Row END */}
          <hr /> {/* Divider */}
          {/* Bottom footer */}
          <div className="row">
            <div className="col-12">
              <div className="d-md-flex justify-content-between align-items-center pt-2 pb-4 text-center">
                {/* copyright text */}
                <div className="text-primary-hover">
                  {" "}
                  Copyrights{" "}
                  <a href="#" className="text-reset">
                    ©2023 Eduport
                  </a>
                  . All rights reserved.{" "}
                </div>
                {/* copyright links*/}
                <div className="nav justify-content-center mt-3 mt-md-0">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a className="nav-link" href="#">
                        Terms of use
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="nav-link" href="#">
                        Privacy policy
                      </a>
                    </li>
                    <li className="list-inline-item pe-0">
                      <a className="nav-link" href="#">
                        Cookies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* =======================
Footer END */}
      {/* Back to top */}
      <div className="back-top">
        <i className="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle" />
      </div>
      {/* Bootstrap JS */}
      {/* Vendors */}
      {/* Template Functions */}
    </div>
  );
}
export default Home;
