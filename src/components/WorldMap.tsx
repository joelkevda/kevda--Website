"use client";
import { motion } from "motion/react";

const BOSTON = { x: 268, y: 168, label: "Boston, MA", sub: "Scientific leadership & client relations" };
const BANGALORE = { x: 660, y: 250, label: "Bangalore, India", sub: "PhD-led lab operations & execution" };

export default function WorldMap() {
  const arcD = `M${BOSTON.x},${BOSTON.y} C${BOSTON.x + 120},${BOSTON.y - 110} ${BANGALORE.x - 140},${BANGALORE.y - 130} ${BANGALORE.x},${BANGALORE.y}`;

  return (
    <div className="kv-globe-wrap">
      <svg
        viewBox="0 0 980 460"
        className="kv-globe-svg"
        role="img"
        aria-label="World map showing Boston and Bangalore offices"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="kv-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4B57C" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#D4B57C" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Dotted world map grid */}
        <g fill="rgba(0,77,67,0.18)">
          {Array.from({ length: 40 }).map((_, row) =>
            Array.from({ length: 90 }).map((_, col) => {
              const x = col * 11 + 4;
              const y = row * 11 + 6;
              if (!isLand(x, y)) return null;
              return <circle key={`${row}-${col}`} cx={x} cy={y} r={1.2} />;
            })
          )}
        </g>

        {/* Arc */}
        <motion.path
          d={arcD}
          fill="none"
          stroke="#D4B57C"
          strokeWidth={1.4}
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />

        {/* Pins */}
        {[BOSTON, BANGALORE].map(p => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r={26} fill="url(#kv-glow)" />
            <motion.circle
              cx={p.x}
              cy={p.y}
              r={8}
              fill="#004D43"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.circle
              cx={p.x}
              cy={p.y}
              r={4}
              fill="#D4B57C"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>
        ))}
      </svg>

      <div className="kv-globe-legend">
        {[BOSTON, BANGALORE].map(p => (
          <div key={p.label} className="kv-globe-loc">
            <div className="kv-globe-loc-dot" />
            <div>
              <div className="kv-globe-loc-name">{p.label}</div>
              <div className="kv-globe-loc-sub">{p.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Crude land mask — paints continents roughly
function isLand(x: number, y: number): boolean {
  const lon = (x / 980) * 360 - 180;
  const lat = 90 - (y / 460) * 180;
  return continentMask(lon, lat);
}

function continentMask(lon: number, lat: number): boolean {
  // North America
  if (lat > 15 && lat < 72 && lon > -168 && lon < -52) {
    if (lat > 50 && lon > -140 && lon < -60) return true;
    if (lat > 25 && lat < 50 && lon > -125 && lon < -67) return true;
    if (lat > 15 && lat < 32 && lon > -110 && lon < -82) return true;
  }
  // South America
  if (lat > -56 && lat < 12 && lon > -82 && lon < -34) {
    if (lat < -10 && lon > -76 && lon < -38) return true;
    if (lat > -10 && lat < 12 && lon > -78 && lon < -50) return true;
  }
  // Europe
  if (lat > 36 && lat < 71 && lon > -10 && lon < 40) return true;
  // Africa
  if (lat > -34 && lat < 36 && lon > -18 && lon < 52) {
    if (lat > 0 && lon > -18 && lon < 45) return true;
    if (lat < 0 && lat > -34 && lon > 10 && lon < 42) return true;
  }
  // Middle East / West Asia
  if (lat > 12 && lat < 45 && lon > 35 && lon < 75) return true;
  // Asia
  if (lat > 5 && lat < 75 && lon > 60 && lon < 145) {
    if (lat > 20 && lon > 60 && lon < 145) return true;
    if (lat > 5 && lat < 25 && lon > 70 && lon < 110) return true;
  }
  // SE Asia / Indonesia
  if (lat > -11 && lat < 8 && lon > 95 && lon < 142) return true;
  // Australia
  if (lat > -40 && lat < -10 && lon > 112 && lon < 154) return true;
  return false;
}
