import axios from "axios";

async function verifyToken(token: string) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_WORDPRESS_JWT_API}/validate`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.status === 200;
  } catch (error) {
    console.error("Token verification failed:", error);
    return false;
  }
}

async function getToken(username: string, password: string) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_WORDPRESS_JWT_API}`,
      {
        username,
        password,
      },
    );

    // Extract the required data from the response
    const { token, user_email, user_nicename, user_display_name } =
      response.data;

    // Return the full response object
    return { token, user_email, user_nicename, user_display_name };
  } catch (error) {
    console.error("Error getting token:", error);
    throw error;
  }
}

export { getToken, verifyToken };
