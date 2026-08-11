import { motion } from 'framer-motion'

export default function SheetHeader({ sheet, title, note }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="flex items-end justify-between border-b pb-3 mb-10"
      style={{ borderColor: 'var(--color-line-dim)' }}
    >
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs" style={{ color: 'var(--color-amber)' }}>{sheet}</span>
        <h2 className="font-display text-2xl md:text-3xl font-medium">{title}</h2>
      </div>
      {note && (
        <span className="hidden md:block font-mono text-[11px]" style={{ color: 'var(--color-text-muted)' }}>
          {note}
        </span>
      )}
    </motion.div>
  )
}
