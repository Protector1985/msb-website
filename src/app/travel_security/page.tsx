import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";

import Footer from "../../components/Layouts/Footer";
import { cookies } from "next/headers";

import LetsTalkArea from "@/components/Common/LetsTalkArea";


import ExecutiveProtection from "@/components/HomeOne/ExecutiveProtection";
import TSecurity from "@/components/ServicesStyleOne/TSecurity";
import TProtection from "@/components/Common/TProtection";
import TravelProtection from "@/components/HomeOne/TravelProtection";

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
        pageTitle="Travel Security"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Travel Security"
      />

      <TSecurity />
      <TProtection />
      <TravelProtection />
      <LetsTalkArea />

      <Footer />
    </>
  );
}
