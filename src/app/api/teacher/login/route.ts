import { connectMongoDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import teacherLogin from "@/model/login";

export async function POST(req: NextRequest) {
  const { name, pass }: any = await req.json();
  try {
    await connectMongoDB();
    const val = await teacherLogin.findOne({ userName: name, pass: pass });

    return NextResponse.json(val);
  } catch (e) {
    return NextResponse.json(e);
  }
}
