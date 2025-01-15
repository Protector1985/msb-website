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

export default async function Page() {
  const tabsData = await getTabsData()

  return (
    <>
      <Navbar />

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
