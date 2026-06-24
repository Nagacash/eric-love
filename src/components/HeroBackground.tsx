import { useState } from 'react';
import { useReducedMotion } from 'motion/react';
import heroBg from '../assets/images/eric/Render Apple Music.jpg';

/** Set to false to revert hero to static album art only. */
export const HERO_VIDEO_ENABLED = true;

const HERO_VIDEO_ID = '2P3Z9bdR7K4';

const heroVideoSrc = `https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&start=0`;

export default function HeroBackground() {
  const reduceMotion = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);
  const useVideo = HERO_VIDEO_ENABLED && !reduceMotion;

  return (
    <>
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover object-[36%_28%] sm:object-[48%_36%] select-none brightness-[0.75] transition-opacity duration-700 ${
          useVideo && videoReady ? 'opacity-0' : 'opacity-100'
        }`}
        referrerPolicy="no-referrer"
      />

      {useVideo && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <iframe
            src={heroVideoSrc}
            title=""
            tabIndex={-1}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 scale-[1.08] brightness-[0.78]"
            onLoad={() => setVideoReady(true)}
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-midnight-deeper/40 via-midnight/45 to-midnight-deeper/75 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight-deeper/52 via-transparent to-midnight-deeper/32 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.27)_100%)] pointer-events-none" />
    </>
  );
}
