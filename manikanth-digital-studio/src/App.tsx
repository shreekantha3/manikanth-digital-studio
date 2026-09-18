import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import FeaturedStory from './components/FeaturedStory';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      setRenderKey((prev) => prev + 1);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={renderKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <main>
            <Hero />
            <Intro />
            <Services />
            <Portfolio />
            <FeaturedStory />
            <WhyChooseUs />
            <Process />
            <Testimonials />
            <Contact />
            <FinalCTA />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
