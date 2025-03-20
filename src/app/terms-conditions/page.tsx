import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";

export default function TermsAndConditions() {
  return (
    <>
      {/* <Navbar /> */}

      <PageBanner
        pageTitle="Terms & Conditions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Terms & Conditions"
      />

      <section className="terms-conditions-area ptb-100">
        <div className="container">
          <div className="single-privacy">
            <h3 className="mt-0">
              Welcome to MSB Protection’s Terms & Conditions
            </h3>
            <p>
              These Terms and Conditions (“Terms”) govern your use of the MSB
              Protection website and the private security services we provide.
              MSB Protection is an elite private security firm serving clients
              throughout the Greater Los Angeles area—including Beverly Hills,
              Calabasas, Malibu, Westlake Village, Ventura County (our
              headquarters in Newbury Park), Santa Barbara, and beyond. By
              accessing our website or engaging our services, you agree to be
              bound by these Terms. If you do not agree, please refrain from
              using our website or services.
            </p>

            <h3>1. Acceptance of Terms</h3>
            <p>
              By using our website, scheduling a consultation, or otherwise
              engaging with MSB Protection, you confirm that you have read,
              understood, and agree to these Terms, as well as any additional
              policies referenced herein. MSB Protection reserves the right to
              update or modify these Terms at any time; updated Terms will be
              posted on our website with the effective date. Continued use of
              our website or services constitutes your acceptance of the updated
              Terms.
            </p>

            <h3>2. Our Services</h3>
            <p>
              MSB Protection provides comprehensive, bespoke private security
              services including on-site security assessments, executive
              protection, risk management, safe room planning, and tailored
              security consultations. Our services are designed specifically for
              high-net-worth residences and commercial clients in Southern
              California. While we employ industry-leading technology and
              in-depth assessments, our recommendations are based on the unique
              characteristics of your property and operational needs.
            </p>

            <h3>3. Use of Our Website</h3>
            <p>
              You agree to use the MSB Protection website solely for lawful
              purposes. Unauthorized use or distribution of any content from
              this site, including but not limited to text, images, or
              proprietary materials, is strictly prohibited. You agree not to
              interfere with the security or integrity of our website or to
              engage in any activity that might compromise the privacy or data
              of other users.
            </p>

            <h3>4. Client Obligations</h3>
            <p>
              To ensure that we provide you with the most effective security
              solutions, you agree to provide accurate and complete information
              when contacting us or when participating in any assessments. You
              are responsible for maintaining the confidentiality of your
              account details if you create an account, and for promptly
              notifying us of any unauthorized use or security breaches.
            </p>

            <h3>5. Payment and Refunds</h3>
            <p>
              All fees for services will be clearly detailed in individual
              contracts or service agreements. Payments are due in accordance
              with the terms specified in your agreement. MSB Protection
              reserves the right to modify its fee structure at any time, but
              any modifications will not affect services already contracted.
              Refunds, if applicable, will be handled on a case-by-case basis in
              line with our refund policy.
            </p>

            <h3>6. Confidentiality and Data Protection</h3>
            <p>
              At MSB Protection, we understand the sensitivity of the
              information you share with us. We adhere to strict confidentiality
              protocols and employ robust administrative, technical, and
              physical safeguards—including encryption and secure access
              controls—to protect your personal data. We will not share your
              information with third parties except as necessary to provide our
              services or as required by law.
            </p>

            <h3>7. Limitation of Liability</h3>
            <p>
              While we strive to deliver the highest standard of private
              security services, MSB Protection cannot guarantee complete
              protection against all risks. In no event shall MSB Protection,
              its officers, employees, or agents be liable for any direct,
              indirect, incidental, or consequential damages arising out of your
              use of our website or services. Our total liability shall not
              exceed the fees paid for the services in question.
            </p>

            <h3>8. Indemnification</h3>
            <p>
              You agree to indemnify and hold harmless MSB Protection, its
              affiliates, officers, employees, and agents from any claims,
              damages, losses, or expenses (including reasonable attorney fees)
              arising out of or related to your use of our website or services,
              or your violation of these Terms.
            </p>

            <h3>9. Governing Law and Dispute Resolution</h3>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of California. Any disputes arising from
              these Terms or your use of our services shall be resolved through
              binding arbitration in Ventura County, California, in accordance
              with the rules of the American Arbitration Association.
            </p>

            <h3>10. Changes to These Terms</h3>
            <p>
              MSB Protection reserves the right to modify these Terms at any
              time. Any changes will be effective immediately upon posting on
              our website, with the updated “Last Updated” date displayed. Your
              continued use of our website or services constitutes acceptance of
              the updated Terms.
            </p>

            <h3>11. Contact Information</h3>
            <p>
              If you have any questions or concerns about these Terms, or if you
              wish to contact us regarding a dispute, please reach out to:
            </p>
            <p>
              <strong>MSB Protection</strong>
              <br />
              Attn: Legal & Compliance Department
              <br />
              3401 Grande Vista Drive #19097,
              <br />
              Newbury Park, CA 91320
              <br />
              <strong>Phone:</strong> (805) 285-2807
              <br />
              <strong>Email:</strong> contact@msbprotection.com
            </p>
            <p>
              By using our website or engaging our services, you acknowledge
              that you have read, understood, and agree to be bound by these
              Terms and Conditions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
