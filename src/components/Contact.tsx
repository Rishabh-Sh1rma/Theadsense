import { FadeIn } from './FadeIn';
import { Star } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-[1200px] mx-auto w-full text-center relative mb-16">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gray-100 rounded-full blur-[120px] -z-10" />
      
      <FadeIn className="bg-white border border-gray-200 rounded-[40px] p-8 md:p-16 lg:p-24 relative overflow-hidden shadow-xl max-w-[1000px] mx-auto transition-shadow duration-500 hover:shadow-2xl">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-gray-100 bg-gray-50 shadow-sm">
          <span className="text-xs font-semibold tracking-wider text-gray-800 uppercase flex items-center gap-2">
            Ready to get started?
          </span>
        </div>
        
        <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-[#0a0a0a] leading-[1.1] mb-8 max-w-[800px] mx-auto text-balance">
          Let's Get On A Call And Plan Your <span className="text-gray-400 font-medium">Best-Selling Campaign</span>
        </h2>
        
        <p className="text-[18px] md:text-[20px] text-gray-500 mb-8 max-w-[600px] mx-auto font-medium text-balance">
          If we don’t deliver on our promise, you pay nothing and we will refund.
        </p>

        <p className="text-gray-400 text-[14px] font-medium mb-12">
          Minimum revenue of ₹5 Lakh/month required to apply.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a href="https://calendly.com/rishabhar1974/30min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#0a0a0a] text-white px-10 py-4 md:py-5 rounded-full text-[16px] md:text-[18px] font-semibold hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1 duration-200 hover:shadow-xl w-full sm:w-auto">
            Apply To Work With Us
          </a>

          <div className="flex flex-col items-center gap-2 mt-2">
            <div className="flex items-center gap-1 text-[#0a0a0a]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-500 tracking-tight">Rated 4.9/5 by 30+ happy businesses</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
