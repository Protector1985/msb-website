import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";

import Footer from "../../components/Layouts/Footer";
import { cookies } from "next/headers";
import SecurityAssessment from "@/components/ServicesStyleOne/SecurityAssessment";
import CyberSecurityOperation from "@/components/HomeOne/CyberSecurityOperation";
import EffectiveProtection from "@/components/HomeOne/EffectiveProtection";

import SecurityAssessmentContact from "@/components/Contact/SecurityAssessment";

export default function Page() {
  let isAuthenticated = false;
  const cookieStore = cookies();
  const authToken = cookieStore.get("auth_token")?.value;
  if (authToken) {
    isAuthenticated = true;
  }
  const userNickname = cookieStore.get("user_nicename")?.value;
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} nickName={userNickname} />

      <PageBanner
        pageTitle="Security Assessments"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Security Assessments"
      />

      <SecurityAssessment />
      <CyberSecurityOperation />
      <EffectiveProtection />

      {/* <ContactInfo /> */}

      <SecurityAssessmentContact />

      <Footer />
    </>
  );
}
