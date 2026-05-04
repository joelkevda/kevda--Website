"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0.6,
  theta: 0.18,
  dark: 0,
  diffuse: 0.5,
  mapSamples: 20000,
  mapBrightness: 1.4,
  baseColor: [0.96, 0.97, 0.96],
  markerColor: [212 / 255, 181 / 255, 124 / 255],
  glowColor: [0.85, 0.92, 0.9],
  markers: [
    { location: [42.3601, -71.0589], size: 0.08 },
    { location: [12.9716, 77.5946], size: 0.08 },
  ],
};

export function KevdaGlobe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(config.phi ?? 0.6);
  const widthRef = useRef(0);
  const [r, setR] = useState(0);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onResize = () => {
      widthRef.current = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const initialWidth = widthRef.current || 500;

    const globe = createGlobe(canvas, {
      ...config,
      width: initialWidth * 2,
      height: initialWidth * 2,
    });

    let raf = 0;
    let phi = config.phi ?? 0.6;
    const tick = () => {
      if (pointerInteracting.current === null) phi += 0.003;
      phiRef.current = phi + r;
      const w = widthRef.current || initialWidth;
      globe.update({
        phi: phiRef.current,
        width: w * 2,
        height: w * 2,
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    }, 0);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [r]);

  return (
    <div className={cn("relative w-full aspect-square max-w-[500px]", className)}>
      <canvas
        className="size-full opacity-0 transition-opacity duration-700"
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(e.clientX - pointerInteractionMovement.current)
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  );
}
