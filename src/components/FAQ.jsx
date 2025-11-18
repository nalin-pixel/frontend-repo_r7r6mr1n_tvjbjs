import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'How long does it take to see results?',
    a: 'Most accounts see traction in 2–4 weeks. We move fast on creative testing and optimization, then scale what works.'
  },
  {
    q: "What if my past ads didn't work?",
    a: "We audit your data, fix tracking, rebuild messaging, and test new angles. Most 'failed' accounts lacked a system, not potential."
  },
  {
    q: 'How much budget do I need?',
    a: 'We recommend at least $3k–$10k per month to learn fast and scale with confidence.'
  },
  {
    q: 'What makes you different from other agencies?',
    a: "You get senior strategy, daily performance reads, and clear reporting. We focus on revenue and retention, not fluff."
  },
  {
    q: 'Do you guarantee results?',
    a: "No one can guarantee specific outcomes. We commit to a rigorous process, transparent reporting, and aggressive iteration."
  },
  {
    q: 'What happens after the strategy call?',
    a: 'We run an audit, align on goals, and map a 90-day plan with clear milestones.'
  },
]

function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="relative bg-[#0a0b0f] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          FAQ
        </motion.h2>

        <div className="mt-8 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
          {faqs.map((item, i) => (
            <div key={i} className="px-6 py-5">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between text-left">
                <span className="text-base font-semibold text-white">{item.q}</span>
                <span className="text-slate-300">{open === i ? '-' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-3 text-slate-300"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
