import { useEffect, useRef, useState } from 'react'

/**
 * A small IntersectionObserver hook that toggles `isVisible` once an element
 * enters the viewport. Pair with the `.reveal-mask` / `.img-clip` utilities
 * in globals.css for a no-JS-fallback-friendly reveal.
 */
export function useReveal<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
) {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(node)
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ref, isVisible }
}
