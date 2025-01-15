import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import WebsiteSecurity from "../../components/ServicesStyleOne/WebsiteSecurity";
import ServicesCard from "../../components/ServicesStyleOne/ServicesCard";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Style One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style One"
      />

      <WebsiteSecurity />

      <ServicesCard />

      <Footer />
    </>
  );
}
