"use server";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './styles/latestNews.module.css'
const LatesNews: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <section className="blog-area pb-70">
        <div className="container">
          <div className="section-title">
          <h2>Our Latest Articles</h2>
<p>
  Explore our insightful articles designed for security professionals, estate managers, property managers, as well as executive and personal assistants.
</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-blog">
                <Image
                  src="/img/blog/blog1.jpg"
                  alt="Image"
                  width={570}
                  height={600}
                />

                <div className="blog-content">
                  <h3>
                    <Link href="/blog/details">Secure Managed IT</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolorer
                  </p>

                  <Link href="/blog/details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-blog">
                <Image
                  src="/img/blog/blog2.jpg"
                  alt="Image"
                  width={570}
                  height={600}
                />

                <div className="blog-content">
                  <h3>
                    <Link href="/blog/details">Cloud Security</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolorer
                  </p>

                  <Link href="/blog/details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-blog">
                <Image
                  src="/img/blog/blog3.jpg"
                  alt="Image"
                  width={570}
                  height={600}
                />

                <div className="blog-content">
                  <h3>
                    <Link href="/blog/details">Secure Managed Web</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolorer
                  </p>

                  <Link href="/blog/details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatesNews;
