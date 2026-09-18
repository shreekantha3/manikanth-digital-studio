import { motion } from 'framer-motion';
import { Coffee, ClipboardCheck, Camera, ImageIcon } from 'lucide-react';

const steps = [
  { step: '01', title: 'Connect', desc: 'Tell us about your event and vision.', icon: Coffee },
  { step: '02', title: 'Plan', desc: 'We understand the moments and details that matter.', icon: ClipboardCheck },
  { step: '03', title: 'Capture', desc: 'Documenting naturally and creatively.', icon: Camera },
  { step: '04', title: 'Relive', desc: 'Your memories become photographs for generations.', icon: ImageIcon },
];

const Process = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-charcoal text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl mb-4">Our Process</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto text-balance">
            A simple journey from idea to unforgettable photographs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-champagne/20 mb-6">
                <s.icon className="h-7 w-7 text-champagne" />
              </div>
              <span className="text-xs font-medium tracking-widest text-champagne/80 mb-2 block">STEP {s.step}</span>
              <h3 className="font-display text-xl mb-3">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
