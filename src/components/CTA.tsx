import { motion } from 'motion/react';
import { Disc, Youtube, DollarSign, Instagram, Facebook } from 'lucide-react';
import albumCoverImg from '../assets/images/eric/Render Apple Music.jpg';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

interface CTAProps {
  onOpenVideo: (url: string, title: string) => void;
  allowOptionalCookies?: boolean;
}

const SMOOTH_WALKER_URL = 'https://youtu.be/P-gJXrZfe0E';
const LOVE_IS_HERE_VISUAL_URL = 'https://youtu.be/hTVL6Bbf35E';
const APPLE_MUSIC_URL = 'https://music.apple.com/us/album/love-is-here/6780270579';
const SPOTIFY_URL = 'https://open.spotify.com/album/2GTa9hFwwgUVP8I7m0qKWX?si=I6IaMiRkSVSaRUl4OLI7Gg';

export default function CTA({ onOpenVideo, allowOptionalCookies = false }: CTAProps) {
  const platforms = [
    {
      name: 'Support the Album - Choose Your Price',
      icon: <DollarSign className="w-5 h-5 text-midnight-deeper" />,
      label: 'Support Eric directly via PayPal',
      url: 'https://www.paypal.com/ncp/payment/2DC7638CN9YM2',
      cta: 'Choose Your Price',
      primary: true,
      external: true,
    },
    {
      name: 'Buy Album as Vinyl',
      icon: <Disc className="w-5 h-5 text-amber-gold" />,
      label: 'Love Is Here — vinyl on Elastic Stage',
      url: 'https://elasticstage.com/ericgray/releases/love-is-here-album',
      cta: 'Buy Vinyl',
      color: 'hover:border-amber-gold/40 hover:bg-amber-gold/5',
      external: true,
    },
    {
      name: 'Apple Music',
      icon: <Disc className="w-5 h-5 text-[#FC3C44]" />,
      label: 'Love Is Here — stream now',
      url: APPLE_MUSIC_URL,
      cta: 'Listen Now',
      color: 'hover:border-[#FC3C44]/40 hover:bg-[#FC3C44]/5',
      external: true,
    },
    {
      name: 'Spotify',
      icon: <SpotifyIcon className="w-5 h-5 text-[#1DB954]" />,
      label: 'Love Is Here — stream now',
      url: SPOTIFY_URL,
      cta: 'Listen Now',
      color: 'hover:border-[#1DB954]/40 hover:bg-[#1DB954]/5',
      external: true,
    },
    {
      name: 'The Love Is Here Visual Experience',
      icon: <Youtube className="w-5 h-5 text-[#FF0000]" />,
      label: 'Featured video — plays right here',
      videoUrl: LOVE_IS_HERE_VISUAL_URL,
      videoTitle: 'The Love Is Here Visual Experience',
      cta: 'Watch Now',
      color: 'hover:border-[#FF0000]/40 hover:bg-[#FF0000]/5',
    },
  ];

  const socials = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/ericgray_musician?igsh=OTFvYXJnMWw3NjM%3D&utm_source=qr',
      external: true,
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: 'https://www.facebook.com/ericgraymusician?mibextid=wwXIfr',
      external: true,
    },
    {
      name: 'TikTok',
      icon: <TikTokIcon className="w-5 h-5" />,
      url: 'https://www.tiktok.com/@userericgraymusician7',
      external: true,
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-5 h-5" />,
      videoUrl: 'https://youtu.be/2P3Z9bdR7K4',
      videoTitle: 'Working On It',
    },
  ];

  const videos = [
    { label: 'Working On It', url: 'https://youtu.be/2P3Z9bdR7K4' },
    { label: 'Video 2', url: 'https://youtu.be/c49neWVA9XQ' },
    { label: 'Smooth Walker', url: SMOOTH_WALKER_URL },
    { label: 'Video 5', url: 'https://youtu.be/xGepmUSmf_o' },
  ];

  const platformRowClass = (primary?: boolean, color?: string) =>
    `focus-ring flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between p-4 min-h-[44px] rounded-sm border transition-[transform,background-color,border-color,box-shadow,filter] duration-300 cursor-pointer w-full text-left ${
      primary
        ? 'bg-gradient-to-r from-amber-gold to-amber-sunset text-midnight-deeper border-transparent shadow-lg shadow-amber-gold/20 hover:brightness-105'
        : `bg-midnight-deeper border-cream/5 text-cream ${color ?? ''}`
    }`;

  return (
    <section
      id="cta"
      className="scroll-section section-pad section-pad-dock relative w-full px-4 sm:px-6 md:px-12 lg:px-24 bg-midnight text-cream flex items-center"
    >
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[400px] h-[400px] golden-glow rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] blush-glow rounded-full blur-3xl opacity-35 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">

          <div className="text-center mb-8 sm:mb-10">
            <span className="text-amber-gold font-sans uppercase tracking-[0.25em] text-xs font-semibold block mb-3">
              Stay Connected
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream tracking-tight font-semibold mb-4 leading-none text-balance px-2">
              Support the Music You Love
            </h2>
            <p className="font-sans text-base text-cream/75 max-w-lg mx-auto leading-relaxed">
              Every purchase and every share helps independent artistry thrive. Join Eric&apos;s community and be part of the journey.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-midnight border border-cream/5 rounded-sm p-6 sm:p-8 shadow-[var(--shadow-card)] max-w-4xl">

            <div className="col-span-1 md:col-span-4 flex justify-center">
              <motion.div
                whileHover={{ rotate: 1.5 }}
                transition={{ duration: 0.5 }}
                className="w-40 sm:w-48 aspect-square rounded-sm overflow-hidden shadow-[var(--shadow-portrait)] border border-amber-gold/20 relative ring-1 ring-inset ring-black/10"
              >
                <img
                  src={albumCoverImg}
                  alt="Eric Gray — Love Is Here album cover"
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-deeper/50 to-transparent pointer-events-none" />
              </motion.div>
            </div>

            <div className="col-span-1 md:col-span-8 flex flex-col gap-3">
              {platforms.map((platform) => {
                const inner = (
                  <>
                    <div className="flex items-start gap-3 min-w-0 w-full sm:flex-1">
                      <div className="mt-0.5 shrink-0">{platform.icon}</div>
                      <div className="flex min-w-0 flex-col gap-0.5">
                        <span
                          className={`font-sans text-sm font-semibold leading-snug tracking-wide ${
                            platform.primary ? 'text-midnight-deeper' : 'text-cream'
                          }`}
                        >
                          {platform.name}
                        </span>
                        <span
                          className={`font-sans text-xs leading-relaxed ${
                            platform.primary ? 'text-midnight-deeper/70' : 'text-cream/50'
                          }`}
                        >
                          {platform.label}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`font-sans text-[11px] sm:text-xs tracking-wider uppercase font-semibold shrink-0 leading-tight ${
                        platform.primary
                          ? 'hidden sm:inline sm:max-w-[9rem] sm:text-right text-midnight-deeper/90 sm:pl-2'
                          : 'self-end sm:self-auto sm:max-w-[9rem] sm:text-right text-amber-gold sm:pl-2'
                      }`}
                    >
                      {platform.cta}
                    </span>
                  </>
                );

                if ('videoUrl' in platform && platform.videoUrl) {
                  return (
                    <motion.button
                      key={platform.name}
                      type="button"
                      onClick={() => onOpenVideo(platform.videoUrl!, platform.videoTitle ?? platform.name)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={platformRowClass(false, platform.color)}
                    >
                      {inner}
                    </motion.button>
                  );
                }

                return (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={platformRowClass(platform.primary, platform.color)}
                  >
                    {inner}
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="mt-10 sm:mt-12 w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-cream/10 shadow-[var(--shadow-card)] bg-black">
              {allowOptionalCookies ? (
                <iframe
                  src={`https://www.youtube.com/embed/hTVL6Bbf35E`}
                  title="The Love Is Here Visual Experience"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-midnight-deeper p-6 text-center">
                  <img
                    src={albumCoverImg}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-35"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-deeper via-midnight-deeper/80 to-midnight-deeper/60" />
                  <p className="relative z-10 max-w-sm font-sans text-sm leading-relaxed text-cream/75">
                    Press play to watch in the on-site video player.
                  </p>
                  <button
                    type="button"
                    onClick={() => onOpenVideo(LOVE_IS_HERE_VISUAL_URL, 'The Love Is Here Visual Experience')}
                    className="focus-ring relative z-10 min-h-[44px] rounded-sm bg-amber-gold px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-midnight-deeper transition-[background-color] duration-300 hover:bg-amber-honey"
                  >
                    Watch Now
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-10 sm:mt-12 flex flex-col items-center gap-5 w-full max-w-4xl">
            <div className="w-full">
              <p className="font-sans text-xs tracking-widest uppercase text-cream/50 font-semibold text-center mb-4">
                Music Videos
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {videos.map((video) => (
                  <button
                    key={video.url}
                    type="button"
                    onClick={() => onOpenVideo(video.url, video.label)}
                    className="focus-ring font-sans text-xs px-4 py-2 min-h-[44px] flex items-center rounded-sm border border-cream/10 text-cream/70 hover:text-amber-gold hover:border-amber-gold/30 transition-[color,border-color,background-color] duration-300 cursor-pointer hover:bg-amber-gold/5"
                  >
                    {video.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full">
              <p className="font-sans text-xs tracking-widest uppercase text-cream/50 font-semibold text-center mb-4">
                Follow Eric Gray
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {socials.map((social) =>
                  social.videoUrl ? (
                    <motion.button
                      key={social.name}
                      type="button"
                      onClick={() => onOpenVideo(social.videoUrl!, social.videoTitle ?? social.name)}
                      whileHover={{ scale: 1.1 }}
                      className="focus-ring p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-midnight border border-cream/5 text-amber-gold rounded-full hover:text-cream hover:border-amber-gold/30 transition-[color,border-color,transform,background-color] duration-300 cursor-pointer shadow-sm"
                      title={`Watch on ${social.name}`}
                      aria-label={`Watch video on ${social.name}`}
                    >
                      {social.icon}
                    </motion.button>
                  ) : (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="focus-ring p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-midnight border border-cream/5 text-amber-gold rounded-full hover:text-cream hover:border-amber-gold/30 transition-[color,border-color,transform,background-color] duration-300 cursor-pointer shadow-sm"
                      title={social.name}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  )
                )}
              </div>
            </div>
          </div>

        </div>
      </section>
  );
}
