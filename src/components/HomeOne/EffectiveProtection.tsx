"use server";

import React from "react";
import Image from "next/image";

const EffectiveProtection: React.FC = () => {
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
                  backgroundImage: `url(/img/shakingHands.png)`,
                }}
              ></div>
            </div>

            {/* Content section */}
            <div className="col-lg-6">
              <div className="complete-content">
                <h2>Protect What Matters Most</h2>
                <p>
                  Our 24/7 residential and executive protection services are
                  trusted by ultra-high-net-worth individuals across Beverly
                  Hills, Malibu, Hidden Hills, and Ventura County. We bring
                  global protection expertise and discreet local presence to
                  safeguard your home, your privacy, and your lifestyle with
                  proactive residential security planning and personalized
                  estate coverage.
                </p>

                <div className="row">
                  {/* 1. Global Expertise */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-order"></i>
                      <h3>Global Expertise</h3>
                      <p>
                        Our protectors are trained internationally and equipped
                        to operate at the highest levels of private security.
                      </p>
                    </div>
                  </div>

                  {/* 2. Local Precision */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-anti-virus-software"></i>
                      <h3>Local Precision</h3>
                      <p>
                        We specialize in estate security for high-net-worth
                        residences in Beverly Hills, Malibu, and nearby coastal
                        communities.
                      </p>
                    </div>
                  </div>

                  {/* 3. Discreet Coverage */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0 mb-rs-need">
                      <i className="flaticon-scientist"></i>
                      <h3>Discreet Coverage</h3>
                      <p>
                        Our security agents operate with full
                        discretion—protecting your household without disrupting
                        your lifestyle.
                      </p>
                    </div>
                  </div>

                  {/* 4. Tailored Protection */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0">
                      <i className="flaticon-technical-support"></i>
                      <h3>Tailored Protection</h3>
                      <p>
                        Every detail is customized to your risk profile,
                        household dynamics, and the unique demands of UHNWI
                        estate security.
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
            alt="Estate security and executive protection"
            width={423}
            height={611}
          />
        </div>
      </section>
    </>
  );
};

export default EffectiveProtection;
