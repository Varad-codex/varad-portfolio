import { Navbar } from '@/components/Navbar';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <About />
      </main>

      <Footer />
    </>
  );
}