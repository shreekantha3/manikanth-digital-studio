export type PortfolioCategory =
  | 'weddings'
  | 'pre-wedding'
  | 'portraits'
  | 'maternity'
  | 'newborn'
  | 'events'

export interface PortfolioItem {
  id: string
  category: PortfolioCategory
  title: string
  caption: string
  image: string
  imageAlt: string
  /** Span class for the editorial masonry layout. */
  span: 'tall' | 'wide' | 'square'
  /** Aspect ratio for placeholder rendering. */
  aspect: '3/4' | '4/5' | '1/1' | '4/3' | '16/9' | '3/2'
  location?: string
}

export const categories: { id: 'all' | PortfolioCategory; label: string }[] = [
  { id: 'all', label: 'All Stories' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'pre-wedding', label: 'Pre-Wedding' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'maternity', label: 'Maternity' },
  { id: 'newborn', label: 'Newborn' },
  { id: 'events', label: 'Events' },
]

/**
 * Portfolio items. Images here are openly-licensed Unsplash photographs used
 * as temporary placeholders so the layout reads as a real photography studio
 * website. Replace with the studio's actual work by editing the `image`
 * property (or pointing it to /images/portfolio/... once real files are added
 * under public/images/portfolio/).
 */
export const portfolio: PortfolioItem[] = [
  {
    id: 'w-01',
    category: 'weddings',
    title: 'A Sindagi Wedding',
    caption: 'Rituals, colour, and a quiet morning light.',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A wedding ceremony with rich colour and detail',
    span: 'tall',
    aspect: '3/4',
    location: 'Sindagi',
  },
  {
    id: 'pw-01',
    category: 'pre-wedding',
    title: 'Golden Hour Walk',
    caption: 'A pre-wedding session along an open field.',
    image:
      'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A couple walking together at golden hour',
    span: 'wide',
    aspect: '4/3',
    location: 'Sindagi',
  },
  {
    id: 'p-01',
    category: 'portraits',
    title: 'In The Studio',
    caption: 'A studio portrait with natural expression.',
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A studio portrait in soft natural light',
    span: 'square',
    aspect: '1/1',
  },
  {
    id: 'w-02',
    category: 'weddings',
    title: 'First Dance',
    caption: 'A reception framed in warm window light.',
    image:
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A couple sharing a first dance',
    span: 'wide',
    aspect: '3/2',
  },
  {
    id: 'm-01',
    category: 'maternity',
    title: 'Soft Light',
    caption: 'A maternity session by the window.',
    image:
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A maternity portrait in soft window light',
    span: 'tall',
    aspect: '3/4',
  },
  {
    id: 'n-01',
    category: 'newborn',
    title: 'First Days',
    caption: 'A newborn sleeping in soft fabric.',
    image:
      'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A newborn sleeping peacefully',
    span: 'square',
    aspect: '1/1',
  },
  {
    id: 'e-01',
    category: 'events',
    title: 'A Reception',
    caption: 'Light, laughter, and a long evening.',
    image:
      'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Guests at an evening reception',
    span: 'tall',
    aspect: '3/4',
  },
  {
    id: 'pw-02',
    category: 'pre-wedding',
    title: 'Quiet Field',
    caption: 'A pre-wedding portrait, late afternoon.',
    image:
      'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A pre-wedding portrait in a quiet field',
    span: 'wide',
    aspect: '4/3',
  },
  {
    id: 'p-02',
    category: 'portraits',
    title: 'Editorial Portrait',
    caption: 'A clean editorial portrait.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'An editorial portrait with neutral background',
    span: 'tall',
    aspect: '3/4',
  },
  {
    id: 'w-03',
    category: 'weddings',
    title: 'The Ceremony',
    caption: 'Traditions captured as they unfold.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A wedding ceremony in progress',
    span: 'square',
    aspect: '1/1',
  },
  {
    id: 'm-02',
    category: 'maternity',
    title: 'The Garden',
    caption: 'A maternity portrait outdoors.',
    image:
      'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A maternity portrait outdoors',
    span: 'wide',
    aspect: '4/3',
  },
  {
    id: 'n-02',
    category: 'newborn',
    title: 'Held Close',
    caption: 'A newborn cradled in soft light.',
    image:
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A newborn cradled close',
    span: 'tall',
    aspect: '3/4',
  },
  {
    id: 'e-02',
    category: 'events',
    title: 'A Gathering',
    caption: 'Conversations and warm light.',
    image:
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Guests in conversation at an event',
    span: 'wide',
    aspect: '16/9',
  },
  {
    id: 'p-03',
    category: 'portraits',
    title: 'Window Light',
    caption: 'A portrait in afternoon window light.',
    image:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A portrait in afternoon window light',
    span: 'square',
    aspect: '1/1',
  },
]
