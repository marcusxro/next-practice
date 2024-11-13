// pages/api/getAccounts.ts
import connectDB from '@/app/lib/mongodb';
import accounts from '@/app/models/accounts';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  const accounnts = await accounts.find({});
    return NextResponse.json(accounnts, { status: 200 });
}