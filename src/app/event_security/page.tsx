import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";

import Footer from "../../components/Layouts/Footer";
import { cookies } from "next/headers";

import LetsTalkArea from "@/components/Common/LetsTalkArea";

import EventSecurity from "@/components/ServicesStyleOne/EventSecurity";
import EVProtection from "@/components/Common/EVProtection";
import EventProtection from "@/components/HomeOne/EventProtection";

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
        pageTitle="Event Security"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Event Security"
      />

      <EventSecurity />
      <EVProtection />
      <EventProtection />
      <LetsTalkArea />

      <Footer />
    </>
  );
}
