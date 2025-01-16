import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";
import Footer from "../../../components/Layouts/Footer";
import { getPostById } from "@/api/getPosts";
import { getAuthorById } from "@/api/getAuthor";
import { getComments } from "@/api/comments";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  //fetches the individual post from the backend
  const post = await getPostById(searchParams.id);
  const author = await getAuthorById(post?.data.author);
  const comments = await getComments(searchParams.id);

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
      />

      <BlogDetailsContent author={author} post={post?.data} />

      <Footer />
    </>
  );
}
