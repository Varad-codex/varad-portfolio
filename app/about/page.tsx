import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { PageNavigation } from '@/components/PageNavigation';

export default function AboutPage() {
  return (
    <>
      <main className="pt-16">
        <About />

        <PageNavigation
          previous={{
            label: 'Home',
            href: '/',
          }}
          next={{
            label: 'Skills',
            href: '/skills',
          }}
        />
      </main>

      <Footer />
    </>
  );
}