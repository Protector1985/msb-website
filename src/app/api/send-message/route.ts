import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const { name, email, phone, subject, message } = await req.json();

  try {
    const res = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "MSB Website", email: "contact@msbprotection.com" },
        to: [{ email: "execudevinc@gmail.com", name: "MSB Protection" }],
        subject: `====NEW CONTACT====: ${subject}`,
        htmlContent: `
          <h2>New message from your website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
        replyTo: { email, name },
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY as string,
          "Content-Type": "application/json",
        },
      },
    );

    return NextResponse.json({ success: true, data: res.data });
  } catch (error: any) {
    console.error("Brevo email error:", error.response?.data || error.message);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}
