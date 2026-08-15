import { Navbar } from '@/components/Navbar';
import { Certifications } from '@/components/Certifications';
import { Footer } from '@/components/Footer';
import { PageNavigation } from '@/components/PageNavigation';

export default function CertificationsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Certifications />

        <PageNavigation
          previous={{
            label: 'Experience',
            href: '/experience',
          }}
          next={{
            label: 'Testimonials',
            href: '/testimonials',
          }}
        />
      </main>

      <Footer />
    </>
  );
}