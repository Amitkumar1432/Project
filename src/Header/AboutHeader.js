import React from "react";
import { NavLink } from "react-router-dom";
function Aboutbanner() {
  return (
    <div>
      <header className="navbar-light navbar-sticky">
        {/* Logo Nav START */}
        <nav className="navbar navbar-expand-xl">
          <div className="container">
            {/* Logo START */}
            <a className="navbar-brand" href="index.html">
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
            <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
              {/* Nav Main menu START */}
              <ul className="navbar-nav navbar-nav-scroll mx-auto">
                {/* Nav item 1 Demos */}
                <li className="nav-item dropdown">
                  <NavLink
                    to="/"
                    className="nav-link"
                    href="#"
                    id="demoMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                  </NavLink>
                </li>
                {/* Nav item 2 Pages */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    id="pagesMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Course
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      {/* <a className="dropdown-item dropdown-toggle" href="#">
                        Course
                      </a> */}
                      {/* <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="course-categories.html"
                          >
                            Course Categories
                          </a>
                        </li>
                        <li>
                          {" "}
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="course-grid.html">
                            Course Grid Classic
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="course-grid-2.html"
                          >
                            Course Grid Minimal
                          </a>
                        </li>
                        <li>
                          {" "}
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="course-list.html">
                            Course List Classic
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="course-list-2.html"
                          >
                            Course List Minimal
                          </a>
                        </li>
                        <li>
                          {" "}
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="course-detail.html"
                          >
                            Course Detail Classic
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="course-detail-min.html"
                          >
                            Course Detail Minimal
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="course-detail-adv.html"
                          >
                            Course Detail Advance
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="course-detail-module.html"
                          >
                            Course Detail Module
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="course-video-player.html"
                          >
                            Course Full Screen Video
                          </a>
                        </li>
                      </ul> */}
                    </li>
                    {/* Dropdown submenu */}
                    {/* <li className="dropdown-submenu dropend"> */}
                    <li className="nav-item">
                      <NavLink
                        to="/Aboutus"
                        className="nav-link"
                        href="contact-us.html"
                      >
                        About
                      </NavLink>
                    </li>
                    {/* <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          {" "}
                          <a className="dropdown-item" href="about.html">
                            About Us
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="contact-us.html">
                            Contact Us
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="blog-grid.html">
                            Blog Grid
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="blog-masonry.html">
                            Blog Masonry
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="blog-detail.html">
                            Blog Detail
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="pricing.html">
                            Pricing
                          </a>
                        </li>
                      </ul> */}
                    {/* </li> */}
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Hero Banner
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="docs/snippet-hero-12.html"
                          >
                            Hero Form
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="docs/snippet-hero-13.html"
                          >
                            Hero Vector
                          </a>
                        </li>
                        <li>
                          {" "}
                          <p className="dropdown-item mb-0">Coming soon....</p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="instructor-list.html">
                        Instructor List
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item"
                        href="instructor-single.html"
                      >
                        Instructor Single
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item"
                        href="become-instructor.html"
                      >
                        Become an Instructor
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="abroad-single.html">
                        Abroad Single
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="workshop-detail.html">
                        Workshop Detail
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="event-detail.html">
                        Event Detail{" "}
                        <span className="badge bg-success ms-2 smaller">
                          New
                        </span>
                      </a>
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Shop
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          {" "}
                          <a className="dropdown-item" href="shop.html">
                            Shop grid
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="shop-product-detail.html"
                          >
                            Product detail
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="cart.html">
                            Cart
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="checkout.html">
                            Checkout
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="empty-cart.html">
                            Empty Cart
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="wishlist.html">
                            Wishlist
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Help
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          {" "}
                          <a className="dropdown-item" href="help-center.html">
                            Help Center
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="help-center-detail.html"
                          >
                            Help Center Single
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="faq.html">
                            FAQs
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Authentication
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          {" "}
                          <a className="dropdown-item" href="sign-in.html">
                            Sign In
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="sign-up.html">
                            Sign Up
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="forgot-password.html"
                          >
                            Forgot Password
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Form
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          {" "}
                          <a className="dropdown-item" href="request-demo.html">
                            Request a demo
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="book-class.html">
                            Book a Class
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="request-access.html"
                          >
                            Free Access
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="university-admission-form.html"
                          >
                            Admission Form
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Specialty
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          {" "}
                          <a className="dropdown-item" href="error-404.html">
                            Error 404
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="coming-soon.html">
                            Coming Soon
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* Nav item 3 Account */}
                <li className="nav-item">
                  <NavLink
                    to="/Contactus"
                    className="nav-link"
                    href="#"
                    id="accounntMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Contact
                  </NavLink>
                  <ul className="dropdown-menu" aria-labelledby="accounntMenu">
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        <i className="fas fa-user-tie fa-fw me-1" />
                        Instructor
                      </a>
                      {/* <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="instructor-dashboard.html"
                          >
                            <i className="bi bi-grid-fill fa-fw me-1" />
                            Dashboard
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="instructor-manage-course.html"
                          >
                            <i className="bi bi-basket-fill fa-fw me-1" />
                            Courses
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="instructor-create-course.html"
                          >
                            <i className="bi bi-file-earmark-plus-fill fa-fw me-1" />
                            Create Course
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="course-added.html">
                            <i className="bi bi-file-check-fill fa-fw me-1" />
                            Course Added
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="instructor-quiz.html"
                          >
                            <i className="bi bi-question-diamond fa-fw me-1" />
                            Quiz
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="instructor-earning.html"
                          >
                            <i className="fas fa-chart-line fa-fw me-1" />
                            Earnings
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="instructor-studentlist.html"
                          >
                            <i className="fas fa-user-graduate fa-fw me-1" />
                            Students
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="instructor-order.html"
                          >
                            <i className="bi bi-cart-check-fill fa-fw me-1" />
                            Orders
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="instructor-review.html"
                          >
                            <i className="bi bi-star-fill fa-fw me-1" />
                            Reviews
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="instructor-payout.html"
                          >
                            <i className="fas fa-wallet fa-fw me-1" />
                            Payout
                          </a>{" "}
                        </li>
                      </ul> */}
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        <i className="fas fa-user-graduate fa-fw me-1" />
                        Student
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="student-dashboard.html"
                          >
                            <i className="bi bi-grid-fill fa-fw me-1" />
                            Dashboard
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="student-subscription.html"
                          >
                            <i className="bi bi-card-checklist fa-fw me-1" />
                            My Subscriptions
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="student-course-list.html"
                          >
                            <i className="bi bi-basket-fill fa-fw me-1" />
                            Courses
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="student-course-resume.html"
                          >
                            <i className="far fa-fw fa-file-alt me-1" />
                            Course Resume
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="student-quiz.html">
                            <i className="bi bi-question-diamond fa-fw me-1" />
                            Quiz{" "}
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="student-payment-info.html"
                          >
                            <i className="bi bi-credit-card-2-front-fill fa-fw me-1" />
                            Payment Info
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="student-bookmark.html"
                          >
                            <i className="fas bi-cart-check-fill fa-fw me-1" />
                            Wishlist
                          </a>{" "}
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="admin-dashboard.html">
                        <i className="fas fa-user-cog fa-fw me-1" />
                        Admin
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item"
                        href="instructor-edit-profile.html"
                      >
                        <i className="fas fa-fw fa-edit me-1" />
                        Edit Profile
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item"
                        href="instructor-setting.html"
                      >
                        <i className="fas fa-fw fa-cog me-1" />
                        Settings
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item"
                        href="instructor-delete-account.html"
                      >
                        <i className="fas fa-fw fa-trash-alt me-1" />
                        Delete Profile
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <hr className="dropdown-divider" />
                    </li>
                    {/* Dropdown Level */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Dropdown levels
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        {/* dropdown submenu open right */}
                        <li className="dropdown-submenu dropend">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Dropdown (end)
                          </a>
                          <ul className="dropdown-menu" data-bs-popper="none">
                            <li>
                              {" "}
                              <a className="dropdown-item" href="#">
                                Dropdown item
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a className="dropdown-item" href="#">
                                Dropdown item
                              </a>{" "}
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="#">
                            Dropdown item
                          </a>{" "}
                        </li>
                        {/* dropdown submenu open left */}
                        <li className="dropdown-submenu dropstart">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Dropdown (start)
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-end"
                            data-bs-popper="none"
                          >
                            <li>
                              {" "}
                              <a className="dropdown-item" href="#">
                                Dropdown item
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a className="dropdown-item" href="#">
                                Dropdown item
                              </a>{" "}
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="#">
                            Dropdown item
                          </a>{" "}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* Nav item 4 Component*/}
                <li className="nav-item">
                  <a className="nav-link" href="docs/alerts.html">
                    Components
                  </a>
                </li>
                {/* Nav item 5 link*/}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    id="advanceMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-h" />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end min-w-auto"
                    data-bs-popper="none"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://support.webestica.com/"
                        target="_blank"
                      >
                        <i className="text-warning fa-fw bi bi-life-preserver me-2" />
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="docs/index.html"
                        target="_blank"
                      >
                        <i className="text-danger fa-fw bi bi-card-text me-2" />
                        Documentation
                      </a>
                    </li>
                    <li>
                      {" "}
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://eduport.webestica.com/rtl/"
                        target="_blank"
                      >
                        <i className="text-info fa-fw bi bi-toggle-off me-2" />
                        RTL demo
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://themes.getbootstrap.com/store/webestica/"
                        target="_blank"
                      >
                        <i className="text-success fa-fw bi bi-cloud-download-fill me-2" />
                        Buy Eduport!
                      </a>
                    </li>
                    <li>
                      {" "}
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="docs/alerts.html"
                        target="_blank"
                      >
                        <i className="text-orange fa-fw bi bi-puzzle-fill me-2" />
                        Components
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="docs/snippets.html">
                        <i className="text-purple fa-fw bi bi-stickies-fill me-2" />
                        Snippets
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* Nav Main menu END */}
              {/* Nav Search START */}
              <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
                <div className="nav-item w-100">
                  <form className="position-relative">
                    <input
                      className="form-control pe-5 bg-transparent"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                      type="submit"
                    >
                      <i className="fas fa-search fs-6 " />
                    </button>
                  </form>
                </div>
              </div>
              {/* Nav Search END */}
            </div>
            {/* Main navbar END */}
            {/* Profile START */}
            <div className="dropdown ms-1 ms-lg-0">
              <a
                className="avatar avatar-sm p-0"
                href="#"
                id="profileDropdown"
                role="button"
                data-bs-auto-close="outside"
                data-bs-display="static"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="avatar-img rounded-circle"
                  src="assets/images/avatar/01.jpg"
                  alt="avatar"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                aria-labelledby="profileDropdown"
              >
                {/* Profile info */}
                <li className="px-3 mb-3">
                  <div className="d-flex align-items-center">
                    {/* Avatar */}
                    <div className="avatar me-3">
                      <img
                        className="avatar-img rounded-circle shadow"
                        src="assets/images/avatar/01.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <a className="h6" href="#">
                        Lori Ferguson
                      </a>
                      <p className="small m-0">example@gmail.com</p>
                    </div>
                  </div>
                </li>
                <li>
                  {" "}
                  <hr className="dropdown-divider" />
                </li>
                {/* Links */}
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-person fa-fw me-2" />
                    Edit Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-gear fa-fw me-2" />
                    Account Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-info-circle fa-fw me-2" />
                    Help
                  </a>
                </li>
                <li>
                  <a className="dropdown-item bg-danger-soft-hover" href="#">
                    <i className="bi bi-power fa-fw me-2" />
                    Sign Out
                  </a>
                </li>
                <li>
                  {" "}
                  <hr className="dropdown-divider" />
                </li>
                {/* Dark mode options START */}
                <li>
                  <div className="bg-light dark-mode-switch theme-icon-active d-flex align-items-center p-1 rounded mt-2">
                    <button
                      type="button"
                      className="btn btn-sm mb-0"
                      data-bs-theme-value="light"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-sun fa-fw mode-switch"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                        <use href="#" />
                      </svg>{" "}
                      Light
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm mb-0"
                      data-bs-theme-value="dark"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-moon-stars fa-fw mode-switch"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                        <use href="#" />
                      </svg>{" "}
                      Dark
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm mb-0 active"
                      data-bs-theme-value="auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-circle-half fa-fw mode-switch"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                        <use href="#" />
                      </svg>{" "}
                      Auto
                    </button>
                  </div>
                </li>
                {/* Dark mode options END*/}
              </ul>
            </div>
            {/* Profile START */}
          </div>
        </nav>
        {/* Logo Nav END */}
      </header>
    </div>
  );
}

export default Aboutbanner;
