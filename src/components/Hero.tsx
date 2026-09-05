import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, MapPin, ArrowUpRight } from 'lucide-react'
import { site, whatsappLink } from '../data/site'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=80'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // Subtle parallax — image zooms out a touch and translates as you scroll.
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.55])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])

  const cta = whatsappLink('Hi Manikanth Digital Studio, I would like to book a shoot.')

  // Stagger animation for headline lines.
  const lineVariants = {
    hidden: { y: '110%', opacity: 0 },
    show: (i: number) => ({
      y: '0%',
      opacity: 1,
      transition: {
        delay: 0.4 + i * 0.12,
        duration: 1.0,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.9 + i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-charcoal-500"
      aria-label="Hero"
    >
      {/* Background image with parallax + slow zoom */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 animate-slow-zoom">
          <img
            src={HERO_IMAGE}
            srcSet={`${HERO_IMAGE.replace('w=2400', 'w=900')} 900w, ${HERO_IMAGE.replace('w=2400', 'w=1400')} 1400w, ${HERO_IMAGE} 2400w`}
            sizes="100vw"
            alt=""
            className="w-full h-full object-cover"
            // The hero image must NOT be lazy-loaded — it is the LCP element.
            // @ts-expect-error fetchpriority is a valid HTML attribute
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </motion.div>

      {/* Cinematic overlay */}
      <motion.div
        className="absolute inset-0 overlay-cinema"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative h-full flex flex-col justify-end pb-20 sm:pb-24 lg:pb-28"
      >
        <div className="container-editorial w-full">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 text-ivory/80 text-[11px] uppercase tracking-[0.36em]"
          >
            <span className="block w-10 h-px bg-ivory/60" />
            {site.brand.name} · {site.location.city}
          </motion.div>

          {/* Headline */}
          <h1 className="display-xl mt-8 sm:mt-10 text-ivory max-w-5xl">
            <span className="block overflow-hidden">
              <motion.span
                custom={0}
                variants={lineVariants}
                initial="hidden"
                animate="show"
                className="block italic font-light"
              >
                Your story.
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                custom={1}
                variants={lineVariants}
                initial="hidden"
                animate="show"
                className="block"
              >
                Beautifully preserved.
              </motion.span>
            </span>
          </h1>

          {/* Supporting text */}
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
            className="mt-8 max-w-xl text-ivory/80 text-base sm:text-lg font-light leading-relaxed"
          >
            Capturing weddings, celebrations, portraits and the moments
            that quietly become memories.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <a
              href={cta}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 bg-ivory text-charcoal text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-champagne hover:text-charcoal transition-colors duration-500"
            >
              Book Your Shoot
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 px-7 py-4 border border-ivory/60 text-ivory text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-ivory hover:text-charcoal transition-colors duration-500"
            >
              Explore Our Work
            </a>
          </motion.div>

          {/* Location badge */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-14 flex items-center gap-2 text-ivory/70 text-[11px] uppercase tracking-[0.28em]"
          >
            <MapPin size={12} strokeWidth={1.5} />
            {site.location.landmark} · {site.location.city}, {site.location.state} {site.location.postalCode}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/70 hover:text-ivory transition-colors duration-300 flex flex-col items-center gap-3"
        aria-label="Scroll to introduction"
      >
        <span className="text-[10px] uppercase tracking-[0.32em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} strokeWidth={1.25} />
        </motion.span>
      </motion.a>
    </section>
  )
}
