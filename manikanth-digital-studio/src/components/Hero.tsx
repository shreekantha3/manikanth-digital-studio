import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Placeholder hero image - replace with actual studio photograph
  const heroImage = '/images/hero/hero-main.jpg';
  const heroOverlay = 'https://images.unsplash.com/photo-1529450622115-7d3fd2c9e86e?auto=format&fit=crop&w=1920&q=80';

  useEffect(() => {
    // Image preload for optimal loading
    const img = new Image();
    img.src = heroOverlay;
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image with parallax effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroOverlay}
          alt="Cinematic wedding photography backdrop"
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'center center',
            filter: 'brightness(0.4) contrast(1.1)',
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Location Tag */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium">
            MANIKANTH DIGITAL STUDIO · SINDAGI
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-display text-white text-balance mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your Story.{'\n'}
          <span className="text-champagne"> Beautifully Preserved.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Capturing weddings, celebrations, portraits and the moments that become memories.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-champagne text-deep-black font-medium text-lg rounded-full transition-all duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2"
          >
            Book Your Shoot
          </button>
          <button
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border border-white/50 text-white font-medium text-lg rounded-full transition-all duration-200 hover:bg-white/10 hover:border-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Explore Our Work
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-6 w-6 text-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;