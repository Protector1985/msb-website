"use server";

import React from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Image from "next/image";
import moment from "moment";
import { cookies } from "next/headers";
import DynamicComments from "./DynamicComments";

async function BlogDetailsContent({ post, author }: any) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("auth_token")?.value;
  const userEmail = cookieStore.get("user_email")?.value;
  const userName = cookieStore.get("user_nicename")?.value;

  const isAuthenticated = !!authToken;

  return (
    <>
      <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-content">
                  <h3>{post.title.rendered}</h3>
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        <Link href="#">
                          {moment(post.modified).format("MMM DD, YYYY")}
                        </Link>
                      </li>
                      <li>
                        <span>Posted By:</span>
                        <Link href="#">{author?.data?.name}</Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  />
                </div>
              </div>
              {/* Comments Section */}
              <DynamicComments
                postId={post.id}
                isAuthenticated={isAuthenticated} // This stays for DynamicComments
                authToken={authToken}
                userEmail={userEmail}
                userName={userName}
              />
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="blog-right-sidebar sidebar-pl-15">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetailsContent;
