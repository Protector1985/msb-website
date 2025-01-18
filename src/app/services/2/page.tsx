import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import FeaturesCard from "../../../components/ServicesStyleTwo/FeaturesCard";
import ServicesCard from "../../../components/ServicesStyleTwo/ServicesCard";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      {/* <Navbar /> */}

      <PageBanner
        pageTitle="Services Style Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style Two"
      />

      <FeaturesCard />

      <ServicesCard />

      <Footer />
    </>
  );
}
