import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfUse() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FCFCFC] text-[#0A0A0A] font-sans">
      <Helmet>
        <title>Terms of Use | The AdSense</title>
        <meta name="description" content="Terms of Use for The AdSense" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto w-full prose prose-lg prose-gray">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Terms of Use</h1>
        <p className="text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the services provided by The AdSense, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.</p>
        
        <h2>2. Use License</h2>
        <p>Permission is granted to temporarily view the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
        
        <h2>3. Service Provision</h2>
        <p>The AdSense provides B2B lead generation services. The specific deliverables, timelines, and fees will be outlined in separate service agreements with each client.</p>

        <h2>4. Disclaimer</h2>
        <p>The materials on The AdSense's website are provided on an 'as is' basis. The AdSense makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose.</p>
        
        <h2>5. Limitations</h2>
        <p>In no event shall The AdSense or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.</p>

        <h2>6. Contact</h2>
        <p>If you have any questions about these Terms, please contact us at <a href="mailto:rishabhar1974@gmail.com">rishabhar1974@gmail.com</a>.</p>
      </main>
      <Footer />
    </div>
  );
}
