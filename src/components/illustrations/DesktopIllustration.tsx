export function DesktopIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="monBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d4049" />
          <stop offset="100%" stopColor="#15161a" />
        </linearGradient>
      </defs>

      {/* monitor */}
      <rect x="20" y="16" width="140" height="94" rx="8" fill="url(#monBody)" stroke="#e0a020" strokeOpacity="0.3" />
      <rect x="30" y="26" width="120" height="74" rx="3" fill="#15161a" />
      <path d="M40 90 L70 60 L90 78 L115 48 L140 90 Z" fill="none" stroke="#3ecf5a" strokeWidth="2.4" opacity="0.8" />
      <circle cx="130" cy="55" r="4" fill="#f5b942" opacity="0.9" />

      {/* stand */}
      <rect x="80" y="110" width="20" height="16" fill="#22242a" />
      <rect x="60" y="126" width="60" height="8" rx="4" fill="#15161a" />

      {/* tower CPU */}
      <rect x="164" y="40" width="42" height="120" rx="6" fill="url(#monBody)" stroke="#e0a020" strokeOpacity="0.3" />
      <rect x="172" y="50" width="26" height="4" rx="2" fill="#f5b942" opacity="0.6" />
      <circle cx="185" cy="70" r="3" className="animate-led-blink" fill="#f5b942" />
      <circle cx="185" cy="82" r="3" fill="#3ecf5a" opacity="0.8" />
      {Array.from({ length: 4 }).map((_, i) => (
        <rect key={i} x="172" y={98 + i * 8} width="26" height="3" rx="1.5" fill="#15161a" opacity="0.8" />
      ))}
    </svg>
  );
}
