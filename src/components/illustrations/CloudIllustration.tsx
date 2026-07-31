export function CloudIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cloudBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a5d66" />
          <stop offset="100%" stopColor="#2f323a" />
        </linearGradient>
      </defs>

      {/* cloud shape */}
      <path
        d="M60 110 a30 30 0 0 1 4 -59 a40 40 0 0 1 76 -6 a34 34 0 0 1 6 65 Z"
        fill="url(#cloudBody)"
        stroke="#e0a020"
        strokeOpacity="0.3"
      />

      {/* sync arrows */}
      <g stroke="#f5b942" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M90 66 a18 18 0 1 1 -4 22" />
        <path d="M86 84 l4 6 l7 -3" />
      </g>
      <g stroke="#3ecf5a" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M130 90 a18 18 0 1 1 4 -22" />
        <path d="M134 72 l-4 -6 l-7 3" />
      </g>

      {/* server rack beneath */}
      <rect x="66" y="122" width="88" height="42" rx="6" fill="#15161a" stroke="#e0a020" strokeOpacity="0.25" />
      {[0, 1].map((row) => (
        <g key={row}>
          <rect x="74" y={130 + row * 15} width="72" height="10" rx="2" fill="#22242a" />
          <circle
            cx="140"
            cy={135 + row * 15}
            r="2"
            className="animate-led-blink"
            style={{ animationDelay: `${row * 0.3}s` }}
            fill={row === 0 ? "#f5b942" : "#3ecf5a"}
          />
        </g>
      ))}

      {/* connecting line cloud -> rack */}
      <line x1="110" y1="112" x2="110" y2="122" stroke="#e0a020" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="3 3" />
    </svg>
  );
}
