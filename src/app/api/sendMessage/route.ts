import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, phone, subject, name } = await req.json();
    ///...
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(name);

    return NextResponse.json({ succes: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ succes: false });
  }
}
