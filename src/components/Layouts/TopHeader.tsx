"use client";

import React from "react";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import styles from "./navbarStyles/topheader.module.css";
const TopHeader: React.FC = () => {
  return (
    <>
      <div className="top-header-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-8">
              <ul className={`header-content-left`}>
                <li>
                  <div className={styles.content}>
                    <div className={styles.subItem}>
                      <i style={{marginBottom:"5px"}} className="bx bx-envelope"></i>
                      Email:{" "}
                      <a
                        className={styles.aTag}
                        href="mailto:contact@msbprotection.com"
                      >
                        contact@msbprotection.com
                      </a>
                    </div>
                    <div className={styles.subItem}>
                      <FaPhone
                        className={styles.phoneIcon}
                        size={11}
                        color="white"
                      />
                      <a className={styles.aTag} href="tel:+18052852807">
                        Phone: {`+1 (805) 285-2807`}
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-sm-4">
              <ul className="header-content-right">
                <li>
                  <a
                    href="https://youtube.com/@msb-protection?si=7gVNA_Z46H-Rm7Js"
                    target="_blank"
                  >
                    <i>
                      <FaYoutube />
                    </i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/michael-b-336437333"
                    target="_blank"
                  >
                    <i>
                      <FaLinkedin />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/msb_protection/?hl=en"
                    target="_blank"
                  >
                    <i>
                      <FaInstagramSquare />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
