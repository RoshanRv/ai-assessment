import { connectMongoDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import teacherLogin from "@/model/login";

export async function POST(req: NextRequest) {
  const { email, pass, role, name }: any = await req.json();
  try {
    await connectMongoDB();
    const existingUser = await teacherLogin.findOne({ email });

    if (existingUser) {
      throw new Error("User Already Exists");
    }

    const val = await teacherLogin.create({
      email: email,
      pass: pass,
      role: role,
      userName: name,
    });

    return NextResponse.json(val);
  } catch (e) {
    return NextResponse.json(
      {
        message: e,
      },
      {
        status: 400,
      }
    );
  }
}
