import { prisma } from '@/lib/prisma';
import AdminTestimonialsClient from './AdminTestimonialsClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AdminTestimonialsPage() {
  const [pending, approved, rejected] = await Promise.all([
    prisma.testimonial.findMany({ where: { status: 'pending' }, orderBy: { createdAt: 'desc' } }),
    prisma.testimonial.findMany({ where: { status: 'approved' }, orderBy: { createdAt: 'desc' } }),
    prisma.testimonial.findMany({ where: { status: 'rejected' }, orderBy: { createdAt: 'desc' } }),
  ]);

  return (
    <AdminTestimonialsClient
      pending={pending}
      approved={approved}
      rejected={rejected}
    />
  );
}
