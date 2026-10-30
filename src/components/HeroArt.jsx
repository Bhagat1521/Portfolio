import { useEffect, useRef } from "react";

export default function HeroArt() {
  const artRef = useRef(null);

  useEffect(() => {
    const el = artRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onScroll = () => {
      el.style.setProperty("--py", String(window.scrollY * 0.08));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="art" ref={artRef}>
      <svg viewBox="0 0 400 400" aria-hidden="true">
        <defs>
          <linearGradient id="g0" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#C6FF45" stopOpacity=".4" />
            <stop offset=".6" stopColor="#C6FF45" stopOpacity=".06" />
            <stop offset="1" stopColor="#050605" stopOpacity=".4" />
          </linearGradient>
          <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#35DDF5" stopOpacity=".32" />
            <stop offset=".55" stopColor="#35DDF5" stopOpacity=".05" />
            <stop offset="1" stopColor="#050605" stopOpacity=".4" />
          </linearGradient>
          <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F5F5F2" stopOpacity=".22" />
            <stop offset=".5" stopColor="#C6FF45" stopOpacity=".12" />
            <stop offset="1" stopColor="#050605" stopOpacity=".5" />
          </linearGradient>
        </defs>
        <g transform="translate(200 200)">
          <g className="spin">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
              <rect
                key={angle}
                x="-22"
                y="-182"
                width="44"
                height="166"
                rx="22"
                transform={`rotate(${angle})`}
                fill={`url(#g${index % 3})`}
                stroke="rgba(245,245,242,.38)"
                strokeWidth="1.4"
              />
            ))}
          </g>
          <circle r="14" fill="#050605" stroke="rgba(245,245,242,.35)" strokeWidth="1.5" />
        </g>
      </svg>
      <figure className="pic">
        <div className="ph2">
          <b>BS</b>
        </div>
      </figure>
    </div>
  );
}
