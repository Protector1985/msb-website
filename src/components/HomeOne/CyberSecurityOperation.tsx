"use client";

import React from "react";

const CyberSecurityOperation: React.FC = () => {
  return (
    <>
      <section style={{ paddingTop: 0 }} className="cybersecurity-area ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="cybersecurity-content">
                <h2>Comprehensive Security Assessment Report</h2>
                <p>
                  After an extensive on-site review, we’ve highlighted the most
                  impactful strategies to strengthen your security posture.
                  Below are the key recommendations in brief.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul className="cybersecurity-item">
                      <li>
                        <i className="bx bx-check"></i>
                        Early Warning System
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Perimeter Upgrades
                      </li>

                      <li>
                        <i className="bx bx-check"></i>
                        Alarm & Fire
                      </li>

                      <li>
                        <i className="bx bx-check"></i>
                        Intercom Setup
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Safe Room
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="bx bx-check"></i>
                        Keyless Access
                      </li>

                      <li>
                        <i className="bx bx-check"></i>
                        Duress Switches
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Glass Protection
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Secure Storage
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Staff & Vendors
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pr-0">
              <div className="cybersecurity-img"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CyberSecurityOperation;
