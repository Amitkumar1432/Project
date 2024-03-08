import { NavLink } from "react-router-dom";
function EditProfile() {
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
                      <NavLink
                        to="/Settings"
                        className="dropdown-item"
                        href="instructor-setting.html"
                      >
                        <i className="fas fa-fw fa-cog me-1" />
                        Settings
                      </NavLink>{" "}
                    </li>
                    <li>
                      {" "}
                      <NavLink
                        to="/DeleteProfile"
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
          {/* Main banner background image */}
          <div className="container-fluid px-0">
            <div
              className="bg-blue h-100px h-md-200px rounded-0"
              style={{
                background:
                  "url(assets/images/pattern/04.png) no-repeat center center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="container mt-n4">
            <div className="row">
              {/* Profile banner START */}
              <div className="col-12">
                <div className="card bg-transparent card-body p-0">
                  <div className="row d-flex justify-content-between">
                    {/* Avatar */}
                    <div className="col-auto mt-4 mt-md-0">
                      <div className="avatar avatar-xxl mt-n3">
                        <img
                          className="avatar-img rounded-circle border border-white border-3 shadow"
                          src="assets/images/avatar/01.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* Profile info */}
                    <div className="col d-md-flex justify-content-between align-items-center mt-4">
                      <div>
                        <h1 className="my-1 fs-4">
                          Lori Stevens{" "}
                          <i className="bi bi-patch-check-fill text-info small" />
                        </h1>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0">
                            <i className="fas fa-star text-warning me-2" />
                            4.5/5.0
                          </li>
                          <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0">
                            <i className="fas fa-user-graduate text-orange me-2" />
                            12k Enrolled Students
                          </li>
                          <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0">
                            <i className="fas fa-book text-purple me-2" />
                            25 Courses
                          </li>
                        </ul>
                      </div>
                      {/* Button */}
                      <div className="d-flex align-items-center mt-2 mt-md-0">
                        <a
                          href="instructor-create-course.html"
                          className="btn btn-success mb-0"
                        >
                          Create a course
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Profile banner END */}
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
                    <div className="bg-dark border rounded-3 pb-0 p-3 w-100">
                      {/* Dashboard menu */}
                      <div className="list-group list-group-dark list-group-borderless">
                        <a
                          className="list-group-item"
                          href="instructor-dashboard.html"
                        >
                          <i className="bi bi-ui-checks-grid fa-fw me-2" />
                          Dashboard
                        </a>
                        <a
                          className="list-group-item"
                          href="instructor-manage-course.html"
                        >
                          <i className="bi bi-basket fa-fw me-2" />
                          My Courses
                        </a>
                        <a
                          className="list-group-item"
                          href="instructor-quiz.html"
                        >
                          <i className="bi bi-question-diamond fa-fw me-2" />
                          Quiz
                        </a>
                        <a
                          className="list-group-item"
                          href="instructor-earning.html"
                        >
                          <i className="bi bi-graph-up fa-fw me-2" />
                          Earnings
                        </a>
                        <a
                          className="list-group-item"
                          href="instructor-studentlist.html"
                        >
                          <i className="bi bi-people fa-fw me-2" />
                          Students
                        </a>
                        <a
                          className="list-group-item"
                          href="instructor-order.html"
                        >
                          <i className="bi bi-folder-check fa-fw me-2" />
                          Orders
                        </a>
                        <a
                          className="list-group-item"
                          href="instructor-review.html"
                        >
                          <i className="bi bi-star fa-fw me-2" />
                          Reviews
                        </a>
                        <a
                          className="list-group-item active"
                          href="instructor-edit-profile.html"
                        >
                          <i className="bi bi-pencil-square fa-fw me-2" />
                          Edit Profile
                        </a>
                        <a
                          className="list-group-item"
                          href="instructor-payout.html"
                        >
                          <i className="bi bi-wallet2 fa-fw me-2" />
                          Payouts
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
                          href="sign-in.html"
                        >
                          <i className="fas fa-sign-out-alt fa-fw me-2" />
                          Sign Out
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Responsive offcanvas body END */}
              </div>
              {/* Left sidebar END */}
              {/* Main content START */}
              <div className="col-xl-9">
                {/* Edit profile START */}
                <div className="card bg-transparent border rounded-3">
                  {/* Card header */}
                  <div className="card-header bg-transparent border-bottom">
                    <h3 className="card-header-title mb-0">Edit Profile</h3>
                  </div>
                  {/* Card body START */}
                  <div className="card-body">
                    {/* Form */}
                    <form className="row g-4">
                      {/* Profile picture */}
                      <div className="col-12 justify-content-center align-items-center">
                        <label className="form-label">Profile picture</label>
                        <div className="d-flex align-items-center">
                          <label
                            className="position-relative me-4"
                            htmlFor="uploadfile-1"
                            title="Replace this pic"
                          >
                            {/* Avatar place holder */}
                            <span className="avatar avatar-xl">
                              <img
                                id="uploadfile-1-preview"
                                className="avatar-img rounded-circle border border-white border-3 shadow"
                                src="assets/images/avatar/07.jpg"
                                alt=""
                              />
                            </span>
                            {/* Remove btn */}
                            <button type="button" className="uploadremove">
                              <i className="bi bi-x text-white" />
                            </button>
                          </label>
                          {/* Upload button */}
                          <label
                            className="btn btn-primary-soft mb-0"
                            htmlFor="uploadfile-1"
                          >
                            Change
                          </label>
                          <input
                            id="uploadfile-1"
                            className="form-control d-none"
                            type="file"
                          />
                        </div>
                      </div>
                      {/* Full name */}
                      <div className="col-12">
                        <label className="form-label">Full name</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Lori"
                            placeholder="First name"
                          />
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Stevens"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                      {/* Username */}
                      <div className="col-md-6">
                        <label className="form-label">Username</label>
                        <div className="input-group">
                          <span className="input-group-text">Eduport.com</span>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="loristev"
                          />
                        </div>
                      </div>
                      {/* Email id */}
                      <div className="col-md-6">
                        <label className="form-label">Email id</label>
                        <input
                          className="form-control"
                          type="email"
                          defaultValue="example@gmail.com"
                          placeholder="Email"
                        />
                      </div>
                      {/* Phone number */}
                      <div className="col-md-6">
                        <label className="form-label">Phone number</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={1234567890}
                          placeholder="Phone number"
                        />
                      </div>
                      {/* Location */}
                      <div className="col-md-6">
                        <label className="form-label">Location</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="California"
                        />
                      </div>
                      {/* About me */}
                      <div className="col-12">
                        <label className="form-label">About me</label>
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={
                            "I’ve found a way to get paid for my favorite hobby, and do so while following my dream of traveling the world."
                          }
                        />
                        <div className="form-text">
                          Brief description for your profile.
                        </div>
                      </div>
                      {/* Education */}
                      <div className="col-12">
                        <label className="form-label">Education</label>
                        <input
                          className="form-control mb-2"
                          type="text"
                          defaultValue="Bachelor in Computer Graphics"
                        />
                        <input
                          className="form-control mb-2"
                          type="text"
                          defaultValue="Masters in Computer Graphics"
                        />
                        <button className="btn btn-sm btn-light mb-0">
                          <i className="bi bi-plus me-1" />
                          Add more
                        </button>
                      </div>
                      {/* Save button */}
                      <div className="d-sm-flex justify-content-end">
                        <button type="button" className="btn btn-primary mb-0">
                          Save changes
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* Card body END */}
                </div>
                {/* Edit profile END */}
                <div className="row g-4 mt-3">
                  {/* Linked account START */}
                  <div className="col-lg-6">
                    <div className="card bg-transparent border rounded-3">
                      {/* Card header */}
                      <div className="card-header bg-transparent border-bottom">
                        <h5 className="card-header-title mb-0">
                          Linked account
                        </h5>
                      </div>
                      {/* Card body START */}
                      <div className="card-body pb-0">
                        {/* Google */}
                        <div className="position-relative mb-4 d-sm-flex bg-success bg-opacity-10 border border-success p-3 rounded">
                          {/* Title and content */}
                          <h2 className="fs-1 mb-0 me-3">
                            <i className="fab fa-google text-google-icon" />
                          </h2>
                          <div>
                            <div className="position-absolute top-0 start-100 translate-middle bg-white rounded-circle lh-1 h-20px">
                              <i className="bi bi-check-circle-fill text-success fs-5" />
                            </div>
                            <h6 className="mb-1">Google</h6>
                            <p className="mb-1 small">
                              You are successfully connected to your Google
                              account
                            </p>
                            {/* Button */}
                            <button
                              type="button"
                              className="btn btn-sm btn-danger mb-0"
                            >
                              Invoke
                            </button>
                            <a
                              href="#"
                              className="btn btn-sm btn-link text-body mb-0"
                            >
                              Learn more
                            </a>
                          </div>
                        </div>
                        {/* Linkedin */}
                        <div className="mb-4 d-sm-flex border p-3 rounded">
                          {/* Title and content */}
                          <h2 className="fs-1 mb-0 me-3">
                            <i className="fab fa-linkedin-in text-linkedin" />
                          </h2>
                          <div>
                            <h6 className="mb-1">Linkedin</h6>
                            <p className="mb-1 small">
                              Connect with Linkedin account for a personalized
                              experience
                            </p>
                            {/* Button */}
                            <button
                              type="button"
                              className="btn btn-sm btn-primary mb-0"
                            >
                              Connect Linkedin
                            </button>
                            <a
                              href="#"
                              className="btn btn-sm btn-link text-body mb-0"
                            >
                              Learn more
                            </a>
                          </div>
                        </div>
                        {/* Facebook */}
                        <div className="mb-4 d-sm-flex border p-3 rounded">
                          {/* Title and content */}
                          <h2 className="fs-1 mb-0 me-3">
                            <i className="fab fa-facebook text-facebook" />
                          </h2>
                          <div>
                            <h6 className="mb-1">Facebook</h6>
                            <p className="mb-1 small">
                              Connect with Facebook account for a personalized
                              experience
                            </p>
                            {/* Button */}
                            <button
                              type="button"
                              className="btn btn-sm btn-primary mb-0"
                            >
                              Connect Facebook
                            </button>
                            <a
                              href="#"
                              className="btn btn-sm btn-link text-body mb-0"
                            >
                              Learn more
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Card body END */}
                    </div>
                  </div>
                  {/* Linked account end */}
                  {/* Social media profile START */}
                  <div className="col-lg-6">
                    <div className="card bg-transparent border rounded-3">
                      {/* Card header */}
                      <div className="card-header bg-transparent border-bottom">
                        <h5 className="card-header-title mb-0">
                          Social media profile
                        </h5>
                      </div>
                      {/* Card body START */}
                      <div className="card-body">
                        {/* Facebook username */}
                        <div className="mb-3">
                          <label className="form-label">
                            <i className="fab fa-facebook text-facebook me-2" />
                            Enter facebook username
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="loristev"
                            placeholder="Enter username"
                          />
                        </div>
                        {/* Twitter username */}
                        <div className="mb-3">
                          <label className="form-label">
                            <i className="bi bi-twitter text-twitter me-2" />
                            Enter twitter username
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="loristev"
                            placeholder="Enter username"
                          />
                        </div>
                        {/* Instagram username */}
                        <div className="mb-3">
                          <label className="form-label">
                            <i className="fab fa-instagram text-instagram-gradient me-2" />
                            Enter instagram username
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="loristev"
                            placeholder="Enter username"
                          />
                        </div>
                        {/* Youtube */}
                        <div className="mb-3">
                          <label className="form-label">
                            <i className="fab fa-youtube text-youtube me-2" />
                            Add your youtube profile URL
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="https://www.youtube.com/in/Eduport-05620abc"
                            placeholder="Enter username"
                          />
                        </div>
                        {/* Button */}
                        <div className="d-flex justify-content-end mt-4">
                          <button
                            type="button"
                            className="btn btn-primary mb-0"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                      {/* Card body END */}
                    </div>
                  </div>
                  {/* Social media profile END */}
                  {/* EMail change START */}
                  <div className="col-lg-6">
                    <div className="card bg-transparent border rounded-3">
                      {/* Card header */}
                      <div className="card-header bg-transparent border-bottom">
                        <h5 className="card-header-title mb-0">Update email</h5>
                      </div>
                      {/* Card body */}
                      <div className="card-body">
                        <p>
                          Your current email address is{" "}
                          <span className="text-primary">
                            example@gmail.com
                          </span>
                        </p>
                        {/* Email */}
                        <form>
                          <label className="form-label">
                            Enter your new email id
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            placeholder="Enter new email"
                          />
                          <div className="d-flex justify-content-end mt-4">
                            <button
                              type="button"
                              className="btn btn-primary mb-0"
                            >
                              Update email
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* EMail change end */}
                  {/* Password change START */}
                  <div className="col-lg-6">
                    <div className="card border bg-transparent rounded-3">
                      {/* Card header */}
                      <div className="card-header bg-transparent border-bottom">
                        <h5 className="card-header-title mb-0">
                          Update password
                        </h5>
                      </div>
                      {/* Card body START */}
                      <div className="card-body">
                        {/* Current password */}
                        <div className="mb-3">
                          <label className="form-label">Current password</label>
                          <input
                            className="form-control"
                            type="password"
                            placeholder="Enter current password"
                          />
                        </div>
                        {/* New password */}
                        <div className="mb-3">
                          <label className="form-label">
                            {" "}
                            Enter new password
                          </label>
                          <div className="input-group">
                            <input
                              className="form-control"
                              type="password"
                              placeholder="Enter new password"
                            />
                            <span className="input-group-text p-0 bg-transparent">
                              <i className="far fa-eye cursor-pointer p-2 w-40px" />
                            </span>
                          </div>
                          <div className="rounded mt-1" id="psw-strength" />
                        </div>
                        {/* Confirm password */}
                        <div>
                          <label className="form-label">
                            Confirm new password
                          </label>
                          <input
                            className="form-control"
                            type="password"
                            placeholder="Enter new password"
                          />
                        </div>
                        {/* Button */}
                        <div className="d-flex justify-content-end mt-4">
                          <button
                            type="button"
                            className="btn btn-primary mb-0"
                          >
                            Change password
                          </button>
                        </div>
                      </div>
                      {/* Card body END */}
                    </div>
                  </div>
                  {/* Password change end */}
                </div>
              </div>
              {/* Main content END */}
            </div>
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
      {/* Back to top */}
      <div className="back-top">
        <i className="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle" />
      </div>
      {/* Bootstrap JS */}
      {/* Template Functions */}
    </div>
  );
}
export default EditProfile;
