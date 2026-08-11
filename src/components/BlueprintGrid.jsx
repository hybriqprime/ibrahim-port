export default function BlueprintGrid() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <svg width="100%" height="100%" className="opacity-[0.07]">
        <defs>
          <pattern id="minor-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#6FA8DC" strokeWidth="0.5" />
          </pattern>
          <pattern id="major-grid" width="120" height="120" patternUnits="userSpaceOnUse">
            <rect width="120" height="120" fill="url(#minor-grid)" />
            <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#6FA8DC" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#major-grid)" />
      </svg>
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(14,27,43,0) 0%, #0E1B2B 75%)' }}
      />
    </div>
  )
}
