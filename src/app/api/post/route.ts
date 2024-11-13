import connectDB from "@/app/lib/mongodb"
import accounts from "@/app/models/accounts"
import { NextResponse } from "next/server"

export async function POST(requst: any) {
    const { Fullname, Email, Password, isBanned, Uid,Pfp, isPrivate, Username } = await requst.json()
    await connectDB()

    await accounts.create({
        Fullname: Fullname,
        Email: Email,
        Password: Password,
        isBanned: isBanned, 
        Uid: Uid,
        Pfp: Pfp,
        isPrivate: isPrivate,
        Username: Username
    })

    return NextResponse.json({ message: "Account created" }, { status: 201 })




}