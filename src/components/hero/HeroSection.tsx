"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Tilt } from "@/components/unlumen-ui/tilt";
import { GlowingBadge } from "@/components/unlumen-ui/glowing-badge";
import { ClippedCircle } from "@/components/unlumen-ui/clipped-circle";
import { GlowButton } from "@/components/unlumen-ui/glow";
import MagneticButton from "@/components/smoothui/magnetic-button";

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return mobile;
}

export default function HeroSection() {
  const isMobile = useIsMobile();

  const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

  return (
    <section className="container-hero relative overflow-hidden">
      {/* ClippedCircle cursor-following spotlight */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <ClippedCircle
          circleClassName="bg-amber-400/10"
          circleSize={500}
        />
      </div>

      {/* Ambient glow orbs */}
      <div
        className="absolute top-0 left-1/2 w-[700px] h-[400px] rounded-full blur-[130px] pointer-events-none -z-10 animate-mesh-1"
        style={{ background: "rgba(251,191,36,0.08)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-12 left-[40%] w-[500px] h-[300px] rounded-full blur-[110px] pointer-events-none -z-10 animate-mesh-2"
        style={{ background: "rgba(234,179,8,0.05)" }}
        aria-hidden="true"
      />

      <div className="text-center relative z-10 mb-14">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut as any }}
          className="badge-premium-accent text-[10px] font-bold px-3 py-1 inline-flex mb-5"
        >
          AI Engineering Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: easeOut as any }}
          className="text-hero text-white mb-6 font-display font-bold text-balance-wide"
        >
          AI agents, business automations, web and mobile apps —<br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 glow-text">
            shipped in weeks, not quarters.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: easeOut as any }}
          className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-body"
        >
          We build custom AI agents, business automations, web applications, and mobile apps under fixed-scope contracts. Direct senior developer access. Zero agency overhead. Rapid sprint delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: easeOut as any }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="/contact">
            <GlowButton
              mode="rotate"
              colors={["#fbbf24", "#f59e0b", "#d97706", "#fbbf24"]}
              blur="strong"
              duration={6}
              glowScale={1.15}
              className="btn-premium-primary !bg-amber-400 !text-zinc-950 !font-semibold !text-sm !px-6 !py-3 !rounded-xl !shadow-[0_0_16px_rgba(251,191,36,0.12)] !border-none !inline-flex !items-center !gap-2"
              wrapperClassName="inline-flex"
            >
              <span className="flex items-center gap-2">
                Schedule a Technical Discovery Call
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </GlowButton>
          </a>

          <MagneticButton
            asChild
            variant="outline"
            strength={0.25}
            radius={120}
            className="!rounded-xl !border-zinc-700 !text-zinc-300 !bg-transparent !text-sm !px-6 !py-3 !font-medium hover:!border-zinc-500 hover:!text-white hover:!bg-white/5"
          >
            <a href="/portfolio">Explore Our Work & Stack</a>
          </MagneticButton>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: easeOut as any }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left"
        >
          <div className="dashboard-panel p-3.5">
            <p className="text-xs font-semibold text-amber-400 font-display mb-0.5">Senior Developer Led</p>
            <p className="text-[11px] text-zinc-500 leading-relaxed">Every project built directly by a senior engineer. No junior padding, no account manager handoffs.</p>
          </div>
          <div className="dashboard-panel p-3.5">
            <p className="text-xs font-semibold text-amber-400 font-display mb-0.5">Fixed-Scope Clarity</p>
            <p className="text-[11px] text-zinc-500 leading-relaxed">Precise, itemized proposal before work begins. Pay the agreed amount — never a dollar more.</p>
          </div>
          <div className="dashboard-panel p-3.5">
            <p className="text-xs font-semibold text-amber-400 font-display mb-0.5">Rapid Sprint Execution</p>
            <p className="text-[11px] text-zinc-500 leading-relaxed">Bi-weekly delivery sprints with staging previews. Production-ready code, not half-baked demos.</p>
          </div>
        </motion.div>
      </div>

      {/* Dashboard Mockup with Tilt */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: easeOut as any }}
      >
        <Tilt
          rotationFactor={isMobile ? 0 : 4}
          springOptions={{ stiffness: 180, damping: 20 }}
          className="glass-dashboard relative p-4 sm:p-6 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-[auto_1fr_auto] gap-3 sm:gap-4">
            {/* Sidebar Nav */}
            <div className="dashboard-panel p-2.5 w-14 sm:w-16 flex flex-col items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center opacity-60">
                <svg className="w-3.5 h-3.5 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center opacity-60">
                <svg className="w-3.5 h-3.5 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06"/></svg>
              </div>
            </div>

            {/* Main Analytics View */}
            <div className="dashboard-panel p-3 sm:p-4 space-y-3 sm:space-y-4 min-w-0">
              {/* Metric Cards Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                <div className="dashboard-stat-card">
                  <p className="text-[10px] text-zinc-500 font-mono mb-0.5">Active Users</p>
                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-bold text-white font-mono tracking-tight">2,847</span>
                    <span className="text-[10px] text-emerald-400 font-mono">▲ 12%</span>
                  </div>
                </div>
                <div className="dashboard-stat-card">
                  <p className="text-[10px] text-zinc-500 font-mono mb-0.5">Monthly Revenue</p>
                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-bold text-white font-mono tracking-tight">$48.2k</span>
                    <span className="text-[10px] text-emerald-400 font-mono">▲ 8.3%</span>
                  </div>
                </div>
                <div className="dashboard-stat-card">
                  <p className="text-[10px] text-zinc-500 font-mono mb-0.5">Active Projects</p>
                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-bold text-white font-mono tracking-tight">14</span>
                    <span className="text-[10px] text-amber-400 font-mono">● 3 in dev</span>
                  </div>
                </div>
                <div className="dashboard-stat-card">
                  <p className="text-[10px] text-zinc-500 font-mono mb-0.5">Uptime SLA</p>
                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-bold text-white font-mono tracking-tight">99.97%</span>
                    <span className="text-[10px] text-emerald-400 font-mono">● Live</span>
                  </div>
                </div>
              </div>

              {/* Line Chart */}
              <div className="dashboard-panel p-3">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] text-zinc-400 font-semibold font-display">Platform Growth</span>
                  <div className="flex gap-2">
                    <span className="text-[9px] text-zinc-600 font-mono">6mo</span>
                    <span className="text-[9px] text-zinc-500 font-mono">3mo</span>
                    <span className="text-[9px] text-zinc-500 font-mono">1mo</span>
                  </div>
                </div>
                <svg viewBox="0 0 300 64" className="w-full h-12 sm:h-16" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fbbf24" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#fbbf24" stopOpacity={0.01} />
                    </linearGradient>
                  </defs>
                  <path d="M0,56 Q15,52 30,54 Q45,56 60,40 Q75,24 90,30 Q105,36 120,24 Q135,12 150,18 Q165,24 180,14 Q195,6 210,10 Q225,14 240,8 Q255,2 270,12 Q285,22 300,16 L300,64 L0,64 Z" fill="url(#chartFill)" />
                  <path d="M0,56 Q15,52 30,54 Q45,56 60,40 Q75,24 90,30 Q105,36 120,24 Q135,12 150,18 Q165,24 180,14 Q195,6 210,10 Q225,14 240,8 Q255,2 270,12 Q285,22 300,16" stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="240" cy="8" r="3" fill="#fbbf24" stroke="#0a0a0a" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="dashboard-panel p-2.5 sm:p-3 w-28 sm:w-32 space-y-2.5">
              <p className="text-[9px] text-zinc-500 font-semibold font-display uppercase tracking-wider">Activity</p>
              <div className="space-y-2">
                <div className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 shrink-0"></span>
                  <div className="min-w-0">
                    <p className="text-[9px] text-zinc-400 truncate">Deploy complete</p>
                    <p className="text-[8px] text-zinc-600 font-mono">2m ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0"></span>
                  <div className="min-w-0">
                    <p className="text-[9px] text-zinc-400 truncate">Build running</p>
                    <p className="text-[8px] text-zinc-600 font-mono">14m ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-1 shrink-0"></span>
                  <div className="min-w-0">
                    <p className="text-[9px] text-zinc-400 truncate">Review pending</p>
                    <p className="text-[8px] text-zinc-600 font-mono">1h ago</p>
                  </div>
                </div>
              </div>
              <div className="pt-1.5 border-t border-white/5">
                <GlowingBadge variant="success" pulse>
                  <span className="flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 inline-block" />
                    All systems nominal
                  </span>
                </GlowingBadge>
              </div>
            </div>
          </div>
        </Tilt>
      </motion.div>

      {/* HeroShowcase */}
      <div className="mt-10 px-1 sm:px-4">
        <HeroShowcaseComponent />
      </div>
    </section>
  );
}

/* Inline HeroShowcase adapted from the existing Astro component */
function HeroShowcaseComponent() {
  const isMobile = useIsMobile();

  return (
    <Tilt
      rotationFactor={isMobile ? 0 : 3}
      springOptions={{ stiffness: 150, damping: 18 }}
      className="hero-showcase-inline"
    >
      <div className="hero-showcase-inner">
        <div className="hero-showcase-glow" aria-hidden="true" />
        <div className="hero-showcase-frame gradient-border">
          <div className="hero-showcase-chrome" aria-hidden="true">
            <span /><span /><span />
            <div className="hero-showcase-chrome-line" />
            <span className="hero-showcase-chrome-dot" />
          </div>
          <div className="hero-showcase-media">
            <img
              src="/assets/hero-dashboard-preview.webp"
              alt="NextReach Studio — dark analytics dashboard with amber and blue performance charts showing system metrics"
              width={1600}
              height={900}
              loading="eager"
              fetchPriority="high"
            />
            <div className="hero-showcase-scrim" aria-hidden="true" />
            <div className="hero-showcase-badge-wrapper">
              <GlowingBadge variant="success" pulse>
                Production System Active
              </GlowingBadge>
            </div>
            <div className="hero-showcase-metric">
              <span className="hero-showcase-metric-label">Delivery velocity</span>
              <strong>+42.8%</strong>
              <span className="hero-showcase-metric-trend">↗ this sprint</span>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
