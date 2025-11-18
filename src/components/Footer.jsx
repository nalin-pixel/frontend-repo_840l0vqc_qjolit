export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
        <div className="text-sm">© {new Date().getFullYear()} Bright Method Co.</div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#work" className="hover:text-white">Process</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="/test" className="hover:text-white">System</a>
        </div>
      </div>
    </footer>
  )
}
