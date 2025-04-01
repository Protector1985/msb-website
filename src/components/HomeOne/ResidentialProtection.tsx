"use server";

import React from "react";
import Image from "next/image";

const ResidentialProtection: React.FC = () => {
  return (
    <>
      <section className="complete-area ptb-100">
        <div className="container-fluid">
          <div className="row">
            {/* Background image */}
            <div className="col-lg-6 pl-0">
              <div
                className="complete-img"
                style={{
                  backgroundImage: `url(/img/discussion.png)`,
                }}
              ></div>
            </div>

            {/* Content section */}
            <div className="col-lg-6">
              <div className="complete-content">
                <h2>24/7 Residential Security in Beverly Hills</h2>
                <p>
                  Our 24/7 residential protection services are designed to
                  safeguard ultra-high-net-worth individuals and their estates
                  with constant vigilance. MSB Protection delivers elite-level
                  security coverage that adapts to your lifestyle while
                  neutralizing emerging threats. With a foundation built on
                  executive protection principles, our residential teams ensure
                  no detail is overlooked.
                </p>

                <div className="row">
                  {/* 1. Armed Coverage */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-order"></i>
                      <h3>Armed Coverage</h3>
                      <p>
                        Our licensed agents provide armed estate protection,
                        trained for rapid response and discretion.
                      </p>
                    </div>
                  </div>

                  {/* 2. Celebrity Protection */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-anti-virus-software"></i>
                      <h3>Celebrity Protection</h3>
                      <p>
                        Trusted by public figures and high-profile clients for
                        discreet, around-the-clock home security.
                      </p>
                    </div>
                  </div>

                  {/* 3. Early Warning Systems */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0 mb-rs-need">
                      <i className="flaticon-scientist"></i>
                      <h3>Early Warning Systems</h3>
                      <p>
                        Integrated AI-powered sensors and surveillance tools
                        alert protectors to baseline deviations in real time.
                      </p>
                    </div>
                  </div>

                  {/* 4. Residential Intelligence */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0">
                      <i className="flaticon-technical-support"></i>
                      <h3>Residential Intelligence</h3>
                      <p>
                        Our in-house R&D team enhances home security through
                        custom tech and predictive threat modeling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative shape */}
        <div className="complete-shape">
          <Image
            src="/img/complete-shape.png"
            alt="Residential Protection in Beverly Hills"
            width={423}
            height={611}
          />
        </div>
      </section>
    </>
  );
};

export default ResidentialProtection;
