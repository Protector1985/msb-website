"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles/pleaseLogIn.module.css";
import { getToken } from "@/api/auth";
import axios from "axios";

const PleaseLogIn: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null); // Clear any previous errors

    try {
      const { token, user_email, user_nicename, user_display_name } =
        await getToken(username, password);

      // Send token and user data to the server to set cookies
      const response = await axios.post("/api/set-token", {
        token,
        user_email,
        user_nicename,
        user_display_name,
      });

      console.log(response);

      if (response.data.success) {
        window.location.reload();
      } else {
        setError("Something went wrong");
      }
    } catch (err) {
      setError("Invalid username or password. Please try again.");
    }
  }
  return (
    <div className="comment-respond">
      <div className="container">
        <div className="section-title">
          <h2>Log In to Your Account</h2>
          <p>
            Please log in to leave a comment! Don’t worry, your email address
            will not be made public.
          </p>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="contact-form-action">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className={`col-12 ${styles.inputContainer}`}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="Username or Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className={`col-12 ${styles.inputContainer}`}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className={`col-lg-6 col-sm-6 ${styles.forgotPw}`}>
                <div className={styles.notMemberContainer}>
                  <p className="account-desc">
                    Not a member? <Link href="/sign-up">Sign Up</Link>
                  </p>
                </div>
                <Link href="/forgot-password" className="forget">
                  Forgot my password?
                </Link>
              </div>

              <div className={`col-12 ${styles.btnContainer}`}>
                <button className="default-btn btn-two" type="submit">
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PleaseLogIn;
