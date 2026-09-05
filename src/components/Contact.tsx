import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle, Navigation, Mail, Clock } from 'lucide-react'
import { phoneTel, site, whatsappLink } from '../data/site'

const HOURS_TODAY_LABEL: Record<string, string> = {
  Monday: 'Mon', Tuesday: 'Tue', Wednesday: 'Wed', Thursday: 'Thu',
  Friday: 'Fri', Saturday: 'Sat', Sunday: 'Sun',
}

export function Contact() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  const todayHours = site.businessHours.find((h) => h.day === today)

  return (
    <section
      id="contact"
      className="relative bg-ivory-50 py-28 sm:py-36 lg:py-44"
      aria-label="Contact and location"
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
            <span className="eyebrow">Visit · Call · Write</span>
            <h2 className="display-lg mt-6">
              Let’s create something{' '}
              <span className="italic">you’ll keep forever.</span>
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
              Reach out to discuss your event, your session or any question
              at all — we usually respond within a day.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="lg:col-span-5"
          >
            <div className="font-serif text-3xl text-charcoal">
              {site.brand.name}
            </div>
            <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-charcoal-50">
              {site.location.landmark}
            </div>
            <div className="mt-6 body max-w-sm">
              Sindagi, {site.location.state} {site.location.postalCode}, {site.location.country}
            </div>

            <div className="mt-12 space-y-5">
              <a
                href={site.location.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 text-charcoal hover:text-champagne transition-colors"
              >
                <span className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center group-hover:border-champagne/60 transition-colors">
                  <Navigation size={16} strokeWidth={1.5} />
                </span>
                <span className="text-[13px] uppercase tracking-[0.22em]">Get Directions</span>
              </a>

              <a
                href={whatsappLink('Hi Manikanth Digital Studio, I would like to enquire about a shoot.')}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 text-charcoal hover:text-champagne transition-colors"
              >
                <span className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center group-hover:border-champagne/60 transition-colors">
                  <MessageCircle size={16} strokeWidth={1.5} />
                </span>
                <span className="text-[13px] uppercase tracking-[0.22em]">WhatsApp</span>
              </a>

              {site.contact.phoneDisplay ? (
                <a
                  href={phoneTel()}
                  className="group flex items-center gap-4 text-charcoal hover:text-champagne transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center group-hover:border-champagne/60 transition-colors">
                    <Phone size={16} strokeWidth={1.5} />
                  </span>
                  <span className="text-[13px] uppercase tracking-[0.22em]">
                    Call · {site.contact.phoneDisplay}
                  </span>
                </a>
              ) : (
                <div className="flex items-center gap-4 text-charcoal-50">
                  <span className="w-10 h-10 rounded-full border border-charcoal/15 flex items-center justify-center">
                    <Phone size={16} strokeWidth={1.5} />
                  </span>
                  <span className="text-[12px] uppercase tracking-[0.22em]">
                    Phone number coming soon
                  </span>
                </div>
              )}

              {site.contact.email ? (
                <a
                  href={`mailto:${site.contact.email}`}
                  className="group flex items-center gap-4 text-charcoal hover:text-champagne transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center group-hover:border-champagne/60 transition-colors">
                    <Mail size={16} strokeWidth={1.5} />
                  </span>
                  <span className="text-[13px] uppercase tracking-[0.22em]">{site.contact.email}</span>
                </a>
              ) : null}
            </div>

            {/* Hours */}
            <div className="mt-14 border-t border-charcoal/15 pt-10">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-charcoal-50">
                <Clock size={14} strokeWidth={1.5} />
                Studio Hours
                {todayHours && (
                  <span className="ml-auto text-champagne-deep normal-case tracking-normal font-serif italic text-sm">
                    Today: {todayHours.open}{todayHours.close ? ` – ${todayHours.close}` : ''}
                  </span>
                )}
              </div>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-charcoal-100">
                {site.businessHours.map((h) => {
                  const isToday = h.day === today
                  return (
                    <li
                      key={h.day}
                      className={[
                        'flex items-baseline justify-between border-b border-charcoal/10 py-2',
                        isToday ? 'text-charcoal' : 'text-charcoal-50',
                      ].join(' ')}
                    >
                      <span className="font-serif text-base">{HOURS_TODAY_LABEL[h.day] ?? h.day}</span>
                      <span className="font-mono text-xs">
                        {h.open}{h.close ? ` – ${h.close}` : ''}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[4/3] lg:aspect-[5/4] frame border border-charcoal/10">
              <iframe
                title="Manikanth Digital Studio — Google Maps"
                src={site.location.googleMapsEmbedUrl}
                className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-charcoal-50">
              <MapPin size={12} strokeWidth={1.5} />
              {site.location.landmark}, {site.location.city}, {site.location.state} {site.location.postalCode}
            </div>
            <a
              href={site.location.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-charcoal hover:text-champagne transition-colors"
            >
              Open in Google Maps →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
