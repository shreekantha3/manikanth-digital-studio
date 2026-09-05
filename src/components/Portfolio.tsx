import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { categories, portfolio, type PortfolioItem, type PortfolioCategory } from '../data/portfolio'

type Filter = 'all' | PortfolioCategory

const SPAN_CLASSES: Record<PortfolioItem['span'], string> = {
  // On larger screens the layout is a true editorial masonry: each item spans
  // a number of fixed-height rows or columns. On mobile every item spans a
  // single cell sized to its own aspect ratio.
  tall:   'aspect-[3/4] sm:aspect-[3/4] md:aspect-auto md:row-span-2',
  wide:   'aspect-[3/2] sm:aspect-[3/2] md:aspect-auto md:col-span-2 md:row-span-1',
  square: 'aspect-[1/1] sm:aspect-[1/1] md:aspect-auto',
}

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('all')
  const [active, setActive] = useState<number | null>(null)

  const items = useMemo(() => {
    if (filter === 'all') return portfolio
    return portfolio.filter((p) => p.category === filter)
  }, [filter])

  // Reset to first item if filter changes and active index is out of range.
  useEffect(() => {
    setActive(null)
  }, [filter])

  // Keyboard support for lightbox.
  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i === null ? null : (i + 1) % items.length))
      if (e.key === 'ArrowLeft')  setActive((i) => (i === null ? null : (i - 1 + items.length) % items.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, items.length])

  // Touch swipe for lightbox.
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX)
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const dx = e.changedTouches[0].clientX - touchStart
    if (Math.abs(dx) > 50) {
      if (dx < 0) setActive((i) => (i === null ? null : (i + 1) % items.length))
      else        setActive((i) => (i === null ? null : (i - 1 + items.length) % items.length))
    }
    setTouchStart(null)
  }

  useLockBodyScroll(active !== null)

  return (
    <section
      id="portfolio"
      className="relative bg-charcoal-500 text-ivory py-28 sm:py-36 lg:py-44"
      aria-label="Portfolio"
    >
      <div className="container-editorial">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-8 lg:gap-12 mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            <span className="eyebrow text-ivory/70">Selected Stories</span>
            <h2 className="display-lg mt-6 text-ivory">
              Stories we’ve <span className="italic">captured.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="text-ivory/70 max-w-md">
              A small selection from recent weddings, portraits and
              celebrations. The full archive is shared during consultation.
            </p>
          </motion.div>
        </div>

        {/* Filter */}
        <div
          role="tablist"
          aria-label="Filter portfolio by category"
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 border-b border-ivory/10 pb-6"
        >
          {categories.map((c) => {
            const isActive = filter === c.id
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setFilter(c.id)}
                className={[
                  'px-4 py-2 text-[11px] uppercase tracking-[0.24em] transition-all duration-500',
                  isActive
                    ? 'bg-ivory text-charcoal'
                    : 'text-ivory/70 hover:text-ivory',
                ].join(' ')}
              >
                {c.label}
              </button>
            )
          })}
        </div>

        {/* Editorial masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[200px] lg:auto-rows-[220px] gap-3 sm:gap-4"
          >
            {items.map((item, i) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (i % 9) * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className={[
                  'group relative frame overflow-hidden focus:outline-none',
                  SPAN_CLASSES[item.span],
                ].join(' ')}
                aria-label={`View ${item.title} — ${item.caption}`}
              >
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="frame-media"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal-500/85 via-charcoal-500/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-left">
                  <div className="text-[10px] uppercase tracking-[0.32em] text-ivory/70 mb-2">
                    {categories.find((c) => c.id === item.category)?.label}
                  </div>
                  <div className="font-serif text-2xl sm:text-[26px] text-ivory leading-tight">
                    {item.title}
                  </div>
                  <div className="mt-2 text-[12px] text-ivory/70 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.caption}
                  </div>
                </div>
                <span
                  className="absolute inset-0 ring-1 ring-inset ring-ivory/0 group-focus-visible:ring-ivory/80 transition-all duration-300"
                  aria-hidden="true"
                />
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>

        {items.length === 0 && (
          <div className="text-center py-20 text-ivory/60">
            No stories in this category yet.
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && items[active] && (
          <Lightbox
            item={items[active]}
            index={active}
            total={items.length}
            onClose={() => setActive(null)}
            onPrev={() => setActive((i) => (i === null ? null : (i - 1 + items.length) % items.length))}
            onNext={() => setActive((i) => (i === null ? null : (i + 1) % items.length))}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

interface LightboxProps {
  item: PortfolioItem
  index: number
  total: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onTouchStart: (e: React.TouchEvent) => void
  onTouchEnd: (e: React.TouchEvent) => void
}

function Lightbox({
  item, index, total, onClose, onPrev, onNext, onTouchStart, onTouchEnd,
}: LightboxProps) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — lightbox`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[100] bg-charcoal-500/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-ivory/80 hover:text-ivory p-2"
      >
        <X size={24} strokeWidth={1.5} />
      </button>

      {/* Prev / Next */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-ivory/80 hover:text-ivory p-2"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-ivory/80 hover:text-ivory p-2"
          >
            <ChevronRight size={28} strokeWidth={1.5} />
          </button>
        </>
      )}

      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl max-h-[88vh] flex flex-col"
      >
        <div className="relative flex-1 flex items-center justify-center min-h-0">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="max-w-full max-h-[78vh] object-contain"
          />
        </div>
        <div className="mt-5 text-center text-ivory/80">
          <div className="text-[10px] uppercase tracking-[0.32em]">
            {categories.find((c) => c.id === item.category)?.label} · {index + 1} / {total}
          </div>
          <div className="mt-2 font-serif text-2xl text-ivory">{item.title}</div>
          <div className="mt-1 text-sm text-ivory/60">{item.caption}</div>
        </div>
      </motion.div>
    </motion.div>
  )
}
