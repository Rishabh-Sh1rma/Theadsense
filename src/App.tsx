/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Comparison from './components/Comparison';
import WhatsNext from './components/WhatsNext';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoSection from './components/VideoSection';

export default function App() {
  return (
    <div className="bg-[#FCFCFC] text-[#0A0A0A] selection:bg-gray-200 overflow-x-hidden min-h-screen font-sans">
      <Navbar />
      <Hero />
      <VideoSection />
      <Services />
      <Comparison />
      <WhatsNext />
      <CaseStudies />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
