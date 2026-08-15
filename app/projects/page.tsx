import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';
import { PageNavigation } from '@/components/PageNavigation';

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Projects />
        <PageNavigation
          previous={{
            label: 'Skills',
            href: '/skills',
          }}
          next={{
            label: 'Experience',
            href: '/experience',
          }}
        />
      </main>

      <Footer />
    </>
  );
}