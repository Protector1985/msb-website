"use server";

import React from "react";
import Image from "next/image";

const EventProtection: React.FC = () => {
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
                  backgroundImage: `url(/img/redCarpet.png)`,
                }}
              ></div>
            </div>

            {/* Content section */}
            <div className="col-lg-6">
              <div className="complete-content">
                <h2>Comprehensive Event Protection</h2>
                <p>
                  MSB Protection provides tailored event security solutions for
                  private gatherings, VIP galas, and high-profile brand events
                  in Beverly Hills, Malibu, and surrounding areas. Our agents
                  specialize in managing both visible and behind-the-scenes
                  protective operations, ensuring a secure environment without
                  interrupting the tone or purpose of your event.
                </p>
                <p>
                  We collaborate directly with planners, venues, estate
                  managers, and guest coordinators to ensure smooth access
                  control, detailed planning, and proactive security posture
                  from setup through post-event debriefing.
                </p>

                <div className="row">
                  {/* 1. Armed Agents */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-order"></i>
                      <h3>Armed Agents</h3>
                      <p>
                        Our licensed security agents provide discreet but
                        effective protection tailored to your event’s size and
                        risk profile.
                      </p>
                    </div>
                  </div>

                  {/* 2. Guest Management */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-anti-virus-software"></i>
                      <h3>Guest Management</h3>
                      <p>
                        Credential checks, list screening, and secure entry
                        protocols designed to match the tone of your guest
                        experience.
                      </p>
                    </div>
                  </div>

                  {/* 3. Site Recon & Setup */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0 mb-rs-need">
                      <i className="flaticon-scientist"></i>
                      <h3>Site Recon & Setup</h3>
                      <p>
                        Pre-event sweeps, camera coordination, and security
                        positioning built into the venue layout from day one.
                      </p>
                    </div>
                  </div>

                  {/* 4. Intelligence Support */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0">
                      <i className="flaticon-technical-support"></i>
                      <h3>Intelligence Support</h3>
                      <p>
                        Onsite support powered by real-time threat intelligence,
                        situational monitoring, and post-event analysis.
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
            alt="Event Security Beverly Hills"
            width={423}
            height={611}
          />
        </div>
      </section>
    </>
  );
};

export default EventProtection;
