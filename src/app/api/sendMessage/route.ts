import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, phone, subject, name, address } = await req.json();

    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Subject:", subject);
    console.log("Name:", name);
    console.log("Address:", address);

    // Dynamically import the SDK
    const sibApiV3Sdk = (await import("sib-api-v3-sdk")).default;

    // Configure Brevo API client
    const client = sibApiV3Sdk.ApiClient.instance;
    const apiKey = client.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const apiInstance = new sibApiV3Sdk.TransactionalEmailsApi();

    const sendSmtpEmail = new sibApiV3Sdk.SendSmtpEmail({
      to: [
        {
          email: "contact@msbprotection.com",
          name: "Residential Assessment",
        },
      ],
      sender: {
        email: "contact@msbprotection.com",
        name: "Security Assessment Contact",
      },
      subject: "RESIDENTIAL ASSESSMENT",
      htmlContent: `
        <h3>New Residential Assessment Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p>Please reach out to the client at your earliest convenience.</p>
      `,
    });

    await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent successfully!");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ success: false });
  }
}
