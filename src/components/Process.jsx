import { motion, useScroll, useTransform } from 'framer-motion'
import { Lightbulb, Users, Rocket } from 'lucide-react'

export default function Process() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])

  const steps = [
    {
      icon: Lightbulb,
      title: 'Discover',
      desc: 'Framing problems and aligning teams through research and insights.',
      colors: 'from-fuchsia-400 to-rose-400',
    },
    {
      icon: Users,
      title: 'Co-create',
      desc: 'Facilitated workshops to generate ideas and prioritize opportunities.',
      colors: 'from-emerald-400 to-teal-300',
    },
    {
      icon: Rocket,
      title: 'Launch',
      desc: 'Prototyping, testing, and readiness to move with clarity.',
      colors: 'from-amber-300 to-orange-400',
    },
  ]

  return (
    <section id="work" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2 style={{ y }} className="text-3xl md:text-5xl font-extrabold text-white text-center">
          A clear, colorful process
        </motion.h2>
        <p className="mt-3 text-center text-white/80 max-w-2xl mx-auto">
          We design sessions that unlock alignment and momentum, then turn insights into tangible outcomes.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.colors} opacity-20`} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-white/80">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
