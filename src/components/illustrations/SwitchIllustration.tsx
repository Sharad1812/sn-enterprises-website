export function SwitchIllustration({ className }: { className?: string }) {
  const ports = Array.from({ length: 8 });

  return (
    <svg viewBox="0 0 260 150" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="switchBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2f323a" />
          <stop offset="100%" stopColor="#15161a" />
        </linearGradient>
      </defs>

      <rect x="10" y="30" width="240" height="90" rx="12" fill="url(#switchBody)" stroke="#e0a020" strokeOpacity="0.25" />

      {/* brand strip */}
      <rect x="26" y="42" width="46" height="6" rx="3" fill="#f5b942" opacity="0.5" />

      {/* ports */}
      {ports.map((_, i) => {
        const x = 26 + i * 24;
        return (
          <g key={i}>
            <rect x={x} y="70" width="18" height="26" rx="2" fill="#15161a" stroke="#e0a020" strokeOpacity="0.2" />
            <rect x={x + 3} y="74" width="12" height="6" fill="#22242a" />
            <circle
              cx={x + 9}
              cy="64"
              r="2.4"
              className="animate-led-blink"
              style={{ animationDelay: `${i * 0.18}s` }}
              fill={i % 3 === 0 ? "#f5b942" : "#3ecf5a"}
            />
          </g>
        );
      })}

      {/* uplink ports */}
      <rect x="216" y="70" width="20" height="26" rx="2" fill="#15161a" stroke="#f5b942" strokeOpacity="0.4" />
      <circle cx="226" cy="64" r="2.4" fill="#f5b942" className="animate-led-blink" style={{ animationDelay: "0.4s" }} />

      {/* vents */}
      {Array.from({ length: 6 }).map((_, i) => (
        <rect key={i} x={200} y={40 + i * 4} width="16" height="1.6" fill="#e0a020" opacity="0.2" />
      ))}
    </svg>
  );
}
