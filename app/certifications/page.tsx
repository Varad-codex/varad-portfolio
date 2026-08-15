import { Navbar } from '@/components/Navbar';
import { Certifications } from '@/components/Certifications';
import { Footer } from '@/components/Footer';

export default function CertificationsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Certifications />
      </main>

      <Footer />
    </>
  );
}