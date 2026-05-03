import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Comparison from '../components/Comparison';
import WhatsNext from '../components/WhatsNext';
import Process from '../components/Process';
import CaseStudies from '../components/CaseStudies';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import VideoSection from '../components/VideoSection';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <div className="bg-[#FCFCFC] text-[#0A0A0A] selection:bg-gray-200 overflow-x-hidden min-h-screen font-sans">
      <Helmet>
        <title>The AdSense - B2B Lead Generation Through WhatsApp & Facebook Ads</title>
        <meta name="description" content="Generated over 4000+ qualified opportunities for clients in 6 months using our proven combination of WhatsApp and Facebook Ads." />
        <meta name="keywords" content="B2B Lead generation, WhatsApp marketing, Facebook ads, Lead generation agency" />
      </Helmet>
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
