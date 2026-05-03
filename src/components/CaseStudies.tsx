import React from 'react';
import { FadeIn } from './FadeIn';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';

function ChartMockup({ data, yLabel, formatValue }: any) {
  const dataLength = data.length;

  const renderCustomDot = (props: any) => {
    const { cx, cy, index, payload } = props;
    const isFirst = index === 0;
    const isLast = index === dataLength - 1;
    
    if (isLast) {
      return (
        <g key={`dot-${index}`}>
          <circle cx={cx} cy={cy} r={4} fill="#06b6d4" />
          <rect x={cx - 40} y={cy - 28} width={80} height={20} fill="#06b6d4" rx={2} />
          <text x={cx} y={cy - 14} fill="#041212" fontSize={11} fontWeight="bold" textAnchor="middle">
            {formatValue(payload.value)}
          </text>
        </g>
      );
    }
    
    if (isFirst) {
      return <circle key={`dot-${index}`} cx={cx} cy={cy} r={4} fill="#ef4444" />;
    }
    
    return <circle key={`dot-${index}`} cx={cx} cy={cy} r={3} fill="#ffffff" />;
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#031e1c] to-[#010707] relative p-6 pr-8 pb-10 flex flex-col justify-end">
      {/* Y Axis Label */}
      <div className="absolute top-1/2 left-2 -translate-y-1/2 -rotate-90 text-gray-400 text-[10px] sm:text-[11px] font-mono tracking-[0.3em] uppercase whitespace-nowrap">
        {yLabel}
      </div>
      {/* X Axis Label */}
      <div className="absolute bottom-3 left-0 w-full text-center text-gray-400 text-[10px] sm:text-[11px] font-mono tracking-[0.3em] uppercase">
        TIME
      </div>
      
      <div className="w-full h-full ml-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#ffffff10" vertical={false} />
            <XAxis dataKey="name" hide />
            <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#ffffff60" 
              strokeWidth={2} 
              dot={renderCustomDot}
              activeDot={false}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const NexacloudLogoSvg = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1388 20.1837 10.2018 17.8687 10.0197C17.3828 6.64332 14.5 4 11 4C7.13401 4 4 7.13401 4 11C4 11.2335 4.01139 11.464 4.03348 11.6908C1.81057 12.3551 0 14.4754 0 17C0 19.7614 2.23858 22 5 22H17.5V19Z" fill="url(#paint0_linear)"/>
    <defs>
      <linearGradient id="paint0_linear" x1="2" y1="4" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563eb" />
        <stop offset="1" stopColor="#4f46e5" />
      </linearGradient>
    </defs>
  </svg>
);

const cases = [
  {
    logo: (
      <div className="flex items-center gap-3">
        <img src="https://i.ibb.co/8HTyKDv/favicon.jpg" alt="Rawcanvas" className="h-10 w-10 object-contain rounded-full shadow-sm" />
        <span className="font-bold text-xl text-[#0a0a0a] tracking-tight">Rawcanvas</span>
      </div>
    ),
    tag: "Podcasting Agency • India/US • 30 Days",
    title: "Scaled To ₹12,00,000+ Revenue With 23 Qualified Calls & ~92X ROAS",
    desc: "Turned a ₹12.9K ad spend into a ₹12L+ revenue engine. We focused on quality over volume with Meta Lead Forms, achieving 23 high-ticket appointments at just ₹563 CPL. Hook-heavy videos efficiently converted decision-makers.",
    data: [ {name: 'W1', value: 1}, {name: 'W2', value: 3.5}, {name: 'W3', value: 7}, {name: 'W4', value: 12} ],
    yLabel: "REVENUE",
    formatValue: (val: number) => `₹${val} Lakhs`
  },
  {
    logo: (
      <div className="flex items-center gap-3">
        <img src="https://i.ibb.co/TMPh2KyN/wwww.jpg" alt="Shree Ji Gems" className="h-10 w-auto object-contain mix-blend-darken" />
        <span className="font-bold text-xl text-[#0a0a0a] tracking-tight">Shree Ji Gems</span>
      </div>
    ),
    tag: "E-Commerce • Premium Gems • Scaling",
    title: "Generated ₹35,00,000 In Revenue With Tremendous Direct Sales Impact",
    desc: "Pivoted from broad targeting to precision Google & Meta Ads. Rigorously tested high-intent creative angles and optimized funnel conversions, bringing predictable high-ticket jewelry sales and generating ₹35 Lakhs in trackable revenue.",
    data: [ {name: 'W1', value: 4}, {name: 'W2', value: 12}, {name: 'W3', value: 22}, {name: 'W4', value: 35} ],
    yLabel: "REVENUE",
    formatValue: (val: number) => `₹${val}L`
  },
  {
    logo: (
      <div className="flex items-center gap-3">
        <img src="https://i.ibb.co/HDxWrCMm/qqqq.jpg" alt="Satwik Services" className="h-10 w-auto object-contain mix-blend-darken" />
        <span className="font-bold text-xl text-[#0a0a0a] tracking-tight">Satwik Services</span>
      </div>
    ),
    tag: "Local Service • Jaipur • 6 Months",
    title: "634 High-Intent Calls Driving ₹12,00,000+ In Direct Service Revenue",
    desc: "Transformed a local business dependent on referrals into a predictable inbound machine. Directed Google Ads strictly to 'near me' searches, redesigned the site for a call-first experience, generating 600+ phone calls at just ₹125/call.",
    data: [ {name: 'M1', value: 50}, {name: 'M2', value: 150}, {name: 'M3', value: 300}, {name: 'M4', value: 450}, {name: 'M6', value: 634} ],
    yLabel: "CALLS",
    formatValue: (val: number) => `${val} Calls`
  },
  {
    logo: (
      <div className="flex items-center gap-3">
        <NexacloudLogoSvg />
        <span className="font-bold text-xl text-[#0a0a0a] tracking-tight">NexaCloud Solutions</span>
      </div>
    ),
    tag: "B2B SaaS • India • 60 Days",
    title: "Built Pipeline Generating ₹8,50,000 Monthly & High-Quality Demos",
    desc: "Deployed a full Predictable Lead Gen System for B2B SaaS. Cut CPL by 55% using high-intent search campaigns and decision-maker targeting, converting a ₹1.5L spend into ₹8.5 Lakhs of recurring pipeline value and consistent demos.",
    data: [ {name: 'W1', value: 1.5}, {name: 'W4', value: 4}, {name: 'W8', value: 8.5} ],
    yLabel: "REVENUE",
    formatValue: (val: number) => `₹${val}L`
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
            <div className="block bg-white rounded-[32px] p-6 md:p-8 border border-gray-200 transition-all duration-300 h-full flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.03)] group">
              <div className="mb-6 flex justify-start opacity-80 mix-blend-multiply filter grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                {cs.logo}
              </div>
              <div className="relative aspect-[4/3] w-full bg-gray-200 rounded-[24px] overflow-hidden mb-8 border border-gray-100">
                <ChartMockup 
                  data={cs.data} 
                  yLabel={cs.yLabel} 
                  formatValue={cs.formatValue} 
                />
              </div>
              <div className="flex-grow flex flex-col">
                <h3 className="text-[#0a0a0a] text-[22px] md:text-[24px] font-bold tracking-tight mb-4 leading-snug">
                  {cs.title}
                </h3>
                <div className="text-[16px] text-gray-600 leading-relaxed font-medium mb-4">{cs.desc}</div>
                <div className="text-xs font-mono text-gray-400 font-medium tracking-widest uppercase mt-auto pt-4 border-t border-gray-100">{cs.tag}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
