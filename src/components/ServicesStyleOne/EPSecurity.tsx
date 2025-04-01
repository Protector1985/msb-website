"use server";

import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { LuFileBadge } from "react-icons/lu";
import { RiGuideFill } from "react-icons/ri";
import { PiSecurityCameraBold } from "react-icons/pi";

const EPSecurity: React.FC = () => {
  return (
    <>
      <div className="security-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Executive Protection Services</h2>
            <p>
              Our executive protection services are trusted by
              ultra-high-net-worth individuals, public figures, and corporate
              leaders across Beverly Hills, Malibu, and Hidden Hills. MSB
              Protection provides close protection agents with elite training,
              operational discipline, and extensive experience in high-threat
              and high-visibility environments. Whether you are traveling,
              attending public events, or managing day-to-day routines, we
              ensure personal safety with discretion, planning, and precision.
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
                  Our executive protection agents operate with minimal
                  visibility while maintaining full situational control—perfect
                  for high-profile clients who value privacy.
                </p>
              </div>
            </div>

            {/* 2. Accountable */}
            <div className="col-lg-3 col-sm-6 d-flex">
              <div className="single-security">
                <i>
                  <LuFileBadge />
                </i>
                <h3>Accountable</h3>
                <p>
                  We operate under clear reporting protocols, defined mission
                  scope, and direct communication channels to keep your
                  protection detail fully aligned.
                </p>
              </div>
            </div>

            {/* 3. Proactive */}
            <div className="col-lg-3 col-sm-6 d-flex">
              <div className="single-security">
                <i>
                  <RiGuideFill />
                </i>
                <h3>Proactive</h3>
                <p>
                  Our executive protection strategy includes advance planning,
                  route security, threat monitoring, and contingency development
                  based on your daily routines and travel needs.
                </p>
              </div>
            </div>

            {/* 4. Seamless */}
            <div className="col-lg-3 col-sm-6 d-flex">
              <div className="single-security">
                <i>
                  <PiSecurityCameraBold />
                </i>
                <h3>Seamless</h3>
                <p>
                  We integrate into your lifestyle and professional environment
                  without disruption—offering full-spectrum personal protection
                  across all settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EPSecurity;
