import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";

import Footer from "../../components/Layouts/Footer";
import { cookies } from "next/headers";

import LetsTalkArea from "@/components/Common/LetsTalkArea";

import ResidentialProtection from "@/components/HomeOne/ResidentialProtection";
import EPSecurity from "@/components/ServicesStyleOne/EPSecurity";
import EPProtection from "@/components/Common/EPProtection";
import ExecutiveProtection from "@/components/HomeOne/ExecutiveProtection";

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
        pageTitle="Executive Protection"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Executive Protection"
      />

      <EPSecurity />
      <EPProtection />
      <ExecutiveProtection />
      <LetsTalkArea />

      <Footer />
    </>
  );
}
