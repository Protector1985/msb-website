"use server";

import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { LuFileBadge } from "react-icons/lu";
import { RiGuideFill } from "react-icons/ri";
import { PiSecurityCameraBold } from "react-icons/pi";

const EventSecurity: React.FC = () => {
  return (
    <>
      <div className="security-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Event Security Services in Beverly Hills</h2>
            <p>
              MSB Protection provides discreet and highly coordinated event
              security for ultra-high-net-worth clients, celebrities, and public
              figures hosting private functions, red carpet appearances, and
              exclusive brand activations. Our detail integrates seamlessly with
              your team to manage access, anticipate risks, and safeguard your
              guests without compromising the atmosphere.
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
                  Our agents blend into the environment while maintaining visual
                  command and access control at all entry points.
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
                  We work directly with event planners, estate managers, and
                  venue staff to create a cohesive security perimeter.
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
                  Our team conducts pre-event walkthroughs, threat assessments,
                  and venue sweeps to neutralize risks before they appear.
                </p>
              </div>
            </div>

            {/* 4. Scalable */}
            <div className="col-lg-3 col-sm-6 d-flex">
              <div className="single-security">
                <i>
                  <PiSecurityCameraBold />
                </i>
                <h3>Scalable</h3>
                <p>
                  Whether protecting a private dinner or managing a 500-person
                  gala, our detail expands fluidly based on guest count and
                  threat profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventSecurity;
