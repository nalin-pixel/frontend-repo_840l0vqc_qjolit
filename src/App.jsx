import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Process from './components/Process'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero with Spline cover */}
      <Hero />

      {/* Logo/clients/keywords marquee */}
      <section className="bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <Marquee items={[
            'Design sprints',
            'Journey maps',
            'Service blueprints',
            'Team alignment',
            'Research',
            'Prototyping',
            'Facilitation',
            'Usability testing',
          ]} />
        </div>
      </section>

      {/* Process section with scroll effects */}
      <Process />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
