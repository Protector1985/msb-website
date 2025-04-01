"use server";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Features from "./Features";
import styles from "./styles/mainBanner.module.css";
import Button from "../Button/Button";

const MainBanner: React.FC = () => {
  //..
  // const [toggler, setToggler] = useState(false);
  return (
    <>
      {/* <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      /> */}

      <div className={`${"banner-area"} ${styles.bannerArea}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="banner-text">
                <span>
                  Trusted Leader in Executive Protection Services in Beverly
                  Hills
                </span>
                <h2
                  style={{
                    fontSize: "38px",
                    color: "white",
                    marginBottom: "20px",
                    marginTop: "20px",
                  }}
                >
                  Unmatched Executive Protection & Estate Security
                </h2>
                <p>
                  Trusted by ultra-high-net-worth individuals and estate
                  managers in Beverly Hills, Malibu, and Montecito, we provide
                  elite executive protection services,{" "}
                  residential estate security, and{" "}
                  celebrity bodyguard services. Whether you
                  need to hire a bodyguard in Beverly Hills or
                  require VIP event Security, our world-class
                  team delivers bespoke solutions with discretion and precision.
                  Backed by one of the industry’s highest ongoing training
                  budgets, our specialists are equipped for everything from{" "}
                  executive travel security to{" "}
                  
                    kidnapping prevention for high-net-worth families
                  
                  . Our in-house Research & Development department constantly
                  innovates with cutting-edge tools to proactively counter
                  threats and deliver unmatched peace of mind.
                </p>
                <div className="banner-btn">
                  <Button
                    type="ROUTING"
                    route="/security_assessment"
                    text="Security Assessment"
                    color="PINK"
                  />
                  {/* <Button
                    type="ROUTING"
                    route="/about"
                    text="About Us"
                    color="WHITE"
                  /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              {/* <div className="video-btn-animat one">
                    <div onClick={() => setToggler(!toggler)} className="video-btn">
                        <i className="bx bx-play"></i>
                    </div>
                </div> */}
            </div>
          </div>
        </div>
        <Features />
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
