"use server";

import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { LuFileBadge } from "react-icons/lu";
import { RiGuideFill } from "react-icons/ri";
import { PiSecurityCameraBold } from "react-icons/pi";
import BouncingArrow from "../BouncingArrow/BouncingArrow";

const ResidentialSecurity: React.FC = () => {
  return (
    <>
      <div className="security-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Luxury Residential Security in Beverly Hills</h2>
            <p>
              Our residential security services in Beverly Hills are built
              around the principle that a secure residence is the backbone of
              any personal protection detail. We offer discreet, personalized
              protection backed by elite training, real-time intelligence, and
              proactive threat mitigation strategies. Whether you are protecting
              a sprawling estate or a secluded compound, our team delivers
              estate security tailored to your lifestyle.
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
                  Our agents blend seamlessly into your household while
                  maintaining a vigilant security presence that protects without
                  disrupting your lifestyle.
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
                  Proactive communication, defined roles, and ongoing oversight
                  ensure your residential security team operates with
                  professionalism and complete transparency.
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
                  We guide your household and staff with threat briefings,
                  emergency planning, and ongoing support that evolves with your
                  risk profile.
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
                  From assessments to implementation, our estate security
                  onboarding process is streamlined and intuitive—built around
                  your schedule and household operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResidentialSecurity;
