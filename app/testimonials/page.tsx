import { Navbar } from '@/components/Navbar';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { PageNavigation } from '@/components/PageNavigation';

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Testimonials />

        <PageNavigation
          previous={{
            label: 'Certifications',
            href: '/certifications',
          }}
          next={{
            label: 'Contact',
            href: '/contact',
          }}
        />
      </main>

      <Footer />
    </>
  );
}