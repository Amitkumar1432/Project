import React from "react";

function Footer() {
  return (
    <div>
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
    </div>
  );
}

export default Footer;
