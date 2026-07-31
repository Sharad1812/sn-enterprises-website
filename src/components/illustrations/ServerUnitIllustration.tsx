export function ServerUnitIllustration({ className }: { className?: string }) {
  const bays = Array.from({ length: 6 });

  return (
    <svg viewBox="0 0 240 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="serverBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2f323a" />
          <stop offset="100%" stopColor="#15161a" />
        </linearGradient>
      </defs>

      <rect x="10" y="24" width="220" height="92" rx="8" fill="url(#serverBody)" stroke="#e0a020" strokeOpacity="0.3" />

      {/* drive bays */}
      {bays.map((_, i) => {
        const x = 24 + i * 32;
        return (
          <g key={i}>
            <rect x={x} y="36" width="24" height="68" rx="2" fill="#15161a" stroke="#e0a020" strokeOpacity="0.2" />
            <rect x={x + 4} y="42" width="16" height="3" fill="#22242a" />
            <circle
              cx={x + 12}
              cy="96"
              r="2.2"
              className="animate-led-blink"
              style={{ animationDelay: `${i * 0.2}s` }}
              fill={i % 2 === 0 ? "#f5b942" : "#3ecf5a"}
            />
          </g>
        );
      })}

      {/* status panel */}
      <rect x="196" y="80" width="24" height="24" rx="3" fill="#15161a" stroke="#e0a020" strokeOpacity="0.25" />
      <circle cx="203" cy="88" r="2" className="animate-led-blink" fill="#f5b942" />
      <circle cx="211" cy="88" r="2" fill="#3ecf5a" opacity="0.8" />
      <rect x="200" y="94" width="16" height="2" fill="#e0a020" opacity="0.3" />

      {/* handles */}
      <rect x="8" y="52" width="6" height="30" rx="3" fill="#15161a" />
      <rect x="226" y="52" width="6" height="30" rx="3" fill="#15161a" />
    </svg>
  );
}
