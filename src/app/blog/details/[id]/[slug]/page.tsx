import React from "react";
import Navbar from "../../../../../components/Layouts/Navbar";
import PageBanner from "../../../../../components/Common/PageBanner";
import BlogDetailsContent from "../../../../../components/Blog/BlogDetailsContent";
import Footer from "../../../../../components/Layouts/Footer";
import { getPostById } from "@/api/getPosts";
import { getAuthorById } from "@/api/getAuthor";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

export default async function Page({
  params,
}: {
  params: { id: string; slug: string };
}) {
  let isAuthenticated = false;
    const cookieStore = cookies();
    const authToken = cookieStore.get("auth_token")?.value;
    if (authToken) {
      isAuthenticated = true;
    }
    const userNickname = cookieStore.get("user_nicename")?.value;
  // Fetch the post by ID
  const post = await getPostById(params.id);

  // Validate the slug to ensure it matches
  if (!post || post.slug !== params.slug) {
    notFound(); // Render 404 if the slug doesn't match
  }

  const author = await getAuthorById(post.author);

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} nickName={userNickname} />

      <PageBanner
        pageTitle={post.title.rendered}
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
      />

      <BlogDetailsContent author={author} post={post} />

      <Footer />
    </>
  );
}
