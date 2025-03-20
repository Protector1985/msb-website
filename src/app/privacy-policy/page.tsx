import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";

export default function PrivacyPolicy() {
  return (
    <>
    
      <PageBanner
        pageTitle="Privacy Policy"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privacy Policy"
      />

      <section className="terms-conditions ptb-100">
        <div className="container">
          <div className="single-privacy">
            <h3 className="mt-0">Welcome to MSB Protection’s Privacy Policy</h3>
            <p>
              At <strong>MSB Protection</strong>, an elite private security firm
              serving clients throughout the Greater Los Angeles area—including
              Beverly Hills, Calabasas, Malibu, Westlake Village, Ventura
              County, Santa Barbara, and beyond—we are committed to protecting
              your personal information as rigorously as we safeguard your
              physical security. This Privacy Policy outlines how we collect,
              use, disclose, and protect your data when you interact with our
              website and services.
            </p>
            <p>
              We strictly adhere to all applicable privacy laws, including the
              California Consumer Privacy Act (CCPA). Whether you are a
              high-net-worth individual seeking executive protection in Southern
              California or a client of our headquarters in Ventura County, your
              privacy is our priority. If you have any questions about our data
              practices, please contact us using the information provided below.
            </p>

            <h3>Information We Collect</h3>
            <ul>
              <li>
                <p>
                  <strong>1. Personal Identifiers</strong>: We may collect your
                  name, phone number, email address, and other identifying
                  information when you contact us or request a security
                  consultation. This data enables us to schedule appointments,
                  deliver our private security services, and maintain clear
                  communication.
                </p>
              </li>
              <li>
                <p>
                  <strong>2. Security & Operational Details</strong>: In order
                  to provide tailored security solutions for high-net-worth
                  residences and commercial clients in Los Angeles, Beverly
                  Hills, Calabasas, Malibu, Westlake Village, Ventura County,
                  Santa Barbara, and other regions, we may collect information
                  such as property addresses, event schedules, and staffing
                  requirements. This information is used solely to plan and
                  execute security operations effectively.
                </p>
              </li>
              <li>
                <p>
                  <strong>3. Website Usage Data</strong>: As you browse our
                  website, we automatically collect data on your browser type,
                  IP address, pages visited, and other online behavior via
                  cookies and analytics tools. This helps us improve our site,
                  understand our audience, and ensure our services remain
                  relevant to clients in Southern California.
                </p>
              </li>
              <li>
                <p>
                  <strong>4. Payment Information</strong>: For clients who
                  purchase our services, secure payment details may be processed
                  by us or by our trusted third-party processors. MSB Protection
                  does not store full credit card information; all payment data
                  is processed securely in accordance with industry standards.
                </p>
              </li>
              <li>
                <p>
                  <strong>5. Communications & Logs</strong>: We maintain records
                  of all email, phone, and text communications to ensure
                  seamless service delivery and to address client inquiries.
                  These records are securely stored and accessed only by
                  authorized personnel.
                </p>
              </li>
            </ul>

            <h3>How We Use Your Information</h3>
            <p>MSB Protection uses your information to:</p>
            <ul>
              <li>
                Deliver and continuously improve our elite private security
                services across Greater Los Angeles, including areas such as
                Beverly Hills, Calabasas, Malibu, Westlake Village, Ventura
                County, and Santa Barbara.
              </li>
              <li>
                Communicate with you regarding consultations, service updates,
                and exclusive security insights.
              </li>
              <li>
                Analyze website usage trends to optimize your online experience.
              </li>
              <li>
                Comply with legal obligations and fulfill contractual
                requirements.
              </li>
            </ul>
            <p>
              We do <strong>not</strong> sell your personal information to third
              parties. Data sharing is limited to trusted partners or as
              required by law, ensuring your privacy remains uncompromised.
            </p>

            <h3>Data Retention & Security Measures</h3>
            <p>
              Your personal data is retained only for as long as necessary to
              fulfill our business purposes or as mandated by law. MSB
              Protection employs robust administrative, technical, and physical
              security measures—including encryption, access controls, and
              regular audits—to safeguard your data against unauthorized access
              or breaches.
            </p>
            <p>
              While no system can offer absolute protection, we continually work
              to enhance our security protocols and will notify you promptly
              should a data breach occur.
            </p>

            <h3>Your Rights</h3>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request corrections or deletions of your data</li>
              <li>Restrict or object to our processing of your data</li>
              <li>Receive your personal information in a portable format</li>
              <li>Opt out of specific data-sharing practices</li>
            </ul>
            <p>
              To exercise these rights or to inquire further about our privacy
              practices, please contact us using the details provided below. We
              will respond in accordance with applicable laws.
            </p>

            <h3>Policy Updates</h3>
            <p>
              This Privacy Policy may be updated periodically to reflect changes
              in our practices or legal requirements. Any updates will be posted
              on our website with the revised “Last Updated” date. Continued use
              of our website or services constitutes your acceptance of the
              updated policy.
            </p>

            <h3>Contact Us</h3>
            <p>
              If you have any questions, concerns, or requests regarding your
              personal data or this Privacy Policy, please reach out:
            </p>
            <p>
              <strong>MSB Protection</strong>
              <br />
              Attn: Privacy Department
              <br />
              3401 Grande Vista Drive #19097,
              <br />
              Newbury Park, CA 91320
              <br />
              <strong>Phone:</strong> (805) 285-2807
              <br />
              <strong>Email:</strong> admin@msbprotection.com
            </p>
            <p>
              At MSB Protection, we value the trust our clients place in us for
              their personal and physical security. We are dedicated to
              protecting your privacy as diligently as we protect your residence
              and assets throughout Greater Los Angeles, Beverly Hills,
              Calabasas, Malibu, Westlake Village, Ventura County, Santa
              Barbara, and beyond.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
