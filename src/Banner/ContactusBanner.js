import React from "react";
function ContactusBanner() {
  return (
    <div>
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
    </div>
  );
}

export default ContactusBanner;
