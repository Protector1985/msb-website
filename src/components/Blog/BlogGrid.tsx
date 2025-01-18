import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getNPosts, getTotalPosts } from "@/api/getPosts";
import styles from "./styles/blogGrid.module.css";
import Pagination from '../Pagination/Pagination'

export default async function BlogGrid({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = parseInt(searchParams?.page || "1", 10); // Default to page 1
  const postsPerPage = 6;

  const totalPosts = await getTotalPosts(); // Fetch total posts
  const totalPages = Math.ceil(totalPosts / postsPerPage); // Calculate total pages
  const posts = await getNPosts(postsPerPage, currentPage);

  // Handle page change (use React state to manage)
  const handlePageChange = (page: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", page.toString());
    window.location.href = url.toString(); // Navigate to the selected page
  };

  return (
    <section className="blog-area ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>Our Latest Articles</h2>
          <p>
            Explore our insightful articles designed for security
            professionals, estate managers, property managers, as well as
            executive and personal assistants.
          </p>
        </div>

        <div className="row">
          {posts?.map((post: any) => (
            <div className="col-lg-4 col-sm-6" key={post.id}>
              <div className={styles.singleBlog}>
                <div className={styles.imageContainer}>
                  <Image
                    src={post.jetpack_featured_media_url || "/default.jpg"}
                    alt={post.title.rendered}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className={styles.image}
                  />
                </div>
                <div className={styles.blogContent}>
                  <h3>
                    <Link href={`/blog/details/${post.id}/${post.slug}`}>
                      {post.title.rendered}
                    </Link>
                  </h3>
                  <p>
                    {post.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 120) + "..."}
                  </p>
                  <Link
                    href={`/blog/details/${post.id}/${post.slug}`}
                    className={`read-more ${styles.readMore}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
