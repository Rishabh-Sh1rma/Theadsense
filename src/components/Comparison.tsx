import { FadeIn } from './FadeIn';
import { X, Check } from 'lucide-react';

export default function Comparison() {
  return (
    <section id="whyus" className="py-24 px-4 md:px-8 max-w-[1200px] mx-auto w-full">
      <FadeIn className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm">
          <span className="text-xs font-semibold tracking-wider text-gray-800 uppercase flex items-center gap-2">
            Why Us
          </span>
        </div>
        <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-[#0a0a0a] leading-[1.1] mb-6">
          Other Agencies V/S Us
        </h2>
        <p className="text-[18px] md:text-[20px] text-gray-500 font-medium max-w-[600px] mx-auto text-balance">
          If we don't give you results you DON'T PAY!
        </p>
      </FadeIn>

      <FadeIn delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
        {/* Other Agencies */}
        <div className="bg-gray-50 border border-gray-100 rounded-[32px] p-8 md:p-12 relative overflow-hidden transition-all duration-300 hover:shadow-md">
          <h3 className="text-[22px] md:text-[24px] font-semibold text-[#0a0a0a] mb-8 border-b border-gray-200 pb-6">Other Lead Generation Agencies</h3>
          <ul className="space-y-6">
            {[
              "Charges high setup fees",
              "Inexperienced Marketers",
              "Doesn't guarantee results",
              "Treat you like a transaction",
              "Slow delivery & execution"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-600 font-medium">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-[16px] md:text-[18px]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Us */}
        <div className="bg-white border border-gray-200 rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-[80px]" />
          <h3 className="text-[22px] md:text-[24px] font-semibold text-[#0a0a0a] mb-8 border-b border-gray-100 pb-6 relative z-10">When you work with us</h3>
          <ul className="space-y-6 relative z-10">
            {[
              "Genuine pricing options",
              "Helped many businesses like yours generate high quality sales appointments",
              "Money back guarantee",
              "Treat you like a partner",
              "Start seeing results from week 2"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-800 font-medium tracking-tight">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-[16px] md:text-[18px]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  );
}
