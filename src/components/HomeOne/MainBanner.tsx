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
                  Setting the Standard for Private Security in Beverly Hills and
                  Beyond
                </span>
                <h1>Unmatched Public Figure Protection</h1>
                <p>
                  Elite physical security and comprehensive threat assessments
                  for ultra-high-net-worth individuals and public figures in
                  Beverly Hills. Supported by world-class training and one of
                  the industry’s highest ongoing training budgets, our team
                  consistently excels at protecting lives, assets, and privacy.
                  From estate protection to discreet executive services, we
                  deliver unparalleled security solutions tailored to the
                  affluent lifestyle. Our dedicated Research & Development
                  department continuously enhances our capabilities with
                  innovative tools and cutting-edge strategies, keeping us ahead
                  of evolving threats.
                </p>
                <div className="banner-btn">
                  {/* <Button
                    type="ROUTING"
                    route="/contact"
                    text="Free Assessment"
                    color="PINK"
                  /> */}
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
