"use client";
import axios from "axios";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./securityAssessmentContact/styles.module.css";
import Calendly from "../Calendly/Calendly";

const SecurityAssessmentContact: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [address, setAddress] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>("");
  const [showRecaptcha, setShowRecaptcha] = useState(false);

  function formatUSPhoneNumber(value: string) {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    const formatted = formatUSPhoneNumber(input);
    setPhone(formatted);
  }

  function handleRecaptcha(value: string | null) {
    console.log("TOKEN:", value);
    setRecaptchaToken(value);
    if (value) {
      handleVerification(value);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowRecaptcha(true);
  }

  async function handleVerification(captchaToken: string) {
    console.log("Verifying with token:", captchaToken);
    if (!captchaToken) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    try {
      const res = await axios.post("/api/sendMessage", {
        email,
        phone,
        subject: "Request for Assessment",
        address,
        name,
        captchaToken,
      });
      console.log("Response:", res);
      alert("Message sent successfully!");
      setShowRecaptcha(false);
    } catch (err) {
      console.error("Error during message submission:", err);
      alert("Error sending message. Please try again.");
    }
  }

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
