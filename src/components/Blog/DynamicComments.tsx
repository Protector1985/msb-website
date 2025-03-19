"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import LeaveAComment from "./LeaveAComment";
import PleaseLogIn from "./PleaseLogIn";
import { getComments } from "@/api/comments";
import axios from "axios";

interface Comment {
  id: number;
  parent: number;
  author: number;
  author_name: string;
  date: string;
  content: { rendered: string };
  author_avatar_urls: { [size: string]: string };
  link: string;
}

interface Props {
  postId: number;
  isAuthenticated: boolean;
  authToken?: string;
  userEmail?: string;
  userName?: string;
}

const parseCommentData = (
  data: string,
): { name: string; email: string; content: string } => {
  const nameMatch = data.match(/%%NAME%%([\s\S]*?)%%NAME%%/);
  const emailMatch = data.match(/%%EMAIL%%([\s\S]*?)%%EMAIL%%/);
  const contentMatch = data.match(/%%CONTENT%%([\s\S]*?)%%CONTENT%%/);

  return {
    name: nameMatch?.[1] || "",
    email: emailMatch?.[1] || "",
    content: contentMatch?.[1] || "",
  };
};

const DynamicComments: React.FC<Props> = ({
  postId,
  isAuthenticated,
  authToken,
  userEmail,
  userName,
}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getToken();
    fetchComments();
  }, []);

  async function getToken() {
    try {
      const res = await axios.get("/api/get-token");
      const { token, user_email, user_nicename, user_display_name } = res.data;

      // Send token and user data to the server to set cookies
      const response = await axios.post("/api/set-token", {
        token,
        user_email,
        user_nicename,
        user_display_name,
      });

      if (response.data.success) {
        console.log("Token set successfully");
      } else {
        console.error("Failed to set token");
      }
    } catch (err) {
      console.error("Error fetching token:", err);
    }
  }

  const fetchComments = async () => {
    setLoading(true);
    try {
      const data = await getComments(postId);
      const parsedComments = data.map((comment: Comment) => {
        const parsedContent = parseCommentData(comment.content.rendered);
        return {
          ...comment,
          author_name: parsedContent.name || comment.author_name,
          content: { rendered: parsedContent.content },
        };
      });
      setComments(parsedComments);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewComment = async (newComment: Comment) => {
    setComments((prev) => [newComment, ...prev]); // Optimistic update
    await fetchComments(); // Refresh comments to ensure consistency
  };

  const removePTags = (content: string): string => {
    return content.replace(/^<p>/, "").replace(/<\/p>\s*$/, ""); // Remove <p> and </p> tags
  };

  const renderChildComments = (parentId: number): JSX.Element | null => {
    const childComments = comments.filter(
      (comment) => comment.parent === parentId,
    );

    if (childComments.length === 0) {
      return null;
    }

    return (
      <ol className="children">
        {childComments.map((child) => (
          <li key={child.id} className="comment">
            <div className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <Image
                    src={
                      child.author_avatar_urls["96"] ||
                      "/img/default-avatar.jpg"
                    }
                    className="avatar"
                    alt={`${child.author_name}'s avatar`}
                    width={70}
                    height={70}
                  />
                  <b className="fn">{child.author_name}</b>
                  <span className="says">says:</span>
                </div>
                <div className="comment-metadata">
                  <span>
                    {moment(child.date).format("MMM DD, YYYY [at] hh:mm A")}
                  </span>
                </div>
              </footer>
              <div className="comment-content">
                <p>{removePTags(child.content.rendered)}</p>
              </div>
            </div>
            {renderChildComments(child.id)}
          </li>
        ))}
      </ol>
    );
  };

  if (loading) {
    return <p>Loading comments...</p>;
  }

  return (
    <div className="comments-area">
      <h3 className="comments-title">
        {comments.length === 0
          ? "No comments yet"
          : `${comments.length} Comment${comments.length > 1 ? "s" : ""}`}
      </h3>
      <ol className="comment-list">
        {comments
          .filter((comment) => comment.parent === 0)
          .map((comment) => (
            <li key={comment.id} className="comment">
              <div className="comment-body">
                <footer className="comment-meta">
                  <div className="comment-author vcard">
                    <Image
                      src={
                        comment.author_avatar_urls["96"] ||
                        "/img/default-avatar.jpg"
                      }
                      className="avatar"
                      alt={`${comment.author_name}'s avatar`}
                      width={70}
                      height={70}
                    />
                    <b className="fn">{comment.author_name}</b>
                    <span className="says">says:</span>
                  </div>
                  <div className="comment-metadata">
                    <span>
                      {moment(comment.date).format("MMM DD, YYYY [at] hh:mm A")}
                    </span>
                  </div>
                </footer>
                <div className="comment-content">
                  <p>{removePTags(comment.content.rendered)}</p>
                </div>
              </div>
              {renderChildComments(comment.id)}
            </li>
          ))}
      </ol>

      <LeaveAComment
        email={userEmail || ""}
        name={userName || ""}
        token={authToken || ""}
        postId={postId}
        onNewComment={handleNewComment}
      />
    </div>
  );
};

export default DynamicComments;
