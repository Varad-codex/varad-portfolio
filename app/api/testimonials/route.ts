import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/testimonials — returns approved testimonials (public)
export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { status: 'approved' },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        relation: true,
        photoUrl: true,
        message: true,
        createdAt: true,
      },
    });
    return NextResponse.json(testimonials, { status: 200 });
  } catch (err) {
    console.error('GET /api/testimonials error:', err);
    return NextResponse.json({ error: 'Failed to fetch testimonials.' }, { status: 500 });
  }
}

// POST /api/testimonials — submit a new testimonial (always status=pending)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, relation, photoUrl, message } = body;

    // Validate required fields
    if (!name || !relation || !message) {
      return NextResponse.json({ error: 'Name, relation, and message are required.' }, { status: 400 });
    }
    if (name.length > 100) {
      return NextResponse.json({ error: 'Name is too long.' }, { status: 400 });
    }
    if (message.length < 20) {
      return NextResponse.json({ error: 'Testimonial must be at least 20 characters.' }, { status: 400 });
    }
    if (message.length > 1000) {
      return NextResponse.json({ error: 'Testimonial must be under 1000 characters.' }, { status: 400 });
    }

    const validRelations = ['Friend', 'Colleague', 'Teacher', 'Mentor', 'Teammate', 'Classmate', 'Other'];
    if (!validRelations.includes(relation)) {
      return NextResponse.json({ error: 'Invalid relation value.' }, { status: 400 });
    }

    const testimonial = await prisma.testimonial.create({
      data: {
        name: name.trim(),
        relation,
        photoUrl: photoUrl?.trim() || null,
        message: message.trim(),
        status: 'pending',
      },
    });

    return NextResponse.json({ success: true, id: testimonial.id }, { status: 201 });
  } catch (err) {
    console.error('POST /api/testimonials error:', err);
    return NextResponse.json({ error: 'Failed to save testimonial.' }, { status: 500 });
  }
}
