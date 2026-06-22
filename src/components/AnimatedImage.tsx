import { useRef, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  kenBurns?: boolean;
  parallax?: boolean;
  parallaxOffset?: number;
  loading?: 'lazy' | 'eager';
}

export default function AnimatedImage({
  src,
  alt,
  className = '',
  kenBurns = false,
  parallax = false,
  parallaxOffset = 32,
  loading = 'lazy',
}: AnimatedImageProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallaxOffset, -parallaxOffset]);

  const imgClass = [
    'w-full h-full object-cover select-none',
    kenBurns && !reduceMotion ? 'animate-ken-burns-soft origin-center scale-110' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const image = (
    <img
      src={src}
      alt={alt}
      className={imgClass}
      referrerPolicy="no-referrer"
      loading={loading}
    />
  );

  if (parallax && !reduceMotion) {
    return (
      <div ref={ref} className="overflow-hidden w-full h-full">
        <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
          {image}
        </motion.div>
      </div>
    );
  }

  return <div className="overflow-hidden w-full h-full">{image}</div>;
}

interface FloatingFrameProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FloatingFrame({ children, className = '', delay = 0 }: FloatingFrameProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`${!reduceMotion ? 'animate-float-gentle' : ''} ${className}`}
      style={!reduceMotion ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

interface ShimmerOverlayProps {
  className?: string;
}

export function ShimmerOverlay({ className = '' }: ShimmerOverlayProps) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 animate-shimmer-pass bg-gradient-to-r from-transparent via-cream/20 to-transparent w-1/2" />
    </div>
  );
}
