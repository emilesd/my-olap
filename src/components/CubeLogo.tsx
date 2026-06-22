export default function CubeLogo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="2 6 56 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="8,24 15.33,28 15.33,36 8,32" fill="#2962FF" />
      <polygon points="8,32 15.33,36 15.33,44 8,40" fill="#1565C0" />
      <polygon points="8,40 15.33,44 15.33,52 8,48" fill="#fff" />
      <polygon points="15.33,28 22.67,32 22.67,40 15.33,36" fill="#2962FF" />
      <polygon points="15.33,36 22.67,40 22.67,48 15.33,44" fill="#D50000" />
      <polygon points="15.33,44 22.67,48 22.67,56 15.33,52" fill="#2962FF" />
      <polygon points="22.67,32 30,36 30,44 22.67,40" fill="#00C853" />
      <polygon points="22.67,40 30,44 30,52 22.67,48" fill="#2962FF" />
      <polygon points="22.67,48 30,52 30,60 22.67,56" fill="#FFD600" />
      <polygon points="30,36 37.33,32 30,28 22.67,32" fill="#FFD600" />
      <polygon points="22.67,32 30,28 22.67,24 15.33,28" fill="#fff" />
      <polygon points="15.33,28 22.67,24 15.33,20 8,24" fill="#D50000" />
      <polygon points="37.33,32 44.67,28 37.33,24 30,28" fill="#00C853" />
      <polygon points="30,28 37.33,24 30,20 22.67,24" fill="#FFD600" />
      <polygon points="22.67,24 30,20 22.67,16 15.33,20" fill="#FF6D00" />
      <polygon points="44.67,28 52,24 44.67,20 37.33,24" fill="#FFD600" />
      <polygon points="37.33,24 44.67,20 37.33,16 30,20" fill="#2962FF" />
      <polygon points="30,20 37.33,16 30,12 22.67,16" fill="#fff" />
      <polygon points="30,36 37.33,32 37.33,40 30,44" fill="#FF6D00" />
      <polygon points="30,44 37.33,40 37.33,48 30,52" fill="#D50000" />
      <polygon points="30,52 37.33,48 37.33,56 30,60" fill="#FF6D00" />
      <polygon points="37.33,32 44.67,28 44.67,36 37.33,40" fill="#fff" />
      <polygon points="37.33,40 44.67,36 44.67,44 37.33,48" fill="#FF6D00" />
      <polygon points="37.33,48 44.67,44 44.67,52 37.33,56" fill="#00C853" />
      <polygon points="44.67,28 52,24 52,32 44.67,36" fill="#FF6D00" />
      <polygon points="44.67,36 52,32 52,40 44.67,44" fill="#FFD600" />
      <polygon points="44.67,44 52,40 52,48 44.67,52" fill="#FF6D00" />
      <line x1="15.33" y1="28" x2="15.33" y2="52" stroke="#1A237E" strokeWidth="0.6" />
      <line x1="22.67" y1="32" x2="22.67" y2="56" stroke="#1A237E" strokeWidth="0.6" />
      <line x1="8" y1="32" x2="30" y2="44" stroke="#1A237E" strokeWidth="0.6" />
      <line x1="8" y1="40" x2="30" y2="52" stroke="#1A237E" strokeWidth="0.6" />
      <line x1="22.67" y1="32" x2="44.67" y2="20" stroke="#9A7000" strokeWidth="0.6" />
      <line x1="15.33" y1="28" x2="37.33" y2="16" stroke="#9A7000" strokeWidth="0.6" />
      <line x1="37.33" y1="32" x2="15.33" y2="20" stroke="#9A7000" strokeWidth="0.6" />
      <line x1="44.67" y1="28" x2="22.67" y2="16" stroke="#9A7000" strokeWidth="0.6" />
      <line x1="37.33" y1="32" x2="37.33" y2="56" stroke="#7A3000" strokeWidth="0.6" />
      <line x1="44.67" y1="28" x2="44.67" y2="52" stroke="#7A3000" strokeWidth="0.6" />
      <line x1="30" y1="44" x2="52" y2="32" stroke="#7A3000" strokeWidth="0.6" />
      <line x1="30" y1="52" x2="52" y2="40" stroke="#7A3000" strokeWidth="0.6" />
      <polyline
        points="30,12 52,24 52,48 30,60 8,48 8,24 30,12"
        fill="none"
        stroke="#263238"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <line x1="30" y1="36" x2="30" y2="60" stroke="#263238" strokeWidth="1.3" />
      <line x1="30" y1="36" x2="52" y2="24" stroke="#263238" strokeWidth="1.3" />
      <line x1="30" y1="36" x2="8" y2="24" stroke="#263238" strokeWidth="1.3" />
      <circle cx="30" cy="36" r="27" fill="none" stroke="#2563EB" strokeWidth="3.8" strokeLinecap="round" />
    </svg>
  );
}
