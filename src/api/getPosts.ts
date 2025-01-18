import axios from "axios";

async function getAllPosts() {
  try {
    return await axios.get(`${process.env.WORDPRESS_API}/posts`);
  } catch (err) {
    console.log(err);
  }
}


async function getPostById(id: string) {
  try {
    const response = await axios.get(`${process.env.WORDPRESS_API}/posts/${id}`);

    if (response.status === 200 && response.data) {
      const post = response.data;

      // Return post data with the slug included
      return {
        ...post,
        slug: post.slug,
      };
    } else {
      console.error(`Failed to fetch post with ID: ${id}, Status: ${response.status}`);
      return null;
    }
  } catch (err) {
    console.error(`Error fetching post with ID: ${id}`, err);
    return null;
  }
}

async function getTotalPosts() {
  try {
    const response = await axios.get(`${process.env.WORDPRESS_API}/posts?_embed&per_page=1`);
    const totalPosts = parseInt(response.headers["x-wp-total"], 10); // Get total posts from headers
    return totalPosts || 0; // Return 0 if not found
  } catch (error) {
    console.error("Error fetching total posts:", error);
    return 0; // Return 0 in case of an error
  }
}

async function getNPosts(limit: number, page: number = 1) {
  try {
    const response = await axios.get(
      `${process.env.WORDPRESS_API}/posts?_embed&per_page=${limit}&page=${page}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function fetchPost(postId: string) {
  const res = await fetch(`${process.env.WORDPRESS_API}/posts/${postId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

export { getAllPosts, getPostById, getNPosts, fetchPost,getTotalPosts };
