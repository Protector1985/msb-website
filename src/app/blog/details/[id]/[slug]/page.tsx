import React from "react";
import Navbar from "../../../../../components/Layouts/Navbar";
import PageBanner from "../../../../../components/Common/PageBanner";
import BlogDetailsContent from "../../../../../components/Blog/BlogDetailsContent";
import Footer from "../../../../../components/Layouts/Footer";
import { getPostById } from "@/api/getPosts";
import { getAuthorById } from "@/api/getAuthor";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { fetchPopularPosts } from "@/api/comments";
import he from "he";

export async function generateMetadata({ params }: any) {
  const post = await getPostById(params.id);

  if (!post) return {};

  // Remove HTML tags and decode HTML entities properly
  let description = he.decode(
    post.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""),
  );

  // Remove zero-width spaces explicitly
  description = description.replace(/[\u200B-\u200D\uFEFF]/g, "").trim();

  return {
    title: `${post.title.rendered} | MSB Protection`,
    description,
    alternates: {
      canonical: `https://www.msbprotection.com/blog/${post.id}/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `https://www.msbprotection.com/blog/${post.id}/${post.slug}`,
      title: post.title.rendered,
      description,
      images: [
        post.featured_media_url ||
          "https://msbprotection.com/default-blog-image.jpg",
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.rendered,
      description,
      images: [
        post.featured_media_url ||
          "https://msbprotection.com/default-blog-image.jpg",
      ],
    },
  };
}
export default async function Page({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("auth_token")?.value;

  const isAuthenticated = Boolean(authToken);
  const userNickname = cookieStore.get("user_nicename")?.value;

  const post = await getPostById(params.id);
  const popularPosts = await fetchPopularPosts();

  if (!post || post.slug !== params.slug) {
    notFound();
  }

  const author = await getAuthorById(post.author);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.rendered,
    author: {
      "@type": "Person",
      name: author?.data.name,
      url: "https://www.linkedin.com/in/michael-b-336437333/"
    },
    datePublished: new Date(post.date).toISOString(),
    image:
      post.featured_media_url ||
      "https://msbprotection.com/default-blog-image.jpg",
    url: `https://www.msbprotection.com/blog/${post.id}/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: "MSB Protection",
      logo: {
        "@type": "ImageObject",
        url: "https://msbprotection.com/logo.png",
      },
    },
    description: post.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar isAuthenticated={isAuthenticated} nickName={userNickname} />

      <PageBanner
        pageTitle={post.title.rendered}
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
      />

      <BlogDetailsContent
        popularPosts={popularPosts}
        author={author}
        post={post}
      />

      <Footer />
    </>
  );
}
