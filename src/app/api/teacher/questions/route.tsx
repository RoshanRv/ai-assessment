import { connectMongoDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import teacherLogin from "@/model/questions";

export async function POST(req: NextRequest) {
  const { questionId, questions }: any = await req.json();

  await connectMongoDB();
  const val = await teacherLogin.findOneAndUpdate(
    { questionId: questionId },
    { questions: questions }
  );
  console.log(val);

  if (val) {
    return NextResponse.json(true);
  } else {
    return NextResponse.json(false);
  }
}
