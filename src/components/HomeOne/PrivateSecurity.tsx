"use server";

import React from "react";
import styles from "./styles/privateSecurity.module.css";
import { FaHouseUser } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { BsAirplaneEngines } from "react-icons/bs";
import { GiGlassCelebration } from "react-icons/gi";

const PrivateSecurity: React.FC = () => {
  return (
    <>
      <section className={`${"security-area pb-70"} ${styles.wrapper}`}>
        <div className="container">
          <div className="section-title">
            <h2>Redefining Private Security in Beverly Hills & Beyond</h2>
            <p>
              As a premier provider of{" "}
              <strong>executive protection services</strong> and{" "}
              <strong>
                estate security in Beverly Hills, Malibu, Hidden Hills, and
                Montecito
              </strong>
              , our team safeguards ultra-high-net-worth individuals and
              families through advanced protection strategies, tailored{" "}
              <strong>residential security protocols</strong>, and proactive
              threat assessments. Our in-house Research and Development division
              continuously engineers innovative solutions to stay ahead of
              modern threats—from <strong>celebrity stalker prevention</strong>{" "}
              to <strong>kidnapping risk mitigation</strong>. With a reputation
              built on discretion, reliability, and precision, we deliver elite{" "}
              <strong>private security services in Los Angeles</strong> and
              throughout Southern California.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-security">
                <i>
                  <FaHouseUser className={styles.icon} />
                </i>
                <h3>Estate Security</h3>
                <p>
                  Offering premium{" "}
                  <strong>residential estate security services</strong>, we
                  protect high-value properties and the families who reside in
                  them. Discreet, armed, or unarmed protection tailored to the
                  UHNWI lifestyle.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-security">
                <i>
                  <IoPeople className={styles.icon} />
                </i>
                <h3>Close Protection</h3>
                <p>
                  From public appearances to personal errands, our{" "}
                  <strong>celebrity close protection services</strong> and{" "}
                  <strong>bodyguards for high-profile individuals</strong>{" "}
                  ensure your safety while blending seamlessly into your
                  day-to-day life.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-security">
                <i>
                  <BsAirplaneEngines className={styles.icon} />
                </i>
                <h3>Travel Security</h3>
                <p>
                  Whether it’s international business or luxury travel, our{" "}
                  <strong>executive travel security services</strong> provide
                  bilingual agents and full-spectrum planning for peace of
                  mind—before, during, and after the journey.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-security">
                <i>
                  <GiGlassCelebration className={styles.icon} />
                </i>
                <h3>Event Security</h3>
                <p>
                  We specialize in <strong>VIP event security services</strong>{" "}
                  for private parties, galas, and premieres—delivering discreet
                  yet vigilant protection that reflects the caliber of your
                  reputation and guests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateSecurity;
