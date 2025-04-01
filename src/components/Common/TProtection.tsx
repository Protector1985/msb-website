"use server";

import React from "react";
import Image from "next/image";

const TProtection: React.FC = () => {
  return (
    <>
      <div className="manual-area bg-color ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="manual-img">
                <Image
                  src="/img/travelCartoon.png"
                  alt="Travel Security for Executives and High-Net-Worth Individuals"
                  width={662}
                  height={597}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="manual-content mr-auto ml-0">
                <h2>How We Secure Your Travel</h2>
                <p>
                  At MSB Protection, travel security is engineered for executives, celebrities, and high-net-worth individuals who operate across multiple cities, time zones, and media spotlights. We understand that secure movement is about more than physical protection—it’s about anticipation, discretion, and strategic coordination.
                </p>
                <p>
                  Our travel protection services cover everything from airport arrivals and armored transportation to multilingual agents and on-the-ground advance teams. Whether your itinerary includes international business meetings or leisure travel with family, our team ensures every step is secure, predictable, and interruption-free.
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
                        Global Support
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="bx bx-check"></i>
                        Airport Coordination
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        International Coverage
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Multilingual Agents
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Travel Intelligence
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

export default TProtection;
