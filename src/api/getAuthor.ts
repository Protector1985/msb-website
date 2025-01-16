import axios from "axios";

async function getAuthorById(id: string) {
  try {
    return await axios.get(`${process.env.WORDPRESS_API}/users/${id}`);
  } catch (err) {
    console.log(err);
  }
}

export { getAuthorById };
