---
name: kevda-threejs-lighting
description: "Defines the exact Three.js lighting setup, material upgrades, loading states, and SSR-safe patterns for the Kevda Bioworks marketing website 3D scenes. Use this skill whenever working on any Three.js component on the Kevda website, adding brand color lighting to 3D models, fixing blank loading states, upgrading materials, or adding new 3D scenes. Also trigger when the user says '3D looks white', 'add color to the 3D', 'fix the loading flash', 'upgrade the scene', or asks to add a new Three.js component to the Kevda marketing site."
---

# Kevda Three.js Lighting & Scene Standard

## Site Context
The Kevda website has 5 Three.js hero scenes. Each loads a `.glb` or procedural model and displays it on the right half of the hero section. The current problem: all models render pure white on a white/cream background — no brand color, no drama.

**Brand colors to bring into 3D:**
- Deep Teal: `#004D43` (hex) / `0x004D43` (Three.js)
- Desert Sand / Gold: `#D4B57C` / `0xD4B57C`
- Ice Pearl: `#F2F5F4` / `0xF2F5F4`

---

## THE STANDARD LIGHTING SETUP

Apply this to every Three.js scene on the site. Replace whatever lights exist.

```typescript
// ── LIGHTING SETUP — KEVDA STANDARD ──

// 1. Teal ambient — base color fill across entire model
const ambientLight = new THREE.AmbientLight(0x004D43, 0.5);
scene.add(ambientLight);

// 2. Gold key light — main dramatic light, orbits slowly
const goldLight = new THREE.PointLight(0xD4B57C, 5, 60);
goldLight.position.set(8, 6, 8);
scene.add(goldLight);

// 3. White directional — sun-like fill, softens shadows
const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
sunLight.position.set(6, 10, 8);
scene.add(sunLight);

// 4. Teal rim light — from behind, creates depth separation
const rimLight = new THREE.PointLight(0x00d4b8, 2.0, 30);
rimLight.position.set(-8, 2, -8);
scene.add(rimLight);
```

### Animate the gold light (in render loop)
```typescript
// Add to your animation loop. t increments by 0.004 per frame.
goldLight.position.x = Math.cos(t * 0.4) * 12;
goldLight.position.z = Math.sin(t * 0.4) * 10;
goldLight.position.y = Math.sin(t * 0.25) * 4 + 5;
```

---

## MATERIAL UPGRADE

If the model uses `MeshBasicMaterial` (flat, no lighting), upgrade to `MeshStandardMaterial` so it receives light:

```typescript
// Find and replace MeshBasicMaterial with:
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,      // keep white — lighting will add color
  metalness: 0.4,
  roughness: 0.3,
  emissive: new THREE.Color(0x001a14),  // subtle teal emissive
  emissiveIntensity: 0.15,
});
```

For loaded GLB models, traverse and upgrade:
```typescript
gltf.scene.traverse((child) => {
  if (child instanceof THREE.Mesh) {
    child.material = new THREE.MeshStandardMaterial({
      color: child.material.color || new THREE.Color(0xffffff),
      metalness: 0.35,
      roughness: 0.3,
      emissive: new THREE.Color(0x001a14),
      emissiveIntensity: 0.12,
    });
  }
});
```

---

## SSR-SAFE PATTERN (Next.js App Router)

Three.js cannot run on the server. Always use dynamic import:

```typescript
// In the page file:
import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('@/components/HeroScene'), {
  ssr: false,
  loading: () => <div className="scene-placeholder" />,
});
```

The scene component itself uses `useEffect`:
```typescript
'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    // All Three.js code here — safe, runs client-only
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
    // ...
    return () => {
      renderer.dispose(); // cleanup on unmount
    };
  }, []);

  return <canvas ref={canvasRef} />;
}
```

---

## LOADING STATE — FIX BLANK PAGE FLASH

The blank white flash on Capabilities and RNA pages happens because the canvas renders
white until Three.js initializes. Fix:

```typescript
// In the scene component:
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  // ... Three.js setup ...

  // After first render, fade in
  renderer.render(scene, camera);
  setIsLoaded(true);

  // animation loop...
}, []);

// In JSX:
return (
  <canvas
    ref={canvasRef}
    style={{
      opacity: isLoaded ? 1 : 0,
      transition: 'opacity 0.7s ease',
    }}
  />
);
```

---

## RENDERER SETTINGS FOR LIGHT BACKGROUND

When the background is white/cream (not dark), these renderer settings matter:

```typescript
renderer.setClearColor(0x000000, 0); // transparent — shows page background
renderer.physicallyCorrectLights = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.3;
```

---

## SCENE INVENTORY

| Page | Model Type | Notes |
|------|-----------|-------|
| Home `/` | DNA double helix | Rotating, large, right half |
| Molecular Biology | DNA helix | More solid/refined variant |
| Cell Engineering | Organic cell | Bumpy surface texture |
| Protein Characterization | Antibody (Y-shape) | Best model on site |
| RNA & Delivery | LNP cluster | Sphere cluster, most specific |

All models: DO NOT touch geometry. Only change lights and materials.

---

## WHAT NOT TO DO

- Do not change model geometry or mesh structure
- Do not change camera position or FOV
- Do not change rotation speed or animation
- Do not replace `.glb` models with procedural geometry
- Do not add new objects to the scene
- Do not change the canvas size or position in the layout
- Do not use `MeshPhongMaterial` — use `MeshStandardMaterial` only
