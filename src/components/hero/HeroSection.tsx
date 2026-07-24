"use client";

import { motion } from "motion/react";
import { GlowButton } from "@/components/unlumen-ui/glow";
import { OrbitingSkills } from "@/components/unlumen-ui/orbiting-skills";
import { GlowingBadge } from "@/components/unlumen-ui/glowing-badge";
import { Tilt } from "@/components/unlumen-ui/tilt";
import MagneticButton from "@/components/smoothui/magnetic-button";

const items = [
  {
    label: "AI Agents",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06"/></svg>,
  },
  {
    label: "Web Apps",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
  {
    label: "Automation",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
  },
  {
    label: "Mobile",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  },
  {
    label: "MVP",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M4.5 16.5c-1.5 1.26-2 3.38-2 3.38s2.12-.5 3.38-2c1.26-1.5 2.12-3.38 2.12-3.38s-2.12.5-3.38 2z"/><path d="M12 12L4.5 19.5"/><path d="M19 9c-1.5 1.5-4 1.5-5.5 0s-1.5-4 0-5.5C15 2 21 2 21 2s0 6-2 7z"/></svg>,
  },
  {
    label: "APIs",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>,
  },
  {
    label: "AI Consulting",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  },
];

export default function HeroSection() {
  return (
    <section className="container-hero relative min-h-[90dvh] flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute top-1/3 left-1/2 w-[600px] h-[400px] -translate-x-1/2 rounded-full blur-[130px] pointer-events-none -z-10 animate-mesh-1"
        style={{ background: "rgba(251,191,36,0.08)" }}
        aria-hidden="true"
      />

      <div className="text-center relative z-10 flex flex-col items-center gap-5 sm:gap-6 w-full max-w-4xl px-4">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as any }}
        >
          <GlowingBadge variant="warning" dot pulse>
            AI Engineering Studio
          </GlowingBadge>
        </motion.p>

        <Tilt rotationFactor={8} springOptions={{ stiffness: 300, damping: 20 }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as any }}
            className="text-hero text-white font-display font-bold text-balance-wide max-w-3xl"
          >
            Ship production software in
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 animate-gradient">
              weeks, not quarters.
            </span>
          </motion.h1>
        </Tilt>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as any }}
          className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg font-body"
        >
          Custom AI agents, web apps, automations & mobile — under fixed-scope contracts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any }}
          className="my-4 sm:my-6"
        >
          <OrbitingSkills
            items={items}
            radius={110}
            duration={22}
            showPath={false}
            followCursor
          >
            <img
              src="/logo.png"
              alt="NextReach Studio"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
            />
          </OrbitingSkills>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as any }}
          className="flex flex-col items-center gap-3"
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
                Schedule a Discovery Call
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </GlowButton>
          </a>
          <MagneticButton asChild strength={0.2} radius={80} className="!bg-transparent !text-zinc-500 !text-xs !font-medium hover:!text-zinc-300 !p-0 !h-auto !border-none !shadow-none">
            <a href="/portfolio">
              Explore our work &rarr;
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-5 h-5 text-zinc-600"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
