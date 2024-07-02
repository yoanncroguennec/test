import { NextResponse } from "next/server";
import connectMongoDB from "@/app/libs/mongoDB";
import Event from "@/app/models/event";

export async function GET() {
  await connectMongoDB();
  const events = await Event.find();
  return NextResponse.json({ events }, { status: 200 });
}
