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
                <h2>What Sets Us Apart</h2>
                <p>
                  Your protection is our top priority. That’s why we continually
                  work to stay ahead of those who could mean you harm—and ahead
                  of our competition. Our protectors undergo rigorous, ongoing
                  training, supported by one of the most substantial per-detail
                  annual training budgets in the industry. Additionally, our
                  in-house Research & Development department creates
                  cutting-edge software and AI tools designed to make your life
                  safer. We challenge you to find another private security
                  company in Beverly Hills or Southern California that can offer
                  this level of innovation and expertise.
                </p>

                <ul>
                  <li>
                    <i>
                      <MdOutlineSportsMartialArts className={styles.icon} />
                    </i>
                    <h3>Industry-Defining Training</h3>
                    <p>
                      Rather than funding an overly large middle-management
                      structure, we reinvest a substantial portion of our budget
                      annually into the training of our protectors. Through our
                      global network, we hire trainers from some of the most
                      elite and secretive special operations units in the world
                      to ensure our team’s excellence.
                    </p>
                  </li>
                  <li>
                    <i>
                      <GrThreats className={styles.icon} />
                    </i>
                    <h3>Threat Assessment</h3>
                    <p>
                      We don’t just hire anyone to conduct threat assessments
                      and security. We hire only the best—globally. We actively
                      search for top talent in the U.S. and abroad to bring the
                      cream of the crop to you. Once we identify exceptional
                      individuals from national and international operational
                      units, we invest significantly to secure their expertise
                      for your safety.
                    </p>
                  </li>
                  <li>
                    <i>
                      <LiaResearchgate className={styles.icon} />
                    </i>
                    <h3>Research and Development</h3>
                    <p>
                      Our in-house Research and Development department is
                      dedicated to creating innovative tools and next-generation
                      analytics software to enhance your security.
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
