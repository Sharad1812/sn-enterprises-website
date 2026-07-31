export function CctvCameraIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="camLens" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#f5b942" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#22242a" />
          <stop offset="100%" stopColor="#15161a" />
        </radialGradient>
        <linearGradient id="camBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d4049" />
          <stop offset="100%" stopColor="#15161a" />
        </linearGradient>
      </defs>

      {/* mount arm */}
      <rect x="92" y="20" width="16" height="34" rx="4" fill="#15161a" />
      <rect x="70" y="16" width="60" height="10" rx="5" fill="#22242a" stroke="#e0a020" strokeOpacity="0.25" />

      {/* dome housing */}
      <path d="M40 130 a60 60 0 0 1 120 0 Z" fill="url(#camBody)" stroke="#e0a020" strokeOpacity="0.3" />

      {/* lens dome */}
      <circle cx="100" cy="128" r="46" fill="url(#camLens)" stroke="#e0a020" strokeOpacity="0.4" />
      <circle cx="100" cy="128" r="26" fill="#15161a" stroke="#f5b942" strokeOpacity="0.5" />
      <circle cx="100" cy="128" r="12" fill="#22242a" />
      <circle cx="92" cy="120" r="4" fill="#ffdd94" opacity="0.6" />

      {/* IR LED ring */}
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const r = 38;
        const cx = 100 + r * Math.cos(angle);
        const cy = 128 + r * Math.sin(angle);
        return <circle key={i} cx={cx} cy={cy} r="2" fill="#b9800a" opacity="0.6" />;
      })}

      {/* recording indicator */}
      <circle cx="146" cy="92" r="4" className="animate-led-blink" fill="#e11d48" />

      {/* base mount plate */}
      <rect x="60" y="172" width="80" height="10" rx="5" fill="#15161a" stroke="#e0a020" strokeOpacity="0.2" />
    </svg>
  );
}
