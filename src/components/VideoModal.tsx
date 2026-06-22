import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';

export function getYouTubeId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /[?&]v=([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

interface VideoModalProps {
  videoId: string | null;
  title?: string;
  youtubeUrl?: string;
  onClose: () => void;
}

export default function VideoModal({ videoId, title, youtubeUrl, onClose }: VideoModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!videoId) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [videoId, onClose]);

  return (
    <AnimatePresence>
      {videoId && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={title ? `Video: ${title}` : 'Music video player'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-8 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))]"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-midnight-deeper/90 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[92dvh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              {title && (
                <h3 className="font-serif text-lg sm:text-xl text-cream font-semibold truncate">
                  {title}
                </h3>
              )}
              <div className="flex items-center gap-2 ml-auto flex-shrink-0">
                {youtubeUrl && (
                  <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex items-center gap-1.5 px-3 py-2 text-xs font-sans uppercase tracking-wider text-cream/60 hover:text-amber-gold transition-colors"
                  >
                    Open on YouTube
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={onClose}
                  className="focus-ring p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm border border-cream/10 text-cream/70 hover:text-cream hover:border-amber-gold/30 transition-[color,border-color] cursor-pointer"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-amber-gold/20 shadow-[var(--shadow-portrait)] ring-1 ring-inset ring-black/20 bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={title ?? 'Eric Gray music video'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
