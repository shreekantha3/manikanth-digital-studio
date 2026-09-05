/**
 * Testimonials.
 *
 * IMPORTANT: No fabricated customer names or quotes. Replace this with
 * verified, permissioned customer reviews when available. The structure
 * below documents the shape a real testimonial should take.
 */

export interface Testimonial {
  id: string
  name: string
  /** Relationship of the reviewer to the shoot, e.g. "Wedding — Sindagi". */
  context: string
  quote: string
  /** Optional photo of the customer (only with explicit permission). */
  image?: string
  /** Year the review was given. */
  year?: number
}

export const testimonials: Testimonial[] = [
  // Add verified, permissioned customer reviews here.
  // Example shape:
  // {
  //   id: 't-01',
  //   name: 'Priya S.',
  //   context: 'Wedding — Sindagi',
  //   quote: '',
  //   year: 2026,
  // },
]

/**
 * Used to render a thoughtful placeholder block when no verified testimonials
 * exist yet, rather than fabricating quotes.
 */
export const testimonialFallback = {
  eyebrow: 'Words from our clients',
  heading: 'Stories trusted to us.',
  body:
    'Verified reviews from couples, families and brands we have worked with will be shared here. If you have worked with us and would like to share your experience, we would love to hear from you.',
}
