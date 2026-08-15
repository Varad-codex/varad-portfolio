import { Skills } from '@/components/Skills';
import { Footer } from '@/components/Footer';
import { PageNavigation } from '@/components/PageNavigation';

export default function SkillsPage() {
  return (
    <>
      <main className="pt-16">
        <Skills />

        <PageNavigation
          previous={{
            label: 'About',
            href: '/about',
          }}
          next={{
            label: 'Projects',
            href: '/projects',
          }}
        />
      </main>

      <Footer />
    </>
  );
}