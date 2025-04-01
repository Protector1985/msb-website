"use server";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProtectYourResidence: React.FC = () => {
  return (
    <>
      <div className="manual-area bg-color ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="manual-img">
                <Image
                  src="/img/houseParts.png"
                  alt="Residential Security Protocol"
                  width={662}
                  height={597}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="manual-content mr-auto ml-0">
                <h2>How We Approach Residential Protection</h2>
                <p>
                  At MSB Protection, our approach to residential security begins
                  with one clear truth: your home is your most critical safe
                  zone. As the operational backbone of any executive protection
                  detail, residential coverage demands precise planning and
                  proactive threat management to safeguard you and your loved
                  ones. Led by CEO Michael Braun—a former member of an elite
                  German police unit specializing in violent crime—we deliver
                  exceptional residential security services to
                  ultra-high-net-worth individuals in Beverly Hills, Malibu,
                  Hidden Hills, and Montecito.
                </p>
                <p>
                  From physical perimeter defense and armed estate protection to
                  AI-enhanced surveillance and proactive threat intelligence, we
                  offer comprehensive solutions designed for high-profile
                  households. Every detail is tailored to your lifestyle, your
                  staff, and your specific threat profile.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul className="cybersecurity-item">
                      <li>
                        <i className="bx bx-check"></i>
                        Estate Security
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Smart Surveillance
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Armed Coverage
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Live Monitoring
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="bx bx-check"></i>
                        Staff Protocols
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Risk Assessments
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Integrated Coverage
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        In-House R&D
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

export default ProtectYourResidence;
