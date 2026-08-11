export default function Footer() {
  return (
    <footer
      className="px-5 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 border-t font-mono text-[11px]"
      style={{ borderColor: 'var(--color-line-dim)', color: 'var(--color-text-muted)' }}
    >
      <span>&copy; {new Date().getFullYear()} Ibrahim Isiaq Alabi &mdash; drawn, not templated</span>
      <span>Site Plan &middot; sheet set A-001 &ndash; A-006</span>
    </footer>
  )
}
