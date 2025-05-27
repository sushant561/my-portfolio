import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Basic email validation
const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Initialize Resend with API key from environment variables
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not set');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Verify recipient email environment variable
    if (!process.env.RECIPIENT_EMAIL) {
      console.error('Missing RECIPIENT_EMAIL environment variable');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const { name, email, message } = await request.json();

    // Validate the input
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required and cannot be empty' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    console.log('Preparing to send email via Resend...');

    try {
      const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: [process.env.RECIPIENT_EMAIL],
        replyTo: email,
        subject: `New Contact Form Message from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Message: ${message}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 15px 0 5px;"><strong>Message:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
                ${message}
              </div>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json(
          {
            error: 'Failed to send email',
            details: error.message,
          },
          { status: 500 }
        );
      }

      console.log('Email sent successfully:', data);
      return NextResponse.json(
        {
          message: 'Email sent successfully',
          id: data?.id
        },
        { status: 200 }
      );
    } catch (sendError: any) {
      console.error('Resend error:', sendError);
      return NextResponse.json(
        {
          error: 'Failed to send email',
          details: sendError.message,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error in contact form processing:', error);
    return NextResponse.json(
      {
        error: 'Failed to process request',
        details: error.message,
      },
      { status: 500 }
    );
  }
} 