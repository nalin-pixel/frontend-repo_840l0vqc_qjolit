import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(250,204,21,0.09),transparent)]" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-white"
        >
          Ready to energize your next project?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-white/80"
        >
          Tell us about your challenge and we’ll design a workshop or sprint that gets you moving fast.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 grid md:grid-cols-3 gap-3 text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <input className="md:col-span-1 rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="Name" />
          <input type="email" className="md:col-span-1 rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="Email" />
          <button className="md:col-span-1 rounded-xl px-4 py-3 font-semibold text-slate-900 bg-gradient-to-r from-amber-300 via-pink-300 to-sky-300 shadow-lg shadow-sky-500/20">
            Request a call
          </button>
        </motion.form>
      </div>
    </section>
  )
}
