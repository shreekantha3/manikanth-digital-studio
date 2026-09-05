import { motion } from 'framer-motion'

const INTRO_IMAGE =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80'

export function Intro() {
  return (
    <section
      id="about"
      className="relative bg-ivory py-28 sm:py-36 lg:py-44 overflow-hidden"
      aria-label="About the studio"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-16 items-center">
          {/* Editorial image (left) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] frame"
            >
              <img
                src={INTRO_IMAGE}
                alt="An intimate wedding moment framed by soft light"
                className="frame-media"
                loading="lazy"
                decoding="async"
              />
              <span
                className="absolute inset-0 pointer-events-none ring-1 ring-charcoal/10"
                aria-hidden="true"
              />
            </motion.div>

            {/* Caption beneath image */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="mt-6 max-w-xs"
            >
              <div className="text-[10px] uppercase tracking-[0.32em] text-charcoal-50">
                Est. in Sindagi
              </div>
              <div className="mt-2 font-serif text-lg text-charcoal-100 leading-snug">
                A photography studio built around the moments that stay with you.
              </div>
            </motion.div>
          </div>

          {/* Text (right) */}
          <div className="lg:col-span-6 lg:pl-6">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="eyebrow"
            >
              Our Philosophy
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="display-lg mt-6"
            >
              Moments pass.
              <br />
              <span className="italic font-light text-champagne-deep">Memories stay.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="mt-10 max-w-xl space-y-6"
            >
              <p className="body-lg">
                A photograph is a feeling, preserved. We work slowly, with
                care — listening first, then capturing the small gestures
                that turn into the photographs you keep for a lifetime.
              </p>
              <p className="body">
                From the laughter shared before a wedding ceremony to the
                quiet hush of a newborn’s first days, our approach is the
                same: gentle, present, attentive. We make space for the
                real moment to arrive — and then we hold it for you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-12 flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-charcoal-50"
            >
              <span className="block w-12 h-px bg-champagne" />
              Authentic · Timeless · Personal
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
