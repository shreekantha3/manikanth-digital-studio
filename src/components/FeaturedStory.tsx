import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const FEATURED_IMAGE =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=80'

export function FeaturedStory() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.18])

  return (
    <section
      ref={ref}
      className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-charcoal-500"
      aria-label="Featured story — weddings"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
        aria-hidden="true"
      >
        <img
          src={FEATURED_IMAGE}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      <div className="absolute inset-0 bg-charcoal-500/55" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(15,12,9,0.35) 0%, rgba(15,12,9,0.25) 50%, rgba(15,12,9,0.65) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative h-full flex items-center justify-center text-center">
        <div className="container-editorial">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="eyebrow text-ivory/80 justify-center"
          >
            Featured · Weddings
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="display-lg mt-6 text-ivory max-w-4xl mx-auto"
          >
            A wedding is more than a day.
            <br />
            <span className="italic">It’s a story.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="mt-8 max-w-xl mx-auto text-ivory/80"
          >
            Every ritual, every glance, every small moment — composed
            together as the story of your celebration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-10 flex items-center justify-center"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 px-7 py-4 border border-ivory/70 text-ivory text-[12px] uppercase tracking-[0.22em] hover:bg-ivory hover:text-charcoal transition-colors duration-500"
            >
              View Wedding Stories
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
