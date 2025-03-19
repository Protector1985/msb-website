"use client";

import React, { useState } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { createUser } from "@/api/user"; // Ensure this is the correct path
import styles from "./styles/styles.module.css";

const SignUpForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(true); // State to show reCAPTCHA
  const [captchaToken, setCaptchaToken] = useState<string | null>(null); // Captcha token
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    jobType: "",
    agreeToTerms: false,
  });
  const [error, setError] = useState<string | null>(null);

  const isDevelopment =
    typeof window !== "undefined" && window.location.hostname === "localhost";

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

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token); // Store the token for verification
    if (token) {
      submitDataToWordPress(); // Proceed to submit data once captcha is solved
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const { firstName, lastName, email, password, jobType, agreeToTerms } =
      formData;

    if (!firstName || !lastName || !email || !password || !jobType) {
      setError("All fields are required.");
      return;
    }

    if (!agreeToTerms) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    // If on localhost, skip CAPTCHA and directly submit the form
    // if (isDevelopment) {
    //   submitDataToWordPress();
    // } else {
    // Show the CAPTCHA instead of the submit button
    setShowCaptcha(true);
    // }
  };

  const submitDataToWordPress = async () => {
    setLoading(true);
    const { email, password, jobType, firstName, lastName } = formData;

    try {
      // Use the `createUser` function as provided in your code
      const response = await createUser(
        email,
        email, // Assuming username and email are the same
        password,
        jobType,
        firstName,
        lastName,
      );

      if (response.success) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          jobType: "",
          agreeToTerms: false,
        });
      } else {
        setError(response.message || "CAPTCHA verification failed.");
      }
    } catch (err) {
      setError("An error occurred during signup. Please try again.");
    } finally {
      setLoading(false);
      setShowCaptcha(false); // Hide the CAPTCHA after submission
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
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
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
                      <option value="SECURITY_PROFESSIONAL">
                        Security Professional
                      </option>
                      <option value="PROPERTY_MANAGER">Property Manager</option>
                      <option value="ESTATE_MANAGER">Estate Manager</option>
                      <option value="EXECUTIVE_ASSISTANT">
                        Executive Assistant
                      </option>
                      <option value="PERSONAL_ASSISTANT">
                        Personal Assistant
                      </option>
                      <option value="CFO">CFO</option>
                      <option value="ACCOUNTING">Accountant</option>
                      <option value="CHIEF_OF_STAFF">Chief of Staff</option>
                      <option value="HOUSE_KEEPER">House Keeper</option>
                      <option value="OTHER">Other</option>
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
                  {error && <p className={styles.errorMessage}>{error}</p>}
                </div>

                {/* Submit Button or CAPTCHA */}
                <div className="col-12">
                  {showCaptcha ? (
                    <div className={styles.captcha}>
                      <ReCAPTCHA
                        className={styles.captcha}
                        sitekey={`${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`} // Replace with your actual Site Key
                        onChange={handleCaptchaChange}
                      />
                    </div>
                  ) : (
                    <button
                      disabled={loading}
                      className="default-btn btn-two"
                      type="submit"
                    >
                      {loading ? "Please wait..." : "Sign Up"}
                    </button>
                  )}
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
