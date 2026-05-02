import { FadeIn } from './FadeIn';

const steps = [
  {
    step: "Step 1",
    title: "Ads Strategy That Is Proven To Work for qualified appointments",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16L16 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    step: "Step 2",
    title: "Creating & Running High Converting Ads that guarantees results",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    step: "Step 3",
    title: "Creating & Running Funnels to maintain client quality",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    step: "Step 4",
    title: "Increase In Revenue, Scalability & Bottom Line Revenue",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-4 md:px-8 max-w-[1200px] mx-auto w-full text-center relative mt-12 bg-[#FCFCFC]">
      <FadeIn className="flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm">
          <span className="text-xs font-semibold tracking-wider text-gray-800 uppercase flex items-center gap-2">
            Our Process
          </span>
        </div>
        <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-[#0a0a0a] leading-[1.1] mb-6 max-w-[800px] mx-auto text-balance">
          This is what you get when <br className="hidden md:block" />working with <span className="text-gray-400 font-medium">theadsense</span>
        </h2>
        <p className="text-gray-500 text-[18px] md:text-[20px] font-medium mb-16 text-balance max-w-[600px] mx-auto">
          Minimum revenue of ₹5 Lakh/month required to apply.
        </p>
      </FadeIn>

      <div className="w-full max-w-[900px] mx-auto flex flex-col gap-6 relative pb-24">
        {steps.map((item, i) => (
          <div 
            key={i}
            className="sticky bg-white border border-gray-200 rounded-[32px] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-left flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-500 hover:shadow-xl"
            style={{ 
              top: `calc(140px + ${i * 24}px)`,
              zIndex: i + 10
            }}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 text-[#0a0a0a] shadow-inner transition-transform duration-300 hover:scale-105">
               {item.icon}
            </div>
            <div>
              <span className="text-gray-400 font-mono text-xs tracking-widest uppercase mb-3 block">{item.step}</span>
              <h3 className="text-[22px] md:text-[30px] font-semibold text-[#0a0a0a] leading-[1.3] tracking-tight">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
