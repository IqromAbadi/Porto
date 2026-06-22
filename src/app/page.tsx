'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import CaseStudy from '@/components/CaseStudy';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Metrics from '@/components/Metrics';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <CaseStudy />
      <TechStack />
      <Experience />
      <Metrics />
      <Contact />
      <Footer />
    </main>
  );
}
