import axios from "axios";

interface CommentPayload {
  post: number;
  author_name: string;
  author_email: string;
  content: string;
}

async function getComments(postId: number) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API}/comments?post=${postId}`,
  );

  return res.data;
}

async function postComment(payload: CommentPayload, token: string) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API}/comments`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
          "Content-Type": "application/json", // Ensure proper content type
        },
      },
    );
    console.log(response);
    return { success: true };
  } catch (error) {
    console.error("Error posting comment:", error);
    throw error;
  }
}

export { getComments, postComment };
