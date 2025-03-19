import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    // Parse the incoming request body to extract the token
    const body = await req.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "No reCAPTCHA token provided." },
        { status: 400 },
      );
    }

    // Your reCAPTCHA secret key
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        { success: false, message: "Server configuration error." },
        { status: 500 },
      );
    }

    // Send the token to Google's reCAPTCHA API for verification
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;
    const response = await axios.post(
      verifyUrl,
      new URLSearchParams({
        secret: secretKey,
        response: token,
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    const result = response.data;

    // Check if the reCAPTCHA validation was successful
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "CAPTCHA validation failed",
          errorCodes: result["error-codes"],
        },
        { status: 400 },
      );
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: "CAPTCHA validated successfully",
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("Error validating CAPTCHA:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 },
    );
  }
}
