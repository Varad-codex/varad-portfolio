import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Contact />
      </main>

      <Footer />
    </>
  );
}