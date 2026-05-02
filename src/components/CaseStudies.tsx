import { FadeIn } from './FadeIn';

const cases = [
  {
    title: "Pulkit saini - founder Rawcanvas",
    tag: "Podcasting Agency • B2B Lead Gen",
    desc: "Turned a precise test ad spend into a multi-lakh revenue engine targeting India and US markets.",
    image: "https://images.unsplash.com/photo-1590635201019-33b668581e28?auto=format&fit=crop&q=80&w=2400"
  },
  {
    title: "Manish Sharma - founder OrantJewels",
    tag: "E-Commerce • 8X ROAS",
    desc: "E-commerce business achieving exceptional returns through comprehensive Google Ads strategy.",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=2400"
  },
  {
    title: "Akshat Agarwal - founder nexacloud solutions",
    tag: "SaaS • 6.1X ROAS",
    desc: "Transformed an inconsistent pipeline into predictable monthly revenue with a B2B automation demand engine.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2400"
  },
  {
    title: "Ankit agarwal - founder - Satwik Water tank cleaning services",
    tag: "Local Service • 10X ROAS",
    desc: "Scaling local service revenue through precision Google & Meta Ads campaigns focused on high-intent calls.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2400"
  }
];

export default function CaseStudies() {
  return (
    <section id="casestudies" className="py-24 px-4 md:px-8 max-w-[1200px] mx-auto w-full">
      <div className="text-center mb-16">
        <FadeIn className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm">
            <span className="text-xs font-semibold tracking-wider text-gray-800 uppercase flex items-center gap-2">
              &#x2B50; Testimonials
            </span>
          </div>
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-[#0a0a0a] leading-[1.1] max-w-[800px] mx-auto text-balance">
            Success stories from <span className="text-gray-400 font-medium">our clients</span>
          </h2>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
        {cases.map((cs, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="block group bg-white rounded-[32px] p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1">
              <div className="relative aspect-[4/3] w-full bg-gray-200 rounded-[24px] overflow-hidden mb-6">
                <img 
                  src={cs.image} 
                  alt="Case Study" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
              </div>
              <div className="px-2 flex-grow flex flex-col">
                <h3 className="text-[#0a0a0a] text-[20px] md:text-[22px] font-semibold tracking-tight mb-2">
                  {cs.title}
                </h3>
                <div className="text-xs font-mono text-gray-400 font-medium mb-3 tracking-widest uppercase">{cs.tag}</div>
                <div className="text-[16px] text-gray-600 leading-relaxed font-medium">{cs.desc}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
