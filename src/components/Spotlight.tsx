import { motion, useReducedMotion } from 'motion/react';
import { Play } from 'lucide-react';

const WORKING_ON_IT_URL = 'https://youtu.be/2P3Z9bdR7K4';
const THUMBNAIL = `https://img.youtube.com/vi/2P3Z9bdR7K4/maxresdefault.jpg`;

interface SpotlightProps {
  onOpenVideo: (url: string, title: string) => void;
}

export default function Spotlight({ onOpenVideo }: SpotlightProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="spotlight"
      className="scroll-section relative w-full pt-12 md:pt-16 pb-20 md:pb-28 px-6 md:px-12 lg:px-24 bg-midnight text-cream overflow-hidden border-t border-cream/5"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] golden-glow rounded-full blur-3xl opacity-32 pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-sm border border-amber-gold/30 bg-amber-gold/10 text-amber-gold font-sans text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] font-semibold max-w-full">
            Lead Single · Out Now
          </span>

          <span className="text-amber-gold font-sans uppercase tracking-[0.25em] text-xs font-semibold block mb-3">
            Featured Video
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream tracking-tight font-semibold leading-tight mb-6">
            Working On It
          </h2>

          <p className="font-hand text-2xl sm:text-3xl text-amber-gold leading-snug mb-6 max-w-lg">
            &ldquo;I&apos;m not perfect, I&apos;m working on it.&rdquo;
          </p>

          <p className="font-sans text-base text-cream/80 leading-relaxed max-w-prose mb-4">
            The heart of <span className="italic text-cream">Love Is Here</span> — a message of honesty, grace, and real-life growth. Filmed and directed by Tomoya Nonoyama, Japan.
          </p>

          <p className="font-sans text-xs text-blush/80 italic">
            Directed by Tomoya Nonoyama · Japan
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <button
            type="button"
            onClick={() => onOpenVideo(WORKING_ON_IT_URL, 'Working On It')}
            className="focus-ring group relative w-full max-w-md aspect-video rounded-sm overflow-hidden border border-amber-gold/25 shadow-[var(--shadow-portrait)] ring-1 ring-inset ring-black/10 cursor-pointer"
            aria-label="Play Working On It music video"
          >
            <img
              src={THUMBNAIL}
              alt="Working On It music video thumbnail"
              className={`w-full h-full object-cover origin-center scale-110 ${
                reduceMotion ? '' : 'animate-ken-burns-soft'
              } transition-[filter] duration-700 group-hover:brightness-110`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-midnight-deeper/40 group-hover:bg-midnight-deeper/20 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={reduceMotion ? {} : { scale: [1, 1.06, 1] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                className="relative"
              >
                {!reduceMotion && (
                  <span className="absolute inset-0 rounded-full bg-amber-gold/25 animate-[ping_2.8s_ease-in-out_infinite]" />
                )}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-gold/95 text-midnight-deeper flex items-center justify-center shadow-lg shadow-amber-gold/30 transition-[transform,background-color] duration-300 group-hover:scale-110 group-hover:bg-amber-gold">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                </div>
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-midnight-deeper/90 to-transparent">
              <span className="font-sans text-xs uppercase tracking-widest text-cream/80">
                Watch Official Video
              </span>
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
