import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { isAdminAuthenticated } from '@/lib/auth';

// PATCH /api/testimonials/[id] — approve or reject (admin only)
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Check admin session
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { status } = body;

    if (!['approved', 'rejected'].includes(status)) {
      return NextResponse.json({ error: 'Status must be "approved" or "rejected".' }, { status: 400 });
    }

    const testimonial = await prisma.testimonial.update({
      where: { id: params.id },
      data: { status },
    });

    return NextResponse.json(testimonial, { status: 200 });
  } catch (err: unknown) {
    // Prisma throws P2025 when record not found
    if (err && typeof err === 'object' && 'code' in err && (err as { code: string }).code === 'P2025') {
      return NextResponse.json({ error: 'Testimonial not found.' }, { status: 404 });
    }
    console.error('PATCH /api/testimonials/[id] error:', err);
    return NextResponse.json({ error: 'Failed to update testimonial.' }, { status: 500 });
  }
}

// DELETE /api/testimonials/[id] — delete a testimonial (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    await prisma.testimonial.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    if (err && typeof err === 'object' && 'code' in err && (err as { code: string }).code === 'P2025') {
      return NextResponse.json({ error: 'Testimonial not found.' }, { status: 404 });
    }
    console.error('DELETE error:', err);
    return NextResponse.json({ error: 'Failed to delete testimonial.' }, { status: 500 });
  }
}
