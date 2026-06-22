import { motion } from 'motion/react';
import { Play, Pause, Music } from 'lucide-react';
import { Track } from '../types';
import AlbumCoverCarousel from './AlbumCoverCarousel';

interface AlbumProps {
  tracks: Track[];
  currentTrackIndex: number;
  setCurrentTrackIndex: (idx: number) => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export default function Album({
  tracks,
  currentTrackIndex,
  setCurrentTrackIndex,
  isPlaying,
  setIsPlaying
}: AlbumProps) {
  const handleTrackSelect = (index: number) => {
    if (currentTrackIndex === index) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    }
  };

  return (
    <section 
      id="album" 
      className="scroll-section relative w-full min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 pb-36 md:pb-40 bg-midnight text-cream flex items-start md:items-center"
    >
      {/* Background radial soft light to make it look highly cinematic */}
      <div className="absolute inset-0 bg-radial-at-c from-midnight-deeper via-midnight to-midnight-deeper opacity-70 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Album Cover Art gallery piece */}
        <div className="col-span-1 lg:col-span-5 flex flex-col items-center justify-center lg:sticky lg:top-24 lg:pb-36 w-full">
          <div className="mb-5 w-full text-center sm:text-left select-none order-first">
            <h3 className="font-serif text-2xl font-semibold text-cream tracking-tight mb-1">
              Love Is Here
            </h3>
            <p className="font-sans text-xs tracking-widest text-amber-gold uppercase font-medium">
              A Studio Album by Eric Gray · Out Now 2026
            </p>
          </div>

          <AlbumCoverCarousel />
        </div>

        {/* Right Side: High-end Interactive Tracklist */}
        <div className="col-span-1 lg:col-span-7">
          <div className="mb-10 text-left">
            <span className="text-amber-gold font-sans uppercase tracking-[0.25em] text-xs font-semibold block mb-3">
              The Tracklist
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-cream tracking-tight font-semibold leading-none">
              Press Play &amp; Feel It
            </h2>
            <div className="w-20 h-[2px] bg-amber-gold mt-4" />
          </div>

          <div className="space-y-6">
            {tracks.map((track, idx) => {
              const isSelected = currentTrackIndex === idx;
              const isPlayingCurrent = isSelected && isPlaying;

              return (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  onClick={() => handleTrackSelect(idx)}
                  className={`group relative p-5 rounded-sm border transition-[background-color,border-color,box-shadow] duration-300 cursor-pointer ${
                    isSelected 
                      ? 'bg-amber-gold/5 border-amber-gold/40 shadow-[0_4px_25px_rgba(214,160,74,0.05)]' 
                      : 'bg-cream-warm/2 border-cream/5 hover:bg-cream-warm/5 hover:border-amber-gold/20'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start md:items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      {/* Song sequence badge with active triggers */}
                      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xs bg-midnight-deeper border border-cream/10 text-xs font-mono text-amber-sunset">
                        <span className="group-hover:opacity-0 transition-opacity z-10 font-bold">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-amber-gold z-20">
                          {isPlayingCurrent ? (
                            <Pause className="w-4 h-4 fill-current" />
                          ) : (
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                          )}
                        </div>
                      </div>

                      <div>
                        {/* Title & Animated Gold Underline on hover / active */}
                        <div className="relative inline-block">
                          <h3 className={`font-serif text-base sm:text-lg font-medium leading-tight ${
                            isSelected ? 'text-amber-gold' : 'text-cream group-hover:text-amber-gold transition-colors'
                          }`}>
                            {track.title}
                          </h3>
                          {/* Animated underline */}
                          <span className={`absolute bottom-0 left-0 h-[1.5px] bg-amber-gold transition-[width] duration-500 ${
                            isSelected ? 'w-full' : 'w-0 group-hover:w-full'
                          }`} />
                        </div>

                        <p className="font-sans text-xs text-amber-sunset/65 font-medium mt-1 uppercase tracking-wider">
                          {track.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 flex-shrink-0 self-end sm:self-auto">
                      {isPlayingCurrent && (
                        <div className="hidden sm:flex items-center gap-1">
                          <span className="w-1 h-3.5 bg-amber-gold rounded-full animate-[pulse_0.8s_infinite] origin-bottom" style={{ animationDelay: '0.1s' }} />
                          <span className="w-1 h-3.5 bg-amber-gold rounded-full animate-[pulse_0.8s_infinite] origin-bottom" style={{ animationDelay: '0.3s' }} />
                          <span className="w-1 h-3.5 bg-amber-gold rounded-full animate-[pulse_0.8s_infinite] origin-bottom" style={{ animationDelay: '0.5s' }} />
                        </div>
                      )}
                      <span className="font-mono text-xs text-amber-sunset/70 select-none">
                        {track.duration}
                      </span>
                    </div>
                  </div>

                  {/* Editorial lyrics quote + writer credit that slides open when active */}
                  <div className={`mt-4 pt-4 border-t border-cream/5 transition-[max-height,opacity] duration-500 overflow-hidden ${
                    isSelected ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}>
                    <p className="font-hand text-2xl text-amber-sunset/95 leading-none mb-1">
                      "{track.lyricsQuote}"
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Music className="w-3 h-3 text-amber-gold/60" />
                      <span className="font-sans text-xs text-cream/50 uppercase tracking-widest leading-none">
                        Written by {track.writer}
                      </span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
