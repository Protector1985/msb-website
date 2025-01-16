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
    return await axios.get(`${process.env.WORDPRESS_API}/posts/${id}`);
  } catch (err) {
    console.log(err);
  }
}

async function getNPosts(number: number) {
  try {
    return await axios.get(
      `${process.env.WORDPRESS_API}/posts?per_page=${number}`,
    );
  } catch (err) {
    console.log(err);
  }
}

async function fetchPost(postId: string) {
  const res = await fetch(
    `https://backend.msbprotection.com/wp-json/wp/v2/posts/${postId}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

export { getAllPosts, getPostById, getNPosts, fetchPost };
