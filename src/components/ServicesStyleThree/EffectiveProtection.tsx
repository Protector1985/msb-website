"use client";

import React from "react";
import Image from "next/image";

const EffectiveProtection: React.FC = () => {
  return (
    <>
      <section className="complete-area pt-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 pl-0">
              <div
                className="complete-img"
                style={{
                  backgroundImage: `url(/img/complete-img.jpg)`,
                }}
              ></div>
            </div>
            <div className="col-lg-6">
              <div className="complete-content">
                <h2>
                  The most Complete and Effective Protection for Your Home and
                  Office
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor elit incididunt ut labore et dolore magna
                  aliqua. Quis ipsum
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-order"></i>
                      <h3>Check and Search Hazards</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-anti-virus-software"></i>
                      <h3>Install and Configure Software</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0 mb-rs-need">
                      <i className="flaticon-scientist"></i>
                      <h3>Departure of the Our Experts</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0">
                      <i className="flaticon-technical-support"></i>
                      <h3>24/7 Support and Remote Admit</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="complete-shape">
          <Image
            src="/img/complete-shape.png"
            alt="Image"
            width={423}
            height={611}
          />
        </div>
      </section>
    </>
  );
};

export default EffectiveProtection;
