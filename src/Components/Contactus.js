import { NavLink } from "react-router-dom";
function Contactus() {
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
                  {/* <ul className="dropdown-menu" aria-labelledby="demoMenu">
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index.html">
                        Home Default
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-2.html">
                        Home Education
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-3.html">
                        Home Academy
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-4.html">
                        Home Course
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-5.html">
                        Home University
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-6.html">
                        Home Kindergarten
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-7.html">
                        Home Landing
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-8.html">
                        Home Tutor
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-9.html">
                        Home School
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-10.html">
                        Home Abroad
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-11.html">
                        Home Workshop
                      </a>
                    </li>
                  </ul> */}
                </li>
                {/* Nav item 2 Pages */}
                <li className="nav-item">
                  <a
                    className="nav-link "
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
                    {/* <a className="dropdown-item " href="#">
                        About
                      </a> */}
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
                    to="/Aboutus"
                    className="nav-link"
                    href="#"
                    id="accounntMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    About
                  </NavLink>
                  <ul className="dropdown-menu" aria-labelledby="accounntMenu">
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        <i className="fas fa-user-tie fa-fw me-1" />
                        Instructor
                      </a>
                      <ul
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
                          </a>
                        </li>
                      </ul>
                    </li>

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
      {/* Header END */}
      {/* **************** MAIN CONTENT START **************** */}
      <main>
        {/* =======================
Page Banner START */}
        <section
          className="pt-5 pb-0"
          style={{
            backgroundImage: "url(assets/images/element/map.svg)",
            backgroundPosition: "center left",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-6 text-center mx-auto">
                {/* Title */}
                <h6 className="text-primary">Contact us</h6>
                <h1 className="mb-4">We're here to help!</h1>
              </div>
            </div>
            {/* Contact info box */}
            <div className="row g-4 g-md-5 mt-0 mt-lg-3">
              {/* Box item */}
              <div className="col-lg-4 mt-lg-0">
                <div className="card card-body bg-primary shadow py-5 text-center h-100">
                  {/* Title */}
                  <h5 className="text-white mb-3">Customer Support</h5>
                  <ul className="list-inline mb-0">
                    {/* Address */}
                    <li className="list-item mb-3">
                      <a href="#" className="text-white">
                        {" "}
                        <i className="fas fa-fw fa-map-marker-alt me-2 mt-1" />
                        Chicago HQ Estica Cop. Macomb, MI 48042{" "}
                      </a>
                    </li>
                    {/* Phone number */}
                    <li className="list-item mb-3">
                      <a href="#" className="text-white">
                        {" "}
                        <i className="fas fa-fw fa-phone-alt me-2" />
                        (423) 733-8222{" "}
                      </a>
                    </li>
                    {/* Email id */}
                    <li className="list-item mb-0">
                      <a href="#" className="text-white">
                        {" "}
                        <i className="far fa-fw fa-envelope me-2" />
                        example@email.com{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Box item */}
              <div className="col-lg-4 mt-lg-0">
                <div className="card card-body shadow py-5 text-center h-100">
                  {/* Title */}
                  <h5 className="mb-3">Contact Address</h5>
                  <ul className="list-inline mb-0">
                    {/* Address */}
                    <li className="list-item mb-3 h6 fw-light">
                      <a href="#">
                        {" "}
                        <i className="fas fa-fw fa-map-marker-alt me-2 mt-1" />
                        2492 Centennial NW, Acworth, GA, 30102{" "}
                      </a>
                    </li>
                    {/* Phone number */}
                    <li className="list-item mb-3 h6 fw-light">
                      <a href="#">
                        {" "}
                        <i className="fas fa-fw fa-phone-alt me-2" />
                        +896-789-546{" "}
                      </a>
                    </li>
                    {/* Email id */}
                    <li className="list-item mb-0 h6 fw-light">
                      <a href="#">
                        {" "}
                        <i className="far fa-fw fa-envelope me-2" />
                        example@email.com{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Box item */}
              <div className="col-lg-4 mt-lg-0">
                <div className="card card-body shadow py-5 text-center h-100">
                  {/* Title */}
                  <h5 className="mb-3">Main Office Address</h5>
                  <ul className="list-inline mb-0">
                    {/* Address */}
                    <li className="list-item mb-3 h6 fw-light">
                      <a href="#">
                        {" "}
                        <i className="fas fa-fw fa-map-marker-alt me-2 mt-1" />
                        2002 Horton Ford Rd, Eidson, TN, 37731{" "}
                      </a>
                    </li>
                    {/* Phone number */}
                    <li className="list-item mb-3 h6 fw-light">
                      <a href="#">
                        {" "}
                        <i className="fas fa-fw fa-phone-alt me-2" />
                        (678) 324-1251{" "}
                      </a>
                    </li>
                    {/* Email id */}
                    <li className="list-item mb-0 h6 fw-light">
                      <a href="#">
                        {" "}
                        <i className="far fa-fw fa-envelope me-2" />
                        example@email.com{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =======================
Page Banner END */}
        {/* =======================
Image and contact form START */}
        <section>
          <div className="container">
            <div className="row g-4 g-lg-0 align-items-center">
              <div className="col-md-6 align-items-center text-center">
                {/* Image */}
                <img
                  src="assets/images/element/contact.svg"
                  className="h-400px"
                  alt=""
                />
                {/* Social media button */}
                <div className="d-sm-flex align-items-center justify-content-center mt-2 mt-sm-4">
                  <h5 className="mb-0">Follow us on:</h5>
                  <ul className="list-inline mb-0 ms-sm-2">
                    <li className="list-inline-item">
                      {" "}
                      <a className="fs-5 me-1 text-facebook" href="#">
                        <i className="fab fa-fw fa-facebook-square" />
                      </a>{" "}
                    </li>
                    <li className="list-inline-item">
                      {" "}
                      <a className="fs-5 me-1 text-instagram" href="#">
                        <i className="fab fa-fw fa-instagram" />
                      </a>{" "}
                    </li>
                    <li className="list-inline-item">
                      {" "}
                      <a className="fs-5 me-1 text-twitter" href="#">
                        <i className="fab fa-fw fa-twitter" />
                      </a>{" "}
                    </li>
                    <li className="list-inline-item">
                      {" "}
                      <a className="fs-5 me-1 text-linkedin" href="#">
                        <i className="fab fa-fw fa-linkedin-in" />
                      </a>{" "}
                    </li>
                    <li className="list-inline-item">
                      {" "}
                      <a className="fs-5 me-1 text-dribbble" href="#">
                        <i className="fas fa-fw fa-basketball-ball" />
                      </a>{" "}
                    </li>
                    <li className="list-inline-item">
                      {" "}
                      <a className="fs-5 me-1 text-pinterest" href="#">
                        <i className="fab fa-fw fa-pinterest" />
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              {/* Contact form START */}
              <div className="col-md-6">
                {/* Title */}
                <h2 className="mt-4 mt-md-0">Let's talk</h2>
                <p>
                  To request a quote or want to meet up for coffee, contact us
                  directly or fill out the form and we will get back to you
                  promptly
                </p>
                <form>
                  {/* Name */}
                  <div className="mb-4 bg-light-input">
                    <label htmlFor="yourName" className="form-label">
                      Your name *
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="yourName"
                    />
                  </div>
                  {/* Email */}
                  <div className="mb-4 bg-light-input">
                    <label htmlFor="emailInput" className="form-label">
                      Email address *
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="emailInput"
                    />
                  </div>
                  {/* Message */}
                  <div className="mb-4 bg-light-input">
                    <label htmlFor="textareaBox" className="form-label">
                      Message *
                    </label>
                    <textarea
                      className="form-control"
                      id="textareaBox"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  {/* Button */}
                  <div className="d-grid">
                    <button
                      className="btn btn-lg btn-primary mb-0"
                      type="button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              {/* Contact form END */}
            </div>
          </div>
        </section>
        {/* =======================
Image and contact form END */}
        {/* =======================
Map START */}
        <section className="pt-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <iframe
                  className="w-100 h-400px grayscale rounded"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
                  height={500}
                  style={{ border: 0 }}
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </div>
          </div>
        </section>
        {/* =======================
Map END */}
      </main>
      {/* **************** MAIN CONTENT END **************** */}
      {/* =======================
Footer START */}
      <footer className="pt-5 bg-light">
        <div className="container">
          {/* Row START */}
          <div className="row g-4">
            {/* Widget 1 START */}
            <div className="col-lg-3">
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
                centers which is dedicated to teaching and involve learners.{" "}
              </p>
              {/* Social media icon */}
              <ul className="list-inline mb-0 mt-3">
                <li className="list-inline-item">
                  {" "}
                  <a
                    className="btn btn-white btn-sm shadow px-2 text-facebook"
                    href="#"
                  >
                    <i className="fab fa-fw fa-facebook-f" />
                  </a>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a
                    className="btn btn-white btn-sm shadow px-2 text-instagram"
                    href="#"
                  >
                    <i className="fab fa-fw fa-instagram" />
                  </a>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a
                    className="btn btn-white btn-sm shadow px-2 text-twitter"
                    href="#"
                  >
                    <i className="fab fa-fw fa-twitter" />
                  </a>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a
                    className="btn btn-white btn-sm shadow px-2 text-linkedin"
                    href="#"
                  >
                    <i className="fab fa-fw fa-linkedin-in" />
                  </a>{" "}
                </li>
              </ul>
            </div>
            {/* Widget 1 END */}
            {/* Widget 2 START */}
            <div className="col-lg-6">
              <div className="row g-4">
                {/* Link block */}
                <div className="col-6 col-md-4">
                  <h5 className="mb-2 mb-md-4">Company</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        News and Blogs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Library
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Career
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Link block */}
                <div className="col-6 col-md-4">
                  <h5 className="mb-2 mb-md-4">Community</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Documentation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Faq
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Forum
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
                <div className="col-6 col-md-4">
                  <h5 className="mb-2 mb-md-4">Teaching</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Become a teacher
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        How to guide
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Widget 2 END */}
            {/* Widget 3 START */}
            <div className="col-lg-3">
              <h5 className="mb-2 mb-md-4">Contact</h5>
              {/* Time */}
              <p className="mb-2">
                Toll free:
                <span className="h6 fw-light ms-2">+1234 568 963</span>
                <span className="d-block small">(9:AM to 8:PM IST)</span>
              </p>
              <p className="mb-0">
                Email:
                <span className="h6 fw-light ms-2">example@gmail.com</span>
              </p>
              <div className="row g-2 mt-2">
                {/* Google play store button */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                  <a href="#">
                    {" "}
                    <img
                      src="assets/images/client/google-play.svg"
                      alt=""
                    />{" "}
                  </a>
                </div>
                {/* App store button */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                  <a href="#">
                    {" "}
                    <img
                      src="assets/images/client/app-store.svg"
                      alt="app-store"
                    />{" "}
                  </a>
                </div>
              </div>{" "}
              {/* Row END */}
            </div>
            {/* Widget 3 END */}
          </div>
          {/* Row END */}
          {/* Divider */}
          <hr className="mt-4 mb-0" />
          {/* Bottom footer */}
          <div className="py-3">
            <div className="container px-0">
              <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-md-left">
                {/* copyright text */}
                <div className="text-primary-hover">
                  {" "}
                  Copyrights{" "}
                  <a href="#" className="text-body">
                    ©2023 Eduport
                  </a>
                  . All rights reserved.{" "}
                </div>
                {/* copyright links*/}
                <div className="justify-content-center mt-3 mt-lg-0">
                  <ul className="nav list-inline justify-content-center mb-0">
                    <li className="list-inline-item">
                      {/* Language selector */}
                      <div className="dropup mt-0 text-center text-sm-end">
                        <a
                          className="dropdown-toggle nav-link"
                          href="#"
                          role="button"
                          id="languageSwitcher"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-globe me-2" />
                          Language
                        </a>
                        <ul
                          className="dropdown-menu min-w-auto"
                          aria-labelledby="languageSwitcher"
                        >
                          <li>
                            <a className="dropdown-item me-4" href="#">
                              <img
                                className="fa-fw me-2"
                                src="assets/images/flags/uk.svg"
                                alt=""
                              />
                              English
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item me-4" href="#">
                              <img
                                className="fa-fw me-2"
                                src="assets/images/flags/gr.svg"
                                alt=""
                              />
                              German{" "}
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item me-4" href="#">
                              <img
                                className="fa-fw me-2"
                                src="assets/images/flags/sp.svg"
                                alt=""
                              />
                              French
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <a className="nav-link" href="#">
                        Terms of use
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="nav-link pe-0" href="#">
                        Privacy policy
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
      {/* Template Functions */}
    </div>
  );
}
export default Contactus;
