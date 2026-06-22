import { motion } from 'motion/react';
import heroBg from '../assets/images/eric/Render Apple Music.jpg';

interface HeroProps {
  onListenNowClick: () => void;
}

export default function Hero({ onListenNowClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] h-[100svh] overflow-hidden flex flex-col justify-end items-center sm:items-end text-center sm:text-right px-4 sm:px-10 md:px-16 lg:px-24 pt-[max(7rem,18vh)] sm:pt-24 pb-32 sm:pb-44 md:pb-52"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Eric Gray — Love Is Here album cover with New York skyline at golden hour"
          className="w-full h-full object-cover object-[36%_28%] sm:object-[48%_36%] origin-center animate-ken-burns select-none brightness-[0.68]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-deeper/50 via-midnight/55 to-midnight-deeper/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-deeper/65 via-transparent to-midnight-deeper/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[18rem] sm:max-w-lg ml-auto flex flex-col items-center sm:items-end">
        <div className="absolute -top-24 right-0 w-56 h-56 bg-amber-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-8 right-8 w-40 h-40 blush-glow rounded-full blur-2xl opacity-60 pointer-events-none" />

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
          className="inline-block mb-4 px-3 sm:px-4 py-1.5 rounded-sm border border-amber-gold/40 bg-amber-gold/10 text-amber-gold font-sans text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.3em] font-semibold select-none max-w-full"
        >
          New Album · Out Now 2026
        </motion.span>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-sm text-blush/90 tracking-wide mb-8 select-none italic"
        >
          Music with heart. Truth with grace.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="sr-only"
        >
          Eric Gray — Love Is Here
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mt-2 sm:mt-0"
        >
          <button
            onClick={onListenNowClick}
            id="listen-now-button"
            className="focus-ring group relative w-full sm:w-auto px-6 sm:px-8 py-4 min-h-[44px] bg-amber-gold hover:bg-amber-honey text-midnight-deeper font-sans font-medium text-sm tracking-wider uppercase rounded-sm transition-[background-color,transform,box-shadow] duration-300 animate-pulse-gold cursor-pointer"
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
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-amber-sunset/60 font-sans tracking-widest text-xs uppercase select-none pointer-events-none"
      >
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-amber-gold/50 to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
}
