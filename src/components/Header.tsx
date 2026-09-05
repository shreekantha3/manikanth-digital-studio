import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { site, whatsappLink } from '../data/site'

const NAV = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Portfolio',  href: '#portfolio' },
  { label: 'Experience', href: '#process' },
  { label: 'Contact',    href: '#contact' },
]

export function Header() {
  const scrolled = useScrollPosition(40)
  const [open, setOpen] = useState(false)

  // Close mobile menu when route hash changes (i.e. a link is clicked).
  useEffect(() => {
    const onHash = () => setOpen(false)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const cta = whatsappLink('Hi Manikanth Digital Studio, I would like to book a shoot.')

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-charcoal/10 py-3'
            : 'bg-transparent py-6',
        ].join(' ')}
      >
        <div className="container-editorial flex items-center justify-between">
          <a
            href="#home"
            aria-label="Manikanth Digital Studio — Home"
            className="group flex flex-col leading-none"
          >
            <span
              className={[
                'font-serif text-[20px] sm:text-[22px] tracking-[0.18em] transition-colors duration-300',
                scrolled ? 'text-charcoal' : 'text-ivory',
              ].join(' ')}
            >
              MANIKANTH
            </span>
            <span
              className={[
                'mt-1 text-[10px] uppercase tracking-[0.42em] transition-colors duration-300',
                scrolled ? 'text-charcoal-50' : 'text-ivory/80',
              ].join(' ')}
            >
              Digital Studio
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-10"
            aria-label="Primary navigation"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={[
                  'text-[12px] uppercase tracking-[0.24em] transition-colors duration-300 relative',
                  'after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px',
                  'after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100',
                  'after:transition-transform after:duration-500',
                  scrolled ? 'text-charcoal hover:text-champagne' : 'text-ivory/90 hover:text-ivory',
                ].join(' ')}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={cta}
            target="_blank"
            rel="noreferrer"
            className={[
              'hidden lg:inline-flex items-center gap-2 px-5 py-3 text-[11px] uppercase tracking-[0.24em]',
              'border transition-all duration-500',
              scrolled
                ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory'
                : 'border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal',
            ].join(' ')}
          >
            Book a Shoot <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className={[
              'lg:hidden p-2 -mr-2 transition-colors duration-300',
              scrolled ? 'text-charcoal' : 'text-ivory',
            ].join(' ')}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-ivory lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: { transition: { staggerChildren: 0.04 } },
                show:   { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="container-editorial pt-32 pb-12 flex flex-col gap-1"
            >
              {NAV.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show:   { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="block py-4 font-serif text-4xl tracking-editorial text-charcoal border-b border-charcoal/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={cta}
                target="_blank"
                rel="noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show:   { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 inline-flex items-center justify-center gap-3 px-6 py-4 bg-charcoal text-ivory text-[12px] uppercase tracking-[0.24em]"
              >
                Book a Shoot <ArrowUpRight size={14} strokeWidth={1.5} />
              </motion.a>

              <div className="mt-12 text-[11px] uppercase tracking-[0.28em] text-charcoal-50">
                {site.location.city}, {site.location.state}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
