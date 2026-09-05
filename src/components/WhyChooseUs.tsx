import { motion } from 'framer-motion'
import { Aperture, Hourglass, Heart, Sparkles } from 'lucide-react'

const REASONS = [
  {
    icon: Heart,
    title: 'Emotion First',
    body: 'We focus on genuine expressions and real moments — never forced, never rushed.',
  },
  {
    icon: Hourglass,
    title: 'Timeless Visuals',
    body: 'Images designed to remain meaningful years from now — not tied to a passing trend.',
  },
  {
    icon: Aperture,
    title: 'Personal Approach',
    body: 'Every celebration deserves its own visual story, built around the people in it.',
  },
  {
    icon: Sparkles,
    title: 'Attention to Detail',
    body: 'From composition to the final presentation, every frame is considered with care.',
  },
]

export function WhyChooseUs() {
  return (
    <section
      className="relative bg-ivory py-28 sm:py-36 lg:py-44"
      aria-label="Why choose us"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            <span className="eyebrow">Why work with us</span>
            <h2 className="display-lg mt-6">
              A different kind of <span className="italic">attention.</span>
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
              A small studio with a considered process. We don’t run
              through sessions — we take the time to make something
              worth keeping.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10 border border-charcoal/10">
          {REASONS.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.08 }}
                className="bg-ivory p-8 sm:p-10 lg:p-12 flex flex-col h-full"
              >
                <Icon size={28} strokeWidth={1.25} className="text-champagne-deep" />
                <div className="mt-8 font-serif text-2xl text-charcoal">
                  {r.title}
                </div>
                <p className="mt-4 body-sm flex-1">{r.body}</p>
                <div className="mt-10 text-[10px] uppercase tracking-[0.32em] text-charcoal-50">
                  {String(i + 1).padStart(2, '0')} / {String(REASONS.length).padStart(2, '0')}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
