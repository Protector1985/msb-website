"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/latestNews.module.css";
import { trimToWords } from "./utils/trimToWords";

const LatesNews: React.FC<any> = ({ posts }) => {
  return (
    <div className={styles.wrapper}>
      <section className="blog-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Latest Articles</h2>
            <p>
              Explore our insightful articles designed for security
              professionals, estate managers, property managers, as well as
              executive and personal assistants.
            </p>
          </div>

          <div className="row justify-content-center">
            {posts.map((post: any, index: number) => {
              return (
                <div
                  key={post.title.rendered + index}
                  className="col-lg-4 col-sm-6"
                >
                  <div className="single-blog">
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        paddingTop: "100%",
                        overflow: "hidden",
                      }}
                    >
                      {/* Title Overlay */}
                      <div
                        style={{
                          position: "absolute",
                          top: 20,
                          left: 0,
                          width: "100%",
                          background: "rgba(0, 0, 0, 0.5)",
                          color: "#fff",
                          padding: "10px",
                          fontSize: "1.3rem",
                          zIndex: 2,
                          textAlign: "center",
                        }}
                      >
                        <Link
                          href={`/blog/details/${post.id}/${post.slug}`}
                          style={{
                            color: "white",
                            textDecoration: "none",
                          }}
                        >
                          <strong
                            dangerouslySetInnerHTML={{
                              __html: post.title.rendered,
                            }}
                          />
                        </Link>
                      </div>

                      {/* Image */}
                      <Image
                        src={post.jetpack_featured_media_url}
                        alt="Image"
                        fill
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                          borderRadius: "8px",
                        }}
                      />
                    </div>

                    <div className="blog-content">
                      <p>{`${trimToWords(post.excerpt.rendered, 20)}... `}</p>

                      <Link
                        href={`/blog/details/${post.id}/${post.slug}`}
                        className="read-more"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatesNews;
