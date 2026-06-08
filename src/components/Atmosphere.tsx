export default function Atmosphere() {
  return (
    <>
      {/* Hexagonal background pattern */}
      <div
        className="fixed inset-0 -z-30 pointer-events-none opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.04' stroke-width='1'%3E%3Cpath d='M28 0L56 16v33L28 66 0 49V16z'/%3E%3Cpath d='M28 66l28 16v18M28 66L0 82v18'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "56px 100px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%,#000 30%,transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%,#000 30%,transparent 80%)",
        }}
      />

      {/* Top glow */}
      <div
        className="fixed left-1/2 -translate-x-1/2 -z-20 pointer-events-none"
        style={{
          top: "-22vh",
          width: "120vw",
          height: "80vh",
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%,rgba(95,180,255,.10),transparent 70%)",
        }}
      />

      {/* Grain overlay */}
      <svg
        className="fixed inset-0 -z-10 pointer-events-none w-full h-full"
        style={{ opacity: 0.05, mixBlendMode: "overlay" }}
      >
        <filter id="grainF">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves={2}
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainF)" />
      </svg>

      {/* Chrome gradient definition */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="chromeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".3" stopColor="#cdd6df" />
            <stop offset=".55" stopColor="#7e8893" />
            <stop offset=".72" stopColor="#eef3f8" />
            <stop offset="1" stopColor="#8b95a0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
