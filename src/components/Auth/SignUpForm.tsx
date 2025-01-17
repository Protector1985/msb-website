"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    jobType: "",
    agreeToTerms: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = e.target;

    if (target.type === "checkbox") {
      setFormData({
        ...formData,
        [target.name]: (target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [target.name]: target.value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const { name, username, email, password, jobType, agreeToTerms } = formData;

    if (!name || !username || !email || !password || !jobType) {
      setError("All fields are required.");
      return;
    }

    if (!agreeToTerms) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    try {
      // Example API call to create a user
      const response = await axios.post("/api/signup", {
        name,
        username,
        email,
        password,
        jobType,
      });

      if (response.status === 201) {
        setSuccess("Account created successfully! You can now log in.");
        setFormData({
          name: "",
          username: "",
          email: "",
          password: "",
          jobType: "",
          agreeToTerms: false,
        });
      }
    } catch (err) {
      setError("An error occurred during signup. Please try again.");
    }
  };

  return (
    <>
      <section className="user-area-all-style sign-up-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Create an account!</h2>
            <p>To take full advantage of this page, sign-up for free!</p>
          </div>

          <div className="contact-form-action">
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Name Field */}
                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Username Field */}
                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Job Type Field */}
                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <select
                      className="form-control"
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Job Type
                      </option>
                      <option value="ESTATE_MANAGER">
                        Estate/Property Manager
                      </option>
                      <option value="EXECUTIVE_ASSISTANT">
                        Executive Assistant
                      </option>
                      <option value="SECURITY_PROFESSIONAL">
                        Security Professional
                      </option>
                    </select>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="col-md-12 col-sm-12 col-xs-12 form-condition">
                  <div className="agree-label">
                    <input
                      type="checkbox"
                      id="chb2"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="chb2">
                      I agree with
                      <Link href="/terms-conditions">Terms & Conditions</Link> &
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-12">
                  {error && <p className="error-message">{error}</p>}
                  {success && <p className="success-message">{success}</p>}
                  <button className="default-btn btn-two" type="submit">
                    Sign Up
                  </button>
                </div>

                {/* Already Registered */}
                <div className="col-12">
                  <p className="account-desc">
                    Already have an account?{" "}
                    <Link href="/sign-in">Sign In</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpForm;
