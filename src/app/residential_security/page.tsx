import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";

import Footer from "../../components/Layouts/Footer";
import { cookies } from "next/headers";
import FeaturesCard from "@/components/ServicesStyleTwo/FeaturesCard";
import ServicesCard from "@/components/ServicesStyleOne/ServicesCard";
import ElectronicProtection from "@/components/HomeOne/ElectronicProtection";
import Features from "@/components/HomeOne/Features";
import HighPerformanceSolutions from "@/components/HomeOne/HighPerformanceSolutions";
import RelatedServices from "@/components/ServiceDetails/RelatedServices";
import ServiceDetailsContent from "@/components/ServiceDetails/ServiceDetailsContent";
import FunFacts from "@/components/Common/FunFacts";
import FunFactsStyle2 from "@/components/Common/FunFactsStyle2";
import LatesNews from "@/components/Common/LatesNews";
import LetsGetToWork from "@/components/Common/LetsGetToWork";
import LetsTalkArea from "@/components/Common/LetsTalkArea";
import Partner from "@/components/Common/Partner";
import ProtectYourWebsite from "@/components/Common/ProtectYourWebsite";
import RecentProjects from "@/components/Common/RecentProjects";
import WhyChooseUsStyleOne from "@/components/Common/WhyChooseUsStyleOne";
import WhyChooseUsStyleTwo from "@/components/Common/WhyChooseUsStyleTwo";
import CyberSecurityOperation from "@/components/HomeOne/CyberSecurityOperation";
import ResidentialSecurity from "@/components/ServicesStyleOne/ResidentialSecurity";
import ProtectYourResidence from "@/components/Common/ProtectYourResidence";
import EffectiveProtection from "@/components/HomeOne/EffectiveProtection";
import ResidentialProtection from "@/components/HomeOne/ResidentialProtection";

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
        pageTitle="Residential Security"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Residential Security"
      />

      <ResidentialSecurity />
      <ProtectYourResidence />
      <ResidentialProtection />
      <LetsTalkArea />

      <Footer />
    </>
  );
}
