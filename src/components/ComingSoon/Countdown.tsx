"use client";

import React, { useState, useEffect } from "react";

interface CountdownProps {
  endDate: string; // Format: "Month Day, Year HH:mm:ss"
  seoContent: {
    title: string;
    description: string;
    socialLinks: { platform: string; url: string }[];
  };
}

const Countdown: React.FC<CountdownProps> = ({ endDate, seoContent }) => {
  const calculateTimeLeft = () => {
    const endDateTime = new Date(endDate).getTime();
    const now = new Date().getTime();

    const timeRemaining = endDateTime - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    } else {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <div className="coming-soon-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="coming-soon-content">
              <h1>{seoContent.title}</h1>
              <p>{seoContent.description}</p>

              <div id="timer">
                <div id="days">
                  {countdown.days} <span>Days</span>
                </div>
                <div id="hours">
                  {countdown.hours} <span>Hours</span>
                </div>
                <div id="minutes">
                  {countdown.minutes} <span>Minutes</span>
                </div>
                <div id="seconds">
                  {countdown.seconds} <span>Seconds</span>
                </div>
              </div>

              {/* <form className="newsletter-form">
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder="Enter email address"
                  name="email"
                  required
                />
                <button type="submit" className="default-btn">
                  Notify Me
                </button>
              </form> */}

              <ul className="header-content-right">
                {seoContent.socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <i className={`bx bxl-${link.platform}`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
