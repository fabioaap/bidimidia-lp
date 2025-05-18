import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Niches } from '@/components/sections/Niches';
import { Testimonials } from '@/components/sections/Testimonials';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Niches />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
