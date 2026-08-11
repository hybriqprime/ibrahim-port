import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const roles = ['school systems', 'revenue leaks', 'procurement chaos', 'client pipelines']

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center px-5 md:px-10 pt-24 pb-16">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <motion.line
          x1="0" y1="18%" x2="100%" y2="18%"
          stroke="#2E4256" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
        <motion.line
          x1="0" y1="82%" x2="100%" y2="82%"
          stroke="#2E4256" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.15 }}
        />
      </svg>

      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs mb-4"
          style={{ color: 'var(--color-text-muted)' }}
        >
          A-001 &mdash; Site Plan
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 font-mono text-xs px-2.5 py-1 mb-8 border"
          style={{ borderColor: 'var(--color-amber)', color: 'var(--color-amber)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-amber)' }} />
          builder, not just a coder
        </motion.div>

        <h1 className="font-display font-medium leading-[1.05] mb-6" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.2rem)' }}>
          {['Ibrahim', 'Isiaq', 'Alabi'].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl mb-2 max-w-xl"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Full-stack engineer who finds where businesses leak time and money,
          then ships the system that plugs it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex items-center gap-2 font-mono text-sm mb-10"
          style={{ color: 'var(--color-line)' }}
        >
          <span style={{ color: 'var(--color-text-muted)' }}>currently mapping:</span>
          <RoleRotator />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            data-cursor-label="view work"
            className="font-mono text-sm px-5 py-3 transition-transform hover:-translate-y-0.5"
            style={{ background: 'var(--color-amber)', color: 'var(--color-ink)' }}
          >
            view work &rarr;
          </a>
          <a
            href="#contact"
            data-cursor-label="get in touch"
            className="font-mono text-sm px-5 py-3 border transition-colors hover:border-[color:var(--color-line)]"
            style={{ borderColor: 'var(--color-line-dim)', color: 'var(--color-text-primary)' }}
          >
            get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="grid grid-cols-3 gap-4 max-w-lg mt-16"
      >
        {[
          ['stack', 'MERN'],
          ['based in', 'Lagos, NG'],
          ['shipped', '5+ products'],
        ].map(([label, value]) => (
          <div key={label} className="border-l pl-3" style={{ borderColor: 'var(--color-line-dim)' }}>
            <p className="font-mono text-[11px] mb-1" style={{ color: 'var(--color-text-muted)' }}>{label}</p>
            <p className="font-mono text-sm" style={{ color: 'var(--color-text-primary)' }}>{value}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

function RoleRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-block h-6 overflow-hidden align-middle" style={{ minWidth: '190px' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          className="absolute left-0 top-0"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
