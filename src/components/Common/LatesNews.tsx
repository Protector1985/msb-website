"use server";

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
                    <Image
                      src={post.jetpack_featured_media_url}
                      alt="Image"
                      width={570}
                      height={600}
                    />

                    <div className="blog-content">
                      <h3>
                        <Link href={`/blog/details/${post.id}/${post.slug}`}>
                          {post.title.rendered}
                        </Link>
                      </h3>

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
