import React from "react";
function Banner() {
  return (
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
            <h6 className="mb-3">1000+ professional Courses for Your Career</h6>
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
  );
}

export default Banner;
