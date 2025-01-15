"use client";
  
import React from "react";
import Link from "next/link";

const ServicesCard: React.FC = () => {
  return (
    <>
      <div className="solutions-area section-width pb-100">
        <div className="container">
          <div className="section-title">
            <h2>High-Performance Solutions</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus quam neque quibusdam corrupti aspernatur corporis alias
              nisi dolorum expedita veritatis voluptates minima.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-5">
              <div
                className="single-solutions"
                style={{
                  backgroundImage: `url(/img/solution/solution-img1.jpg)`,
                }}
              >
                <div className="solutions-content">
                  <h3>Secure Managed IT</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolorer
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div
                    className="single-solutions"
                    style={{
                      backgroundImage: `url(/img/solution/solution-img2.jpg)`,
                    }}
                  >
                    <div className="solutions-content">
                      <h3>Compliance</h3>
                      <p>
                        Lorem ipsum dolor sit amet sed, consectetur adipiscing
                        elit do
                      </p>

                      <Link href="/services/details" className="read-more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div
                    className="single-solutions"
                    style={{
                      backgroundImage: `url(/img/solution/solution-img3.jpg)`,
                    }}
                  >
                    <div className="solutions-content">
                      <h3>Cyber Security</h3>
                      <p>
                        Lorem ipsum dolor sit amet sed, consectetur adipiscing
                        elit do
                      </p>

                      <Link href="/services/details" className="read-more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div
                    className="single-solutions"
                    style={{
                      backgroundImage: `url(/img/solution/solution-img4.jpg)`,
                    }}
                  >
                    <div className="solutions-content">
                      <h3>Disaster Planning</h3>
                      <p>
                        Lorem ipsum dolor sit amet sed, consectetur adipiscing
                        elit do
                      </p>

                      <Link href="/services/details" className="read-more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div
                    className="single-solutions"
                    style={{
                      backgroundImage: `url(/img/solution/solution-img5.jpg)`,
                    }}
                  >
                    <div className="solutions-content">
                      <h3>Secure By Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet sed, consectetur adipiscing
                        elit do
                      </p>

                      <Link href="/services/details" className="read-more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="single-solutions"
                style={{
                  backgroundImage: `url(/img/solution/solution-img6.jpg)`,
                }}
              >
                <div className="solutions-content">
                  <h3>Secure Awareness Training</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolorer
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area">
                <ul className="pagination">
                  <li className="page-item">
                    <Link href="#" className="page-link page-links">
                      <i className="bx bx-chevrons-left"></i>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link href="#" className="page-link">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="#" className="page-link">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="#" className="page-link">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="#" className="page-link">
                      <i className="bx bx-chevrons-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
