"use client";

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
                <h2>Book Your On-Site Assessment</h2>
                <p>
                  Experience the confidence that comes with world-class
                  security. Our protectors boast global expertise—serving
                  clients in Beverly Hills, Malibu, and Ventura County—while
                  customizing every detail to your specific needs.
                </p>

                <div className="row">
                  {/* 1. Global Expertise */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-order"></i>
                      <h3>Global Expertise</h3>
                      <p>
                        Harness the skills of top-tier professionals with proven
                        international credentials.
                      </p>
                    </div>
                  </div>

                  {/* 2. Local Presence */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-anti-virus-software"></i>
                      <h3>Local Presence</h3>
                      <p>
                        We’re right where you need us most—in Beverly Hills,
                        Malibu, and beyond.
                      </p>
                    </div>
                  </div>

                  {/* 3. Discreet & Effective */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0 mb-rs-need">
                      <i className="flaticon-scientist"></i>
                      <h3>Discreet & Effective</h3>
                      <p>
                        Our methods blend seamlessly into your lifestyle while
                        delivering maximum protection.
                      </p>
                    </div>
                  </div>

                  {/* 4. Tailored Solutions */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0">
                      <i className="flaticon-technical-support"></i>
                      <h3>Tailored Solutions</h3>
                      <p>
                        We adapt our approach to your unique environment,
                        ensuring personalized, top-level security.
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
