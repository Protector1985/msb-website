"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import styles from "./styles/blogGrid.module.css";

const BlogGrid: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]); // Store posts
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(1); // Total pages
  const postsPerPage = 6; // Number of posts per page

  // Fetch posts dynamically
  const fetchPosts = async (page: number) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts?_embed&per_page=${postsPerPage}&page=${page}`,
      );
      setPosts(response.data); // Set posts
      const totalPosts = parseInt(response.headers["x-wp-total"], 10); // Total posts from headers
      setTotalPages(Math.ceil(totalPosts / postsPerPage)); // Calculate total pages
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  // Fetch posts whenever the page changes
  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update current page
  };

  useEffect(() => {
    const fourthPageHeight = document.documentElement.scrollHeight / 4;
    window.scrollTo({ top: fourthPageHeight, behavior: "smooth" });
  }, [currentPage]);

  return (
    <section className="blog-area ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>Insights on Executive Protection & Private Security</h2>
          <p>
            Explore our latest blog posts focused on{" "}
            <strong>executive protection services</strong>,{" "}
            <strong>estate security strategies</strong>,{" "}
            <strong>celebrity bodyguard services</strong>, and{" "}
            <strong>risk mitigation for high-net-worth families</strong> in
            Beverly Hills, Malibu, and beyond. Whether you are an estate
            manager, personal assistant, or high-profile client, these articles
            deliver relevant knowledge tailored to your world.
          </p>
        </div>

        <div className="row">
          {posts.map((post: any) => (
            <div className="col-lg-4 col-sm-6" key={post.id}>
              <div className={styles.singleBlog}>
                <div className={styles.imageContainer}>
                  <Image
                    src={post.jetpack_featured_media_url || "/default.jpg"} // Fallback to default image
                    alt={post.title.rendered}
                    layout="fill" // Fill container
                    objectFit="cover" // Proper cropping
                    objectPosition="center" // Center the image
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
                    {post.excerpt.rendered
                      .replace(/<[^>]+>/g, "")
                      .slice(0, 120) + "..."}
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
};

export default BlogGrid;
