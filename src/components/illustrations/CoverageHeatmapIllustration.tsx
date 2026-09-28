export function CoverageHeatmapIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="heatHot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e11d48" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#f97316" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="floorBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22242a" />
          <stop offset="100%" stopColor="#15161a" />
        </linearGradient>
      </defs>

      {/* floor plan outline */}
      <rect x="24" y="24" width="152" height="152" rx="8" fill="url(#floorBg)" stroke="#e0a020" strokeOpacity="0.25" />

      {/* interior partitions */}
      <g stroke="#3d4049" strokeWidth="2">
        <path d="M24 90 H92" />
        <path d="M108 90 H176" />
        <path d="M120 90 V176" />
      </g>

      {/* coverage heat zones */}
      <circle cx="70" cy="66" r="46" fill="url(#heatHot)" className="animate-pulse-glow" />
      <circle
        cx="140"
        cy="60"
        r="38"
        fill="url(#heatHot)"
        className="animate-pulse-glow"
        style={{ animationDelay: "0.6s" }}
      />
      <circle
        cx="88"
        cy="138"
        r="42"
        fill="url(#heatHot)"
        className="animate-pulse-glow"
        style={{ animationDelay: "1.2s" }}
      />

      {/* device mount points */}
      {[
        [70, 66],
        [140, 60],
        [88, 138],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="5" fill="#15161a" stroke="#f5b942" strokeWidth="1.5" />
          <circle cx={cx} cy={cy} r="2" className="animate-led-blink" fill="#f5b942" />
        </g>
      ))}
    </svg>
  );
}
