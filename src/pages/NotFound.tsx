import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FCFCFC] text-[#0A0A0A] font-sans">
      <Helmet>
        <title>404 - Page Not Found | The AdSense</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6 text-center">
        <div>
          <h1 className="text-8xl md:text-9xl font-black mb-6 tracking-tighter text-gray-200">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Page Not Found
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto text-lg">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center bg-[#0a0a0a] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1 duration-200"
          >
            Go Back Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
