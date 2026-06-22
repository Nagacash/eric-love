import React, { useEffect, useState, useRef, RefObject } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Flame } from 'lucide-react';
import { Track } from '../types';
import albumArt from '../assets/images/eric/Render Apple Music.jpg';

interface AudioPlayerProps {
  tracks: Track[];
  currentTrackIndex: number;
  setCurrentTrackIndex: (idx: number) => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  audioRef: RefObject<HTMLAudioElement | null>;
  isSticky: boolean;
}

export default function AudioPlayer({
  tracks,
  currentTrackIndex,
  setCurrentTrackIndex,
  isPlaying,
  setIsPlaying,
  audioRef,
  isSticky
}: AudioPlayerProps) {
  const currentTrack = tracks[currentTrackIndex];
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.log("Audio playback was prevented: ", err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex, audioRef, setIsPlaying]);

  useEffect(() => {
    if (!audioRef.current) return;
    
    audioRef.current.src = currentTrack.url;
    audioRef.current.load();
    
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleDurationChange = () => {
      setDuration(audio.duration || currentTrack.durationSec);
    };

    const handleEnded = () => {
      if (currentTrackIndex < tracks.length - 1) {
        setCurrentTrackIndex(currentTrackIndex + 1);
      } else {
        setCurrentTrackIndex(0);
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('loadedmetadata', handleDurationChange);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('loadedmetadata', handleDurationChange);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex, tracks, setCurrentTrackIndex, setIsPlaying]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrev = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    } else {
      setCurrentTrackIndex(tracks.length - 1);
    }
    setIsPlaying(true);
  };

  const handleNext = () => {
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      setCurrentTrackIndex(0);
    }
    setIsPlaying(true);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (timeInSec: number) => {
    if (isNaN(timeInSec)) return "0:00";
    const minutes = Math.floor(timeInSec / 60);
    const seconds = Math.floor(timeInSec % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressMax = duration || currentTrack.durationSec;
  const progressPercent = ((currentTime / progressMax) * 100) || 0;

  return (
    <AnimatePresence>
      {(isSticky || isPlaying) && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className="fixed bottom-0 left-0 right-0 z-50 px-3 sm:px-4 pt-2 safe-area-bottom bg-gradient-to-t from-midnight-deeper via-midnight/95 to-midnight/90 border-t border-amber-gold/20 backdrop-blur-md shadow-2xl"
        >
          <div className="max-w-6xl mx-auto flex flex-col gap-3 md:gap-4">
            <div className="w-full flex items-center gap-2 sm:gap-3">
              <span className="text-[10px] font-mono text-amber-sunset/70 w-9 sm:w-10 text-right select-none flex-shrink-0">
                {formatTime(currentTime)}
              </span>
              <div className="relative flex-1 min-w-0 py-1">
                <input
                  type="range"
                  min="0"
                  max={progressMax}
                  step="0.1"
                  value={currentTime}
                  onChange={handleProgressChange}
                  className="focus-ring w-full h-1.5 sm:h-1 bg-cream/15 rounded-lg appearance-none cursor-pointer accent-amber-gold"
                  style={{
                    background: `linear-gradient(to right, #D4A04A 0%, #D4A04A ${progressPercent}%, rgba(245, 236, 217, 0.15) ${progressPercent}%, rgba(245, 236, 217, 0.15) 100%)`
                  }}
                  aria-label="Track progress"
                />
              </div>
              <span className="text-[10px] font-mono text-amber-sunset/70 w-9 sm:w-10 text-left select-none flex-shrink-0">
                {formatTime(duration) || currentTrack.duration}
              </span>
            </div>

            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-8 pb-1 md:pb-0">
              <div className="flex items-center gap-3 min-w-0 w-full md:w-auto md:min-w-[200px] md:max-w-[240px]">
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-sm overflow-hidden border border-amber-gold/20 flex-shrink-0 select-none">
                  <img
                    src={albumArt}
                    alt="Album Cover art thumbnail"
                    className={`w-full h-full object-cover ${isPlaying ? 'animate-[spin_20s_linear_infinite]' : ''}`}
                    referrerPolicy="no-referrer"
                  />
                  {isPlaying && (
                    <div className="absolute inset-x-0 bottom-0 bg-midnight-deeper/80 flex items-center justify-center gap-0.5 h-3">
                      <span className="w-0.5 h-2 bg-amber-gold rounded-full animate-[pulse_0.8s_infinite] origin-bottom" style={{ animationDelay: '0.1s' }} />
                      <span className="w-0.5 h-2 bg-amber-gold rounded-full animate-[pulse_0.8s_infinite] origin-bottom" style={{ animationDelay: '0.3s' }} />
                      <span className="w-0.5 h-2 bg-amber-gold rounded-full animate-[pulse_0.8s_infinite] origin-bottom" style={{ animationDelay: '0.5s' }} />
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1 flex flex-col">
                  <h4 className="font-serif text-sm font-medium text-cream truncate select-none leading-snug">
                    {currentTrack.title}
                  </h4>
                  <span className="font-sans text-[10px] text-amber-sunset/80 tracking-widest uppercase select-none leading-none mt-1 truncate">
                    Eric Gray
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 sm:gap-4 md:flex-1">
                <button
                  onClick={handlePrev}
                  className="focus-ring touch-target flex items-center justify-center p-2 text-cream/70 hover:text-amber-gold transition-colors cursor-pointer"
                  title="Previous Track"
                  aria-label="Previous track"
                >
                  <SkipBack className="w-5 h-5" />
                </button>

                <button
                  onClick={handlePlayPause}
                  className="focus-ring touch-target p-3 bg-amber-gold hover:bg-amber-honey text-midnight-deeper rounded-full transition-[background-color,transform] duration-300 transform active:scale-95 shadow-lg shadow-amber-gold/20 flex items-center justify-center cursor-pointer"
                  title={isPlaying ? "Pause" : "Play"}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                </button>

                <button
                  onClick={handleNext}
                  className="focus-ring touch-target flex items-center justify-center p-2 text-cream/70 hover:text-amber-gold transition-colors cursor-pointer"
                  title="Next Track"
                  aria-label="Next track"
                >
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>

              <div className="hidden md:flex items-center justify-end gap-3 min-w-[200px] relative">
                <div 
                  className="flex items-center gap-2"
                  onMouseEnter={() => setShowVolumeSlider(true)}
                  onMouseLeave={() => setShowVolumeSlider(false)}
                >
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="focus-ring touch-target flex items-center justify-center p-2 text-cream/70 hover:text-amber-gold transition-colors cursor-pointer"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <AnimatePresence>
                    {(showVolumeSlider || isDesktop) && (
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 80 }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden flex items-center pr-2"
                      >
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.05"
                          value={isMuted ? 0 : volume}
                          onChange={(e) => {
                            setVolume(parseFloat(e.target.value));
                            setIsMuted(false);
                          }}
                          className="w-full h-1 bg-cream/15 rounded-lg appearance-none cursor-pointer accent-amber-gold outline-none"
                          style={{
                            background: `linear-gradient(to right, #D4A04A 0%, #D4A04A ${(isMuted ? 0 : volume) * 100}%, rgba(245, 236, 217, 0.15) ${(isMuted ? 0 : volume) * 100}%, rgba(245, 236, 217, 0.15) 100%)`
                          }}
                          aria-label="Volume"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-amber-gold/5 border border-amber-gold/10 rounded-full select-none">
                  <Flame className="w-3 h-3 text-amber-gold animate-pulse" />
                  <span className="text-[9px] font-sans text-amber-gold tracking-widest uppercase">Hi-Fi Pure</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
