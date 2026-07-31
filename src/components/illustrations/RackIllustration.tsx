export function RackIllustration({ className }: { className?: string }) {
  const units = [0, 1, 2, 3, 4];

  return (
    <svg viewBox="0 0 200 260" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rackFrame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d4049" />
          <stop offset="100%" stopColor="#15161a" />
        </linearGradient>
        <linearGradient id="rackUnit" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2f323a" />
          <stop offset="100%" stopColor="#22242a" />
        </linearGradient>
      </defs>

      <rect x="8" y="8" width="184" height="244" rx="10" fill="url(#rackFrame)" stroke="#e0a020" strokeOpacity="0.25" />

      {/* mounting rail holes */}
      {Array.from({ length: 11 }).map((_, i) => (
        <g key={i}>
          <circle cx="18" cy={24 + i * 21} r="2.2" fill="#e0a020" opacity="0.3" />
          <circle cx="182" cy={24 + i * 21} r="2.2" fill="#e0a020" opacity="0.3" />
        </g>
      ))}

      {units.map((u, i) => {
        const y = 22 + u * 44;
        return (
          <g key={u}>
            <rect x="28" y={y} width="144" height="34" rx="4" fill="url(#rackUnit)" stroke="#e0a020" strokeOpacity="0.15" />
            {Array.from({ length: 10 }).map((_, v) => (
              <rect key={v} x={36 + v * 12} y={y + 8} width="6" height="18" rx="1.5" fill="#15161a" opacity="0.6" />
            ))}
            <circle
              cx="160"
              cy={y + 11}
              r="2.6"
              className="animate-led-blink"
              style={{ animationDelay: `${i * 0.25}s` }}
              fill={i % 2 === 0 ? "#3ecf5a" : "#f5b942"}
            />
            <circle cx="160" cy={y + 23} r="2.6" fill="#f5b942" opacity="0.7" />
          </g>
        );
      })}
    </svg>
  );
}
