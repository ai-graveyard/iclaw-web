"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const ecosystem: { title: string; desc: string; icon: ReactNode; color: string }[] = [
  {
    title: "AI Agents",
    desc: "Autonomous agents that execute complex tasks on your behalf.",
    color: "#2997ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="3" />
        <path d="M12 8v3" />
        <line x1="8" y1="16" x2="8" y2="16.01" />
        <line x1="16" y1="16" x2="16" y2="16.01" />
      </svg>
    ),
  },
  {
    title: "Workflows",
    desc: "Visual workflow builder for multi-step AI automations.",
    color: "#bf5af2",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="6" height="6" rx="1" />
        <rect x="16" y="4" width="6" height="6" rx="1" />
        <rect x="9" y="14" width="6" height="6" rx="1" />
        <path d="M8 7h8" />
        <path d="M5 10v2a2 2 0 0 0 2 2h2" />
        <path d="M19 10v2a2 2 0 0 1-2 2h-2" />
      </svg>
    ),
  },
  {
    title: "Plugin System",
    desc: "Extend iClaw with community-built plugins and integrations.",
    color: "#ff9f0a",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6" />
        <path d="M9 5a3 3 0 1 0 6 0" />
        <path d="M4 12h16" />
        <rect x="4" y="12" width="16" height="10" rx="2" />
        <line x1="9" y1="17" x2="9" y2="17.01" />
        <line x1="15" y1="17" x2="15" y2="17.01" />
      </svg>
    ),
  },
  {
    title: "API Access",
    desc: "Full API for developers to build on top of iClaw.",
    color: "#30d158",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
        <circle cx="7" cy="6" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="17" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Skills Library",
    desc: "Pre-built AI skills for common tasks, ready to deploy instantly.",
    color: "#ff453a",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M9 7h6" />
        <path d="M9 11h4" />
      </svg>
    ),
  },
  {
    title: "Community",
    desc: "Join a global community of iClaw users sharing agents and skills.",
    color: "#64d2ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function EcosystemSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="section-divider max-w-6xl mx-auto mb-32" />
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-6">
          <p className="text-[#64d2ff] text-lg font-medium mb-4">Ecosystem</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            More than a device.
            <br />
            <span className="text-[#86868b]">It&apos;s a platform.</span>
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto mb-20">
            iClaw is backed by a growing ecosystem of agents, skills, plugins,
            and a vibrant community.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystem.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-8 h-full"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    color: item.color,
                    background: `${item.color}15`,
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[#86868b] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
