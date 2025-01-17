import axios from "axios";

interface CreateUserResponse {
  success: boolean;
  message: string;
  userId?: number; // Included if the user is successfully created
}

const createUser = async (
  username: string,
  email: string,
  password: string,
  user_type: string,
  first_name: string,
  last_name: string,
): Promise<CreateUserResponse> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_WORDPRESS_CREATE_API}`,
      {
        username,
        email,
        password,
        role: "subscriber",
        user_type,
        first_name,
        last_name,
      },
    );
    console.log(response);
    return {
      success: true,
      message: response.data.message,
      userId: response.data.user_id,
    };
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message ||
      "An error occurred while creating the user.";
    console.error("Error creating user:", errorMessage);

    return {
      success: false,
      message: errorMessage,
    };
  }
};

export { createUser };
