import { FadeIn } from './FadeIn';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-4 md:px-8 text-center relative overflow-hidden bg-[#FCFCFC]">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-gray-100/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto w-full flex flex-col items-center z-10 relative">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-800">
              attention b2b companies
            </span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2} className="w-full">
          <h1 className="text-[40px] sm:text-[56px] md:text-[64px] lg:text-[72px] font-bold tracking-tight leading-[1.1] text-[#0a0a0a] mb-8 max-w-[900px] mx-auto text-balance">
            We Help Businesses Book <br className="hidden md:block" />
            <span className="text-gray-400 font-medium tracking-tight">Qualified Sales-Appointments</span> <br className="hidden md:block" />
            With Their Ideal Clients In Next 90 Days <br className="hidden md:block" />
            <span className="font-extrabold text-black inline-block mt-2 border-b-4 border-gray-200 pb-1">Or You Don’t Pay!</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3} className="max-w-[600px] w-full">
          <p className="text-[18px] md:text-[20px] text-gray-500 mb-12 leading-relaxed font-medium text-balance mx-auto">
            Minimum revenue of ₹5 Lakh/month required to apply.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4} className="flex flex-col items-center gap-6">
          <a href="https://calendly.com/rishabhar1974/30min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#0a0a0a] text-white px-10 py-4 md:py-5 rounded-full text-[16px] md:text-[18px] font-semibold hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1 duration-200 hover:shadow-xl w-full sm:w-auto">
            Book a call with us
          </a>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1 text-[#0a0a0a]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-500 tracking-tight">Rated 4.9/5 by 30+ happy businesses</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
