import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Experience() {
  const [activeLine, setActiveLine] = useState(0);
  const lines = [
    "Some music doesn't just play.",
    "It stays.",
    "It holds you.",
    "Love is here."
  ];

  // Automate line breathing transition to keep it fluid, combined with view triggers
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % lines.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [lines.length]);

  return (
    <section 
      id="experience" 
      className="scroll-section relative w-full min-h-[72svh] md:min-h-[80svh] section-pad bg-gradient-to-b from-midnight to-midnight-deeper overflow-hidden flex flex-col justify-center items-center px-4 sm:px-6"
    >
      {/* Immersive animated sunset background gradient layer */}
      <div className="absolute inset-0 z-0 opacity-32 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-at-c from-amber-sunset via-amber-honey/20 to-transparent blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Soft, beautiful organic beating icon */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="p-3 bg-amber-gold/5 border border-amber-gold/15 rounded-full mb-10 text-amber-gold select-none"
        >
          <Heart className="w-5 h-5 fill-amber-gold/20" />
        </motion.div>

        {/* Breathing Dynamic Phrase Box */}
        <div className="min-h-[120px] sm:min-h-[160px] flex items-center justify-center relative w-full mb-6">
          <AnimatePresence mode="wait">
            <motion.h2
              key={activeLine}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(8px)", y: -20 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl text-cream font-medium tracking-tight leading-tight px-4"
            >
              {lines[activeLine]}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Cinematic Step-Dots Tracker */}
        <div className="flex gap-4 items-center mt-6 select-none">
          {lines.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveLine(idx)}
              className="group py-2 outline-none cursor-pointer"
              title={`Jump to page ${idx + 1}`}
            >
              <div className={`h-[2px] transition-all duration-700 ${
                activeLine === idx 
                  ? 'w-10 bg-amber-gold' 
                  : 'w-4 bg-cream/20 group-hover:bg-cream/40'
              }`} />
            </button>
          ))}
        </div>

        {/* Pure ambient label */}
        <p className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-amber-sunset/50 uppercase mt-12 select-none">
          Feel It • Breathe It • Love is Here
        </p>

      </div>
    </section>
  );
}
