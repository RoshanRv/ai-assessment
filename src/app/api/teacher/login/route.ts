import { connectMongoDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import teacherLogin from "@/model/login";

export async function POST(req: NextRequest) {
  const { name, pass }: any = await req.json();

  await connectMongoDB();
  console.log(name);

  //   const value = JSON.parse(data);

  const val = await teacherLogin.find();
  console.log(val);

  if (val) {
    return NextResponse.json(true);
  } else {
    return NextResponse.json(false);
  }
}
