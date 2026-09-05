import { useEffect } from 'react'

/**
 * Locks body scroll while a modal / lightbox is open. Restores the previous
 * overflow value on cleanup.
 */
export function useLockBodyScroll(active: boolean) {
  useEffect(() => {
    if (!active) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [active])
}
