"use server";

import React from "react";
import Image from "next/image";
import styles from "./styles/CyberSecurity.module.css";

const CyberSecurityOperation: React.FC = () => {
  return (
    <>
      <section style={{ paddingTop: 0 }} className="cybersecurity-area ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="cybersecurity-content">
                <h2>Comprehensive Residential Security Recommendations</h2>
                <p>
                  Following an in-depth on-site evaluation of your estate, our
                  executive protection team has compiled key strategies to
                  enhance your residential security. These recommendations are
                  tailored for ultra-high-net-worth individuals and designed
                  specifically for high-value residences in Beverly Hills,
                  Malibu, Hidden Hills, and Montecito.
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
                        Alarm & Fire Integration
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Intercom System
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Safe Room Design
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="bx bx-check"></i>
                        Keyless Entry
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Duress Alarms
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Glass Break Sensors
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Secure Storage Areas
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        Staff & Vendor Protocols
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <Image
                className={styles.guardPic}
                src="/img/GuardFence.png"
                alt="Residential estate protection in Beverly Hills"
                width={700}
                height={350}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CyberSecurityOperation;
