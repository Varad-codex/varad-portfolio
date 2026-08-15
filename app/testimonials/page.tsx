import { Navbar } from '@/components/Navbar';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}