import { motion } from 'framer-motion'
import { testimonialFallback, testimonials } from '../data/testimonials'

export function Testimonials() {
  const hasReal = testimonials.length > 0

  return (
    <section
      className="relative bg-ivory py-28 sm:py-36 lg:py-44"
      aria-label="Client words"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-8 lg:gap-12 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            <span className="eyebrow">{testimonialFallback.eyebrow}</span>
            <h2 className="display-lg mt-6">
              {testimonialFallback.heading.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="italic">{testimonialFallback.heading.split(' ').slice(-1)}.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-5 lg:pt-12"
          >
            <p className="body max-w-md">
              {testimonialFallback.body}
            </p>
          </motion.div>
        </div>

        {hasReal ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal/10 border border-charcoal/10">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.05 }}
                className="bg-ivory p-10 lg:p-14"
              >
                <blockquote className="font-serif text-2xl lg:text-3xl leading-snug text-charcoal">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 text-[11px] uppercase tracking-[0.28em] text-charcoal-50">
                  {t.name} · {t.context}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="border border-charcoal/10 p-10 sm:p-14 lg:p-20 text-center"
          >
            <div className="font-serif text-2xl lg:text-3xl text-charcoal-100 italic">
              “A photograph is a feeling, preserved.”
            </div>
            <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-charcoal-50">
              Verified client words will appear here.
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
