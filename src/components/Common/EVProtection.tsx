"use server";

import React from "react";
import Image from "next/image";

const EVProtection: React.FC = () => {
  return (
    <>
      <div className="manual-area bg-color ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="manual-img">
                <Image
                  src="/img/eventCartoon.png"
                  alt="Event Security Services in Beverly Hills"
                  width={662}
                  height={597}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="manual-content mr-auto ml-0">
                <h2>How We Secure High-Profile Events</h2>
                <p>
                  MSB Protection offers discreet, scalable event security
                  tailored to luxury gatherings, red carpet premieres, estate
                  functions, and brand activations. Based in Beverly Hills, our
                  protection teams work behind the scenes to safeguard guests,
                  manage access, and prevent disruption—without impacting the
                  elegance or intent of your event.
                </p>
                <p>
                  From early venue walkthroughs and staff vetting to day-of
                  logistics and protective overwatch, we anticipate the
                  unexpected and ensure your event runs flawlessly and securely.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul className="cybersecurity-item">
                      <li>
                        <i className="bx bx-check"></i>
                        Venue Sweeps
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Access Control
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Guest List Protection
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Credential Verification
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="bx bx-check"></i>
                        Threat Assessment
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Media Presence Support
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Protective Overwatch
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Post-Event Debriefing
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

export default EVProtection;
