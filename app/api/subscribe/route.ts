import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }
  // TODO: wire to Buttondown API
  console.log('Subscribe request:', email);
  return NextResponse.json({ ok: true });
}
