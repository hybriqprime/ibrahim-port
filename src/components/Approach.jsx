import { motion } from 'framer-motion'
import SheetHeader from './SheetHeader'

export default function Approach() {
  return (
    <section id="approach" className="px-5 md:px-10 py-24 max-w-6xl mx-auto">
      <SheetHeader sheet="A-004" title="Approach" note="section — elevation" />
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs space-y-2"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <p>before</p>
          <p style={{ color: 'var(--color-amber)' }}>painting &middot; screeding &middot; epoxy flooring</p>
          <p className="pt-3">now</p>
          <p style={{ color: 'var(--color-line)' }}>full-stack systems for operators</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            I spent years on site before I spent any on a keyboard — running painting, screeding and
            epoxy flooring jobs where a missed measurement or a skipped step shows up immediately,
            in concrete and cost. That's the instinct I bring to software: find the load-bearing
            problem first, not the one that's easiest to build a UI around. EduTrack, ProTrack NG and
            Stop The Leak all came out of the same question I used to ask on a job site — where
            exactly is this operation losing time or money, and what's the smallest fix that holds.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
