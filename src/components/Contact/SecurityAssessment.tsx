"use client";
import axios from "axios";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./securityAssessmentContact/styles.module.css";
import Calendly from "../Calendly/Calendly";

const SecurityAssessmentContact: React.FC = () => {
  return (
    <div className="faq-contact-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-wrap">
              <Calendly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAssessmentContact;
