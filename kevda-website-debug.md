---
name: kevda-website-debug
description: "Structured debugging protocol for the Kevda Bioworks MARKETING WEBSITE (kevdabioworks.com / kevda-redesign.vercel.app). Use this skill whenever something is broken on the marketing site, a Vercel deployment fails, a Next.js build errors, a Three.js 3D scene isn't rendering, fonts aren't loading, a page returns 404, or any visual/rendering issue is reported. Also trigger when the user says 'site is broken', 'build failed', 'Vercel error', '404', 'blank page', 'font wrong', '3D not showing', or describes any issue on the public marketing website. NOTE: This skill is for the MARKETING WEBSITE only — not the lab management platform. For platform issues use kevda-debug-protocol instead."
---

# Kevda Website Debug Protocol

## Site Architecture
- **Live site**: kevdabioworks.com (github.com/joelkevda/kevda--Website, main branch)
- **Redesign sandbox**: kevda-redesign.vercel.app (github.com/joelkevda/kevda-redesign, main branch)
- **Stack**: Next.js 14 (App Router), TypeScript, Turbopack, deployed on Vercel
- **Local path**: C:\Projects\kevda-website
- **Active branch for work**: redesign (pushed to kevda-redesign remote)

---

## STEP 1 — IDENTIFY THE ERROR TYPE

### Build Errors (Vercel deployment fails)
Common causes on this site:

| Error | Cause | Fix |
|-------|-------|-----|
| `Missing API key. Pass it to the constructor new Resend(...)` | contact/route.ts imported but RESEND_API_KEY not set in Vercel env | Delete src/app/api/contact/route.ts OR add env var to Vercel |
| `Module not found: three` | three.js not in package.json | `npm install three @types/three` |
| `'document' is not defined` | Three.js used outside useEffect (SSR issue) | Wrap in `useEffect` or use `dynamic(() => import(...), { ssr: false })` |
| `404: NOT_FOUND` on deployment | Root directory misconfigured in Vercel | Check Vercel → Settings → General → Root Directory. Should be `.` or empty |
| TypeScript errors | Type mismatches | Run `npx tsc --noEmit` locally first |

### Visual/Rendering Issues
| Issue | Cause | Fix |
|-------|-------|-----|
| Blank white page before 3D loads | No loading state on Three.js canvas | Add opacity:0 → opacity:1 transition after first render |
| 3D not showing at all | SSR rendering Three.js | Use `dynamic(() => import('./SceneComponent'), { ssr: false })` |
| Wrong font (looks like system font) | Google Fonts not loaded / Geist still in layout.tsx | Check layout.tsx for correct next/font/google imports |
| 3D is grey/white, no color | No brand-colored lighting | See kevda-threejs-lighting skill |
| Models load on some pages not others | Per-page Three.js component not wrapped in Suspense | Add Suspense boundary with fallback |

---

## STEP 2 — DIAGNOSIS COMMANDS

Run these locally in C:\Projects\kevda-website:

```bash
# Check what's actually in the build
npm run build 2>&1 | head -50

# Check TypeScript
npx tsc --noEmit

# Find all Resend references
grep -r "resend\|Resend" src/ --include="*.ts" --include="*.tsx"

# Find all Three.js files
grep -r "THREE\|three\|Canvas" src/ --include="*.ts" --include="*.tsx" -l

# Check for SSR issues (document/window used outside useEffect)
grep -r "document\.\|window\." src/ --include="*.tsx" --include="*.ts"

# Check what's being exported from layout
cat src/app/layout.tsx

# Check font setup
grep -r "font\|Font\|Geist\|Space_Grotesk" src/ --include="*.tsx" --include="*.ts" -l
```

---

## STEP 3 — VERCEL-SPECIFIC FIXES

### 404 on deployment URL
1. Go to Vercel Dashboard → Project → Settings → General
2. Check **Root Directory** — should be blank or `.`
3. Check **Framework Preset** — should be **Next.js**
4. Check **Build Command** — should be `next build` or `npm run build`
5. Check **Output Directory** — should be `.next`
6. If settings are wrong, update and redeploy

### Environment variables missing
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. For redesign sandbox: only `NEXT_PUBLIC_*` vars are needed (no Resend, no DB)
3. Add any missing vars, then redeploy

### Force redeploy after fix
```bash
git commit --allow-empty -m "trigger redeploy"
git push redesign HEAD:main
```

---

## STEP 4 — GIT PUSH PATTERN FOR THIS PROJECT

The redesign project uses a non-standard push pattern. Always use:
```bash
git push redesign HEAD:main
```
NOT `git push origin` — that goes to the live site repo.

Remote `redesign` = github.com/joelkevda/kevda-redesign (sandbox)
Remote `origin` = github.com/joelkevda/kevda--Website (LIVE — do not push here)

---

## STEP 5 — VERIFY FIX

After every fix:
1. `npm run build` — must pass locally before pushing
2. Push to redesign remote
3. Check Vercel build logs — must show green
4. Visit kevda-redesign.vercel.app — must load correctly
5. Check all 5 pages with 3D: home, /capabilities/molecular-biology, /capabilities/cell-engineering, /capabilities/protein-characterization, /capabilities/rna-delivery

---

## KNOWN DECISIONS (do not flag as bugs)

- Leadership titles on home page are intentional strategic positioning
- "Initiate a Project" CTA on some pages is a known issue to be fixed
- Contact form removed from redesign sandbox intentionally (no Resend key)
- `.claude/` directory excluded from git via .gitignore
