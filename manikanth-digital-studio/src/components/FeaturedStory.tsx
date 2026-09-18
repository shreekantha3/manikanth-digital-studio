import { motion } from 'framer-motion';

const FeaturedStory = () => {
  return (
    <section id="featured-story" className="py-20 md:py-32 bg-deep-black text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-champagne text-xs font-medium tracking-widest uppercase mb-4 block">Featured Story</span>
            <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight">
              A Wedding at the <span className="text-champagne">Golden Hour</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Priya and Ramesh's traditional Karnataka wedding was a celebration of heritage, family, and light. From the early morning rituals to the grand reception under the stars, every frame tells a story of love rooted in tradition.
            </p>
            <a href="#portfolio" className="inline-block px-8 py-3 bg-champagne text-deep-black font-medium rounded-full transition-all hover:scale-105 hover:shadow-lg">
              View Full Gallery
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
              alt="Wedding couple in golden light"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;
