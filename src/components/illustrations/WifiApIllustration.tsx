export function WifiApIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="apBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d4049" />
          <stop offset="100%" stopColor="#15161a" />
        </linearGradient>
      </defs>

      {/* signal rings */}
      <g>
        <circle cx="100" cy="150" r="30" stroke="#f5b942" strokeWidth="3" className="animate-wifi-ring" />
        <circle
          cx="100"
          cy="150"
          r="30"
          stroke="#f5b942"
          strokeWidth="3"
          className="animate-wifi-ring"
          style={{ animationDelay: "0.7s" }}
        />
        <circle
          cx="100"
          cy="150"
          r="30"
          stroke="#3ecf5a"
          strokeWidth="3"
          className="animate-wifi-ring"
          style={{ animationDelay: "1.4s" }}
        />
      </g>

      {/* mount plate */}
      <rect x="70" y="150" width="60" height="8" rx="4" fill="#15161a" />

      {/* AP disc body */}
      <ellipse cx="100" cy="140" rx="46" ry="18" fill="url(#apBody)" stroke="#e0a020" strokeOpacity="0.3" />
      <ellipse cx="100" cy="136" rx="46" ry="18" fill="url(#apBody)" stroke="#e0a020" strokeOpacity="0.3" />

      {/* status LED */}
      <circle cx="100" cy="136" r="4" className="animate-led-blink" fill="#f5b942" />

      {/* vents */}
      {Array.from({ length: 5 }).map((_, i) => (
        <rect key={i} x={72 + i * 14} y={131} width="8" height="2" rx="1" fill="#e0a020" opacity="0.3" />
      ))}
    </svg>
  );
}
