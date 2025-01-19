"use client";

import { postComment } from "@/api/comments";
import React, { useState } from "react";

interface LeaveACommentProps {
  postId: number;
  token: string;
  name: string;
  email: string;
  onNewComment: (newComment: any) => void; // Callback to handle new comments dynamically
}

const LeaveAComment: React.FC<LeaveACommentProps> = ({
  postId,
  token,
  name,
  email,
  onNewComment,
}) => {
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields are filled out
    if (!name || !email || !text) {
      setError("All fields are required.");
      return;
    }

    setError(null); // Clear any previous errors
    setLoading(true); // Set loading state

    const payload = {
      post: postId,
      author_name: name,
      author_email: email,
      content: text,
    };

    try {
      const newComment = await postComment(payload, token); // Assuming `postComment` is an async function
      onNewComment(newComment); // Pass the new comment to the parent component
      setText(""); // Clear the form after successful submission
    } catch (err) {
      console.error("Failed to submit comment:", err);
      setError("Failed to submit your comment. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="comment-respond">
      <h3 className="comment-reply-title">Leave a Reply</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form className="comment-form" onSubmit={handleSubmit}>
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
            value={loading ? "Posting..." : "Post A Comment"}
            disabled={loading} // Disable the button while loading
          />
        </p>
      </form>
    </div>
  );
};

export default LeaveAComment;
