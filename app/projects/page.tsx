import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Projects />
      </main>

      <Footer />
    </>
  );
}