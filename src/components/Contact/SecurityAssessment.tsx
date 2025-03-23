"use client"
import axios from "axios";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from './securityAssessmentContact/styles.module.css'

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
    if(value) {
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
        captchaToken
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
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          onChange={handlePhoneChange}
                          value={phone}
                          type="text"
                          name="number"
                          placeholder="Phone number"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          onChange={(e) => setAddress(e.target.value)}
                          value={address}
                          type="text"
                          name="FullAddress"
                          placeholder="Full Address"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    {showRecaptcha ? (
                      <div className={styles.captchaContainer}>
                        <ReCAPTCHA
                          className={styles.captcha}
                          sitekey={`${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
                          onChange={(value) => {
                            handleRecaptcha(value);
                            
                          }}
                        />
                      </div>
                    ) : (
                      <div className={styles.captchaContainer}>
                        <button type="submit" className="default-btn page-btn">
                          Send Message
                        </button>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAssessmentContact;

