import { useEffect, useRef } from 'react'

export default function Marquee({ items = [] }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start
    let raf

    const step = (ts) => {
      if (!start) start = ts
      const t = ts - start
      const offset = (t / 30) % el.scrollWidth
      el.style.transform = `translateX(${-offset}px)`
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-slate-950 via-transparent to-slate-950" />
      <div className="relative whitespace-nowrap will-change-transform flex gap-10 text-white/80" ref={ref}>
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-sm uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-current/40" />
            {it}
          </span>
        ))}
      </div>
    </div>
  )
}
