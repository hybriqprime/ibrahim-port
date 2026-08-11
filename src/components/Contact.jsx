import { motion } from 'framer-motion'
import SheetHeader from './SheetHeader'

export default function Contact() {
  return (
    <section id="contact" className="px-5 md:px-10 py-24 max-w-6xl mx-auto">
      <SheetHeader sheet="A-006" title="Contact" note="last sheet" />
      <div className="grid md:grid-cols-2 gap-5">
        <motion.a
          href="mailto:hybriqprime@gmail.com?subject=Project inquiry"
          data-cursor-label="email"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="block border p-8 transition-colors hover:border-[color:var(--color-amber)]"
          style={{ borderColor: 'var(--color-line-dim)', background: 'var(--color-panel)' }}
        >
          <p className="font-mono text-[11px] mb-3" style={{ color: 'var(--color-text-muted)' }}>for businesses</p>
          <h3 className="font-display text-xl font-medium mb-2">Hire Hybriq Prime</h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            Need a system built or a leak diagnosed? Let's talk about your operation.
          </p>
          <span className="font-mono text-xs" style={{ color: 'var(--color-amber)' }}>hybriqprime@gmail.com &rarr;</span>
        </motion.a>

        <motion.a
          href="mailto:hybriqprime@gmail.com?subject=Opportunity"
          data-cursor-label="email"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="block border p-8 transition-colors hover:border-[color:var(--color-line)]"
          style={{ borderColor: 'var(--color-line-dim)', background: 'var(--color-panel)' }}
        >
          <p className="font-mono text-[11px] mb-3" style={{ color: 'var(--color-text-muted)' }}>for teams and recruiters</p>
          <h3 className="font-display text-xl font-medium mb-2">Let's talk opportunities</h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            Open to engineering roles and apprenticeships, including relocation.
          </p>
          <span className="font-mono text-xs" style={{ color: 'var(--color-line)' }}>hybriqprime@gmail.com &rarr;</span>
        </motion.a>
      </div>

      <div className="flex flex-wrap gap-6 mt-10 font-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>
        <a href="https://github.com/hybriqprime" target="_blank" rel="noreferrer" className="hover:opacity-100" style={{ color: 'var(--color-text-secondary)' }}>github.com/hybriqprime</a>
        <span>+234 903 401 4891</span>
        <span>Lagos, Nigeria</span>
      </div>
    </section>
  )
}
