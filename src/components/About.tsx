import { motion, useReducedMotion } from 'motion/react';
import { Heart } from 'lucide-react';
import AnimatedImage, { FloatingFrame, ShimmerOverlay } from './AnimatedImage';
import portraitImg from '../assets/images/eric/_DSC8441.jpg';
import insetImg from '../assets/images/eric/IMG_4586.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative w-full bg-midnight text-cream scroll-section"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] blush-glow rounded-full blur-3xl opacity-52 pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] golden-glow rounded-full blur-3xl opacity-38 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: reduceMotion ? 0.15 : 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md"
            >
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-[var(--shadow-portrait)] ring-1 ring-inset ring-black/10 border border-cream/5 group">
                <AnimatedImage
                  src={portraitImg}
                  alt="Eric Gray with acoustic guitar, warm and welcoming smile"
                  parallax
                  parallaxOffset={28}
                  kenBurns
                  loading="eager"
                  className="group-hover:brightness-105 transition-[filter] duration-700"
                />
                <ShimmerOverlay />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />
              </div>

              <FloatingFrame delay={0.6} className="hidden md:block absolute -bottom-6 -right-2 lg:-right-8 w-28 lg:w-44 aspect-[4/5] rounded-sm overflow-hidden shadow-[var(--shadow-card)] ring-1 ring-inset ring-black/10 border-2 border-midnight">
                <div className="relative w-full h-full overflow-hidden">
                  <AnimatedImage
                    src={insetImg}
                    alt="Eric Gray in the studio with guitar"
                    kenBurns
                  />
                </div>
              </FloatingFrame>
            </motion.div>
          </div>

          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="text-amber-gold font-sans uppercase tracking-[0.25em] text-xs font-semibold mb-4"
            >
              The Artist
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream tracking-tight font-semibold mb-8 leading-tight"
            >
              Bridging genres, generations, and real life.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              className="font-sans text-base leading-relaxed text-cream/85 space-y-5 max-w-prose"
            >
              <p>
                Eric Gray is a veteran independent producer, artist, and smooth jazz guitarist whose career spans the United States and Europe. With a foundation rooted in hip-hop and rap production, live performance, and musicianship, he continues to create music that bridges genres, generations, and real-life experience.
              </p>
              <p>
                Based in New York and shaped by time lived in Los Angeles and Europe, Eric&apos;s career reflects both the message-driven core of hip-hop, R&amp;B, and soul — and the refined musicianship of smooth jazz. Known for his contributions to the evolution of hip-hop, rap, and R&amp;B across independent scenes, Gray brings that same lyrical discipline and musical depth into a more refined, emotionally grounded sound.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="ornament-divider py-4">
          <Heart className="w-3 h-3 text-amber-gold/50 fill-amber-gold/20 flex-shrink-0" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 section-pad pt-0">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:max-w-none lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">

          <div className="lg:col-span-5 lg:sticky lg:top-28 mb-10 lg:mb-0">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-amber-gold font-sans uppercase tracking-[0.25em] text-xs font-semibold block mb-4"
            >
              The Album
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-serif text-4xl sm:text-5xl text-cream tracking-tight font-semibold leading-tight mb-6"
            >
              Where spoken word, rhythm, and soul meet.
            </motion.h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-amber-gold to-amber-sunset mx-auto lg:mx-0" />
          </div>

          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              className="font-sans text-base leading-relaxed text-cream/85 space-y-5 max-w-prose lg:max-w-none"
            >
              <p>
                <span className="font-serif text-xl text-amber-gold italic">Love Is Here</span> sits at the intersection of R&amp;B, soul, and rap — where spoken word, rhythm, and social messaging meet soulful arrangements and guitar-driven musicianship. The album reflects a natural artistic progression, connecting the foundation of rap with the sophistication, emotional and social depth of contemporary soul and alternative R&amp;B.
              </p>
              <p>
                The lead focus track, <span className="font-semibold text-cream">&ldquo;Working On It,&rdquo;</span> sets the tone for the project with its central message of honesty and grace. Supported by a professionally filmed music video directed by Toma Nonoyama of Japan, the rollout emphasizes authenticity, consistency, and direct engagement with listeners across all platforms.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              className="mt-12 p-8 rounded-sm bg-midnight-deeper/60 border border-amber-gold/15 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-gold/30 to-transparent" />
              <span className="absolute -top-1 left-6 font-serif text-6xl text-amber-gold/25 select-none leading-none">&ldquo;</span>
              <p className="font-hand text-3xl sm:text-4xl text-amber-gold leading-snug pl-4">
                I&apos;m not perfect, I&apos;m working on it.
              </p>
              <p className="font-sans text-xs tracking-widest uppercase text-cream/65 mt-4 pl-4">
                — &ldquo;Working On It&rdquo; · Eric Gray
              </p>
              <p className="font-sans text-xs text-blush/80 mt-3 pl-4 italic">
                Video filmed &amp; directed by Toma Nonoyama, Japan
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
