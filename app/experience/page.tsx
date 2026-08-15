import { Navbar } from '@/components/Navbar';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Experience />
      </main>

      <Footer />
    </>
  );
}