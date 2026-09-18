import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya & Ramesh',
    event: 'Traditional Wedding',
    text: 'Manikanth captured every emotion of our wedding day. The photographs are not just images — they are memories frozen in gold.',
    rating: 5,
  },
  {
    name: 'Dr. Anjali Mehta',
    event: 'Maternity Session',
    text: 'Elegant, natural, and deeply personal. The studio made me feel like royalty during the most beautiful journey of my life.',
    rating: 5,
  },
  {
    name: 'Vikram Studio Events',
    event: 'Commercial Photography',
    text: 'Professional, reliable, and artistically brilliant. Manikanth Digital Studio delivers above expectations every single time.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-ivory">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-4">Words From Our Clients</h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto text-balance">
            What families, couples, and businesses say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-soft-white/50 relative"
            >
              <Quote className="h-8 w-8 text-champagne/30 mb-4" />
              <p className="text-charcoal leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 text-champagne fill-champagne" />
                ))}
              </div>
              <h4 className="font-display text-charcoal font-medium">{t.name}</h4>
              <p className="text-sm text-warm-gray">{t.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
