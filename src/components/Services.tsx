import React, { useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react';
import { FadeIn } from './FadeIn';
import { useCalendly } from '../context/CalendlyContext';

const images = [
  "https://i.ibb.co/Z6YphM8n/Whats-App-Image-2026-05-02-at-10-47-35-PM.jpg",
  "https://i.ibb.co/LD81nGM3/Whats-App-Image-2026-05-02-at-10-47-37-PM-1.jpg",
  "https://i.ibb.co/yKbnNRy/Whats-App-Image-2026-05-02-at-10-47-37-PM-2.jpg",
  "https://i.ibb.co/PvVBLwG7/Whats-App-Image-2026-05-02-at-10-47-38-PM.jpg",
  "https://i.ibb.co/QvZ13DL3/Whats-App-Image-2026-05-02-at-10-47-35-PM-1.jpg",
  "https://i.ibb.co/236Fk5q7/Whats-App-Image-2026-05-02-at-10-47-36-PM.jpg",
  "https://i.ibb.co/hxP7rMcF/Whats-App-Image-2026-05-02-at-10-47-36-PM-1.jpg",
  "https://i.ibb.co/Z78cLTH/Whats-App-Image-2026-05-02-at-10-47-37-PM.jpg"
];

function Marquee() {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${v}%`);
  const [speed, setSpeed] = useState(1);
  const currentSpeed = useRef(1);

  useAnimationFrame((t, delta) => {
    // smooth speed transition
    currentSpeed.current += (speed - currentSpeed.current) * 0.1;
    // 50% in 30 seconds = 1.666% per second
    let moveBy = -1 * (50 / 30) * currentSpeed.current * (delta / 1000);
    let nextValue = baseX.get() + moveBy;
    if (nextValue <= -50) {
      nextValue += 50;
    }
    baseX.set(nextValue);
  });

  return (
    <div 
      className="relative flex overflow-hidden w-full max-w-[1000px] mx-auto pb-12 mask-image-fade"
      onMouseEnter={() => setSpeed(0.15)}
      onMouseLeave={() => setSpeed(1)}
      onPointerDown={() => setSpeed(0.15)}
      onPointerUp={() => setSpeed(1)}
      onPointerCancel={() => setSpeed(1)}
    >
      <motion.div style={{ x }} className="flex w-fit gap-6 pr-6">
        {[...images, ...images].map((imgUrl, i) => (
          <div key={i} className="w-[280px] md:w-[320px] h-[400px] md:h-[480px] bg-gray-50 rounded-[28px] border border-gray-100 p-2 flex flex-col justify-center items-center shadow-sm overflow-hidden shrink-0 relative transition-all duration-300 hover:shadow-md hover:-translate-y-1">
             <img src={imgUrl} alt={`Result Image ${(i % 8) + 1}`} className="w-full h-full object-cover rounded-[20px] pointer-events-none" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Services() {
  const { openCalendly } = useCalendly();

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
        <Marquee />
      </FadeIn>

      <FadeIn delay={0.3} className="mt-8 flex justify-center">
        <button onClick={openCalendly} className="inline-flex items-center justify-center bg-[#0a0a0a] text-white px-10 py-4 md:py-5 rounded-full text-[16px] md:text-[18px] font-semibold hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1 duration-200 hover:shadow-xl w-full sm:w-auto cursor-pointer">
          Book a call today
        </button>
      </FadeIn>
    </section>
  );
}
