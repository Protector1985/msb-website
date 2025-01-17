import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import EffectiveProtection from "../../components/HomeOne/EffectiveProtection";
import ElectronicProtection from "../../components/HomeOne/ElectronicProtection";
import SecurityApproach from "../../components/HomeOne/OurTraining";
import Testimonials from "../../components/Common/Testimonials";
import Partner from "../../components/Common/Partner";
import Footer from "../../components/Layouts/Footer";
import getTabsData from "@/data/residentialSecurityTabs";
import { cookies } from "next/headers";

export default async function Page() {
  const tabsData = await getTabsData();
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
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
      />

      <EffectiveProtection />

      <ElectronicProtection tabsData={tabsData} />

      <div className="pt-100">
        <SecurityApproach />
      </div>

      <Testimonials />

      {/* <Partner /> */}

      <Footer />
    </>
  );
}
