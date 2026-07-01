import { motion } from 'motion/react';
import { Music, Disc, Youtube, DollarSign, Instagram, Facebook } from 'lucide-react';
import albumCoverImg from '../assets/images/eric/Render Apple Music.jpg';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

interface CTAProps {
  onOpenVideo: (url: string, title: string) => void;
  allowOptionalCookies?: boolean;
}

const FEATURED_VIDEO_URL = 'https://youtu.be/P-gJXrZfe0E';

export default function CTA({ onOpenVideo, allowOptionalCookies = false }: CTAProps) {
  const platforms = [
    {
      name: 'Choose Your Price',
      icon: <DollarSign className="w-5 h-5 text-midnight-deeper" />,
      label: 'Support Eric directly via PayPal',
      url: 'https://www.paypal.com/ncp/payment/2DC7638CN9YM2',
      cta: 'Choose Your Price',
      primary: true,
      external: true,
    },
    {
      name: 'The Love Is Here Visual Experience',
      icon: <Youtube className="w-5 h-5 text-[#FF0000]" />,
      label: 'Featured video — plays right here',
      videoUrl: 'https://youtu.be/P-gJXrZfe0E',
      videoTitle: 'The Love Is Here Visual Experience',
      cta: 'Watch Now',
      color: 'hover:border-[#FF0000]/40 hover:bg-[#FF0000]/5',
    },
    {
      name: 'ericgray.vercel.app',
      icon: <Music className="w-5 h-5 text-amber-gold" />,
      label: 'Previous album — streaming links & full catalog',
      url: 'https://ericgray.vercel.app/',
      cta: 'Visit Site',
      color: 'hover:border-amber-gold/40 hover:bg-amber-gold/5',
      external: true,
    },
    {
      name: 'Apple Music',
      icon: <Disc className="w-5 h-5 text-[#FC3C44]" />,
      label: 'Coming soon to all platforms',
      url: 'https://www.ericgraymusician.com',
      cta: 'Coming Soon',
      color: 'hover:border-[#FC3C44]/40 hover:bg-[#FC3C44]/5',
      external: true,
    },
    {
      name: 'Featured On Elastic Stage',
      icon: <Music className="w-5 h-5 text-amber-gold" />,
      label: 'Read the feature',
      url: 'https://elasticstage.com/ericgray',
      cta: 'Read More',
      color: 'hover:border-amber-gold/40 hover:bg-amber-gold/5',
      external: true,
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
    { label: 'Video 4', url: 'https://youtu.be/hTVL6Bbf35E' },
    { label: 'Video 5', url: 'https://youtu.be/xGepmUSmf_o' },
  ];

  const platformRowClass = (primary?: boolean, color?: string) =>
    `focus-ring flex items-center justify-between p-4 min-h-[44px] rounded-sm border transition-[transform,background-color,border-color,box-shadow,filter] duration-300 cursor-pointer w-full text-left ${
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
                    <div className="flex items-center gap-3">
                      {platform.icon}
                      <div className="flex flex-col">
                        <span className={`font-sans text-sm font-semibold tracking-wide ${platform.primary ? 'text-midnight-deeper' : 'text-cream'}`}>
                          {platform.name}
                        </span>
                        <span className={`font-sans text-xs ${platform.primary ? 'text-midnight-deeper/70' : 'text-cream/50'} line-clamp-2 sm:line-clamp-1`}>
                          {platform.label}
                        </span>
                      </div>
                    </div>
                    <span className={`font-sans text-xs tracking-wider uppercase font-medium flex-shrink-0 ${platform.primary ? 'text-midnight-deeper/80' : 'text-amber-gold'}`}>
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
                  src="https://www.youtube.com/embed/P-gJXrZfe0E"
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
                    Accept cookies to play embedded videos here, or watch directly on YouTube.
                  </p>
                  <button
                    type="button"
                    onClick={() => onOpenVideo(FEATURED_VIDEO_URL, 'The Love Is Here Visual Experience')}
                    className="focus-ring relative z-10 min-h-[44px] rounded-sm bg-amber-gold px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-midnight-deeper transition-[background-color] duration-300 hover:bg-amber-honey"
                  >
                    Watch on YouTube
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
