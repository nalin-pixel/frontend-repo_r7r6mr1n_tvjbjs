import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="relative bg-[#0b0d12] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Book a free strategy call
        </motion.h2>

        <form className="mt-8 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input type="text" className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-red-500 focus:outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-red-500 focus:outline-none" placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Company</label>
              <input type="text" className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-red-500 focus:outline-none" placeholder="Company name" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Revenue range</label>
              <select className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-red-500 focus:outline-none">
                <option className="bg-[#0b0d12]">Pre-revenue</option>
                <option className="bg-[#0b0d12]">$0–$50k/mo</option>
                <option className="bg-[#0b0d12]">$50k–$200k/mo</option>
                <option className="bg-[#0b0d12]">$200k+/mo</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-slate-300">Website</label>
              <input type="url" className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-red-500 focus:outline-none" placeholder="https://" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-300">Short message</label>
              <textarea rows={4} className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-red-500 focus:outline-none" placeholder="What are you trying to achieve?" />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" className="rounded-lg bg-red-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-red-400">Book Free Strategy Call</button>
            <div className="text-slate-300">
              Prefer Messenger? Reach us here.
              <a href="https://m.me/meepomedia" className="ml-3 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">Messenger</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
