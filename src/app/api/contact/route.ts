import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      // Forward the form submission to Web3Forms to deliver the email to Cafedeyar@gmail.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          subject: `New Contact Form Submission from ${name} (Deyar Cafe)`,
          from_name: 'Deyar Cafe Website',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        return NextResponse.json({ success: true, message: 'Message sent successfully via Web3Forms' });
      } else {
        console.error('Web3Forms Error:', data);
        return NextResponse.json(
          { error: data.message || 'Failed to send message via Web3Forms' },
          { status: 500 }
        );
      }
    } else {
      // Local simulation when no access key is configured
      console.log('--- Contact Form Submission (Simulated) ---');
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
      console.log('-------------------------------------------');
      console.log('Tip: Set the WEB3FORMS_ACCESS_KEY environment variable to enable real email forwarding.');

      // Return success to the user so the frontend works normally
      return NextResponse.json({
        success: true,
        simulated: true,
        message: 'Message captured successfully (simulated mode).',
      });
    }
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
