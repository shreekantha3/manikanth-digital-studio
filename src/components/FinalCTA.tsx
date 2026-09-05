import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { site, whatsappLink } from '../data/site'

const BG =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=80'

export function FinalCTA() {
  const cta = whatsappLink('Hi Manikanth Digital Studio, I would like to book a shoot.')
  return (
    <section
      className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-charcoal-500"
      aria-label="Book a shoot"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={BG}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute inset-0 bg-charcoal-500/65" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(15,12,9,0.55) 0%, rgba(15,12,9,0.45) 50%, rgba(15,12,9,0.78) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative h-full flex items-center justify-center text-center">
        <div className="container-editorial">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="eyebrow text-ivory/80 justify-center"
          >
            Begin
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="display-lg mt-6 text-ivory max-w-4xl mx-auto"
          >
            Let’s turn moments{' '}
            <span className="italic">into memories.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="mt-8 max-w-xl mx-auto text-ivory/80"
          >
            Your next chapter deserves to be remembered beautifully.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            <a
              href={cta}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 bg-ivory text-charcoal text-[12px] uppercase tracking-[0.22em] hover:bg-champagne hover:text-charcoal transition-colors duration-500"
            >
              Book a Shoot
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
            <a
              href={site.location.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 border border-ivory/70 text-ivory text-[12px] uppercase tracking-[0.22em] hover:bg-ivory hover:text-charcoal transition-colors duration-500"
            >
              Visit the Studio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
