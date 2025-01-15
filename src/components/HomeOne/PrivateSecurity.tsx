"use server";

import React from "react";
import styles from './styles/privateSecurity.module.css';
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
            <h2>Redefining Private Security</h2>
            <p>
            Our team of specialists excels in advanced protection strategies, comprehensive security program planning, and detailed threat assessments to safeguard ultra-high-net-worth individuals and families. 
              Complementing our security expertise is our dedicated Research and Development team, which drives innovation by engineering tools and solutions that enhance protection capabilities, 
              ensuring our clients remain secure in Beverly Hills and throughout Southern California.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-security">
                <i><FaHouseUser className={styles.icon} /></i>
                <h3>Estate Security</h3>
                <p>
                  We ensure your home remains your sanctuary, providing uncompromising protection for you and your family while maintaining privacy and comfort.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-security">
                <i><IoPeople className={styles.icon} /></i>
                <h3>Close Protection</h3>
                <p>
                  Whether running daily errands or attending critical engagements, our team ensures your safety and handles the logistics so you can focus on what matters.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-security">
                <i> <BsAirplaneEngines className={styles.icon} /></i>
                <h3>Travel Security</h3>
                <p>
                  From seamless domestic journeys to international trips, our bilingual agents provide stress-free security tailored to your needs, ensuring peace of mind wherever you go.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-security">
                <i> <GiGlassCelebration className={styles.icon} /> </i>
                <h3>Event Security</h3>
                <p>
                  Your events are a reflection of your reputation. Our discreet and professional agents safeguard your gatherings, ensuring safety and swiftly addressing any incidents.
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
