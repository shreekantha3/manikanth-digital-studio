import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Camera, Sparkles, Baby, User, Calendar, ShoppingBag, Building2 } from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  heart: Heart,
  camera: Camera,
  sparkles: Sparkles,
  baby: Baby,
  user: User,
  calendar: Calendar,
  'shopping-bag': ShoppingBag,
  'building-2': Building2,
};

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-soft-white"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-4">
            Photography for Every Chapter
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto text-balance">
            From milestone moments to everyday magic, we capture life's beautiful in-between.
          </p>
        </motion.div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Camera;
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Image/Illustration - Alternating sides */}
                <div className={`relative ${isEven ? 'order-1 lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-champagne/10 to-ivory rounded-2xl flex items-center justify-center overflow-hidden">
                    <Icon className="h-24 w-24 text-charcoal/20" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'none\' stroke=%27%23D4AF37%27 stroke-width=\'1\' opacity=\'0.05\' stroke-dasharray=\'4 4\'/%3E%3C/svg%3E')] p-8 rounded-2xl flex flex-col items-center justify-center text-center p-8">
                      <h3 className="font-display text-2xl text-charcoal mb-2">{service.title}</h3>
                      <p className="text-warm-gray text-balance">{service.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? 'order-2 lg:order-1' : ''}`}>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="p-2 bg-champagne/10 rounded-full">
                      <Icon className="h-6 w-6 text-champagne" />
                    </div>
                    <h3 className="font-display text-2xl text-charcoal">{service.title}</h3>
                  </div>
                  <p className="text-lg text-warm-gray leading-relaxed text-balance mb-6">
                    {service.description}
                  </p>
                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-block px-6 py-2 bg-champagne text-deep-black font-medium rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2"
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;