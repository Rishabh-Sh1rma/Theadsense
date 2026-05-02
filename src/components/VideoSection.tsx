import { FadeIn } from './FadeIn';

export default function VideoSection() {
  return (
    <section className="py-12 px-4 md:px-8 max-w-[1000px] mx-auto w-full relative z-20">
      <FadeIn delay={0.5}>
        <div className="relative mx-auto w-full max-w-[320px] aspect-[9/16] max-h-[60vh] min-h-[400px] bg-black rounded-[32px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-[6px] border-white ring-1 ring-gray-100">
          {/* Replace this with an actual video tag when ready */}
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 font-medium">9:16 Video Placeholder</span>
            {/* 
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
              src="YOUR_VIDEO_URL"
            />
            */}
          </div>
          
          {/* Play button overlay (decorative) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white ml-1">
                <path d="M5 3L19 12L5 21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
