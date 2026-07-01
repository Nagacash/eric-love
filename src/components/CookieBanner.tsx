import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Cookie } from 'lucide-react';
import { getCookieConsent, setCookieConsent, type CookieConsent } from '../utils/cookieConsent';

interface CookieBannerProps {
  audioDockOpen?: boolean;
  onConsentChange?: (consent: CookieConsent) => void;
}

export default function CookieBanner({ audioDockOpen = false, onConsentChange }: CookieBannerProps) {
  const [visible, setVisible] = useState(() => getCookieConsent() === null);

  const handleChoice = (consent: CookieConsent) => {
    setCookieConsent(consent);
    onConsentChange?.(consent);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-desc"
          aria-live="polite"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed inset-x-0 z-[55] border-t border-cream/10 bg-midnight-deeper/95 backdrop-blur-md shadow-[var(--shadow-dock)] safe-area-bottom ${
            audioDockOpen
              ? 'bottom-[var(--audio-dock-height)]'
              : 'bottom-0'
          }`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-5">
            <div className="flex min-w-0 items-start gap-3 sm:items-center">
              <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm border border-amber-gold/20 bg-amber-gold/10 sm:mt-0">
                <Cookie className="h-4 w-4 text-amber-gold" aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <h2
                  id="cookie-banner-title"
                  className="font-serif text-base font-semibold text-cream"
                >
                  Cookies &amp; Privacy
                </h2>
                <p
                  id="cookie-banner-desc"
                  className="mt-1 font-sans text-sm leading-relaxed text-cream/70"
                >
                  We use essential cookies to keep this site working, and optional cookies for
                  embedded videos and a smoother experience.{' '}
                  <a
                    href="/privacy"
                    className="focus-ring text-amber-gold hover:text-cream transition-colors underline underline-offset-2"
                  >
                    Read our Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:flex-shrink-0">
              <button
                type="button"
                onClick={() => handleChoice('accepted')}
                className="focus-ring min-h-[44px] rounded-sm bg-amber-gold px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-midnight-deeper transition-[background-color,transform] duration-300 hover:bg-amber-honey"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={() => handleChoice('essential')}
                className="focus-ring min-h-[44px] rounded-sm border border-cream/10 px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-cream/80 transition-[color,border-color,background-color] duration-300 hover:border-amber-gold/30 hover:bg-amber-gold/5 hover:text-cream"
              >
                Essential Only
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
