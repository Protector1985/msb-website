import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ContactInfo from "../../components/Contact/ContactInfo";

import Footer from "../../components/Layouts/Footer";
import { cookies } from "next/headers";
import ContactForm from "@/components/Contact/ContactForm";
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
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
      />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
}
