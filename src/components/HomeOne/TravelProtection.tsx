"use server";

import React from "react";
import Image from "next/image";

const TravelProtection: React.FC = () => {
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
                  backgroundImage: `url(/img/beachGuard.png)`,
                }}
              ></div>
            </div>

            {/* Content section */}
            <div className="col-lg-6">
              <div className="complete-content">
                <h2>Travel Security for High-Profile Clients</h2>
                <p>
                  When you are on the move—whether for business, leisure, or family—MSB Protection ensures that every step of your journey is secure. Our travel security services are designed for high-net-worth individuals, entertainers, executives, and dignitaries who require discreet, coordinated movement across borders, time zones, and threat environments.
                </p>
                <p>
                  From ground transport and hotel liaison to airport protocols, advance teams, and multilingual agents, we deliver seamless protective travel support backed by intelligence and powered by real-time logistics. Our goal: keep you focused on your mission, not the risks around it.
                </p>

                <div className="row">
                  {/* 1. Secure Transport */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-order"></i>
                      <h3>Secure Transport</h3>
                      <p>
                        Private vehicles with trained security drivers and real-time tracking tailored to your itinerary.
                      </p>
                    </div>
                  </div>

                  {/* 2. Global Access */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-anti-virus-software"></i>
                      <h3>Global Access</h3>
                      <p>
                        International coverage through vetted protection partners and local intelligence networks.
                      </p>
                    </div>
                  </div>

                  {/* 3. Airport & Hotel Coordination */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0 mb-rs-need">
                      <i className="flaticon-scientist"></i>
                      <h3>Airport & Hotel Coordination</h3>
                      <p>
                        Advance arrival planning, private terminal access, and direct liaison with accommodations.
                      </p>
                    </div>
                  </div>

                  {/* 4. Live Travel Intelligence */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0">
                      <i className="flaticon-technical-support"></i>
                      <h3>Live Travel Intelligence</h3>
                      <p>
                        Real-time alerts, local threat monitoring, and responsive route adjustments to maintain flow and safety.
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
            alt="Travel Security in Beverly Hills"
            width={423}
            height={611}
          />
        </div>
      </section>
    </>
  );
};

export default TravelProtection;