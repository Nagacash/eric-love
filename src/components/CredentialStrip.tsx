import { motion, useReducedMotion } from 'motion/react';

const credentials = [
  'R&B/Soul/Rap',
  'Producer',
  'Smooth Jazz',
  'New York · LA · Europe',
];

export default function CredentialStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Eric Gray credentials"
      className="relative w-full border-y border-amber-gold/20 bg-midnight overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-gold/5 via-transparent to-amber-gold/5 pointer-events-none" />

      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: reduceMotion ? 0.15 : 0.8 }}
        className="relative max-w-7xl mx-auto px-3 sm:px-6 md:px-12 py-3 sm:py-4"
      >
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-8">
          {credentials.map((item, idx) => (
            <motion.li
              key={item}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0.15 : 0.5,
                delay: reduceMotion ? 0 : idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-4 sm:gap-8"
            >
              <span className="font-sans text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.14em] sm:tracking-[0.2em] text-amber-gold/90 font-medium whitespace-nowrap">
                {item}
              </span>
              {idx < credentials.length - 1 && (
                <span className="hidden sm:inline text-amber-gold/30 select-none" aria-hidden="true">
                  ✦
                </span>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
