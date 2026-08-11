import { motion } from 'framer-motion'
import SheetHeader from './SheetHeader'

const groups = [
  { label: 'frontend', items: ['React', 'Vite', 'Tailwind CSS'] },
  { label: 'backend', items: ['Node.js', 'Express', 'JWT auth'] },
  { label: 'data', items: ['MongoDB Atlas'] },
  { label: 'deploy', items: ['Vercel', 'Render', 'GitHub Codespaces'] },
]

export default function Stack() {
  return (
    <section id="stack" className="px-5 md:px-10 py-24 max-w-6xl mx-auto">
      <SheetHeader sheet="A-005" title="Stack" note="materials schedule" />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="border-t pt-4"
            style={{ borderColor: 'var(--color-line)' }}
          >
            <p className="font-mono text-[11px] mb-3" style={{ color: 'var(--color-amber)' }}>{g.label}</p>
            <ul className="space-y-1.5">
              {g.items.map((item) => (
                <li key={item} className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
