import { connectDB } from "@/lib/db";
import User from "../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req){

  await connectDB();

  const { email, password } = await req.json();

  const user = await User.findOne({ email });

  if(!user){
    return Response.json({
      message:"User not found"
    });
  }

  const isMatch = await bcrypt.compare(password,user.password);

  if(!isMatch){
    return Response.json({
      message:"Invalid password"
    });
  }

  return Response.json({
    message:"Login successful"
  });

}