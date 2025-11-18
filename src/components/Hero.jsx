import { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Sparkles, Palette } from 'lucide-react'

export default function Hero() {
  const title = useMemo(() => (
    <>
      Design Thinking
      <span className="mx-2">•</span>
      Facilitation
      <span className="mx-2">•</span>
      Innovation
    </>
  ), [])

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-slate-950">
      {/* Spline full-width background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/70" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-8 md:pt-12">
        {/* Top pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 backdrop-blur border border-white/15"
        >
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span className="text-xs tracking-wide">Playful, modern, human-centered</span>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]"
            >
              We turn complex problems into colorful breakthroughs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-5 text-lg md:text-xl text-white/90 max-w-xl"
            >
              A boutique consultancy blending design thinking and facilitation to help teams align, prototype, and launch with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-slate-900 bg-gradient-to-r from-amber-300 via-pink-300 to-sky-300 shadow-lg shadow-sky-500/20">
                Start a project
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white/90 bg-white/10 backdrop-blur border border-white/15">
                <Palette className="w-4 h-4" />
                See our approach
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-8 text-sm text-white/80"
            >
              {title}
            </motion.div>
          </div>

          {/* Color pop cards */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            {[
              { title: 'Workshops', color: 'from-fuchsia-400 to-rose-400', emoji: '🧩' },
              { title: 'Sprints', color: 'from-emerald-400 to-teal-300', emoji: '⚡️' },
              { title: 'Research', color: 'from-sky-400 to-cyan-300', emoji: '🔍' },
              { title: 'Prototyping', color: 'from-amber-300 to-orange-400', emoji: '🧪' },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i, duration: 0.6 }}
                className="relative overflow-hidden rounded-2xl p-4 aspect-[5/4] bg-white/5 backdrop-blur border border-white/10"
              >
                <div className={`absolute inset-0 -z-0 bg-gradient-to-br ${card.color} opacity-30`} />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="text-3xl">{card.emoji}</div>
                  <div className="text-white font-semibold">{card.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
