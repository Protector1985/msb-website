import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ServiceDetailsContent from "../../../components/ServiceDetails/ServiceDetailsContent";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      {/* <Navbar /> */}

      <PageBanner
        pageTitle="Service Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Details"
      />

      <ServiceDetailsContent />

      <Footer />
    </>
  );
}
