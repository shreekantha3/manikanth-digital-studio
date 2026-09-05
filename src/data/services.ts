export interface Service {
  id: string
  number: string
  title: string
  description: string
  /** Short editorial caption shown beside the service image. */
  caption: string
  /** Image source — relative to /public or a full URL. */
  image: string
  /** Accessible alt text for the service image. */
  imageAlt: string
}

/**
 * Service offerings. Copy is intentionally elegant and generic — replace with
 * studio-specific phrasing when final.
 */
export const services: Service[] = [
  {
    id: 'wedding',
    number: '01',
    title: 'Wedding Photography',
    description:
      'From the first quiet ritual of the morning to the last dance of the evening, every ceremony, glance and tradition is documented with patience and care.',
    caption: 'A wedding is a story told in light.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
    imageAlt:
      'A bride and groom during a quiet ceremony moment',
  },
  {
    id: 'pre-wedding',
    number: '02',
    title: 'Pre-Wedding Photography',
    description:
      'Portrait sessions built around your story — your favourite places, your inside jokes, the small gestures that belong only to the two of you.',
    caption: 'Before the day, a moment just for you.',
    image:
      'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1600&q=80',
    imageAlt:
      'A couple walking together during golden hour',
  },
  {
    id: 'maternity',
    number: '03',
    title: 'Maternity Photography',
    description:
      'Quiet, tender portraits celebrating one of life’s most beautiful journeys — composed with softness and an editorial eye.',
    caption: 'The beginning, held in a frame.',
    image:
      'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1600&q=80',
    imageAlt:
      'An expectant parent cradling their bump in soft window light',
  },
  {
    id: 'newborn',
    number: '04',
    title: 'Newborn Photography',
    description:
      'Gentle, unhurried sessions that capture the smallest details — the curve of a hand, the soft breath of sleep, the wonder of a first week.',
    caption: 'Smallest hands. Longest memory.',
    image:
      'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=1600&q=80',
    imageAlt:
      'A newborn sleeping in soft fabric',
  },
  {
    id: 'portrait',
    number: '05',
    title: 'Portrait Photography',
    description:
      'Portraits shaped around you — natural expression, considered composition and a relaxed pace that lets personality lead.',
    caption: 'A portrait is a person, at their most themselves.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=80',
    imageAlt:
      'A thoughtful portrait in natural window light',
  },
  {
    id: 'events',
    number: '06',
    title: 'Event Photography',
    description:
      'From intimate gatherings to large celebrations, we move with the room — quietly capturing the conversations, reactions and unscripted moments.',
    caption: 'The room, the laughter, the day.',
    image:
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80',
    imageAlt:
      'Guests celebrating at an evening event',
  },
  {
    id: 'commercial',
    number: '07',
    title: 'Commercial Photography',
    description:
      'Photography for businesses, products and promotional needs — clean, considered imagery designed to communicate clearly.',
    caption: 'Imagery that speaks for the brand.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    imageAlt:
      'A styled product and brand still life',
  },
  {
    id: 'studio',
    number: '08',
    title: 'Studio Photography',
    description:
      'Controlled studio sessions for portraits, IDs, family groups and any requirement that calls for deliberate light and a calm setting.',
    caption: 'Considered light. Considered frame.',
    image:
      'https://images.unsplash.com/photo-1554941829-202a0b2403b8?auto=format&fit=crop&w=1600&q=80',
    imageAlt:
      'Studio lights and a soft backdrop setup',
  },
]
