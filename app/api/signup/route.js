import { connectDB } from "@/lib/db";
import User from "../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {

  try {

    await connectDB();

    const { email, password, age, duration } = await req.json();

    // check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return Response.json({
        message: "User already exists"
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = new User({
      email,
      password: hashedPassword,
      age,
      duration
    });

    await user.save();

    return Response.json({
      message: "User created successfully"
    });

  } catch (error) {

    console.error("Signup error:", error);

    return Response.json({
      message: "Signup failed"
    });

  }

}