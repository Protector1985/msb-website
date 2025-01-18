import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req: Request) {
  const { token, user_email, user_nicename, user_display_name } =
    await req.json();

  if (!token || !user_nicename || !user_display_name) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const response = NextResponse.json({ message: "Session set successfully" });

  // Set auth_token cookie
  response.headers.append(
    "Set-Cookie",
    serialize("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 1 week
    }),
  );

  // Set user_nicename cookie
  response.headers.append(
    "Set-Cookie",
    serialize("user_nicename", user_nicename, {
      httpOnly: false, // Allow client-side access if needed
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    }),
  );

  // Set user_display_name cookie
  response.headers.append(
    "Set-Cookie",
    serialize("user_display_name", user_display_name, {
      httpOnly: false, // Allow client-side access if needed
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    }),
  );

  return response;
}
