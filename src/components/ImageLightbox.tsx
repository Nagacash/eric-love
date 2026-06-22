import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImage {
  src: string;
  alt: string;
  label: string;
  objectPosition?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export default function ImageLightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: ImageLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const image = images[index];
  const hasMultiple = images.length > 1;

  const goPrev = () => onIndexChange((index - 1 + images.length) % images.length);
  const goNext = () => onIndexChange((index + 1) % images.length);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasMultiple) {
        onIndexChange((index - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight' && hasMultiple) {
        onIndexChange((index + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [index, hasMultiple, images.length, onClose, onIndexChange]);

  if (!image) return null;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Album artwork: ${image.label}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-8 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-midnight-deeper/92 backdrop-blur-md" />

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 8 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="min-w-0">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-amber-gold font-semibold">
              Love Is Here
            </p>
            <h3 className="font-serif text-lg sm:text-xl text-cream font-semibold truncate">
              {image.label}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="focus-ring p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm border border-cream/10 text-cream/70 hover:text-cream hover:border-amber-gold/30 transition-[color,border-color] cursor-pointer flex-shrink-0"
            aria-label="Close artwork view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative flex items-center gap-2 sm:gap-4">
          {hasMultiple && (
            <button
              type="button"
              onClick={goPrev}
              className="focus-ring hidden sm:flex p-2 min-w-[44px] min-h-[44px] items-center justify-center rounded-full border border-cream/10 text-cream/70 hover:text-amber-gold hover:border-amber-gold/30 transition-[color,border-color] cursor-pointer flex-shrink-0"
              aria-label="Previous cover"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          <div className="relative flex-1 aspect-square max-h-[min(72dvh,720px)] mx-auto rounded-sm overflow-hidden border border-amber-gold/25 shadow-[var(--shadow-portrait)] ring-1 ring-inset ring-black/20 bg-midnight">
            <AnimatePresence mode="wait">
              <motion.img
                key={image.src}
                src={image.src}
                alt={image.alt}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover select-none"
                style={{ objectPosition: image.objectPosition ?? 'center' }}
              />
            </AnimatePresence>
          </div>

          {hasMultiple && (
            <button
              type="button"
              onClick={goNext}
              className="focus-ring hidden sm:flex p-2 min-w-[44px] min-h-[44px] items-center justify-center rounded-full border border-cream/10 text-cream/70 hover:text-amber-gold hover:border-amber-gold/30 transition-[color,border-color] cursor-pointer flex-shrink-0"
              aria-label="Next cover"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {hasMultiple && (
          <div className="flex items-center justify-center gap-4 mt-5">
            <button
              type="button"
              onClick={goPrev}
              className="focus-ring sm:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-cream/10 text-cream/70 hover:text-amber-gold hover:border-amber-gold/30 transition-[color,border-color] cursor-pointer"
              aria-label="Previous cover"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {images.map((item, idx) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => onIndexChange(idx)}
                  className="focus-ring p-2 cursor-pointer"
                  aria-label={`View ${item.label}`}
                  aria-current={idx === index ? 'true' : undefined}
                >
                  <span
                    className={`block h-[2px] rounded-full transition-all duration-300 ${
                      idx === index ? 'w-8 bg-amber-gold' : 'w-4 bg-cream/25 hover:bg-cream/45'
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="focus-ring sm:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-cream/10 text-cream/70 hover:text-amber-gold hover:border-amber-gold/30 transition-[color,border-color] cursor-pointer"
              aria-label="Next cover"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
