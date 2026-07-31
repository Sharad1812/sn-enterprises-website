export function PatchPanelIllustration({ className }: { className?: string }) {
  const rows = [0, 1];
  const cols = Array.from({ length: 6 });

  return (
    <svg viewBox="0 0 240 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="panelBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2f323a" />
          <stop offset="100%" stopColor="#15161a" />
        </linearGradient>
      </defs>

      <rect x="10" y="16" width="220" height="70" rx="8" fill="url(#panelBody)" stroke="#e0a020" strokeOpacity="0.25" />

      {rows.map((row) =>
        cols.map((_, col) => {
          const x = 24 + col * 33;
          const y = row === 0 ? 28 : 58;
          return (
            <rect key={`${row}-${col}`} x={x} y={y} width="24" height="16" rx="2" fill="#15161a" stroke="#e0a020" strokeOpacity="0.25" />
          );
        })
      )}

      {/* cables draping down into management bar (orange fiber + gray Cat6, no blue) */}
      <rect x="10" y="96" width="220" height="10" rx="5" fill="#15161a" />
      {[36, 69, 102, 135, 168, 201].map((x, i) => (
        <path
          key={x}
          d={`M${x} 74 C ${x} 100, ${x - 10 + (i % 2) * 20} 110, ${x - 10 + (i % 2) * 20} 140`}
          stroke={i % 3 === 0 ? "#f5b942" : "#8a8f99"}
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
        />
      ))}

      {/* rack ears */}
      <circle cx="16" cy="24" r="2" fill="#e0a020" opacity="0.4" />
      <circle cx="16" cy="78" r="2" fill="#e0a020" opacity="0.4" />
      <circle cx="224" cy="24" r="2" fill="#e0a020" opacity="0.4" />
      <circle cx="224" cy="78" r="2" fill="#e0a020" opacity="0.4" />
    </svg>
  );
}
