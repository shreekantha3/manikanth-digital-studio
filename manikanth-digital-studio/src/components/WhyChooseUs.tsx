import { motion } from 'framer-motion';
import { Award, Clock, Users, Sparkles } from 'lucide-react';

const features = [
  { icon: Award, title: 'Award-Winning', desc: 'Recognized by regional photography associations for artistic excellence.' },
  { icon: Clock, title: 'Fast Delivery', desc: 'Edited previews within 7 days. Full gallery delivered in 3 weeks.' },
  { icon: Users, title: 'Personal Touch', desc: 'Direct collaboration with Manikanth. No assistants, no shortcuts.' },
  { icon: Sparkles, title: 'Premium Editing', desc: 'Hand-edited with color grading, skin retouching, and film-inspired tones.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-32 bg-ivory">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-4">Why Manikanth Studio</h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto text-balance">More than photography. We create heirlooms.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-soft-white/50 hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-champagne/10 rounded-full inline-block mb-5">
                <f.icon className="h-6 w-6 text-champagne" />
              </div>
              <h3 className="font-display text-xl text-charcoal mb-3">{f.title}</h3>
              <p className="text-warm-gray text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
