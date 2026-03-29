'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BentoDashboard from '@/components/BentoDashboard';
import ImageGallery from '@/components/ImageGallery';
import AcademicGrid from '@/components/AcademicGrid';
import Sections from '@/components/Sections';
import Faq from '@/components/Faq';
import Resources from '@/components/Resources';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative z-10 antialiased selection:bg-indigo-600 selection:text-white">
      <Navbar />
      <Hero />
      <BentoDashboard />
      <ImageGallery />
      <AcademicGrid />
      <Sections />
      <Faq />
      <Resources />
      <Footer />

      {/* Global Utility Animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
