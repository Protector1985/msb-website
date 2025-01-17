import axios from "axios";

interface CreateUserParams {
  username: string;
  email: string;
  password: string;
  role?: string; // Defaults to 'subscriber'
  user_type: string; // User type (e.g., "Estate Manager")
}

interface CreateUserResponse {
  success: boolean;
  message: string;
  userId?: number; // Included if the user is successfully created
}

const createUser = async ({
  username,
  email,
  password,
  user_type,
}: CreateUserParams): Promise<CreateUserResponse> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_WORDPRESS_CREATE_API}`,
      {
        username,
        email,
        password,
        role: "subscriber",
        user_type,
      },
    );

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
