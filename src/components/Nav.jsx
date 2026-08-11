import { useEffect, useState } from 'react'

const links = [
  { id: 'work', label: 'Work', sheet: 'A-002' },
  { id: 'other-builds', label: 'Other builds', sheet: 'A-003' },
  { id: 'approach', label: 'Approach', sheet: 'A-004' },
  { id: 'stack', label: 'Stack', sheet: 'A-005' },
  { id: 'contact', label: 'Contact', sheet: 'A-006' },
]

export default function Nav() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight)
      setProgress(Math.min(1, Math.max(0, scrolled)))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="flex items-center justify-between px-5 md:px-10 py-4 backdrop-blur-sm"
        style={{ background: 'rgba(14,27,43,0.75)', borderBottom: '1px solid var(--color-line-dim)' }}
      >
        <a href="#top" className="font-mono text-sm tracking-wide" style={{ color: 'var(--color-text-primary)' }}>
          SITE PLAN<span style={{ color: 'var(--color-amber)' }}>/</span>01
        </a>
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="font-mono text-xs tracking-wide hover:opacity-100 transition-opacity"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {l.sheet}
                <span className="ml-1.5" style={{ color: 'var(--color-text-muted)' }}>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="font-mono text-xs px-3 py-1.5 border transition-colors"
          style={{ borderColor: 'var(--color-line)', color: 'var(--color-line)' }}
        >
          let's talk
        </a>
      </nav>
      <div className="h-[2px] w-full" style={{ background: 'var(--color-line-dim)' }}>
        <div
          className="h-full"
          style={{ width: `${progress * 100}%`, background: 'var(--color-amber)', transition: 'width 0.1s linear' }}
        />
      </div>
    </header>
  )
}
