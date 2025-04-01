"use server";

import React from "react";
import Image from "next/image";

const ExecutiveProtection: React.FC = () => {
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
                  backgroundImage: `url(/img/EP.png)`,
                }}
              ></div>
            </div>

            {/* Content section */}
            <div className="col-lg-6">
              <div className="complete-content">
                <h2>Executive Protection in Beverly Hills and Beyond</h2>
                <p>
                  MSB Protection provides comprehensive executive protection
                  services for high-net-worth individuals, public figures, and
                  principals requiring personalized, 24/7 security coverage.
                  Operating throughout Beverly Hills, Malibu, and Southern
                  California, our agents are highly trained in close protection,
                  intelligence gathering, and operational planning. We
                  seamlessly adapt to your lifestyle while proactively
                  addressing threats wherever they may arise.
                </p>
                <p>
                  Every assignment is supported by our in-house R&D team,
                  ensuring your detail benefits from the most current threat
                  intelligence, communications tools, and protective technology.
                  Whether accompanying you to a public event, managing secure
                  travel logistics, or providing protective surveillance in
                  high-risk environments, we stay two steps ahead so you can
                  move freely and with confidence.
                </p>

                <div className="row">
                  {/* 1. Armed Protection */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-order"></i>
                      <h3>Armed Protection</h3>
                      <p>
                        Our licensed executive protection agents deliver
                        discreet, armed coverage for personal, corporate, or
                        family needs.
                      </p>
                    </div>
                  </div>

                  {/* 2. High-Profile Clients */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-anti-virus-software"></i>
                      <h3>High-Profile Clients</h3>
                      <p>
                        We serve celebrities, executives, and dignitaries who
                        demand privacy, control, and world-class personal
                        security.
                      </p>
                    </div>
                  </div>

                  {/* 3. Advance Security Systems */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0 mb-rs-need">
                      <i className="flaticon-scientist"></i>
                      <h3>Advance Security</h3>
                      <p>
                        We deploy advance teams, route planning, and AI-powered
                        monitoring to ensure protection starts before you move.
                      </p>
                    </div>
                  </div>

                  {/* 4. Threat Intelligence */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0">
                      <i className="flaticon-technical-support"></i>
                      <h3>Threat Intelligence</h3>
                      <p>
                        Our in-house intelligence team delivers real-time
                        situational awareness and predictive threat modeling.
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
            alt="Executive Protection in Beverly Hills"
            width={423}
            height={611}
          />
        </div>
      </section>
    </>
  );
};

export default ExecutiveProtection;
