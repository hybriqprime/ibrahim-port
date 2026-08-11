import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [label, setLabel] = useState(null)
  const enabledRef = useRef(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    enabledRef.current = fine && !reduced
    if (!enabledRef.current) return

    document.documentElement.classList.add('cursor-none')

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
      const target = e.target.closest('[data-cursor-label]')
      setLabel(target ? target.getAttribute('data-cursor-label') : null)
    }
    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      document.documentElement.classList.remove('cursor-none')
    }
  }, [])

  if (!enabledRef.current) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.2s' }}
      aria-hidden="true"
    >
      <div
        className="absolute"
        style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
      >
        <div className="relative w-6 h-6">
          <div className="absolute left-1/2 top-0 w-px h-2 -translate-x-1/2" style={{ background: 'var(--color-line)' }} />
          <div className="absolute left-1/2 bottom-0 w-px h-2 -translate-x-1/2" style={{ background: 'var(--color-line)' }} />
          <div className="absolute top-1/2 left-0 h-px w-2 -translate-y-1/2" style={{ background: 'var(--color-line)' }} />
          <div className="absolute top-1/2 right-0 h-px w-2 -translate-y-1/2" style={{ background: 'var(--color-line)' }} />
          <div className="absolute left-1/2 top-1/2 w-1 h-1 rounded-full -translate-x-1/2 -translate-y-1/2" style={{ background: 'var(--color-amber)' }} />
        </div>
        <div
          className="absolute left-4 top-4 whitespace-nowrap font-mono text-[10px] px-1.5 py-0.5"
          style={{ color: 'var(--color-line)', background: 'rgba(19,31,48,0.9)', border: '1px solid var(--color-line-dim)' }}
        >
          {label || `x:${pos.x} y:${pos.y}`}
        </div>
      </div>
    </div>
  )
}
