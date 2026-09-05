import { motion } from 'framer-motion'
import { MessageCircle, NotebookPen, Camera, Image as ImageIcon } from 'lucide-react'

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Connect',
    body: 'Tell us about your event, your vision, and the moments that matter most to you.',
  },
  {
    icon: NotebookPen,
    title: 'Plan',
    body: 'We take time to understand the people, the rituals and the details that define your day.',
  },
  {
    icon: Camera,
    title: 'Capture',
    body: 'On the day, we move with intention — quietly, attentively, never obtrusively.',
  },
  {
    icon: ImageIcon,
    title: 'Relive',
    body: 'Your photographs arrive as a considered collection — images to revisit for years.',
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="relative bg-ivory-50 py-28 sm:py-36 lg:py-44 overflow-hidden"
      aria-label="How we work"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-8 lg:gap-12 mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            <span className="eyebrow">How we work</span>
            <h2 className="display-lg mt-6">
              The journey, <span className="italic">step by step.</span>
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
              A calm, considered process — from the first message to the
              final photograph delivered.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-charcoal/15"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {STEPS.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="relative z-10 w-[72px] h-[72px] rounded-full bg-ivory border border-charcoal/15 flex items-center justify-center text-charcoal-100">
                    <Icon size={26} strokeWidth={1.25} />
                  </div>
                  <div className="mt-2 font-mono text-[11px] tracking-[0.24em] text-champagne-deep">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-3 font-serif text-3xl text-charcoal">
                    {s.title}
                  </h3>
                  <p className="mt-4 body-sm max-w-xs">{s.body}</p>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
