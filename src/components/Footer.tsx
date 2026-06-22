import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="scroll-section w-full bg-midnight-deeper text-cream/65 border-t border-cream/5 pt-10 pb-28 sm:pb-24 md:pb-28 px-4 sm:px-6 section-pad-dock">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex flex-col items-center md:items-start select-none">
          <span className="font-serif text-lg tracking-wider font-semibold text-cream">
            Eric Gray
          </span>
          <p className="font-sans text-xs uppercase tracking-widest text-amber-sunset/60 mt-1">
            &ldquo;Love Is Here&rdquo; · Record Release
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-sm font-sans text-cream/70 text-center">
          <span>Made &amp; Designed with love by</span>
          <Heart className="w-3.5 h-3.5 text-amber-gold fill-amber-gold/30 animate-pulse flex-shrink-0" aria-hidden="true" />
          <a
            href="https://nagacodex.cloud/"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-amber-gold hover:text-cream transition-colors font-medium"
          >
            Naga Codex
          </a>
        </div>

        <div className="text-center md:text-right font-sans text-sm select-none">
          <p>© {currentYear} Eric Gray Music. All rights reserved.</p>
          <p className="text-xs text-cream/65 mt-1">Independent Producer · Hip-Hop · R&amp;B · Smooth Jazz</p>
        </div>

      </div>
    </footer>
  );
}
