"use server";

import React from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Image from "next/image";
import moment from "moment";
import LeaveAComment from "./LeaveAComment";
import { getToken } from "@/api/auth";

async function BlogDetailsContent({ post, author }: any) {
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

                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="bx bx-share-alt"></i>
                    </span>

                    <a href="#">Share</a>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <a href="https://facebook.com/" target="_blank">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://linkedin.com/" target="_blank">
                          <i className="bx bxl-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://pinterest.com/" target="_blank">
                          <i className="bx bxl-pinterest-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <Link href="#">
                        <i className="bx bx-left-arrow-alt"></i> Prev Post
                      </Link>
                    </div>

                    <div className="nav-next">
                      <Link href="#">
                        Next Post <i className="bx bx-right-arrow-alt"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="comments-area">
                  <h3 className="comments-title">3 Comments:</h3>

                  <ol className="comment-list">
                    <li className="comment">
                      <div className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <Image
                              src="/img/blog-details/comment-img-1.jpg"
                              className="avatar"
                              alt="image"
                              width={70}
                              height={70}
                            />
                            <b className="fn">Jimy Pearson</b>
                            <span className="says">says:</span>
                          </div>

                          <div className="comment-metadata">
                            <span>Jun 24, 2024 at 10:59 am</span>
                          </div>
                        </footer>

                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type.
                          </p>
                        </div>

                        <div className="reply">
                          <Link href="#" className="comment-reply-link">
                            Reply
                          </Link>
                        </div>
                      </div>

                      <ol className="children">
                        <li className="comment">
                          <div className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <Image
                                  src="/img/blog-details/comment-img-2.jpg"
                                  className="avatar"
                                  alt="image"
                                  width={70}
                                  height={70}
                                />
                                <b className="fn">Karl Mekar</b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                <span>Jun 24, 2024 at 10:59 am</span>
                              </div>
                            </footer>

                            <div className="comment-content">
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                              </p>
                            </div>

                            <div className="reply">
                              <Link href="#" className="comment-reply-link">
                                Reply
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>

                    <li className="comment">
                      <div className="comment-body border-none">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <Image
                              src="/img/blog-details/comment-img-3.jpg"
                              className="avatar"
                              alt="image"
                              width={70}
                              height={70}
                            />
                            <b className="fn">Tesa Jack</b>
                            <span className="says">says:</span>
                          </div>

                          <div className="comment-metadata">
                            <span>Jun 24, 2024 at 10:59 am</span>
                          </div>
                        </footer>

                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type.
                          </p>
                        </div>

                        <div className="reply">
                          <Link href="#" className="comment-reply-link">
                            Reply
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ol>

                  <LeaveAComment postId={post.id} />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              {/* Sidebar */}
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
