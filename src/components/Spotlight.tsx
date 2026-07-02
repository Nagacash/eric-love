import { motion, useReducedMotion } from 'motion/react';
import { Play, Volume2 } from 'lucide-react';

const WORKING_ON_IT_URL = 'https://youtu.be/2P3Z9bdR7K4';

interface SpotlightProps {
  onOpenVideo: (url: string, title: string) => void;
}

export default function Spotlight({ onOpenVideo }: SpotlightProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="spotlight"
      className="scroll-section relative w-full py-10 sm:py-14 px-4 sm:px-6 md:px-12 bg-midnight text-cream overflow-hidden border-t border-cream/5"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-deeper/40 via-transparent to-midnight pointer-events-none" />

      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-5%' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-sm border border-amber-gold/30 bg-amber-gold/10 text-amber-gold font-sans text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] font-semibold">
          Lead Single · Out Now
        </span>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight font-semibold leading-tight mb-4">
          Working On It
        </h2>

        <p className="font-hand text-xl sm:text-2xl md:text-3xl text-amber-gold leading-snug mb-4">
          &ldquo;I&apos;m not perfect, I&apos;m working on it.&rdquo;
        </p>

        <p className="font-sans text-sm sm:text-base text-cream/75 leading-relaxed mb-2 max-w-lg mx-auto">
          The heart of <span className="italic text-cream">Love Is Here</span> — honesty, grace, and real-life growth.
        </p>

        <p className="font-sans text-xs text-blush/75 italic mb-6">
          Directed by Toma Nonoyama · Japan
        </p>

        <button
          type="button"
          onClick={() => onOpenVideo(WORKING_ON_IT_URL, 'Working On It')}
          className="focus-ring inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-sm border border-amber-gold/35 bg-amber-gold/10 text-amber-gold font-sans text-xs sm:text-sm uppercase tracking-widest font-semibold hover:bg-amber-gold/20 hover:border-amber-gold/50 transition-[background-color,border-color,transform] duration-300 cursor-pointer"
        >
          <Play className="w-4 h-4 fill-current" />
          Watch full video
          <Volume2 className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
        </button>
      </motion.div>
    </section>
  );
}
