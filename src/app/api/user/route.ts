import connectDB from "@/db/db";
import User from "@/model/user.model";
import { NextRequest, NextResponse } from "next/server"

connectDB();

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    if(!reqBody){
      return NextResponse.json({message: "no input found"})
    };
    const {name, email, message} = reqBody;
    const user = await User.create(reqBody);
    if(!user){
      return NextResponse.json({message: "Failed to create user"}, {status: 500})
    }
    return NextResponse.json({
      message: "user created successfully",
    data: user},{status: 201});
  } catch (error) {
    return NextResponse.json(error)
  }
};

// export const dynamic = "force-static";
