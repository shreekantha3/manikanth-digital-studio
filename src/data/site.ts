/**
 * Site-wide configuration. Edit this file to update branding, contact details,
 * social links, location, and the WhatsApp / phone numbers shown across the site.
 */

export const site = {
  brand: {
    name: 'Manikanth Digital Studio',
    short: 'Manikanth',
    tagline: 'Your Story. Beautifully Preserved.',
  },
  location: {
    city: 'Sindagi',
    state: 'Karnataka',
    postalCode: '586128',
    country: 'India',
    landmark: 'Near HG Girls High School, SH16',
    // Approximate coordinates for Sindagi — replace with exact studio location if known
    coordinates: { lat: 16.83, lng: 76.23 },
    googleMapsUrl: 'https://maps.app.goo.gl/hTSVYGQVoAQPqdX2A',
    googleMapsEmbedUrl:
      'https://www.google.com/maps?q=Manikanth+Digital+Studio+Sindagi+Karnataka&output=embed',
  },
  contact: {
    // Verify with the studio owner before going live.
    phoneDisplay: '',
    phoneTel: '',
    whatsappNumber: '', // digits only, e.g. "919999999999"
    email: '',
  },
  social: {
    // Replace with the studio's actual handles when available.
    instagram: '',
    facebook: '',
    youtube: '',
  },
  businessHours: [
    { day: 'Monday',    open: '09:00', close: '20:00' },
    { day: 'Tuesday',   open: '09:00', close: '20:00' },
    { day: 'Wednesday', open: '09:00', close: '20:00' },
    { day: 'Thursday',  open: '09:00', close: '20:00' },
    { day: 'Friday',    open: '09:00', close: '20:00' },
    { day: 'Saturday',  open: '09:00', close: '21:00' },
    { day: 'Sunday',    open: 'By appointment', close: '' },
  ],
  seo: {
    title: 'Manikanth Digital Studio | Wedding & Portrait Photography in Sindagi',
    description:
      'Wedding, pre-wedding, maternity, newborn, portrait and event photography studio in Sindagi, Karnataka. Authentic moments, timeless frames.',
    siteUrl: 'https://shreekantha3.github.io/manikanth-digital-studio',
    ogImage: '/og-image.jpg',
  },
} as const

export type SiteConfig = typeof site

/** Build a WhatsApp deep-link that opens a chat with a prefilled message. */
export function whatsappLink(message: string): string {
  const num = site.contact.whatsappNumber.replace(/\D/g, '')
  if (!num) return site.location.googleMapsUrl
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`
}

/** Build a "tel:" link for the phone number (empty if unverified). */
export function phoneTel(): string {
  const num = site.contact.phoneTel.replace(/\D/g, '')
  return num ? `tel:+${num}` : ''
}
