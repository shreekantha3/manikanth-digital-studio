import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { FeaturedStory } from './components/FeaturedStory'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-charcoal focus:text-ivory focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-[0.2em]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
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
    </div>
  )
}
