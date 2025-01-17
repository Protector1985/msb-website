"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getToken } from "@/api/auth";
import axios from "axios";

const SignInForm: React.FC = () => {
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

      if (response.data.success) {
        // window.location.href= "/"
      } else {
        setError("Something went wrong");
      }
      // Handle the token (e.g., save it to state, redirect, etc.)
      // You can also redirect the user after successful login
    } catch (err) {
      setError("Invalid username or password. Please try again.");
    }
  }

  return (
    <>
      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Log In to Your Account</h2>
            <p>
              Log in to access our exclusive Security and Estate Manager forums.
              You’ll also gain access to members-only content and the ability to
              leave comments on our blog posts. Don’t have an account? Sign up
              for free today!
            </p>
          </div>

          <div className="contact-form-action">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12">
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

                <div className="col-12">
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

                <div className="col-lg-6 col-sm-6 form-condition">
                  <div className="agree-label">
                    <input type="checkbox" id="chb1" />
                    <label htmlFor="chb1">Remember Me</label>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <Link href="/forgot-password" className="forget">
                    Forgot my password?
                  </Link>
                </div>

                <div className="col-12">
                  {error && <p className="error-message">{error}</p>}
                  <button className="default-btn btn-two" type="submit">
                    Sign In
                  </button>
                </div>

                <div className="col-12">
                  <p className="account-desc">
                    Not a member? <Link href="/sign-up">Sign Up</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
