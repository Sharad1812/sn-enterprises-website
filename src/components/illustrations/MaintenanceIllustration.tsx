export function MaintenanceIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d4049" />
          <stop offset="100%" stopColor="#15161a" />
        </linearGradient>
      </defs>

      {/* pulse ring */}
      <circle cx="100" cy="100" r="80" stroke="#f5b942" strokeWidth="2" opacity="0.15" />
      <circle cx="100" cy="100" r="80" stroke="#f5b942" strokeWidth="2" className="animate-pulse-glow" opacity="0.3" />

      {/* shield */}
      <path
        d="M100 26 L152 44 V96 C152 132 130 156 100 172 C70 156 48 132 48 96 V44 Z"
        fill="url(#shieldBody)"
        stroke="#e0a020"
        strokeOpacity="0.35"
      />

      {/* wrench */}
      <g stroke="#f5b942" strokeWidth="6" strokeLinecap="round" fill="none">
        <path d="M78 122 L112 88" />
        <circle cx="118" cy="82" r="14" stroke="#f5b942" strokeWidth="6" />
      </g>
      <circle cx="118" cy="82" r="5" fill="#15161a" />

      {/* checkmark badge */}
      <circle cx="76" cy="128" r="14" fill="#15161a" stroke="#3ecf5a" strokeOpacity="0.5" />
      <path d="M70 128 L75 133 L83 122" stroke="#3ecf5a" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
