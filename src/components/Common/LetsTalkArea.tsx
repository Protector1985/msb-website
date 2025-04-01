"use server";

import React from "react";
import Link from "next/link";

const LetsTalkArea: React.FC = () => {
  return (
    <>
      <div className="lats-talk-area ptb-100">
        <div className="container">
          <div className="lats-talk-content">
            <h2>Let’s Talk Security</h2>
            <p>
              Reach out to discuss personalized executive or residential
              protection in Beverly Hills, Malibu, or beyond.
            </p>

            <Link href="/contact" className="default-btn six">
              <i className="bx bx-file"></i>
              Let’s Talk
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsTalkArea;
