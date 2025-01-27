"use client";

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { postComment } from "@/api/comments";

interface LeaveACommentProps {
  postId: number;
  token: string;
  name: string;
  email: string;
  onNewComment: (newComment: any) => void;
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
  const [commentorName, setCommentorName] = useState("");
  const [commentorEmail, setCommentorEmail] = useState("");
  const [commentorWebsite, setCommentorWebsite] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token); // Store reCAPTCHA token
    if (token) {
      submitComment(); // Automatically proceed to comment submission after successful CAPTCHA
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate required fields
    if (!name || !email || !text) {
      setError("All fields are required.");
      return;
    }

    // Show CAPTCHA instead of submitting directly
    setShowCaptcha(true);
  };

  const submitComment = async () => {
    if (!captchaToken) {
      setError("Please complete the CAPTCHA.");
      return;
    }

    setLoading(true);
    setError(null);

    const content = `
      %%NAME%%${commentorName}%%NAME%%
      %%EMAIL%%${commentorEmail}%%EMAIL%%
      %%CONTENT%%${text}%%CONTENT%%
    `;

    const payload = {
      post: postId,
      author_name: name,
      author_email: email,
      content: content,
      recaptchaToken: captchaToken, // Pass reCAPTCHA token to the server
    };

    try {
      const newComment = await postComment(payload, token);
      onNewComment(newComment);
      setText(""); // Clear the form on success
    } catch (err) {
      console.error("Failed to submit comment:", err);
      setError("Failed to submit your comment. Please try again.");
    } finally {
      setLoading(false);
      setShowCaptcha(false); // Hide CAPTCHA after submission
    }
  };

  return (
    <div className="comment-respond">
      <h3 className="comment-reply-title">Leave a Reply</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form className="comment-form" onSubmit={handleSubmit}>
        <p className="comment-form-comment">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="Name"
            placeholder="Name"
            value={commentorName}
            onChange={(e) => setCommentorName(e.target.value)}
            required
          />
        </p>
        {/* Uncomment and modify the following fields as necessary */}
        {/* <p className="comment-form-comment">
          <label>{`Email (will not be published)`}</label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            value={commentorEmail}
            onChange={(e) => setCommentorEmail(e.target.value)}
            required
          />
        </p> */}
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

        {showCaptcha ? (
          <ReCAPTCHA
            sitekey={`${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`} // Replace with your actual Site Key
            onChange={handleCaptchaChange}
            onExpired={() => setCaptchaToken(null)}
          />
        ) : (
          <p className="form-submit">
            <input
              type="submit"
              name="submit"
              id="submit"
              className="submit"
              value={loading ? "Posting..." : "Post A Comment"}
              disabled={loading}
            />
          </p>
        )}
      </form>
    </div>
  );
};

export default LeaveAComment;
