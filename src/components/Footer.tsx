import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/site';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <footer className="bg-deep-black text-white/60 py-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl text-white mb-1">Manikanth Digital Studio</h3>
            <p className="text-sm">Sindagi, Karnataka 586128</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#home" className="hover:text-champagne transition-colors">Home</a>
            <a href="#about" className="hover:text-champagne transition-colors">About</a>
            <a href="#portfolio" className="hover:text-champagne transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-champagne transition-colors">Contact</a>
          </div>
          <div className="text-sm">
            <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors">Find us on Google Maps</a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 pt-8 border-t border-white/5">
          <div className="max-w-xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Mail className="h-4 w-4 text-champagne" />
              <span className="text-sm font-medium text-champagne tracking-wide">Newsletter</span>
            </div>
            <h4 className="font-display text-xl text-white mb-2">Stay in the Frame</h4>
            <p className="text-sm text-white/50 mb-5">New stories, behind-the-scenes, and booking openings — delivered to your inbox.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@example.com"
                className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all text-sm min-w-[16rem]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-champagne text-deep-black font-medium rounded-full transition-all hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 flex items-center justify-center gap-2 text-sm"
              >
                {submitted ? 'Subscribed!' : 'Subscribe'}
                {!submitted && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-xs text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
