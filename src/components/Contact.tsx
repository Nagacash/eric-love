import { motion, useReducedMotion } from 'motion/react';
import { Mail, Globe } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="scroll-section relative w-full border-t border-cream/5 bg-midnight-deeper/80 section-pad section-pad-dock px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          variants={fadeUp}
          initial={reduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8 p-8 md:p-10 rounded-sm border border-cream/5 bg-midnight/80 shadow-[var(--shadow-card)]"
        >
          <div className="text-center sm:text-left">
            <span className="text-amber-gold font-sans uppercase tracking-[0.25em] text-xs font-semibold block mb-2">
              Media Contact
            </span>
            <p className="font-serif text-2xl text-cream font-semibold">Eric Gray</p>
            <p className="font-sans text-sm text-cream/70 mt-1">Press · Bookings · Collaborations</p>
          </div>

          <div className="flex flex-col w-full sm:w-auto sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="mailto:ericiq@mac.com"
              className="focus-ring flex items-center justify-center sm:justify-start gap-3 px-5 py-3 min-h-[44px] rounded-sm border border-cream/10 bg-midnight-deeper text-cream hover:border-amber-gold/30 hover:text-amber-gold transition-[color,border-color,background-color] duration-300 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-amber-gold flex-shrink-0" />
              <span className="font-sans text-sm break-all sm:break-normal">ericiq@mac.com</span>
            </a>
            <a
              href="https://www.ericgraymusician.com"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center justify-center sm:justify-start gap-3 px-5 py-3 min-h-[44px] rounded-sm border border-cream/10 bg-midnight-deeper text-cream hover:border-amber-gold/30 hover:text-amber-gold transition-[color,border-color,background-color] duration-300 cursor-pointer"
            >
              <Globe className="w-4 h-4 text-amber-gold flex-shrink-0" />
              <span className="font-sans text-sm">ericgraymusician.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
