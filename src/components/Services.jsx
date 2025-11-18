import { motion } from 'framer-motion'

const services = [
  {
    title: 'Paid Ads',
    desc: 'Strategy, creative testing, and scaling across Meta, Google, and TikTok.'
  },
  {
    title: 'UGC Creatives',
    desc: 'Ads from real creators that hook attention and convert fast.'
  },
  {
    title: 'Funnel Optimization',
    desc: 'Tighten pages so visitors turn into buyers at a higher rate.'
  },
  {
    title: 'Performance Consulting',
    desc: 'Direct strategy support and monthly performance reviews.'
  },
  {
    title: 'Conversion Tracking',
    desc: 'Fix tracking so you finally know what works.'
  },
  {
    title: 'Analytics & Reporting',
    desc: 'Clear reports that show your real revenue drivers.'
  }
]

function Services() {
  return (
    <section id="services" className="relative bg-[#0b0d12] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Build a complete growth system.
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
