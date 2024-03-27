import { connectMongoDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import teacherLogin from "@/model/questions";

export async function POST(req: NextRequest) {
  try {
    const { data }: any = await req.json();
    await connectMongoDB();
    const val = await teacherLogin.create({
      topic: data.topic,
      staffName: data.staffName,
      difficulty: data.difficulty,
      questions: data.questions,
    });

    if (val) {
      return NextResponse.json(true);
    }
  } catch (e) {
    return NextResponse.json(
      {
        message: "error",
      },
      {
        status: 400,
      }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectMongoDB();
    const val = await teacherLogin.find();

    if (val) {
      return NextResponse.json({ val }, { status: 200 });
    }
  } catch (e) {
    return NextResponse.json(
      {
        message: "error",
      },
      {
        status: 400,
      }
    );
  }
}
