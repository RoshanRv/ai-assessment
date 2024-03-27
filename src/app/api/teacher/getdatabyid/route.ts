import { connectMongoDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import teacherLogin from "@/model/questions";

export async function POST(req: NextRequest) {
  const { id }: any = await req.json();

  try {
    await connectMongoDB();
    const val = await teacherLogin.findById(id);

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
