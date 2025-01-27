import { getToken } from "@/api/auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { token, user_email, user_nicename, user_display_name } =
      await getToken(
        `${process.env.COMMENT_USER_NAME}`,
        `${process.env.COMMENT_USER_PW}`,
      );

    // Return the response
    return NextResponse.json({
      token,
      user_email,
      user_nicename,
      user_display_name,
    });
  } catch (error) {
    // Handle any errors
    console.error("Error fetching token:", error);
    return NextResponse.json(
      { error: "Failed to retrieve token" },
      { status: 500 },
    );
  }
}
