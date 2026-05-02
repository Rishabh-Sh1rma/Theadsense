import { FadeIn } from './FadeIn';

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-8 max-w-[1200px] mx-auto w-full text-center">
      <FadeIn className="flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gray-200 bg-white/50 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
          <span className="text-xs font-semibold tracking-wider text-gray-800 uppercase flex items-center gap-2">
            What we do
          </span>
        </div>
        <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-[#0a0a0a] leading-[1.1] mb-12 max-w-[800px] mx-auto text-balance">
          B2B Lead generation through <span className="text-gray-400 font-medium">WhatsApp and Facebook ads</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.2} className="w-full">
        {/* Infinite CSS marquee for results screenshots */}
        <div className="relative flex overflow-x-hidden w-full max-w-[1000px] mx-auto pb-12 group mask-image-fade">
          <div className="flex gap-6 animate-[scroll_30s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <div key={i} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] bg-gray-50 rounded-[28px] border border-gray-100 p-4 flex flex-col justify-center items-center text-gray-400 shadow-sm overflow-hidden shrink-0 relative transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-100/80 to-transparent"></div>
                 <span className="font-mono text-xs tracking-widest uppercase z-10 text-gray-500">[Result Image {i}]</span>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless infinite loop */}
          <div className="flex gap-6 animate-[scroll_30s_linear_infinite] group-hover:[animation-play-state:paused] absolute top-0 left-full pl-6">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <div key={`dup-${i}`} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] bg-gray-50 rounded-[28px] border border-gray-100 p-4 flex flex-col justify-center items-center text-gray-400 shadow-sm overflow-hidden shrink-0 relative transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-100/80 to-transparent"></div>
                 <span className="font-mono text-xs tracking-widest uppercase z-10 text-gray-500">[Result Image {i}]</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.3} className="mt-8 flex justify-center">
        <a href="https://calendly.com/rishabhar1974/30min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#0a0a0a] text-white px-10 py-4 md:py-5 rounded-full text-[16px] md:text-[18px] font-semibold hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1 duration-200 hover:shadow-xl w-full sm:w-auto">
          Book a call today
        </a>
      </FadeIn>
    </section>
  );
}
