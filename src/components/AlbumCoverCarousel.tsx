import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import AnimatedImage, { ShimmerOverlay } from './AnimatedImage';
import ImageLightbox, { type LightboxImage } from './ImageLightbox';
import albumCoverImg from '../assets/images/eric/Render Apple Music.jpg';
import albumBackCoverImg from '../assets/images/eric/Eric Gray Back Album Cover.jpg';

const covers: LightboxImage[] = [
  {
    src: albumCoverImg,
    alt: 'Eric Gray — Love Is Here album front cover',
    label: 'Front cover',
    objectPosition: 'center',
  },
  {
    src: albumBackCoverImg,
    alt: 'Love Is Here album back cover with full tracklist and credits',
    label: 'Back cover · tracklist',
    objectPosition: 'left center',
  },
];

export default function AlbumCoverCarousel() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const cover = covers[index];

  const goPrev = () => setIndex((i) => (i - 1 + covers.length) % covers.length);
  const goNext = () => setIndex((i) => (i + 1) % covers.length);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: true, margin: '-5%' }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[min(100%,20rem)] sm:max-w-md mx-auto lg:mx-0"
      >
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="focus-ring relative w-full aspect-square rounded-sm overflow-hidden shadow-[var(--shadow-portrait)] border border-amber-gold/25 group cursor-pointer ring-1 ring-inset ring-black/10 block"
          aria-label={`View ${cover.label} full size`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cream/5 to-amber-gold/10 mix-blend-overlay z-10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={cover.src}
              initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              {index === 0 ? (
                <AnimatedImage
                  src={cover.src}
                  alt={cover.alt}
                  kenBurns={!reduceMotion}
                  loading="eager"
                  className="transition-transform duration-[4000ms] ease-out group-hover:scale-105"
                />
              ) : (
                <img
                  src={cover.src}
                  alt={cover.alt}
                  className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: cover.objectPosition }}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {index === 0 && <ShimmerOverlay className="z-[15]" />}

          <div className="absolute inset-0 bg-midnight-deeper/35 md:bg-midnight-deeper/45 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
            <div className="p-4 sm:p-5 bg-amber-gold/95 text-midnight-deeper rounded-full shadow-2xl transition-transform duration-300 md:scale-90 md:group-hover:scale-100">
              <ZoomIn className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
          </div>
          <span className="absolute top-3 right-3 z-20 md:hidden font-sans text-[9px] uppercase tracking-widest text-cream/80 bg-midnight-deeper/70 px-2 py-1 rounded-sm border border-cream/10">
            Tap to enlarge
          </span>
        </button>

        <div className="flex items-center justify-between gap-3 mt-4">
          <button
            type="button"
            onClick={goPrev}
            className="focus-ring p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm border border-cream/10 text-cream/70 hover:text-amber-gold hover:border-amber-gold/30 transition-[color,border-color] cursor-pointer"
            aria-label="Previous album cover"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex flex-col items-center gap-2 min-w-0">
            <div className="flex items-center gap-2">
              {covers.map((item, idx) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setIndex(idx)}
                  className="focus-ring p-1.5 cursor-pointer"
                  aria-label={`Show ${item.label}`}
                  aria-current={idx === index ? 'true' : undefined}
                >
                  <span
                    className={`block h-[2px] rounded-full transition-all duration-300 ${
                      idx === index ? 'w-7 bg-amber-gold' : 'w-3.5 bg-cream/25 hover:bg-cream/45'
                    }`}
                  />
                </button>
              ))}
            </div>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-cream/65 truncate max-w-[10rem] sm:max-w-none">
              {cover.label}
            </span>
          </div>

          <button
            type="button"
            onClick={goNext}
            className="focus-ring p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm border border-cream/10 text-cream/70 hover:text-amber-gold hover:border-amber-gold/30 transition-[color,border-color] cursor-pointer"
            aria-label="Next album cover"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {lightboxOpen && (
          <ImageLightbox
            images={covers}
            index={index}
            onIndexChange={setIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
