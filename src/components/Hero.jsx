import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0a0b0f]">
      {/* Spline cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-[#0a0b0f]/70 to-[#0a0b0f]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-24 pt-40 md:flex-row md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Scale your business with one growth strategy.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-200 md:text-xl">
            Meepo Media fixes weak paid ads and builds predictable acquisition systems so you can grow revenue with clarity and control.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="rounded-lg bg-red-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black">
              Book Free Strategy Call
            </a>
            <a href="#services" className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10">
              View Services
            </a>
          </div>
        </motion.div>

        {/* Simple device/dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full max-w-md"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-lg">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="rounded-md bg-black/40 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-slate-300">Live</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 rounded-lg bg-black/40 p-4">
                <p className="text-xs text-slate-300">ROAS (last 30 days)</p>
                <p className="mt-1 text-2xl font-bold text-white">3.8x</p>
                <div className="mt-3 h-20 w-full rounded bg-gradient-to-r from-emerald-500/30 to-emerald-400/20" />
              </div>
              <div className="rounded-lg bg-black/40 p-4">
                <p className="text-xs text-slate-300">Spend</p>
                <p className="mt-1 text-xl font-bold text-white">$84.2k</p>
                <div className="mt-3 h-20 w-full rounded bg-gradient-to-b from-sky-500/30 to-sky-400/10" />
              </div>
              <div className="rounded-lg bg-black/40 p-4">
                <p className="text-xs text-slate-300">Rev</p>
                <p className="mt-1 text-xl font-bold text-white">$320k</p>
                <div className="mt-3 h-16 w-full rounded bg-gradient-to-b from-rose-500/30 to-rose-400/10" />
              </div>
              <div className="col-span-2 rounded-lg bg-black/40 p-4">
                <p className="text-xs text-slate-300">Top Channel</p>
                <p className="mt-1 text-xl font-bold text-white">Meta • 4.2x</p>
                <div className="mt-3 h-16 w-full rounded bg-gradient-to-r from-fuchsia-500/30 to-fuchsia-400/10" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
