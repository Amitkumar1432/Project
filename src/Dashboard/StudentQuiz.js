import { NavLink } from "react-router-dom";
function StudentQuiz() {
  return (
    <div>
      <link rel="shortcut icon" href="assets/images/favicon.ico" />
      {/* Google Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
      />
      {/* Plugins CSS */}
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/vendor/font-awesome/css/all.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/vendor/stepper/css/bs-stepper.min.css"
      />
      {/* Theme CSS */}
      <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
      {/* Header START */}
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
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="demoMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Demos
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="demoMenu">
                    <li>
                      {" "}
                      <NavLink to="/HomeDefault" className="dropdown-item">
                        Home Default
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/HomeEducation" className="dropdown-item">
                        Home Education
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/HomeAcademy" className="dropdown-item">
                        Home Academy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/HomeCourse" className="dropdown-item">
                        Home Course
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/HomeUniversity" className="dropdown-item">
                        Home University
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/HomeKindergarten" className="dropdown-item">
                        Home Kindergarten
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/HomeLanding" className="dropdown-item">
                        Home Landing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/HomeTutor" className="dropdown-item">
                        Home Tutor
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/HomeSchool" className="dropdown-item">
                        Home School
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/HomeAbroad" className="dropdown-item">
                        Home Abroad
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/HomeWorkshop" className="dropdown-item">
                        Home Workshop
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/* Nav item 2 Pages */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="pagesMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Course
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          {" "}
                          <NavLink
                            to="/CourseCategories"
                            className="dropdown-item"
                          >
                            Course Categories
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/CourseGridClassic"
                            className="dropdown-item"
                          >
                            Course Grid Classic
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/CourseGridMinimal"
                            className="dropdown-item"
                          >
                            Course Grid Minimal
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/CourseListClassic"
                            className="dropdown-item"
                          >
                            Course List Classic
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/CourseListMinimal"
                            className="dropdown-item"
                          >
                            Course List Minimal
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/CourseDetailClassic"
                            className="dropdown-item"
                          >
                            Course Detail Classic
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/CourseDetailMinimal"
                            className="dropdown-item"
                          >
                            Course Detail Minimal
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/CourseDetailAdvance"
                            className="dropdown-item"
                          >
                            Course Detail Advance
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/CourseDetailModule"
                            className="dropdown-item"
                          >
                            Course Detail Module
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/CourseFullScreenVideo"
                            className="dropdown-item"
                          >
                            Course Full Screen Video
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        About
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          {" "}
                          <NavLink to="/AboutUs" className="dropdown-item">
                            About Us
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/ContactUs" className="dropdown-item">
                            Contact Us
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/BlogGrid" className="dropdown-item">
                            Blog Grid
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/BlogMasonry" className="dropdown-item">
                            Blog Masonry
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/BlogDetail" className="dropdown-item">
                            Blog Detail
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/Pricing" className="dropdown-item">
                            Pricing
                          </NavLink>
                        </li>
                      </ul>
                    </li>
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
                      <NavLink to="/InstructorList" className="dropdown-item">
                        Instructor List
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink to="/InstructorSingle" className="dropdown-item">
                        Instructor Single
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink
                        to="/BecomeanInstructor"
                        className="dropdown-item"
                      >
                        Become an Instructor
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink to="/AbroadSingle" className="dropdown-item">
                        Abroad Single
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink to="/WorkshopDetail" className="dropdown-item">
                        Workshop Detail
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink to="/EventDetail" className="dropdown-item">
                        Event Detail{" "}
                        <span className="badge bg-success ms-2 smaller">
                          New
                        </span>
                      </NavLink>
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
                          <NavLink to="/ShopGrid" className="dropdown-item">
                            Shop grid
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/ProductDetail"
                            className="dropdown-item"
                          >
                            Product detail
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/Cart" className="dropdown-item">
                            Cart
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/Checkout" className="dropdown-item">
                            Checkout
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/EmptyCart" className="dropdown-item">
                            Empty Cart
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/Wishlist" className="dropdown-item">
                            Wishlist
                          </NavLink>
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
                          <NavLink to="/HelpCenter" className="dropdown-item">
                            Help Center
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/HelpCenterSingle"
                            className="dropdown-item"
                          >
                            Help Center Single
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/FAQs" className="dropdown-item">
                            FAQs
                          </NavLink>
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
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="accounntMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Accounts
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="accounntMenu">
                    {/* Dropdown submenu */}
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
                          <NavLink to="/Dashboard" className="dropdown-item">
                            <i className="bi bi-grid-fill fa-fw me-1" />
                            Dashboard
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/Courses" className="dropdown-item">
                            <i className="bi bi-basket-fill fa-fw me-1" />
                            Courses
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/CreateCourse" className="dropdown-item">
                            <i className="bi bi-file-earmark-plus-fill fa-fw me-1" />
                            Create Course
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/CourseAdded" className="dropdown-item">
                            <i className="bi bi-file-check-fill fa-fw me-1" />
                            Course Added
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/Quiz" className="dropdown-item">
                            <i className="bi bi-question-diamond fa-fw me-1" />
                            Quiz
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/Earnings" className="dropdown-item">
                            <i className="fas fa-chart-line fa-fw me-1" />
                            Earnings
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/Students" className="dropdown-item">
                            <i className="fas fa-user-graduate fa-fw me-1" />
                            Students
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/Orders" className="dropdown-item">
                            <i className="bi bi-cart-check-fill fa-fw me-1" />
                            Orders
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/Reviews" className="dropdown-item">
                            <i className="bi bi-star-fill fa-fw me-1" />
                            Reviews
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/Payout"
                            className="dropdown-item"
                            href="instructor-payout.html"
                          >
                            <i className="fas fa-wallet fa-fw me-1" />
                            Payout
                          </NavLink>
                        </li>
                      </ul>
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
                          <NavLink
                            to="/StudentDashboard"
                            className="dropdown-item"
                          >
                            <i className="bi bi-grid-fill fa-fw me-1" />
                            Dashboard
                          </NavLink>{" "}
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/MySubscriptions"
                            className="dropdown-item"
                          >
                            <i className="bi bi-card-checklist fa-fw me-1" />
                            My Subscriptions
                          </NavLink>{" "}
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/Course" className="dropdown-item">
                            <i className="bi bi-basket-fill fa-fw me-1" />
                            Course
                          </NavLink>{" "}
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/CourseResume" className="dropdown-item">
                            <i className="far fa-fw fa-file-alt me-1" />
                            Course Resume
                          </NavLink>{" "}
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/StudentQuiz" className="dropdown-item">
                            <i className="bi bi-question-diamond fa-fw me-1" />
                            Quiz{" "}
                          </NavLink>{" "}
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/Paymentinfo" className="dropdown-item">
                            <i className="bi bi-credit-card-2-front-fill fa-fw me-1" />
                            Payment Info
                          </NavLink>{" "}
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/StudentWishlist"
                            className="dropdown-item"
                          >
                            <i className="fas bi-cart-check-fill fa-fw me-1" />
                            Wishlist
                          </NavLink>{" "}
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <NavLink
                        to="/Admin"
                        className="dropdown-item"
                        href="admin-dashboard.html"
                      >
                        <i className="fas fa-user-cog fa-fw me-1" />
                        Admin
                      </NavLink>{" "}
                    </li>
                    <li>
                      {" "}
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      {" "}
                      <NavLink
                        to="/EditProfile"
                        className="dropdown-item"
                        href="instructor-edit-profile.html"
                      >
                        <i className="fas fa-fw fa-edit me-1" />
                        Edit Profile
                      </NavLink>{" "}
                    </li>
                    <li>
                      {" "}
                      <NavLink to="/Settings"
                        className="dropdown-item"
                        href="instructor-setting.html"
                      >
                        <i className="fas fa-fw fa-cog me-1" />
                        Settings
                      </NavLink>{" "}
                    </li>
                    <li>
                      {" "}
                      <NavLink to="/DeleteProfile"
                        className="dropdown-item"
                        href="instructor-delete-account.html"
                      >
                        <i className="fas fa-fw fa-trash-alt me-1" />
                        Delete Profile
                      </NavLink>{" "}
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
        <section className="pt-0">
          <div className="container-fluid px-0">
            <div
              className="card bg-blue h-100px h-md-200px rounded-0"
              style={{
                background:
                  "url(assets/images/pattern/04.png) no-repeat center center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="container mt-n4">
            <div className="row">
              <div className="col-12">
                <div className="card bg-transparent card-body pb-0 px-0 mt-2 mt-sm-0">
                  <div className="row d-sm-flex justify-sm-content-between mt-2 mt-md-0">
                    {/* Avatar */}
                    <div className="col-auto">
                      <div className="avatar avatar-xxl position-relative mt-n3">
                        <img
                          className="avatar-img rounded-circle border border-white border-3 shadow"
                          src="assets/images/avatar/09.jpg"
                          alt=""
                        />
                        <span className="badge text-bg-success rounded-pill position-absolute top-50 start-100 translate-middle mt-4 mt-md-5 ms-n3 px-md-3">
                          Pro
                        </span>
                      </div>
                    </div>
                    {/* Profile info */}
                    <div className="col d-sm-flex justify-content-between align-items-center">
                      <div>
                        <h1 className="my-1 fs-4">Lori Stevens</h1>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-3 mb-1 mb-sm-0">
                            <span className="h6">255</span>
                            <span className="text-body fw-light">points</span>
                          </li>
                          <li className="list-inline-item me-3 mb-1 mb-sm-0">
                            <span className="h6">7</span>
                            <span className="text-body fw-light">
                              Completed courses
                            </span>
                          </li>
                          <li className="list-inline-item me-3 mb-1 mb-sm-0">
                            <span className="h6">52</span>
                            <span className="text-body fw-light">
                              Completed lessons
                            </span>
                          </li>
                        </ul>
                      </div>
                      {/* Button */}
                      <div className="mt-2 mt-sm-0">
                        <a
                          href="student-course-list.html"
                          className="btn btn-outline-primary mb-0"
                        >
                          View my courses
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Advanced filter responsive toggler START */}
                {/* Divider */}
                <hr className="d-xl-none" />
                <div className="col-12 col-xl-3 d-flex justify-content-between align-items-center">
                  <a className="h6 mb-0 fw-bold d-xl-none" href="#">
                    Menu
                  </a>
                  <button
                    className="btn btn-primary d-xl-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSidebar"
                    aria-controls="offcanvasSidebar"
                  >
                    <i className="fas fa-sliders-h" />
                  </button>
                </div>
                {/* Advanced filter responsive toggler END */}
              </div>
            </div>
          </div>
        </section>
        {/* =======================
  Page Banner END */}
        {/* =======================
  Page content START */}
        <section className="pt-0">
          <div className="container">
            <div className="row">
              {/* Left sidebar START */}
              <div className="col-xl-3">
                {/* Responsive offcanvas body START */}
                <div
                  className="offcanvas-xl offcanvas-end"
                  tabIndex={-1}
                  id="offcanvasSidebar"
                >
                  {/* Offcanvas header */}
                  <div className="offcanvas-header bg-light">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      My profile
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      data-bs-target="#offcanvasSidebar"
                      aria-label="Close"
                    />
                  </div>
                  {/* Offcanvas body */}
                  <div className="offcanvas-body p-3 p-xl-0">
                    <div className="bg-dark border rounded-3 p-3 w-100">
                      {/* Dashboard menu */}
                      <div className="list-group list-group-dark list-group-borderless collapse-list">
                        <a
                          className="list-group-item"
                          href="student-dashboard.html"
                        >
                          <i className="bi bi-ui-checks-grid fa-fw me-2" />
                          Dashboard
                        </a>
                        <a
                          className="list-group-item"
                          href="student-subscription.html"
                        >
                          <i className="bi bi-card-checklist fa-fw me-2" />
                          My Subscriptions
                        </a>
                        <a
                          className="list-group-item"
                          href="student-course-list.html"
                        >
                          <i className="bi bi-basket fa-fw me-2" />
                          My Courses
                        </a>
                        <a
                          className="list-group-item"
                          href="student-course-resume.html"
                        >
                          <i className="far fa-fw fa-file-alt me-2" />
                          Course Resume
                        </a>
                        <a
                          className="list-group-item active"
                          href="student-quiz.html"
                        >
                          <i className="bi bi-question-diamond fa-fw me-2" />
                          Quiz
                        </a>
                        <a
                          className="list-group-item"
                          href="student-payment-info.html"
                        >
                          <i className="bi bi-credit-card-2-front fa-fw me-2" />
                          Payment Info
                        </a>
                        <a
                          className="list-group-item"
                          href="student-bookmark.html"
                        >
                          <i className="bi bi-cart-check fa-fw me-2" />
                          Wishlist
                        </a>
                        <a
                          className="list-group-item"
                          href="instructor-edit-profile.html"
                        >
                          <i className="bi bi-pencil-square fa-fw me-2" />
                          Edit Profile
                        </a>
                        <a
                          className="list-group-item"
                          href="instructor-setting.html"
                        >
                          <i className="bi bi-gear fa-fw me-2" />
                          Settings
                        </a>
                        <a
                          className="list-group-item"
                          href="instructor-delete-account.html"
                        >
                          <i className="bi bi-trash fa-fw me-2" />
                          Delete Profile
                        </a>
                        <a
                          className="list-group-item text-danger bg-danger-soft-hover"
                          href="#"
                        >
                          <i className="fas fa-sign-out-alt fa-fw me-2" />
                          Sign Out
                        </a>
                        {/* Collapse menu */}
                        <a
                          className="list-group-item"
                          data-bs-toggle="collapse"
                          href="#collapseauthentication"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseauthentication"
                        >
                          <i className="bi bi-lock fa-fw me-2" />
                          Dropdown level
                        </a>
                        {/* Submenu */}
                        <ul
                          className="nav collapse flex-column"
                          id="collapseauthentication"
                          data-bs-parent="#navbar-sidebar"
                        >
                          <li className="nav-item">
                            {" "}
                            <a className="nav-link" href="#">
                              Dropdown item
                            </a>
                          </li>
                          <li className="nav-item">
                            {" "}
                            <a className="nav-link" href="#">
                              Dropdown item
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Responsive offcanvas body END */}
              </div>
              {/* Left sidebar END */}
              {/* Main content START */}
              <div className="col-xl-9">
                {/* Course item START */}
                <div className="card border">
                  <div className="card-header border-bottom">
                    {/* Course list START */}
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div className="row g-0">
                            <div className="col-md-2">
                              <img
                                src="assets/images/courses/4by3/01.jpg"
                                className="rounded-2"
                                alt="Card image"
                              />
                            </div>
                            <div className="col-md-10">
                              <div className="card-body">
                                {/* Title */}
                                <h3 className="card-title">
                                  <a href="#">
                                    The Complete Digital Marketing Course - 12
                                    Courses in 1
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Course list END */}
                  </div>
                  <div className="card-body">
                    {/* Step content START */}
                    <div className="card bg-transparent border rounded-3 mb-1">
                      <div id="stepper" className="bs-stepper stepper-outline">
                        {/* Card header */}
                        <div className="card-header bg-light border-bottom px-lg-5">
                          {/* Step Buttons START */}
                          <div className="bs-stepper-header" role="tablist">
                            {/* Step 1 */}
                            <div className="step" data-target="#step-1">
                              <div className="d-grid text-center align-items-center">
                                <button
                                  type="button"
                                  className="btn btn-link step-trigger mb-0"
                                  role="tab"
                                  id="steppertrigger1"
                                  aria-controls="step-1"
                                >
                                  <span className="bs-stepper-circle">1</span>
                                </button>
                              </div>
                            </div>
                            <div className="line" />
                            {/* Step 2 */}
                            <div className="step" data-target="#step-2">
                              <div className="d-grid text-center align-items-center">
                                <button
                                  type="button"
                                  className="btn btn-link step-trigger mb-0"
                                  role="tab"
                                  id="steppertrigger2"
                                  aria-controls="step-2"
                                >
                                  <span className="bs-stepper-circle">2</span>
                                </button>
                              </div>
                            </div>
                            <div className="line" />
                            {/* Step 3 */}
                            <div className="step" data-target="#step-3">
                              <div className="d-grid text-center align-items-center">
                                <button
                                  type="button"
                                  className="btn btn-link step-trigger mb-0"
                                  role="tab"
                                  id="steppertrigger3"
                                  aria-controls="step-3"
                                >
                                  <span className="bs-stepper-circle">3</span>
                                </button>
                              </div>
                            </div>
                            <div className="line" />
                            {/* Step 4 */}
                            <div className="step" data-target="#step-4">
                              <div className="d-grid text-center align-items-center">
                                <button
                                  type="button"
                                  className="btn btn-link step-trigger mb-0"
                                  role="tab"
                                  id="steppertrigger4"
                                  aria-controls="step-4"
                                >
                                  <span className="bs-stepper-circle">4</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* Step Buttons END */}
                        </div>
                        {/* Card body START */}
                        <div className="card-body">
                          <h6 className="text-danger text-end mb-0">
                            <i className="bi bi-clock-history me-2" />
                            Time Left: 00:01:30
                          </h6>
                          {/* Step content START */}
                          <div className="bs-stepper-content">
                            <form>
                              {/* Step 1 content START */}
                              <div
                                id="step-1"
                                role="tabpanel"
                                className="content fade"
                                aria-labelledby="steppertrigger1"
                              >
                                {/* Title */}
                                <h4>
                                  How do you protect your business against
                                  cyber-crime?
                                </h4>
                                <hr /> {/* Divider */}
                                <div className="vstack gap-2">
                                  {/* Feed ques item */}
                                  <div>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="ques"
                                      id="option1"
                                    />
                                    <label
                                      className="btn btn-outline-primary w-100"
                                      htmlFor="option1"
                                    >
                                      We have cybersecurity insurance coverage
                                    </label>
                                  </div>
                                  {/* Feed ques item */}
                                  <div>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="ques"
                                      id="option2"
                                    />
                                    <label
                                      className="btn btn-outline-primary w-100"
                                      htmlFor="option2"
                                    >
                                      Our dedicated staff will protect us
                                    </label>
                                  </div>
                                  {/* Feed ques item */}
                                  <div>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="ques"
                                      id="option3"
                                    />
                                    <label
                                      className="btn btn-outline-primary w-100"
                                      htmlFor="option3"
                                    >
                                      We give regular training for best
                                      practices
                                    </label>
                                  </div>
                                  {/* Feed ques item */}
                                  <div>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="ques"
                                      id="option4"
                                    />
                                    <label
                                      className="btn btn-outline-primary w-100"
                                      htmlFor="option4"
                                    >
                                      Third-party vendor protection
                                    </label>
                                  </div>
                                </div>
                                {/* Step 1 button */}
                                <div className="d-flex justify-content-center mt-3">
                                  <button
                                    type="button"
                                    className="btn btn-primary next-btn mb-0"
                                  >
                                    Next question
                                  </button>
                                </div>
                              </div>
                              {/* Step 1 content END */}
                              {/* Step 2 content START */}
                              <div
                                id="step-2"
                                role="tabpanel"
                                className="content fade"
                                aria-labelledby="steppertrigger2"
                              >
                                {/* Title */}
                                <h4>What is SEO?</h4>
                                <hr /> {/* Divider */}
                                <div className="vstack gap-2">
                                  {/* Feed ques item */}
                                  <div>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="ques"
                                      id="option11"
                                    />
                                    <label
                                      className="btn btn-outline-primary w-100"
                                      htmlFor="option11"
                                    >
                                      We have cybersecurity insurance coverage
                                    </label>
                                  </div>
                                  {/* Feed ques item */}
                                  <div>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="ques"
                                      id="option22"
                                    />
                                    <label
                                      className="btn btn-outline-primary w-100"
                                      htmlFor="option22"
                                    >
                                      Our dedicated staff will protect us
                                    </label>
                                  </div>
                                  {/* Feed ques item */}
                                  <div>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="ques"
                                      id="option33"
                                    />
                                    <label
                                      className="btn btn-outline-primary w-100"
                                      htmlFor="option33"
                                    >
                                      We give regular training for best
                                      practices
                                    </label>
                                  </div>
                                  {/* Feed ques item */}
                                  <div>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="ques"
                                      id="option44"
                                    />
                                    <label
                                      className="btn btn-outline-primary w-100"
                                      htmlFor="option44"
                                    >
                                      Third-party vendor protection
                                    </label>
                                  </div>
                                </div>
                                {/* Next button */}
                                <div className="d-flex justify-content-center mt-3">
                                  <button
                                    type="button"
                                    className="btn btn-primary next-btn mb-0"
                                  >
                                    Next question
                                  </button>
                                </div>
                              </div>
                              {/* Step 2 content END */}
                              {/* Step 3 content START */}
                              <div
                                id="step-3"
                                role="tabpanel"
                                className="content fade"
                                aria-labelledby="steppertrigger3"
                              >
                                {/* Title */}
                                <h4>Who should join this course?</h4>
                                <hr /> {/* Divider */}
                                <div className="vstack gap-2">
                                  {/* Feed ques item */}
                                  <div>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="ques"
                                      id="option111"
                                    />
                                    <label
                                      className="btn btn-outline-primary w-100"
                                      htmlFor="option111"
                                    >
                                      We have cybersecurity insurance coverage
                                    </label>
                                  </div>
                                  {/* Feed ques item */}
                                  <div>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="ques"
                                      id="option222"
                                    />
                                    <label
                                      className="btn btn-outline-primary w-100"
                                      htmlFor="option222"
                                    >
                                      Our dedicated staff will protect us
                                    </label>
                                  </div>
                                  {/* Feed ques item */}
                                  <div>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="ques"
                                      id="option333"
                                    />
                                    <label
                                      className="btn btn-outline-primary w-100"
                                      htmlFor="option333"
                                    >
                                      We give regular training for best
                                      practices
                                    </label>
                                  </div>
                                  {/* Feed ques item */}
                                  <div>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="ques"
                                      id="option444"
                                    />
                                    <label
                                      className="btn btn-outline-primary w-100"
                                      htmlFor="option444"
                                    >
                                      Third-party vendor protection
                                    </label>
                                  </div>
                                </div>
                                {/* Next button */}
                                <div className="d-flex justify-content-center mt-3">
                                  <button
                                    type="button"
                                    className="btn btn-primary next-btn mb-0"
                                  >
                                    Next question
                                  </button>
                                </div>
                              </div>
                              {/* Step 3 content END */}
                              {/* Step 4 content START */}
                              <div
                                id="step-4"
                                role="tabpanel"
                                className="content fade"
                                aria-labelledby="steppertrigger4"
                              >
                                {/* Title */}
                                <h4>What are the T&amp;C for this program?</h4>
                                <hr /> {/* Divider */}
                                <div className="vstack gap-2">
                                  {/* Feed ques item */}
                                  <div>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="ques"
                                      id="option1111"
                                    />
                                    <label
                                      className="btn btn-outline-primary w-100"
                                      htmlFor="option1111"
                                    >
                                      We have cybersecurity insurance coverage
                                    </label>
                                  </div>
                                  {/* Feed ques item */}
                                  <div>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="ques"
                                      id="option2222"
                                    />
                                    <label
                                      className="btn btn-outline-primary w-100"
                                      htmlFor="option2222"
                                    >
                                      Our dedicated staff will protect us
                                    </label>
                                  </div>
                                  {/* Feed ques item */}
                                  <div>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="ques"
                                      id="option3333"
                                    />
                                    <label
                                      className="btn btn-outline-primary w-100"
                                      htmlFor="option3333"
                                    >
                                      We give regular training for best
                                      practices
                                    </label>
                                  </div>
                                  {/* Feed ques item */}
                                  <div>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="ques"
                                      id="option4444"
                                    />
                                    <label
                                      className="btn btn-outline-primary w-100"
                                      htmlFor="option4444"
                                    >
                                      Third-party vendor protection
                                    </label>
                                  </div>
                                </div>
                                {/* Next button */}
                                <div className="d-flex justify-content-center mt-3">
                                  <button
                                    type="button"
                                    className="btn btn-success next-btn mb-0"
                                  >
                                    View result
                                  </button>
                                </div>
                              </div>
                              {/* Step 4 content END */}
                            </form>
                          </div>
                        </div>
                        {/* Card body END */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Course item END */}
              </div>
              {/* Main content END */}
            </div>{" "}
            {/* Row END */}
          </div>
        </section>
        {/* =======================
  Page content END */}
      </main>
      {/* **************** MAIN CONTENT END **************** */}
      {/* =======================
  Footer START */}
      <footer className="bg-dark p-3">
        <div className="container">
          <div className="row align-items-center">
            {/* Widget */}
            <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
              {/* Logo START */}
              <a href="index.html">
                {" "}
                <img
                  className="h-20px"
                  src="assets/images/logo-light.svg"
                  alt="logo"
                />{" "}
              </a>
            </div>
            {/* Widget */}
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="text-center text-white">
                Copyrights ©2023{" "}
                <a href="#" className="text-reset btn-link">
                  Eduport
                </a>
                . All rights reserved.
              </div>
            </div>
            {/* Widget */}
            <div className="col-md-4">
              {/* Rating */}
              <ul className="list-inline mb-0 text-center text-md-end">
                <li className="list-inline-item ms-2">
                  <a href="#">
                    <i className="text-white fab fa-facebook" />
                  </a>
                </li>
                <li className="list-inline-item ms-2">
                  <a href="#">
                    <i className="text-white fab fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item ms-2">
                  <a href="#">
                    <i className="text-white fab fa-linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item ms-2">
                  <a href="#">
                    <i className="text-white fab fa-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* =======================
  Footer END */}
      {/* Modal START */}
      <div
        className="modal fade"
        id="coursePremium"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0 bg-transparent">
              {/* Close button */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            {/* Modal body */}
            <div className="modal-body px-5 pb-5 position-relative overflow-hidden">
              {/* Element */}
              <figure className="position-absolute bottom-0 end-0 mb-n4 me-n4 d-none d-sm-block">
                <img src="assets/images/element/01.svg" alt="element" />
              </figure>
              <figure className="position-absolute top-0 end-0 z-index-n1 opacity-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="818.6px"
                  height="235.1px"
                  viewBox="0 0 818.6 235.1"
                >
                  <path
                    className="fill-info"
                    d="M735,226.3c-5.7,0.6-11.5,1.1-17.2,1.7c-66.2,6.8-134.7,13.7-192.6-16.6c-34.6-18.1-61.4-47.9-87.3-76.7 c-21.4-23.8-43.6-48.5-70.2-66.7c-53.2-36.4-121.6-44.8-175.1-48c-13.6-0.8-27.5-1.4-40.9-1.9c-46.9-1.9-95.4-3.9-141.2-16.5 C8.3,1.2,6.2,0.6,4.2,0H0c3.3,1,6.6,2,10,3c46,12.5,94.5,14.6,141.5,16.5c13.4,0.6,27.3,1.1,40.8,1.9 c53.4,3.2,121.5,11.5,174.5,47.7c26.5,18.1,48.6,42.7,70,66.5c26,28.9,52.9,58.8,87.7,76.9c58.3,30.5,127,23.5,193.3,16.7 c5.8-0.6,11.5-1.2,17.2-1.7c26.2-2.6,55-4.2,83.5-2.2v-1.2C790,222,761.2,223.7,735,226.3z"
                  />
                </svg>
              </figure>
              {/* Title */}
              <h2>
                Get Premium Course in <span className="text-success">$800</span>
              </h2>
              <p>
                Prosperous understood Middletons in conviction an uncommonly do.
                Supposing so be resolving breakfast am or perfectly.
              </p>
              {/* Content */}
              <div className="row mb-3 item-collapse">
                <div className="col-sm-6">
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item text-body">
                      {" "}
                      <i className="bi bi-patch-check-fill text-success" />
                      High quality Curriculum
                    </li>
                    <li className="list-group-item text-body">
                      {" "}
                      <i className="bi bi-patch-check-fill text-success" />
                      Tuition Assistance
                    </li>
                    <li className="list-group-item text-body">
                      {" "}
                      <i className="bi bi-patch-check-fill text-success" />
                      Diploma course
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item text-body">
                      {" "}
                      <i className="bi bi-patch-check-fill text-success" />
                      Intermediate courses
                    </li>
                    <li className="list-group-item text-body">
                      {" "}
                      <i className="bi bi-patch-check-fill text-success" />
                      Over 200 online courses
                    </li>
                  </ul>
                </div>
              </div>
              {/* Button */}
              <a href="#" className="btn btn-lg btn-orange-soft">
                Purchase premium
              </a>
            </div>
            {/* Modal footer */}
            <div className="modal-footer d-block bg-info">
              <div className="d-sm-flex justify-content-sm-between align-items-center text-center text-sm-start">
                {/* Social media button */}
                <ul className="list-inline mb-0 social-media-btn mb-2 mb-sm-0">
                  <li className="list-inline-item">
                    {" "}
                    <a
                      className="btn btn-sm mb-0 me-1 bg-white text-facebook"
                      href="#"
                    >
                      <i className="fab fa-fw fa-facebook-f" />
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a
                      className="btn btn-sm mb-0 me-1 bg-white text-instagram"
                      href="#"
                    >
                      <i className="fab fa-fw fa-instagram" />
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a
                      className="btn btn-sm mb-0 me-1 bg-white text-twitter"
                      href="#"
                    >
                      <i className="fab fa-fw fa-twitter" />
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a
                      className="btn btn-sm mb-0 bg-white text-linkedin"
                      href="#"
                    >
                      <i className="fab fa-fw fa-linkedin-in" />
                    </a>{" "}
                  </li>
                </ul>
                {/* Contact info */}
                <div>
                  <p className="mb-1 small">
                    <a href="#" className="text-white">
                      <i className="far fa-envelope fa-fw me-2" />
                      example@gmail.com
                    </a>
                  </p>
                  <p className="mb-0 small">
                    <a href="#" className="text-white">
                      <i className="fas fa-headset fa-fw me-2" />
                      123-456-789
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="back-top">
        <i className="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle" />
      </div>
    </div>
  );
}
export default StudentQuiz;
