"use server";

import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { LuFileBadge } from "react-icons/lu";
import { RiGuideFill } from "react-icons/ri";
import { PiSecurityCameraBold } from "react-icons/pi";
import BouncingArrow from "../BouncingArrow/BouncingArrow";

const SecurityAssessment: React.FC = () => {
  return (
    <>
      <div className="security-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Secure Your Home With a Free Assessment</h2>
            <p>
              Our internationally experienced protectors have served clients in
              Beverly Hills, Malibu, Hidden Hills, and Ventura County. For a
              limited time, we are offering complimentary on-site security
              assessments tailored to ultra-high-net-worth estates. This is your
              opportunity to receive expert insights from professionals trained
              in executive protection, estate security, and residential risk
              mitigation.
            </p>
          </div>

          {/* Scroll-down invitation */}
          <div className="section-title mt-4" style={{ textAlign: "center" }}>
            <BouncingArrow />
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
                  We always sign an NDA before each visit, ensuring your
                  personal security needs and household operations remain
                  completely confidential.
                </p>
              </div>
            </div>

            {/* 2. No Strings Attached */}
            <div className="col-lg-3 col-sm-6 d-flex">
              <div className="single-security">
                <i>
                  <LuFileBadge />
                </i>
                <h3>No Strings Attached</h3>
                <p>
                  Receive a no-obligation security review for your
                  residence—ideal for estate managers and assistants seeking
                  residential security services in Beverly Hills or Malibu.
                </p>
              </div>
            </div>

            {/* 3. Ongoing Guidance */}
            <div className="col-lg-3 col-sm-6 d-flex">
              <div className="single-security">
                <i>
                  <RiGuideFill />
                </i>
                <h3>Ongoing Guidance</h3>
                <p>
                  We provide follow-up recommendations and support based on
                  executive protection best practices and residential threat
                  analysis.
                </p>
              </div>
            </div>

            {/* 4. Streamlined Onboarding */}
            <div className="col-lg-3 col-sm-6 d-flex">
              <div className="single-security">
                <i>
                  <PiSecurityCameraBold />
                </i>
                <h3>Streamlined Onboarding</h3>
                <p>
                  Should you require estate protection, our completed assessment
                  makes transitioning into 24/7 residential coverage fast and
                  seamless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityAssessment;
