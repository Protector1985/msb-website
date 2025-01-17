"use client";

import { getToken } from "@/api/auth";
import { postComment } from "@/api/comments";
import React, { useState } from "react";

const LeaveAComment: React.FC<any> = ({ postId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const res = await getToken("user", "pnl:JKqBlB5a")
    // console.log(res)
    // console.log("SUBMITTING");
    // // Validate all fields are filled out
    // if (!name || !email || !text) {
    //   setError("All fields are required.");
    //   return;
    // }

    // setError(null); // Clear any previous errors

    // const payload = {
    //   post: postId,
    //   author_name: name,
    //   author_email: email,
    //   content: text,
    // };

    // try {
    //   const res = await postComment(payload); // Assuming `postComment` is an async function
    //   console.log("Comment submitted:", res);

    //   // Optionally clear the form after successful submission
    //   //   setName('');
    //   //   setEmail('');
    //   //   setText('');
    // } catch (err) {
    //   console.error("Failed to submit comment:", err);
    //   setError("Failed to submit your comment. Please try again.");
    // }
  };

  return (
    <div className="comment-respond">
      <h3 className="comment-reply-title">Leave a Reply</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form className="comment-form" onSubmit={handleSubmit}>
        <p className="comment-notes">
          <span id="email-notes">
            Your email address will not be published.
          </span>
          Required fields are marked <span className="required">*</span>
        </p>

        <p className="comment-form-author">
          <label>
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </p>

        <p className="comment-form-email">
          <label>
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>

        <p className="comment-form-comment">
          <label>Comment</label>
          <textarea
            name="comment"
            id="comment"
            cols={45}
            rows={5}
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
        </p>

        <p className="form-submit">
          <input
            type="submit"
            name="submit"
            id="submit"
            className="submit"
            value="Post A Comment"
          />
        </p>
      </form>
    </div>
  );
};

export default LeaveAComment;
