import { motion } from 'motion/react';
import HeroBackground from './HeroBackground';

interface HeroProps {
  onListenNowClick: () => void;
}

export default function Hero({ onListenNowClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] h-[100svh] overflow-hidden flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <HeroBackground />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-48 blush-glow rounded-full blur-2xl opacity-60 pointer-events-none" />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-amber-gold font-sans uppercase tracking-[0.18em] sm:tracking-[0.35em] text-[10px] sm:text-sm font-medium mb-3 select-none"
        >
          Producer · Artist · Guitarist
        </motion.p>

        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mb-5 px-3 sm:px-4 py-1.5 rounded-sm border border-amber-gold/40 bg-amber-gold/10 text-amber-gold font-sans text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.3em] font-semibold select-none max-w-full"
        >
          New Album · Out Now 2026
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-cream mb-3 leading-none"
        >
          Eric Gray
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.12em' }}
          animate={{ opacity: 1, letterSpacing: '0.28em' }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-light text-base sm:text-xl md:text-2xl text-amber-sunset uppercase mb-5 select-none"
        >
          Love Is Here
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-sm sm:text-base text-blush/90 tracking-wide mb-8 select-none italic max-w-md"
        >
          Music with heart. Truth with grace.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.55 }}
          className="mt-1"
        >
          <button
            onClick={onListenNowClick}
            id="listen-now-button"
            className="focus-ring group relative px-8 py-4 min-h-[44px] bg-amber-gold hover:bg-amber-honey text-midnight-deeper font-sans font-medium text-sm tracking-wider uppercase rounded-sm transition-[background-color,transform,box-shadow] duration-300 animate-pulse-gold cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              Listen Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-amber-sunset/60 font-sans tracking-widest text-xs uppercase select-none pointer-events-none"
      >
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-amber-gold/50 to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
}
