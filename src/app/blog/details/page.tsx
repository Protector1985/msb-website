import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";
import Footer from "../../../components/Layouts/Footer";
import { getPostById } from "@/api/getPosts";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  //fetches the individual post from the backend
  const post = await getPostById(searchParams.id);

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
      />

      <BlogDetailsContent post={post?.data} />

      <Footer />
    </>
  );
}
