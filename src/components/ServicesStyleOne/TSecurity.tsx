"use server";

import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { LuFileBadge } from "react-icons/lu";
import { RiGuideFill } from "react-icons/ri";
import { PiSecurityCameraBold } from "react-icons/pi";

const TSecurity: React.FC = () => {
  return (
    <>
      <div className="security-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Travel Security for High-Net-Worth Clients</h2>
            <p>
              MSB Protection offers world-class travel security services designed to safeguard ultra-high-net-worth individuals, celebrities, and executives during domestic and international movements. From secure ground transport in Beverly Hills and Malibu to advance teams overseas, we provide close protection that ensures your itinerary remains safe, private, and uninterrupted.
            </p>
          </div>

          {/* Flex row to ensure uniform height */}
          <div className="row align-items-stretch">
            {/* 1. Discreet */}
            <div className="col-lg-3 col-sm-6 d-flex">
              <div className="single-security">
                <i>
                  <FaUserSecret />
                </i>
                <h3>Discreet</h3>
                <p>
                  Our travel protection teams remain unseen yet ever-present—perfect for clients who demand privacy during transit, events, and downtime.
                </p>
              </div>
            </div>

            {/* 2. Coordinated */}
            <div className="col-lg-3 col-sm-6 d-flex">
              <div className="single-security">
                <i>
                  <LuFileBadge />
                </i>
                <h3>Coordinated</h3>
                <p>
                  We liaise with hotels, drivers, airfields, and event staff to ensure secure and seamless movement from start to finish.
                </p>
              </div>
            </div>

            {/* 3. Anticipatory */}
            <div className="col-lg-3 col-sm-6 d-flex">
              <div className="single-security">
                <i>
                  <RiGuideFill />
                </i>
                <h3>Anticipatory</h3>
                <p>
                  Advance teams, route planning, and real-time intel allow us to mitigate risks before they materialize.
                </p>
              </div>
            </div>

            {/* 4. Global */}
            <div className="col-lg-3 col-sm-6 d-flex">
              <div className="single-security">
                <i>
                  <PiSecurityCameraBold />
                </i>
                <h3>Global</h3>
                <p>
                  Our international network and multilingual agents ensure reliable protection across borders, time zones, and languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TSecurity;
