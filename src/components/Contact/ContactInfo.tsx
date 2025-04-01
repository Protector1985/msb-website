"use server";

import React from "react";
import styles from "./styles/contactInfo.module.css";
const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="contact-info-area">
        <div className="container-fluid">
          <div className={styles.contactInfo}>
            <div className="col-lg-3 p-0">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>California</h3>
                <p>3401 Grande Vista Drive #19097, Newbury Park, CA 91320</p>
                <a href="mailto:contact@msbprotection.com">
                  Email: contact@msbprotection.com
                </a>
                <a href="tel:+18052852807">805-285-2807</a>
              </div>
            </div>

            <div className="col-lg-3 p-0">
              <div className="single-contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509156.5834578!2d-123.79616103953882!3d37.1931243309143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sbd!4v1591218371520!5m2!1sen!2sbd"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
