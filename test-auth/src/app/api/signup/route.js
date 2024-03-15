import User from "@/app/(models)/User";
import { connectDB } from "@/app/lib/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectDB();
    await User.create({ name, password: hashedPassword });

    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (ex) {
    return NextResponse.json(
      { message: "Couldnt Create User" },
      { status: 500 }
    );
  }
}
