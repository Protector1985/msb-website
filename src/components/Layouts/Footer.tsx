"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-top-area pt-100 pb-70 jarallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-widget contact">
                <h3>Contact Us</h3>

                <ul className="contact-info">
                  <li>
                    <i className="bx bx-phone-call"></i>
                    <span>Hotline:</span>
                    <a href={`(805) 285-2807`}>{`(805) 285-2807`}</a>
                  </li>

                  <li>
                    <i className="bx bx-envelope"></i>
                    <span>Email:</span>
                    <a href="mailto:contact@msbprotection.com">
                      contact@msbprotection.com
                    </a>
                  </li>

                  <li>
                    <i className="bx bx-location-plus"></i>
                    <span>CA PPO:</span>
                    #122329
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Services Link</h3>

                <ul>
                  <li>
                    <Link href="/services/details">
                      <i className="bx bx-chevrons-right"></i>
                      Web Site Protection
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/details">
                      <i className="bx bx-chevrons-right"></i>
                      Hosting & Server Guard
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/details">
                      <i className="bx bx-chevrons-right"></i>
                      Web Administrator
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/details">
                      <i className="bx bx-chevrons-right"></i>
                      Conducting Training
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/details">
                      <i className="bx bx-chevrons-right"></i>
                      GRPS Smart Protection
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/details">
                      <i className="bx bx-chevrons-right"></i>
                      Security App
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}

            {/* <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Support & Help</h3>

                <ul>
                  <li>
                    <Link href="/contact">
                      <i className="bx bx-chevrons-right"></i>
                      Support Forum
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <i className="bx bx-chevrons-right"></i>
                      FAQ Questions
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="bx bx-chevrons-right"></i>
                      24/7 Support for Help
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="bx bx-chevrons-right"></i>
                      Counseling
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="bx bx-chevrons-right"></i>
                      Protection
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="bx bx-chevrons-right"></i>
                      Securihty
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}

            {/* <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Quick Links</h3>

                <ul>
                  <li>
                    <Link href="/contact">
                      <i className="bx bx-chevrons-right"></i>
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="bx bx-chevrons-right"></i>
                      Protection
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="bx bx-chevrons-right"></i>
                      Antivirus Packages
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="bx bx-chevrons-right"></i>
                      Security App
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="bx bx-chevrons-right"></i>
                      Website Security
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="bx bx-chevrons-right"></i>
                      Digital Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </footer>

      <footer className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="copy-right">
                <p>Copyright &copy;{currentYear} MSB Protection</p>
              </div>
            </div>

            <div className="col-lg-6">
              {/* <div className="condition-privacy">
                <ul>
                  <li>
                    <Link href="/terms-conditions">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
