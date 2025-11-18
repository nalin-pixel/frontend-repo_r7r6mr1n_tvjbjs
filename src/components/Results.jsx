import { motion } from 'framer-motion'

const stats = [
  { label: 'Average ROAS', value: '3–5x' },
  { label: 'Revenue in last 12 months', value: '$7M+' },
  { label: 'Happy clients', value: '50+' },
  { label: 'Client retention', value: '85%' },
]

function Results() {
  return (
    <section className="relative bg-[#0a0b0f] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Real revenue, not vanity metrics.
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-xl border border-emerald-400/10 bg-emerald-400/5 p-6"
            >
              <p className="text-sm uppercase tracking-wide text-slate-300">{s.label}</p>
              <p className="mt-2 text-3xl font-extrabold text-white">{s.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur"
        >
          <h3 className="text-xl font-semibold text-white">Ready to see these results for your business?</h3>
          <a href="#contact" className="mt-4 inline-flex rounded-lg bg-red-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-red-400">Book Free Strategy Call</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Results
