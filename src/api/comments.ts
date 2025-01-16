import axios from "axios";

interface CommentPayload {
  post: number;
  author_name: string;
  author_email: string;
  content: string;
}

async function getComments(postId: string) {
  const res = await fetch(
    `${process.env.WORDPRESS_API}/comments?post=${postId}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

async function postComment(payload: CommentPayload) {
  return await axios.post(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API}/comments`,
    payload,
  );
}

export { getComments, postComment };
