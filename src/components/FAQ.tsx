import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from './FadeIn';
import { Plus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "How is this different from a typical ad agency?",
      a: "Most agencies sell ad management and reports. We sell qualified sales conversations. The entire system is built around filtering, intent, and conversion — not impressions or vanity metrics."
    },
    {
      q: "What exactly is a “qualified call”?",
      a: "A qualified call is a real business decision-maker who matches your ideal customer profile and has expressed clear interest in your product or service."
    },
    {
      q: "How long does it take to see results?",
      a: "Most clients start seeing inbound leads and booked calls within 7–14 days, with full system performance stabilizing within 30 days."
    },
    {
      q: "What kind of businesses do you work with?",
      a: "India-based businesses with a clear offer, a sales process, and the ability to handle inbound demand — typically B2B, or high-ticket service businesses."
    }
  ];

  const [openIndex, setIndex] = useState<number | null>(0);

  const toggleOpen = (i: number) => {
    setIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 px-4 md:px-8 max-w-[1000px] mx-auto w-full">
      <FadeIn className="text-center mb-16 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm">
          <span className="text-xs font-semibold tracking-wider text-gray-800 uppercase flex items-center gap-2">
            FAQ
          </span>
        </div>
        <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-[#0a0a0a] leading-[1.1] mb-6 max-w-[800px] mx-auto text-balance">
          Frequently <span className="text-gray-400 font-medium">Asked Questions</span>
        </h2>
      </FadeIn>

      <div className="space-y-4 max-w-[800px] mx-auto">
        {faqs.map((faq, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div 
              onClick={() => toggleOpen(i)}
              className="bg-white border border-gray-200 p-6 md:p-8 rounded-[24px] hover:border-gray-300 transition-colors shadow-sm cursor-pointer select-none"
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-[18px] md:text-[20px] font-semibold tracking-tight pr-8 transition-colors ${openIndex === i ? 'text-[#0a0a0a]' : 'text-gray-800'}`}>
                  {faq.q}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full bg-gray-50 text-gray-500"
                >
                  <Plus size={18} />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-gray-600 leading-relaxed text-[16px] md:text-[18px] pt-4 border-t border-gray-100 font-medium">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
