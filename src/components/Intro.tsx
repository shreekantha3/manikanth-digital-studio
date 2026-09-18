import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Placeholder image - replace with actual studio work
  const introImage = 'https://images.unsplash.com/photo-1522199710521-72d69b26539d?auto=format&fit=crop&w=800&q=80';

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-ivory"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={introImage}
              alt="Photographer capturing a moment"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-charcoal">
              Moments pass.{' '}
              <span className="text-champagne">Memories stay.</span>
            </h2>

            <p className="text-lg text-warm-gray leading-relaxed text-balance">
              At Manikanth Digital Studio, we believe that photography is more than just recording images—it's about capturing the essence of moments that define your story. Every smile, every tear, every glance tells a story that lasts generations.
            </p>

            <p className="text-lg text-warm-gray leading-relaxed text-balance">
              Our work blends authentic emotion with artistic vision. We focus on genuine expressions, natural moments, and the subtle details that make each story unique. From intimate family portraits to grand wedding celebrations, we're here to preserve what truly matters.
            </p>

            <div className="pt-4">
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block px-8 py-3 bg-champagne text-deep-black font-medium rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2"
              >
                View Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;