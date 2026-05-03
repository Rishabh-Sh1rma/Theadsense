import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FCFCFC] text-[#0A0A0A] font-sans">
      <Helmet>
        <title>Privacy Policy | The AdSense</title>
        <meta name="description" content="Privacy Policy for The AdSense" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto w-full prose prose-lg prose-gray">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Introduction</h2>
        <p>Welcome to The AdSense. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
        
        <h2>2. Information We Collect</h2>
        <p>We may collect personal information that you provide to us, such as your name, email address, phone number, and business details when you book a call, contact us, or use our services.</p>
        
        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Provide, operate, and maintain our services</li>
          <li>Improve, personalize, and expand our services</li>
          <li>Understand and analyze how you use our services</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service and marketing purposes</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>We implement a variety of security measures to maintain the safety of your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>

        <h2>5. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:rishabhar1974@gmail.com">rishabhar1974@gmail.com</a>.</p>
      </main>
      <Footer />
    </div>
  );
}
