/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { Track } from './types';
import Nav from './components/Nav';
import Hero from './components/Hero';
import CredentialStrip from './components/CredentialStrip';
import About from './components/About';
import Spotlight from './components/Spotlight';
import Gallery from './components/Gallery';
import Album from './components/Album';
import Experience from './components/Experience';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import VideoModal, { getYouTubeId } from './components/VideoModal';
import CookieBanner from './components/CookieBanner';
import { allowsOptionalCookies, getCookieConsent } from './utils/cookieConsent';
import { scrollToSection } from './utils/scroll';
import workingOnIt from './assets/tracks/Working On It (Edited Version).mp3';
import letsGoOutTonight from './assets/tracks/Let\'s Go Out Tonight (Edited Version).mp3';

const tracks: Track[] = [
  {
    id: 'working-on-it',
    title: 'Working On It',
    duration: '3:20',
    durationSec: 200,
    url: workingOnIt,
    subtitle: 'Honesty, grace, and the courage to grow',
    lyricsQuote: "I'm not perfect, I'm working on it.",
    writer: 'Eric Gray',
  },
  {
    id: 'lets-go-out-tonight',
    title: "Let's Go Out Tonight",
    duration: '3:13',
    durationSec: 193,
    url: letsGoOutTonight,
    subtitle: 'A soulful invitation to step out and feel alive',
    lyricsQuote: 'Leave the weight behind — tonight is ours.',
    writer: 'Eric Gray',
  },
];

type ActiveVideo = { url: string; title: string };

export default function App() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeVideo, setActiveVideo] = useState<ActiveVideo | null>(null);
  const [optionalCookiesAllowed, setOptionalCookiesAllowed] = useState(
    () => allowsOptionalCookies(getCookieConsent()),
  );

  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHovering, setCursorHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollRafRef = useRef(0);

  const openVideo = useCallback((url: string, title: string) => {
    if (getYouTubeId(url)) setActiveVideo({ url, title });
  }, []);

  const closeVideo = useCallback(() => setActiveVideo(null), []);

  const dockVisible = isSticky || isPlaying;

  useEffect(() => {
    document.documentElement.classList.toggle('audio-dock-open', dockVisible);
    return () => document.documentElement.classList.remove('audio-dock-open');
  }, [dockVisible]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onPointerMove = (e: PointerEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.tagName === 'A' ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        target.closest('input[type="range"]')
      ) {
        setCursorHovering(true);
      } else {
        setCursorHovering(false);
      }
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('mouseover', handleMouseOver);

    const handleScroll = () => {
      if (scrollRafRef.current) return;
      scrollRafRef.current = requestAnimationFrame(() => {
        const albumSection = document.getElementById('album');
        if (albumSection) {
          const bounds = albumSection.getBoundingClientRect();
          setIsSticky(bounds.top < window.innerHeight);
        }
        scrollRafRef.current = 0;
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
    };
  }, []);

  const handleListenNow = () => {
    setIsPlaying(true);
    scrollToSection('album');
  };

  const handleBuyNow = () => {
    scrollToSection('cta');
  };

  return (
    <div className={`relative min-h-screen selection:bg-amber-gold/30 selection:text-cream ${
      cursorHovering ? 'cursor-hovering' : ''
    }`}>
      <audio ref={audioRef} preload="auto" className="hidden" />

      {!isMobile && (
        <>
          <div
            className="custom-cursor"
            style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
          />
          <div
            className="custom-cursor-ring"
            style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
          />
        </>
      )}

      <Nav />

      <Hero onListenNowClick={handleListenNow} onBuyClick={handleBuyNow} />

      <Spotlight onOpenVideo={openVideo} />

      <CredentialStrip />

      <About />

      <Album
        tracks={tracks}
        currentTrackIndex={currentTrackIndex}
        setCurrentTrackIndex={setCurrentTrackIndex}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

      <CTA onOpenVideo={openVideo} allowOptionalCookies={optionalCookiesAllowed} />

      <Gallery />

      <Experience />

      <Contact />

      <Footer />

      <AudioPlayer
        tracks={tracks}
        currentTrackIndex={currentTrackIndex}
        setCurrentTrackIndex={setCurrentTrackIndex}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        isSticky={isSticky}
      />

      <VideoModal
        videoId={activeVideo ? getYouTubeId(activeVideo.url) : null}
        title={activeVideo?.title}
        youtubeUrl={activeVideo?.url}
        onClose={closeVideo}
      />

      <CookieBanner
        audioDockOpen={dockVisible}
        onConsentChange={(consent) => setOptionalCookiesAllowed(allowsOptionalCookies(consent))}
      />
    </div>
  );
}
