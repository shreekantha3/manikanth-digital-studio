import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { siteConfig } from '../data/site';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-soft-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-4">
            Let's Create Together
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto text-balance">
            Reach out for bookings, collaborations, or just to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-champagne/10 rounded-full">
                <Phone className="h-5 w-5 text-champagne" />
              </div>
              <div>
                <h4 className="font-medium text-charcoal">Phone / WhatsApp</h4>
                <a href={`tel:${siteConfig.phone}`} className="text-warm-gray hover:text-champagne transition-colors block">{siteConfig.phone}</a>
                <a href={`https://wa.me/${siteConfig.whatsapp?.replace('+', '').replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-champagne hover:text-bronze text-sm font-medium transition-colors inline-flex items-center gap-1 mt-0.5">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-champagne/10 rounded-full">
                <Mail className="h-5 w-5 text-champagne" />
              </div>
              <div>
                <h4 className="font-medium text-charcoal">Email</h4>
                <a href={`mailto:${siteConfig.email}`} className="text-warm-gray hover:text-champagne transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-champagne/10 rounded-full">
                <MapPin className="h-5 w-5 text-champagne" />
              </div>
              <div>
                <h4 className="font-medium text-charcoal">Location</h4>
                <p className="text-warm-gray">{siteConfig.address}</p>
                <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-champagne hover:text-bronze text-sm font-medium transition-colors">
                  View on Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-ivory rounded-2xl p-8 shadow-sm border border-soft-white/50 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Name</label>
                <input type="text" id="name" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white border border-soft-white focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all text-charcoal" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email</label>
                <input type="email" id="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white border border-soft-white focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all text-charcoal" placeholder="hello@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">Message</label>
                <textarea id="message" rows={4} required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white border border-soft-white focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all text-charcoal resize-none" placeholder="Tell us about your event..." />
              </div>
              <button type="submit" className="w-full px-8 py-4 bg-champagne text-deep-black font-medium rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 flex items-center justify-center gap-2">
                {submitted ? 'Message Sent!' : 'Send Message'}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
