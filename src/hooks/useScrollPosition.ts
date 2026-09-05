import { useEffect, useState } from 'react'

/**
 * Returns the current window scroll Y position. Used by the header to switch
 * its visual treatment once the user has scrolled past a threshold.
 */
export function useScrollPosition(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
