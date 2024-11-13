import connectDB from "@/app/lib/mongodb";
import accounts from "@/app/models/accounts";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        await connectDB();

        // Parse the request body
        const { Fullname, Email, Password, isBanned, Uid, Pfp, isPrivate, Username } = await request.json();

        // Create a new account document in MongoDB
        await accounts.create({
            Fullname,
            Email,
            Password,
            isBanned,
            Uid,
            Pfp,
            isPrivate,
            Username
        });

        return NextResponse.json({ message: "Account created" }, { status: 201 });
    } catch (error) {
        console.error("Error creating account:", error);
        return NextResponse.json({ error: "Failed to create account" }, { status: 500 });
    }
}
