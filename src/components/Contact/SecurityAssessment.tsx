"use client";

import axios from "axios";
import React, { useState } from "react";

const SecurityAssessmentContact: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [address, setAddress] = useState("");

  function formatUSPhoneNumber(value: string) {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "");

    // Format into (XXX) XXX-XXXX
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Optional: Additional JavaScript validation before sending
    // e.g., Ensure phone has 10 digits, etc.

    try {
      await axios.post("/api/sendMessage", {
        email,
        phone,
        subject: "Request for Assessment",
        address,
        name,
      });
    } catch (err) {
      console.log(err);
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
                    {/* Name Field */}
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

                    {/* Email Field */}
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

                    {/* Phone Field (Formatted) */}
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

                    {/* Address Field */}
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

                    {/* Submit Button */}
                    <div className="col-lg-12 col-sm-12">
                      <button type="submit" className="default-btn page-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
                {/* End form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAssessmentContact;
