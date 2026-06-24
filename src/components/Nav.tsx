import { useState, useEffect, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { scrollToHash } from '../utils/scroll';

const links = [
  { label: 'Watch', href: '#spotlight' },
  { label: 'Artist', href: '#about' },
  { label: 'Listen', href: '#album' },
  { label: 'Photos', href: '#gallery' },
  { label: 'Buy', href: '#cta' },
];

function handleAnchorClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith('#')) return;
  e.preventDefault();
  scrollToHash(href);
}

export default function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setVisible(window.scrollY > 120);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -64, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 z-50 border-b border-cream/5 bg-midnight-deeper/85 backdrop-blur-md shadow-[var(--shadow-dock)] pt-[env(safe-area-inset-top,0px)]"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-12 flex items-center justify-between gap-2 h-14 sm:h-16 min-h-[var(--nav-height)]">
            <a
              href="#hero"
              onClick={(e) => handleAnchorClick(e, '#hero')}
              className="focus-ring font-serif text-sm sm:text-base font-semibold text-cream tracking-wide hover:text-amber-gold transition-colors flex-shrink-0"
            >
              Eric Gray aka Eric IQ Gray
            </a>

            <ul className="flex items-center gap-0 sm:gap-1 overflow-x-auto scrollbar-hide max-w-[calc(100vw-6.5rem)] sm:max-w-none -mr-1 pr-1">
              {links.map((link) => (
                <li key={link.href} className="flex-shrink-0">
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="focus-ring font-sans text-[9px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-widest text-cream/70 hover:text-amber-gold px-1.5 sm:px-3 py-2 min-h-[44px] flex items-center transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
