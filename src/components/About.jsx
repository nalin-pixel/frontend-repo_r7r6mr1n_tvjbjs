import { motion } from 'framer-motion'

function About() {
  return (
    <section className="relative bg-[#0b0d12] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Built for founders who expect results.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300"
        >
          Founders work with Meepo Media when they want clarity, direct feedback, predictable revenue, and real strategy. You get a partner who cares about outcomes and tells you what you need to hear.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[{
            k: 'roas', t: '3–5x average ROAS for clients.'
          }, { k: 'campaigns', t: '100+ campaigns launched.' }, { k: 'monitoring', t: '24/7 live performance monitoring.' }].map((item, i) => (
            <motion.div
              key={item.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-base font-medium text-white">{item.t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
