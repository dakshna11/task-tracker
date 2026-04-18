import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
    const body = await req.json();
    await connectToDatabase();

    const hashed = await bcrypt.hash(body.password, 10);

    const user = await User.create({
        name: body.name,
        email: body.email,
        password: hashed,
    });

    return NextResponse.json({ user });
}