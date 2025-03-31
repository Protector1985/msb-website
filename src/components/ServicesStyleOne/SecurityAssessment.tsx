"use client";

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
              Beverly Hills, Malibu, and Ventura County. Now, for a limited
              time, we are extending our on-site security assessments free of
              charge.
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
                  information remains strictly confidential.
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
                  We will deliver a free, personalized security review for your
                  property with no obligations.
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
                  Our advisors provide routine follow-up guidance and ongoing
                  support whenever you truly need us.
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
                  If on-site coverage is truly needed, our completed assessment
                  makes onboarding simple and swift.
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
