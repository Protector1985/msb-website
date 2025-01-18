import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import BlogGrid from "../../components/Blog/BlogGrid";
import { cookies } from "next/headers";

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
        pageTitle="Security Blog"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
      />

      <BlogGrid />

      <Footer />
    </>
  );
}
