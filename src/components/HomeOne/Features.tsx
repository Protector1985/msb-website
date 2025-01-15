"use server";
  
import React from "react"; 

const Features: React.FC = () => {
  return (
    <>
      <div className="container pt-100">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-features">
              <h3>
                <i className="bx bx-check-shield"></i> Security
              </h3>
              <p>
              We provide elite security services to protect your life, assets, and reputation with absolute precision.
              </p>
              <span className="bx bx-check-shield"></span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-features">
              <h3>
                <i className="bx bx-lock"></i> Privacy
              </h3>
              <p>
              Our discreet solutions ensure your personal and professional privacy remain uncompromised.
              </p>
              <span className="bx bx-lock"></span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
            <div className="single-features mb-0">
              <h3>
                <i className="bx bx-certification"></i> Peace of Mind
              </h3>
              <p>
              Experience unmatched protection that lets you focus on what truly matters.
              </p>
              <span className="bx bx-certification"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
