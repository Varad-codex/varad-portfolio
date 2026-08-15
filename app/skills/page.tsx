import { Navbar } from '@/components/Navbar';
import { Skills } from '@/components/Skills';
import { Footer } from '@/components/Footer';

export default function SkillsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Skills />
      </main>

      <Footer />
    </>
  );
}