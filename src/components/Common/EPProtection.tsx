"use server";

import React from "react";
import Image from "next/image";

const EPProtection: React.FC = () => {
  return (
    <>
      <div className="manual-area bg-color ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="manual-img">
                <Image
                  src="/img/executiveCartoon.png"
                  alt="Executive Protection Services in Beverly Hills"
                  width={662}
                  height={597}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="manual-content mr-auto ml-0">
                <h2>How We Deliver Executive Protection</h2>
                <p>
                  Executive protection at MSB is about more than physical
                  coverage—it’s a tailored operation designed to support
                  ultra-high-net-worth individuals and public figures as they
                  navigate dynamic schedules, sensitive environments, and
                  elevated threat levels. With our roots in European law
                  enforcement and our presence in Beverly Hills, Malibu, and
                  Hidden Hills, we bring discretion, discipline, and planning to
                  every assignment.
                </p>
                <p>
                  Our close protection agents are trained to operate in both
                  high-profile and low-visibility settings. From international
                  travel and media exposure to corporate boardrooms and private
                  estates, we deliver proactive, personalized protection guided
                  by intelligence and backed by real-world experience.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul className="cybersecurity-item">
                      <li>
                        <i className="bx bx-check"></i>
                        Advance Planning
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Route Security
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Secure Transport
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Travel Protection
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="bx bx-check"></i>
                        Public Appearances
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Event Coverage
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Threat Intelligence
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Executive Privacy
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EPProtection;
