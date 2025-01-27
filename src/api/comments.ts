import axios from "axios";

interface CommentPayload {
  post: number;
  author_name: string;
  author_email: string;
  content: string;
}

async function fetchPopularPosts() {
  try {
    const response = await axios.get(`${process.env.WORDPRESS_API}/posts`, {
      params: {
        per_page: 3, // Limit to 3 posts
        orderby: "comment_count", // Order by comment count
        order: "desc", // Descending order
        _embed: true, // Embed additional data (e.g., featured media)
      },
    });

    // Transform and return only the necessary data
    return response.data;
  } catch (error) {
    console.error("Failed to fetch popular posts:", error);
    throw new Error("Failed to fetch popular posts");
  }
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

    return { success: true };
  } catch (error) {
    console.error("Error posting comment:", error);
    throw error;
  }
}

export { getComments, postComment, fetchPopularPosts };
