

import { connectMongo } from "@/lib/mongodb";
import User from "@/models/model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
  try {
    await connectMongo();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}