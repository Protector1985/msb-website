"use server";

import React from "react";
import Image from "next/image";
import styles from "./styles/ourTraining.module.css";

import { MdOutlineSportsMartialArts } from "react-icons/md";
import { GrThreats } from "react-icons/gr";
import { LiaResearchgate } from "react-icons/lia";

const WhatSetsUsApart: React.FC = () => {
  return (
    <>
      <section className="approach-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="approach-img">
                <Image
                  src="/img/home-one/softwareAgent.png"
                  alt="Our Training Approach"
                  width={660}
                  height={700}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="approach-content">
                <h2>What Sets Us Apart in Executive Protection</h2>
                <p>
                  Your safety is our mission. That’s why our{" "}
                  <strong>executive protection specialists</strong> undergo some
                  of the most rigorous and continuous training in the private
                  security industry. Trusted by{" "}
                  <strong>ultra-high-net-worth individuals</strong> and estate
                  managers in Beverly Hills, Malibu, and Montecito, our team
                  combines elite field experience with intelligence-driven
                  strategies for <strong>threat prevention</strong> and{" "}
                  <strong>personal security</strong>. We maintain one of the
                  largest per-agent training budgets in Southern California and
                  are the only firm in the region with a dedicated{" "}
                  <strong>Research & Development division</strong>—developing
                  proprietary AI and software tools to proactively combat
                  evolving risks like <strong>celebrity stalking</strong>,{" "}
                  <strong>kidnapping threats</strong>, and{" "}
                  <strong>residential invasions</strong>.
                </p>

                <ul>
                  <li>
                    <i>
                      <MdOutlineSportsMartialArts className={styles.icon} />
                    </i>
                    <h3>Industry-Defining Training</h3>
                    <p>
                      We don’t dilute excellence with layers of middle
                      management. Instead, we channel resources into elite,
                      globally sourced training—taught by veterans of{" "}
                      <strong>special operations units</strong> and{" "}
                      <strong>high-risk executive protection</strong> roles.
                      This ensures unmatched readiness for any protection
                      detail.
                    </p>
                  </li>
                  <li>
                    <i>
                      <GrThreats className={styles.icon} />
                    </i>
                    <h3>Elite Threat Assessment</h3>
                    <p>
                      Our experts are drawn from top-tier military and
                      intelligence backgrounds. We specialize in{" "}
                      <strong>celebrity threat assessment</strong>,{" "}
                      <strong>UHNWI security planning</strong>, and advanced
                      behavioral profiling to protect our clients against both
                      physical and digital threats.
                    </p>
                  </li>
                  <li>
                    <i>
                      <LiaResearchgate className={styles.icon} />
                    </i>
                    <h3>R&D-Driven Private Security</h3>
                    <p>
                      Innovation is a core pillar of our model. Our in-house
                      engineers create real-time intelligence tools and
                      predictive analytics tailored to the modern threats facing{" "}
                      <strong>high-profile individuals</strong>—from{" "}
                      <strong>cybersecurity for UHNW clients</strong> to
                      incident-response AI.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatSetsUsApart;
