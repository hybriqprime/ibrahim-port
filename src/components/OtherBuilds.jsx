import { motion } from 'framer-motion'
import SheetHeader from './SheetHeader'

const builds = [
  {
    name: 'Click-Chop',
    desc: 'Full-stack food ordering platform, PORA Tech Academy Cohort 7 capstone. Swagger-documented API, JWT auth.',
    stack: 'React, Vite, Node, Express, MongoDB',
    url: 'https://click-chop.vercel.app',
  },
  {
    name: 'Ember & Table',
    desc: 'Food ordering frontend with Paystack integration, JWT auth and order tracking, built alongside a matching eatery backend.',
    stack: 'React, Paystack API',
    url: null,
  },
  {
    name: 'DecodeFXGroup',
    desc: 'Migrated from static HTML/CSS/JS to a full React/Node/Express/MongoDB stack with JWT auth.',
    stack: 'React, Node, Express, MongoDB',
    url: null,
  },
]

export default function OtherBuilds() {
  return (
    <section id="other-builds" className="px-5 md:px-10 py-24 max-w-6xl mx-auto">
      <SheetHeader sheet="A-003" title="Other builds" note="scale — 1:2" />
      <div className="grid md:grid-cols-3 gap-5">
        {builds.map((b, i) => (
          <motion.a
            key={b.name}
            href={b.url || undefined}
            target={b.url ? '_blank' : undefined}
            rel={b.url ? 'noreferrer' : undefined}
            data-cursor-label={b.url ? 'visit' : 'wip'}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="block border p-5 h-full transition-colors hover:border-[color:var(--color-line)]"
            style={{ borderColor: 'var(--color-line-dim)', cursor: b.url ? 'inherit' : 'default' }}
          >
            <p className="font-mono text-[11px] mb-3" style={{ color: 'var(--color-text-muted)' }}>
              {String(i + 1).padStart(2, '0')}
            </p>
            <h3 className="font-display text-lg font-medium mb-2">{b.name}</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>{b.desc}</p>
            <p className="font-mono text-[10px]" style={{ color: 'var(--color-line)' }}>{b.stack}</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
