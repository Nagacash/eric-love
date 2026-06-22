export interface Track {
  id: string;
  title: string;
  duration: string;
  durationSec: number;
  url: string; // audio resource URL
  subtitle: string;
  writer: string;
  lyricsQuote: string;
}

export type ActiveSection = 'hero' | 'about' | 'album' | 'experience' | 'cta';
