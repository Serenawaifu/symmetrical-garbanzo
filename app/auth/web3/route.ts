// app/api/auth/web3/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { ethers } from 'ethers';

export async function POST(req: NextRequest) {
  const { address } = await req.json();

  if (!ethers.isAddress(address)) {
    return NextResponse.json({ error: 'Invalid address' }, { status: 400 });
  }

  // Here you'd check DB or create user if necessary
  return NextResponse.json({ message: 'Logged in with Web3', address });
}
