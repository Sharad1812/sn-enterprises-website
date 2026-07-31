export function FingerprintIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fpBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d4049" />
          <stop offset="100%" stopColor="#15161a" />
        </linearGradient>
      </defs>

      {/* device body */}
      <rect x="45" y="30" width="110" height="150" rx="16" fill="url(#fpBody)" stroke="#e0a020" strokeOpacity="0.3" />

      {/* screen */}
      <rect x="58" y="44" width="84" height="30" rx="4" fill="#15161a" stroke="#e0a020" strokeOpacity="0.25" />
      <rect x="64" y="52" width="40" height="4" rx="2" fill="#f5b942" opacity="0.6" />
      <rect x="64" y="60" width="60" height="4" rx="2" fill="#3ecf5a" opacity="0.4" />

      {/* scan pad */}
      <circle cx="100" cy="128" r="38" fill="#15161a" stroke="#f5b942" strokeOpacity="0.5" />

      {/* fingerprint pattern */}
      <g stroke="#f5b942" strokeWidth="2.4" fill="none" opacity="0.85">
        <path d="M100 105 a24 24 0 1 1 -22 32" />
        <path d="M100 112 a17 17 0 1 1 -14 24" />
        <path d="M100 119 a10 10 0 1 1 -7 15" />
      </g>

      {/* scan line */}
      <rect x="66" y="110" width="68" height="3" rx="1.5" fill="#3ecf5a" className="animate-led-blink" />

      {/* status LED */}
      <circle cx="138" cy="60" r="3" className="animate-led-blink" fill="#3ecf5a" style={{ animationDelay: "0.3s" }} />
    </svg>
  );
}
