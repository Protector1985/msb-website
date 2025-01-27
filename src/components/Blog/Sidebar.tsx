"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/sidebar.module.css";
import moment from "moment";

interface SidebarInterface {
  popularPosts: any;
}

const Sidebar: React.FC<SidebarInterface> = ({ popularPosts }) => {
  return (
    <>
      <aside className="widget-area" id="secondary">
        {/* <div className="widget widget_search mt-0">
          <h3 className="widget-title">Search Now</h3>
          <div className="post-wrap">
            <form className="search-form">
              <label>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Search..."
                />
              </label>
              <button type="submit">
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>
        </div> */}

        <div className="widget widget-peru-posts-thumb">
          <h3 className="widget-title">Popular Posts</h3>
          <div className="post-wrap">
            {popularPosts.map((post: any) => {
              return (
                <div
                  style={{ display: "flex", flexDirection: "row" }}
                  key={post.slug}
                  className={` ${styles.item} item `}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={post.jetpack_featured_media_url}
                      alt={"Image Showing " + post.title.rendered}
                      width={80}
                      height={80}
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div className="info">
                    <span className="time">
                      {moment().format("MMMM DD, YYYY")}
                    </span>
                    <h4 className="title usmall">
                      <Link href={`/blog/details/${post.id}/${post.slug}`}>
                        {post?.title?.rendered}
                      </Link>
                    </h4>
                  </div>

                  <div className="clear"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>
          <div className="post-wrap">
            <div className="tagcloud">
              <Link href="/blog">Blockchain (3)</Link>

              <Link href="/blog">Cyber security (3)</Link>

              <Link href="/blog">Cybercrime (2)</Link>

              <Link href="/blog">Global news (2)</Link>

              <Link href="/blog">Ransomware (1)</Link>

              <Link href="/blog">Whitepapers (2)</Link>
            </div>
          </div>
        </div> */}
      </aside>
    </>
  );
};

export default Sidebar;
