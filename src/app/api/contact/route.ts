import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Check honeypot field
    if (body.honeypot) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    // In a real application, you would send an email here using Resend, SendGrid, etc.
    // For now, we just simulate a delay and return success.
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate sending email to sales@airmen.in
    console.log('Received contact enquiry:', body);

    return NextResponse.json({ success: true, message: 'Message received successfully.' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
