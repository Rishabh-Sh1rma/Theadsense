import { FadeIn } from './FadeIn';
import { useCalendly } from '../context/CalendlyContext';

export default function WhatsNext() {
  const { openCalendly } = useCalendly();

  return (
    <section className="py-24 px-4 md:px-8 max-w-[1000px] mx-auto w-full text-center">
      <FadeIn className="flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm">
          <span className="text-xs font-semibold tracking-wider text-gray-800 uppercase flex items-center gap-2">
            &#x23ED;&#xFE0F; What's Next
          </span>
        </div>
        <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-[#0a0a0a] leading-[1.1] mb-12">
          <span className="text-gray-400 font-medium">After You Book</span> A Call...
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <FadeIn delay={0.1}>
          <div className="bg-gray-50 border border-gray-100 rounded-[32px] p-8 aspect-square flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-24 h-24 md:w-32 md:h-32 mb-8 text-[#0a0a0a] drop-shadow-sm relative z-10 transition-transform duration-300 group-hover:scale-105">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path><path d="M14 17l2-2 3 3"></path></svg>
            </div>
            <h3 className="text-[18px] md:text-xl font-medium text-[#0a0a0a] max-w-[280px] relative z-10">
              We will audit your current lead generation strategy for free.
            </h3>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-gray-50 border border-gray-100 rounded-[32px] p-8 aspect-square flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-24 h-24 md:w-32 md:h-32 mb-8 text-[#0a0a0a] drop-shadow-sm relative z-10 transition-transform duration-300 group-hover:scale-105">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon><line x1="8" y1="16" x2="16" y2="8"></line><line x1="16" y1="8" x2="11" y2="8"></line><line x1="16" y1="8" x2="16" y2="13"></line></svg>
            </div>
            <h3 className="text-[18px] md:text-xl font-medium text-[#0a0a0a] max-w-[280px] relative z-10">
              We offer a risk free investment.
            </h3>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.3} className="flex flex-col items-center gap-6">
        <p className="text-gray-500 text-[16px] md:text-[18px] font-medium">
          Minimum revenue of ₹5 Lakh/month required to apply.
        </p>
        <button onClick={openCalendly} className="inline-flex items-center justify-center bg-[#0a0a0a] text-white px-10 py-4 md:py-5 rounded-full text-[16px] md:text-[18px] font-semibold hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1 duration-200 hover:shadow-xl w-full sm:w-auto cursor-pointer">
          Apply To Work With Us
        </button>
      </FadeIn>
    </section>
  );
}
