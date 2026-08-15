import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email =
      typeof body.email === 'string'
        ? body.email.trim().toLowerCase()
        : '';
    const message =
      typeof body.message === 'string'
        ? body.message.trim()
        : '';

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: 'Name, email, and message are required.',
        },
        { status: 400 }
      );
    }

    // Validate email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        {
          error: 'Invalid email address.',
        },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        {
          error: 'Message must be at least 10 characters.',
        },
        { status: 400 }
      );
    }

    // Save contact message to PostgreSQL
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    console.log('Contact message saved:', contact.id);

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been submitted successfully.',
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('Contact API error:', err);

    return NextResponse.json(
      {
        error: 'Failed to save your message. Please try again.',
      },
      { status: 500 }
    );
  }
}