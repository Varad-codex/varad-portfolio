import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { PageNavigation } from '@/components/PageNavigation';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Contact />

        <PageNavigation
          previous={{
            label: 'Testimonials',
            href: '/testimonials',
          }}
          next={{
            label: 'Back to Home',
            href: '/',
          }}
        />
      </main>

      <Footer />
    </>
  );
}