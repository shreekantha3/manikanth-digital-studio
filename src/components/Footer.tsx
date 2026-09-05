import { Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react'
import { site, whatsappLink } from '../data/site'

const NAV = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Portfolio',  href: '#portfolio' },
  { label: 'Process',    href: '#process' },
  { label: 'Contact',    href: '#contact' },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="bg-charcoal-500 text-ivory"
      role="contentinfo"
    >
      <div className="container-editorial py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="font-serif text-3xl tracking-[0.18em] text-ivory">
              MANIKANTH
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.42em] text-ivory/60">
              Digital Studio
            </div>
            <p className="mt-8 max-w-sm text-ivory/65 text-sm leading-relaxed">
              A photography studio in Sindagi, Karnataka. Authentic moments,
              considered frames, photographs made to be kept.
            </p>
            <div className="mt-8 text-sm text-ivory/65 flex items-center gap-2">
              <MapPin size={14} strokeWidth={1.5} className="text-ivory/50" />
              {site.location.landmark}, {site.location.city}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.32em] text-ivory/50">
              Navigation
            </div>
            <nav
              className="mt-6 grid grid-cols-2 gap-y-3 gap-x-6"
              aria-label="Footer navigation"
            >
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-sm text-ivory/80 hover:text-champagne transition-colors"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.32em] text-ivory/50">
              Connect
            </div>
            <div className="mt-6 flex items-center gap-3">
              {site.social.instagram && (
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/80 hover:border-champagne hover:text-champagne transition-colors"
                >
                  <Instagram size={16} strokeWidth={1.5} />
                </a>
              )}
              {site.social.facebook && (
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/80 hover:border-champagne hover:text-champagne transition-colors"
                >
                  <Facebook size={16} strokeWidth={1.5} />
                </a>
              )}
              {site.contact.whatsappNumber && (
                <a
                  href={whatsappLink('Hi Manikanth Digital Studio, I would like to enquire.')}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/80 hover:border-champagne hover:text-champagne transition-colors"
                >
                  <MessageCircle size={16} strokeWidth={1.5} />
                </a>
              )}
              <a
                href={site.location.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Google Maps"
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/80 hover:border-champagne hover:text-champagne transition-colors"
              >
                <MapPin size={16} strokeWidth={1.5} />
              </a>

              {!site.social.instagram && !site.social.facebook && !site.contact.whatsappNumber && (
                <span className="text-sm text-ivory/50">
                  Social links will appear here once available.
                </span>
              )}
            </div>
            <a
              href={site.location.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-ivory/80 hover:text-champagne transition-colors"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.28em] text-ivory/50">
          <div>© {year} {site.brand.name}. All rights reserved.</div>
          <div>Sindagi · Karnataka · India</div>
        </div>
      </div>
    </footer>
  )
}
