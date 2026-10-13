"use client";
import { useEffect, useRef, useCallback } from "react";

interface Props {
  /** 0 to 1 scroll-scrubbed progress. Omit for hero auto-play mode. */
  progress?: number;
  className?: string;
}

const ORDER = { x: 160, y: 140 };
const SHOPS = [
  { x: 320, y: 60 },
  { x: 420, y: 160 },
  { x: 300, y: 230 },
  { x: 80,  y: 200 },
];
const W = 500, H = 280;

function makePath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
}

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

/** Approximate point on cubic bezier via de Casteljau */
function bezierPoint(x1: number, y1: number, x2: number, y2: number, t: number) {
  const mx = (x1 + x2) / 2;
  // Control points: P0=(x1,y1), P1=(mx,y1), P2=(mx,y2), P3=(x2,y2)
  const ax = lerp(x1, mx, t), ay = lerp(y1, y1, t);
  const bx = lerp(mx, mx, t), by = lerp(y1, y2, t);
  const cx = lerp(mx, x2, t), cy = lerp(y2, y2, t);
  const dx = lerp(ax, bx, t), dy = lerp(ay, by, t);
  const ex = lerp(bx, cx, t), ey = lerp(by, cy, t);
  return { x: lerp(dx, ex, t), y: lerp(dy, ey, t) };
}

function renderFrame(
  svg: SVGSVGElement,
  dots: { t: number; shopIdx: number }[],
  scrollP?: number
) {
  const dotsLayer = svg.querySelector("#dots-layer")!;
  const resolvedLayer = svg.querySelector("#resolved-layer")!;
  dotsLayer.innerHTML = "";
  resolvedLayer.innerHTML = "";

  // Fade shop nodes in during scroll phase 0 to 0.33
  if (scrollP !== undefined) {
    const alpha = Math.min(scrollP / 0.33, 1);
    SHOPS.forEach((_, i) => {
      const g = svg.querySelector(`#shop-${i}`) as SVGGElement | null;
      if (g) g.style.opacity = String(alpha);
    });
  }

  const ns = "http://www.w3.org/2000/svg";

  dots.forEach(({ t, shopIdx }) => {
    const shop = SHOPS[shopIdx];
    if (t < 1) {
      const pt = bezierPoint(ORDER.x, ORDER.y, shop.x, shop.y, t);

      const pathEl = document.createElementNS(ns, "path");
      pathEl.setAttribute("d", makePath(ORDER.x, ORDER.y, shop.x, shop.y));
      pathEl.setAttribute("fill", "none");
      pathEl.setAttribute("stroke", "var(--pulse)");
      pathEl.setAttribute("stroke-width", "1.5");
      pathEl.setAttribute("opacity", "0.35");
      dotsLayer.appendChild(pathEl);

      const dot = document.createElementNS(ns, "circle");
      dot.setAttribute("cx", String(pt.x));
      dot.setAttribute("cy", String(pt.y));
      dot.setAttribute("r", "5");
      dot.setAttribute("fill", "var(--pulse)");
      dot.setAttribute("filter", "url(#pulse-glow)");
      dotsLayer.appendChild(dot);
    } else {
      const ring = document.createElementNS(ns, "circle");
      ring.setAttribute("cx", String(shop.x));
      ring.setAttribute("cy", String(shop.y));
      ring.setAttribute("r", "14");
      ring.setAttribute("fill", "rgba(255,176,32,0.15)");
      ring.setAttribute("stroke", "var(--ember)");
      ring.setAttribute("stroke-width", "1.5");
      resolvedLayer.appendChild(ring);

      const dot = document.createElementNS(ns, "circle");
      dot.setAttribute("cx", String(shop.x));
      dot.setAttribute("cy", String(shop.y));
      dot.setAttribute("r", "5");
      dot.setAttribute("fill", "var(--ember)");
      resolvedLayer.appendChild(dot);
    }
  });
}

export function OrderFlow({ progress, className = "" }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const rafRef = useRef<number>(0);
  const stateRef = useRef({
    phase: "intro" as "intro" | "ambient",
    startTime: 0,
    dots: [] as { t: number; shopIdx: number; born: number }[],
  });

  const draw = useCallback((now: number) => {
    const svg = svgRef.current;
    if (!svg) return;
    const state = stateRef.current;
    const STAGGER = 150, DOT_DUR = 1800, INTRO_COUNT = 3, AMBIENT_INTERVAL = 4000;

    if (state.phase === "intro") {
      const elapsed = now - state.startTime;
      const expected = Math.floor(elapsed / STAGGER);
      while (state.dots.length < Math.min(expected + 1, INTRO_COUNT)) {
        state.dots.push({ t: 0, shopIdx: state.dots.length % SHOPS.length, born: now });
      }
    } else {
      const last = state.dots[state.dots.length - 1];
      if (!last || now - last.born > AMBIENT_INTERVAL) {
        state.dots.push({ t: 0, shopIdx: Math.floor(Math.random() * SHOPS.length), born: now });
      }
    }

    state.dots.forEach(d => { d.t = Math.min((now - d.born) / DOT_DUR, 1); });

    if (state.phase === "intro") {
      const done = state.dots.length >= INTRO_COUNT && state.dots.every(d => d.t >= 1);
      if (done) { state.phase = "ambient"; state.dots = []; }
    } else {
      // Prune old resolved dots in ambient
      state.dots = state.dots.filter(d => d.t < 1 || now - d.born < DOT_DUR + 1500);
    }

    renderFrame(svg, state.dots);
    rafRef.current = requestAnimationFrame(draw);
  }, []);

  // Scroll-scrubbed mode
  useEffect(() => {
    if (progress === undefined) return;
    const svg = svgRef.current;
    if (!svg) return;
    const p = Math.max(0, Math.min(1, progress));
    const dotT = p < 0.33 ? 0 : Math.min((p - 0.33) / 0.34, 1);
    renderFrame(svg, dotT > 0 ? [{ t: dotT, shopIdx: 0 }] : [], p);
  }, [progress]);

  // Auto-play mode
  useEffect(() => {
    if (progress !== undefined) return;
    stateRef.current = { phase: "intro", startTime: performance.now(), dots: [] };
    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [draw, progress]);

  return (
    <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className={className}
      aria-hidden="true" style={{ overflow: "visible" }}>
      <defs>
        <filter id="pulse-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Grid */}
      {[0, 1, 2, 3].map(i => (
        <line key={i} x1={0} y1={i * 93} x2={W} y2={i * 93}
          stroke="rgba(255,255,255,0.04)" strokeWidth={1} />
      ))}

      {/* Static dim paths */}
      {SHOPS.map((s, i) => (
        <path key={i} d={makePath(ORDER.x, ORDER.y, s.x, s.y)}
          fill="none" stroke="rgba(79,216,196,0.1)" strokeWidth={1.5} strokeDasharray="4 6" />
      ))}

      {/* Shop nodes */}
      {SHOPS.map((s, i) => (
        <g key={i} id={`shop-${i}`}>
          <circle cx={s.x} cy={s.y} r={10}
            fill="rgba(79,216,196,0.06)" stroke="rgba(79,216,196,0.25)" strokeWidth={1.5} />
          <circle cx={s.x} cy={s.y} r={3.5} fill="rgba(79,216,196,0.45)" />
        </g>
      ))}

      {/* Order origin */}
      <circle cx={ORDER.x} cy={ORDER.y} r={8}
        fill="rgba(79,216,196,0.1)" stroke="var(--pulse)" strokeWidth={1.5} />
      <circle cx={ORDER.x} cy={ORDER.y} r={3} fill="var(--pulse)" />

      <g id="dots-layer" />
      <g id="resolved-layer" />
    </svg>
  );
}
