import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-champagne relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-5xl text-deep-black mb-6">Your Story Awaits</h2>
          <p className="text-deep-black/70 text-lg max-w-xl mx-auto mb-8 text-balance">
            Book your session today and preserve the moments that matter most.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-deep-black text-white font-medium rounded-full transition-all duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-deep-black focus:ring-offset-2"
          >
            Book Your Shoot
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
