import React from "react";
function About_us() {
  return (
    <div>
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
    </div>
  );
}

export default About_us;
