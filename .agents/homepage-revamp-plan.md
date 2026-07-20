# NextReach Studio — Homepage Revamp Plan

**Brand:** NextReach Studio  
**Aesthetic:** Dark Glassmorphism — deep charcoal, high-contrast white, amber/gold accent glow  
**Positioning:** Enterprise Quality, Startup Velocity  
**Target:** Ambitious businesses, local enterprise branches, international tech founders

---

## Image Prompt (Hero Dashboard Visual)

**Optimized for Flux Pro 1.1 / Midjourney v7:**

```
Dark mode analytics dashboard on a floating glass panel, ultra-sleek glassmorphism UI
with frosted backdrop blur and subtle amber glow accents on interactive states,
dark charcoal gradient background (#0a0a0a to #1a1a1a), two clean line charts with
warm amber/orange gradient fills, metric cards with micro-interaction hover states,
clean sans-serif typography (Inter), subtle grid pattern overlay, floating depth layers
with soft drop shadows, rim light on edges of panels, volumetric ambient lighting,
8k render, cinematic UI/UX architectural photography style,
shallow depth of field on foreground elements, wide angle --ar 16:9 --style raw
```

For **Ideogram** (legible text labels): replace end with `--ar 16:9 --style design`

---

## Landing Page Copy

### Hero Section

**Eyebrow Badge:** `Senior-Engineered Software Studio`

**H1:**
```
Custom web apps, AI workflows, and internal tools —
shipped in weeks, not quarters.
```

**Subheadline:**
```
We build production-ready web applications, AI automation systems,
and internal operational tools under fixed-scope contracts.
Direct senior developer access. Zero agency overhead.
Rapid sprint delivery.
```

**Primary CTA:** `Schedule a Technical Discovery Call`

**Secondary CTA:** `Explore Our Work & Stack`

**Trust Bar:**

| Senior Developer Led | Fixed-Scope Clarity | Rapid Sprint Execution |
|---|---|---|
| Every project is built directly by a senior full-stack engineer. No junior padding, no account manager handoffs. | A precise, itemized proposal before any work begins. You pay the agreed amount — never a dollar more. | Bi-weekly delivery sprints with staging previews. Production-ready code, not half-baked demos. |

### Services Bento Grid

**Card 1: Web Applications & SaaS Portals**
Customer portals, SaaS dashboards, admin panels — purpose-built for how your business actually runs.
*Micro-widget: Interactive analytics bar chart with metric cards*

**Card 2: Business & AI Automations**
Eliminate manual data entry and spreadsheet chaos. Custom API syncers, document processors, and LLM-powered workflow agents.
*Micro-widget: Node-based workflow builder with glowing connectors*

**Card 3: Rapid MVP Engineering**
Validate your product idea with a functional, real-user-ready application — not a click-through prototype. Stripe billing, auth, database included.
*Micro-widget: Growth metrics with progress bars and phase indicator*

**Card 4: Systems Integration & Custom APIs**
Connect your stack. Sync siloed platforms, build internal APIs, automate data flow between legacy systems and modern interfaces.
*Micro-widget: API request/response flow diagram with status badges*

### "Why Work With Us" Positioning

**Headline:**
```
Enterprise engineering discipline.
Startup speed and pricing.
```

**Traditional Agency Bloat:**
- Account managers who relay messages between you and the developers
- Weekly status meetings that substitute for actual progress
- Inflated hourly retainers that incentivize slow work
- "We'll scope it during the project" → surprise overruns

**The NextReach Model →**
- Direct access to the senior engineer building your system. You talk to the person writing the code.
- Fixed, transparent milestones with a written scope. No ambiguity, no scope creep.
- Bi-weekly production sprints. You see working software — not slide decks.
- One-time project pricing. You pay the agreed amount and own the finished product.

**Final CTA:** `Ready to ship? → Schedule a Technical Discovery Call`

---

## Design System Blueprint

### Color Tokens

| Token | Value | Usage |
|---|---|---|
| `--color-bg-base` | `#0a0a0a` | Page background |
| `--color-bg-elevated` | `#111111` | Raised surfaces |
| `--color-bg-surface` | `rgba(255,255,255,0.025)` | Card backgrounds |
| `--color-bg-overlay` | `rgba(255,255,255,0.04)` | Hover states |
| `--color-bg-hover` | `rgba(255,255,255,0.06)` | Active states |
| `--color-accent` | `#fbbf24` | Amber accent |
| `--color-accent-hover` | `#f59e0b` | Amber hover |
| `--color-accent-active` | `#d97706` | Amber active |
| `--color-accent-subtle` | `rgba(251,191,36,0.06)` | Subtle amber bg |
| `--color-accent-glow` | `rgba(251,191,36,0.12)` | Glow effects |

### Glass Token Hierarchy

| Depth | Backdrop | Opacity | Use |
|---|---|---|---|
| Level 1 | `blur(8px)` | `bg-white/[0.015]` | Page grid lines |
| Level 2 | `blur(24px)` saturate(190%) | `bg-white/[0.03]` | Standard cards |
| Level 3 | `blur(32px)` saturate(180%) | `bg-white/[0.06]` | Hero dashboard frame |
| Level 4 | `blur(40px)` | `bg-zinc-950/80` | Nav bar, overlays |

### Border Opacity by State

| State | Border | Use |
|---|---|---|
| Resting | `rgba(255,255,255,0.04)` | Default cards |
| Hover | `rgba(251,191,36,0.25)` | Interactive cards |
| Active/Focus | `rgba(251,191,36,0.45)` | Focused cards, inputs |
| Error | `rgba(248,113,113,0.3)` | Form validation |
| Success | `rgba(52,211,153,0.3)` | Confirmed states |

---

## Component Specs

### 1. Hero Dashboard Frame

```
┌─────────────────────────────────────────────────────────┐
│                    [Nav Bar — glass]                      │
│                                                           │
│  Eyebrow:  ● Senior-Engineered Software Studio            │
│                                                           │
│  H1: Custom web apps, AI workflows... built for business  │
│  Sub: 2-sentence value prop                               │
│  [CTA] [Secondary CTA]                                    │
│                                                           │
│  ┌────────── Trust Bar ──────────┐                        │
│  │ ● Senior Led  │ ● Fixed Scope│ ● Rapid Sprints       │
│  └───────────────────────────────┘                        │
│                                                           │
│  ┌──────────────────────────────────────────────────┐    │
│  │           HERO DASHBOARD MOCKUP FRAME              │    │
│  │  ┌──────┐ ┌─────────────────────┐ ┌──────────┐   │    │
│  │  │Side  │ │ Main Analytics View   │ │Activity │   │    │
│  │  │bar   │ │ ┌───┬───┬───┬───┐   │ │Feed     │   │    │
│  │  │Nav   │ │ │M1 │M2 │M3 │M4 │   │ │● User A │   │    │
│  │  │       │ │ └───┴───┴───┴───┘   │ │  action │   │    │
│  │  │●Dash  │ │  curved line chart    │ │● User B │   │    │
│  │  │●Proj  │ │  ▂▃▄▆▇▆▅▄▃         │ │  action │   │    │
│  │  │●Analyt│ │  amber gradient fill │ │● Alert  │   │    │
│  │  └──────┘ └─────────────────────┘ └──────────┘   │    │
│  └──────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

**CSS Class:** `.glass-dashboard`
```
background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.015) 40%, rgba(0,0,0,0.2) 100%);
border: 1px solid rgba(255,255,255,0.08);
border-radius: 20px;
backdrop-filter: blur(32px) saturate(180%);
box-shadow: 0 30px 80px rgba(0,0,0,0.7), 0 0 60px rgba(251,191,36,0.06), inset 0 1px 0 rgba(255,255,255,0.04);
transform: perspective(1200px) rotateY(-1.5deg) rotateX(1deg);
```

**Dashboard Inner Panels:** `.dashboard-panel` — `bg-white/[0.02] rounded-xl border border-white/5`

**Stat Cards:** `.dashboard-stat-card` — `bg-white/[0.025] rounded-xl p-4 border-l-2 border-amber-400/35`

### 2. Bento Grid Cards (4 × Service Cards)

**Grid:** 2×2 desktop, 2×2 tablet, 1×4 mobile — `grid grid-cols-1 md:grid-cols-2 gap-6`

Each card uses existing `.card-cyber` with `flex flex-col gap-4 p-6 sm:p-8 h-full`

#### Card 1 Micro-Widget: Analytics Bar Chart
```html
<div class="dashboard-panel p-3 space-y-2">
  <div class="flex justify-between text-[10px] font-mono">
    <span class="text-zinc-500">Users</span>
    <span class="text-zinc-300 font-semibold">2,847</span>
    <span class="text-emerald-400">▲ 23%</span>
  </div>
  <svg viewBox="0 0 200 32" class="w-full h-8">
    <defs><linearGradient id="barFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.05"/>
    </linearGradient></defs>
    <path d="M0,28 Q10,24 20,26 Q30,28 40,18 Q50,8 60,12 Q70,16 80,10 Q90,4 100,8 Q110,12 120,6 Q130,2 140,8 Q150,14 160,10 Q170,6 180,12 Q190,18 200,14 L200,32 L0,32 Z" fill="url(#barFade)"/>
    <path d="M0,28 Q10,24 20,26 Q30,28 40,18 Q50,8 60,12 Q70,16 80,10 Q90,4 100,8 Q110,12 120,6 Q130,2 140,8 Q150,14 160,10 Q170,6 180,12 Q190,18 200,14" stroke="#fbbf24" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </svg>
  <div class="flex gap-2 text-[8px]">
    <span class="status-pill--live">● Active</span>
    <span class="status-pill--idle">● Idle</span>
  </div>
</div>
```

#### Card 2 Micro-Widget: Workflow Nodes
```html
<svg viewBox="0 0 200 60" class="w-full h-14">
  <!-- Connector lines -->
  <line x1="30" y1="30" x2="75" y2="30" stroke="rgba(255,255,255,0.06)" stroke-width="2" stroke-dasharray="4 4"/>
  <line x1="75" y1="30" x2="125" y2="30" stroke="#fbbf24" stroke-width="2" stroke-opacity="0.3"/>
  <line x1="125" y1="30" x2="170" y2="30" stroke="rgba(255,255,255,0.06)" stroke-width="2" stroke-dasharray="4 4"/>
  <!-- Input node -->
  <rect x="10" y="18" width="40" height="24" rx="8" fill="rgba(251,191,36,0.06)" stroke="rgba(251,191,36,0.2)" stroke-width="1"/>
  <text x="30" y="33" text-anchor="middle" fill="#fbbf24" font-size="8" font-family="monospace">INPUT</text>
  <!-- Process node (active) -->
  <circle cx="100" cy="30" r="12" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" stroke-width="1.5"/>
  <circle cx="100" cy="30" r="18" fill="#fbbf24" opacity="0.1">
    <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite"/>
  </circle>
  <text x="100" y="33" text-anchor="middle" fill="#fbbf24" font-size="9" font-family="monospace">LLM</text>
  <!-- Output node -->
  <rect x="150" y="18" width="40" height="24" rx="8" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.2)" stroke-width="1"/>
  <text x="170" y="33" text-anchor="middle" fill="#34d399" font-size="8" font-family="monospace">OUTPUT</text>
</svg>
```

#### Card 3 Micro-Widget: Growth Metrics
```html
<div class="dashboard-panel p-3 space-y-2.5">
  <div class="space-y-1.5">
    <div class="flex justify-between text-[10px]"><span class="text-zinc-500">MoM Growth</span><span class="text-emerald-400 font-mono">42%</span></div>
    <div class="h-1.5 rounded-full bg-white/5 overflow-hidden">
      <div class="h-full w-[42%] rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 transition-all"></div>
    </div>
  </div>
  <div class="space-y-1.5">
    <div class="flex justify-between text-[10px]"><span class="text-zinc-500">Active Users</span><span class="text-zinc-300 font-mono">847</span></div>
    <div class="h-1.5 rounded-full bg-white/5 overflow-hidden">
      <div class="h-full w-[68%] rounded-full bg-gradient-to-r from-amber-400 to-yellow-400"></div>
    </div>
  </div>
  <div class="flex justify-between items-center pt-1">
    <span class="text-[8px] text-zinc-600 font-mono">Starting</span>
    <div class="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.5)]"></div>
    <div class="flex-1 h-px bg-white/5 mx-1"></div>
    <div class="w-1.5 h-1.5 rounded-full bg-white/10"></div>
    <div class="flex-1 h-px bg-white/5 mx-1"></div>
    <div class="w-1.5 h-1.5 rounded-full bg-white/10"></div>
    <span class="text-[8px] text-zinc-600 font-mono">Scale</span>
  </div>
</div>
```

#### Card 4 Micro-Widget: API Flow
```html
<div class="dashboard-panel p-3 space-y-2">
  <svg viewBox="0 0 200 32" class="w-full h-8">
    <rect x="2" y="6" width="36" height="20" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="20" y="19" text-anchor="middle" fill="#d4d4d8" font-size="7" font-family="monospace">FE</text>
    <line x1="38" y1="16" x2="80" y2="16" stroke="rgba(251,191,36,0.3)" stroke-width="1.5" marker-end="url(#amberArrow)"/>
    <rect x="80" y="4" width="44" height="24" rx="12" fill="rgba(251,191,36,0.06)" stroke="rgba(251,191,36,0.2)" stroke-width="1"/>
    <text x="102" y="19" text-anchor="middle" fill="#fbbf24" font-size="7" font-family="monospace">POST</text>
    <line x1="124" y1="16" x2="162" y2="16" stroke="rgba(52,211,153,0.3)" stroke-width="1.5"/>
    <rect x="162" y="6" width="36" height="20" rx="6" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.2)" stroke-width="1"/>
    <text x="180" y="19" text-anchor="middle" fill="#34d399" font-size="7" font-family="monospace">DB</text>
  </svg>
  <div class="flex items-center gap-2 text-[8px] text-zinc-500">
    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
    All Systems Operational
    <span class="text-zinc-600">·</span>
    <span class="font-mono text-zinc-600">42ms avg</span>
  </div>
</div>
```

### 3. Process Timeline (5-Step)

**Layout (Desktop):**
```
Step 1        Step 2        Step 3        Step 4        Step 5
┌──────┐      ┌──────┐      ┌──────┐      ┌──────┐      ┌──────┐
│  01  │      │  02  │      │  03  │      │  04  │      │  05  │
└──────┘      └──────┘      └──────┘      └──────┘      └──────┘
●━━━━━━━━━━━━●━━━━━━━━━━━━●━━━━━━━━━━━━●━━━━━━━━━━━━●
Discovery    Proposal     Dev Sprints  QA & Polish  Handover
```

**Node:** `w-11 h-11 rounded-full bg-amber-500/10 border-2 border-amber-500/20 flex items-center justify-center font-mono text-sm font-bold text-amber-400` with `shadow-[0_0_20px_rgba(251,191,36,0.1)]`

**States:**
- **Resting:** Default amber outline circle
- **Hover:** Scale 1.1, glow intensifies to `0 0 30px rgba(251,191,36,0.25)`
- **Active:** Solid amber fill `bg-amber-400 text-black`
- **Complete:** Emerald `bg-emerald-500/10 border-emerald-500/20 text-emerald-400` with checkmark

**Connector:** `h-px bg-gradient-to-r from-amber-500/15 via-amber-500/30 to-transparent`

**Card below:** `.card-cyber` with `p-4 space-y-1` — uppercase title, description text

---

## Implementation Phases

### Phase 1 — Foundation & Hero (Effort: High)

**Files:** `src/pages/index.astro`, `src/styles/globals.css`

- [ ] Update hero section copy (eyebrow, H1, subheadline, CTAs)
- [ ] Replace trust bar text with the 3 pillar metrics
- [ ] Add `.glass-dashboard`, `.dashboard-panel`, `.dashboard-stat-card` CSS classes to globals.css
- [ ] Build the glass dashboard frame with SVG analytics chart
- [ ] Add 4 metric stat cards inside dashboard (Users, Revenue, Active, Uptime)
- [ ] Add ambient glow spotlight divs behind dashboard
- [ ] Apply `perspective` transform for isometric tilt

### Phase 2 — Services Bento Grid (Effort: Medium)

**Files:** `src/pages/index.astro`, `src/styles/globals.css`

- [ ] Restructure services section to 2×2 bento grid layout
- [ ] Update copy for all 4 service cards
- [ ] Build Card 1 micro-widget: SVG analytics bar chart with gradient fill
- [ ] Build Card 2 micro-widget: SVG workflow node graph with animated pulse
- [ ] Build Card 3 micro-widget: Growth metric bars with phase indicator
- [ ] Build Card 4 micro-widget: API request/response flow diagram
- [ ] Add hover state animations to each micro-widget

### Phase 3 — Process Timeline (Effort: Medium)

**Files:** `src/pages/index.astro`, `src/styles/globals.css`

- [ ] Build horizontal 5-step timeline layout
- [ ] Implement timeline nodes with numbered circles
- [ ] Add connector line with gradient between nodes
- [ ] Create `.timeline-node` CSS with hover/active/complete states
- [ ] Implement step cards below each node with title + description
- [ ] Add scroll-triggered active step highlighting (IntersectionObserver)
- [ ] Build responsive mobile variant (vertical stack)

### Phase 4 — Why NextReach Positioning (Effort: Low)

**Files:** `src/pages/index.astro`

- [ ] Update "Why Work With Us" section with new copy
- [ ] Build comparison layout: Traditional Bloat vs NextReach Model
- [ ] Add final CTA section with primary button
- [ ] Polish section spacing and transitions

### Phase 5 — Polish & Performance (Effort: Low)

**Files:** All touched files

- [ ] Audit all animation performance (`will-change`, `transform`-only animations)
- [ ] Add `prefers-reduced-motion` overrides
- [ ] Test responsive breakpoints: mobile 320px, tablet 768px, desktop 1280px
- [ ] Verify contrast ratios meet WCAG AA
- [ ] Run Lighthouse audit — target 90+ Performance
- [ ] Cross-browser test (Chrome, Safari, Firefox)

---

## Priority Order

```
Phase 1 (Hero) ─── High visual impact, establishes premium tone immediately
     │
     ▼
Phase 2 (Bento) ── Medium effort, high differentiation vs text-only cards
     │
     ▼
Phase 3 (Timeline) ── Medium effort, demonstrates process transparency
     │
     ▼
Phase 4 (Positioning) ── Low effort, copy-focused
     │
     ▼
Phase 5 (Polish) ── Quality assurance, performance targets
```

**Estimated total effort:** 5–8 hours of implementation time.
