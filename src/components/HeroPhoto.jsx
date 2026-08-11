import { motion } from 'framer-motion'

export default function HeroPhoto({ src }) {
  if (!src) return null

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, x: 0, y: 0 }}
        animate={{ scale: 1.16, x: -14, y: -10 }}
        transition={{ duration: 22, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 12%',
          filter: 'grayscale(1) contrast(1.05)',
        }}
      />
      {/* blueprint duotone: amber shadows, ink-blue highlights, via blend layers */}
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{ background: 'linear-gradient(180deg, #7FB8EE 0%, #1B2C42 100%)' }}
      />
      <div
        className="absolute inset-0 mix-blend-screen opacity-40"
        style={{ background: 'radial-gradient(circle at 30% 20%, #F0AC4A 0%, transparent 55%)' }}
      />
      {/* fade to page background so content stays legible */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(27,44,66,0.35) 0%, rgba(27,44,66,0.55) 40%, #1B2C42 92%)' }}
      />
    </div>
  )
}
