import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services, type Service } from '../data/services'
import { whatsappLink } from '../data/site'

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const reversed = index % 2 === 1

  return (
    <article
      className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-center py-20 sm:py-24 border-t border-charcoal/10 first:border-t-0"
      aria-labelledby={`service-${service.id}-title`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className={[
          'lg:col-span-6 relative',
          reversed ? 'lg:order-2' : '',
        ].join(' ')}
      >
        <div className="relative aspect-[4/5] frame">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="frame-media"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div
          className={[
            'mt-5 font-serif italic text-charcoal-50 text-sm',
            reversed ? 'text-left lg:text-right' : '',
          ].join(' ')}
        >
          “{service.caption}”
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={['lg:col-span-6', reversed ? 'lg:order-1' : ''].join(' ')}
      >
        <div className="flex items-baseline gap-6">
          <span className="font-serif text-3xl text-champagne-deep/80">{service.number}</span>
          <span className="block h-px flex-1 bg-charcoal/20" />
        </div>

        <h3
          id={`service-${service.id}-title`}
          className="display-md mt-6"
        >
          {service.title}
        </h3>
        <p className="body mt-6 max-w-md">{service.description}</p>

        <a
          href={whatsappLink(
            `Hi Manikanth Digital Studio, I am interested in your ${service.title} service.`,
          )}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.24em] text-charcoal hover:text-champagne transition-colors duration-300"
        >
          Enquire about {service.title.toLowerCase()}
          <ArrowUpRight size={14} strokeWidth={1.5} />
        </a>
      </motion.div>
    </article>
  )
}

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-ivory-50 py-28 sm:py-36 lg:py-44"
      aria-label="Photography services"
    >
      <div className="container-editorial">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-8 lg:gap-12 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            <span className="eyebrow">What We Photograph</span>
            <h2 className="display-lg mt-6">
              Photography for <span className="italic">every chapter.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="body max-w-md">
              From the largest celebration to the smallest milestone, every
              session is shaped around the people in front of the camera.
            </p>
          </motion.div>
        </div>

        <div>
          {services.map((service, i) => (
            <ServiceRow key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
