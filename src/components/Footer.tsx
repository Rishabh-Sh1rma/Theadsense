import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 border-t border-gray-200 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 mt-12 bg-[#FCFCFC] text-gray-500">
      <div className="flex flex-col gap-2 text-center md:text-left">
        <h3 className="font-semibold text-xl tracking-tight text-[#0a0a0a]">theadsense</h3>
        <p className="text-sm max-w-sm">
          Specialists delivering data-driven lead generation systems for growing businesses.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-[13px] font-medium text-gray-400">
        <a href="/#services" className="hover:text-gray-800 transition-colors">Services</a>
        <a href="/#casestudies" className="hover:text-gray-800 transition-colors">Our Work</a>
        <a href="/#process" className="hover:text-gray-800 transition-colors">Process</a>
        <a href="/#faq" className="hover:text-gray-800 transition-colors">FAQ</a>
        <a href="mailto:rishabhar1974@gmail.com" className="hover:text-gray-800 transition-colors">Email</a>
        <span className="hidden md:inline text-gray-300">|</span>
        <Link to="/privacy-policy" className="hover:text-gray-800 transition-colors">Privacy Policy</Link>
        <Link to="/terms-of-use" className="hover:text-gray-800 transition-colors">Terms of Use</Link>
      </div>

      <div className="text-[13px] font-mono text-center md:text-right">
        © {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}
