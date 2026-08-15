import { Navbar } from '@/components/Navbar';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { PageNavigation } from '@/components/PageNavigation';

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Experience />

        <PageNavigation
          previous={{
            label: 'Projects',
            href: '/projects',
          }}
          next={{
            label: 'Certifications',
            href: '/certifications',
          }}
        />
      </main>

      <Footer />
    </>
  );
}