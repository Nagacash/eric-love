import type { FC } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import AnimatedImage, { FloatingFrame } from './AnimatedImage';
import img1 from '../assets/images/eric/IMG_4581.jpg';
import img2 from '../assets/images/eric/IMG_9133.jpg';
import img3 from '../assets/images/eric/IMGL5246re.jpg';
import img4 from '../assets/images/eric/IMG_8962.jpg';
import img5 from '../assets/images/eric/IMG_1099.jpg';
import img6 from '../assets/images/eric/IMG_1372.jpg';

const photos = [
  { src: img1, alt: 'Eric Gray performing live with guitar' },
  { src: img2, alt: 'Eric Gray on stage' },
  { src: img3, alt: 'Eric Gray in concert' },
  { src: img4, alt: 'Eric Gray with acoustic guitar' },
  { src: img5, alt: 'Eric Gray — artist portrait' },
  { src: img6, alt: 'Eric Gray — musician at work' },
];

interface GalleryCardProps {
  photo: (typeof photos)[0];
  idx: number;
  reduceMotion: boolean | null;
}

const GalleryCard: FC<GalleryCardProps> = ({ photo, idx, reduceMotion }) => {
  return (
    <motion.figure
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: reduceMotion ? 0.15 : 0.6, delay: (idx % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex-shrink-0 w-56 sm:w-64 md:w-72 aspect-[3/4] rounded-sm overflow-hidden border border-cream/5 shadow-[var(--shadow-card)] ring-1 ring-inset ring-black/10 group"
    >
      <FloatingFrame delay={(idx % 6) * 0.4} className="w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          <AnimatedImage
            src={photo.src}
            alt={photo.alt}
            kenBurns
            className="transition-[filter] duration-700 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-deeper/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </FloatingFrame>
    </motion.figure>
  );
}

export default function Gallery() {
  const reduceMotion = useReducedMotion();
  const marqueePhotos = [...photos, ...photos];

  return (
    <section
      id="gallery"
      className="scroll-section section-warm-wash section-pad relative w-full text-cream overflow-hidden border-y border-cream-warm/10"
    >
      <div className="absolute right-0 top-0 w-80 h-80 blush-glow rounded-full blur-3xl opacity-45 pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-64 h-64 golden-glow rounded-full blur-3xl opacity-35 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-10 md:mb-12 text-center md:text-left">
        <motion.span
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-amber-gold font-sans uppercase tracking-[0.25em] text-xs font-semibold block mb-3"
        >
          In the Moment
        </motion.span>
        <motion.h2
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-serif text-3xl sm:text-4xl text-cream-warm tracking-tight font-semibold"
        >
          Live. Studio. Soul.
        </motion.h2>
        <motion.p
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-base text-cream/80 mt-3 max-w-md mx-auto md:mx-0"
        >
          A glimpse into the life behind the music — from the stage to the studio.
        </motion.p>
      </div>

      {reduceMotion ? (
        <div className="relative z-10 overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-4 md:gap-6 px-6 md:px-12 lg:px-24 min-w-min">
            {photos.map((photo, idx) => (
              <GalleryCard key={photo.alt} photo={photo} idx={idx} reduceMotion={reduceMotion} />
            ))}
          </div>
        </div>
      ) : (
        <div className="relative z-10 overflow-hidden pb-4 mask-fade-x">
          <div className="gallery-marquee-track flex gap-4 md:gap-6 w-max animate-gallery-marquee px-4">
            {marqueePhotos.map((photo, idx) => (
              <GalleryCard key={`${photo.alt}-${idx}`} photo={photo} idx={idx} reduceMotion={reduceMotion} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
