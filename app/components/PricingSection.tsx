"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const plans = [
  {
    name: "iClaw Lite",
    price: "$299",
    desc: "Perfect for personal use and getting started with AI.",
    features: [
      "Ready-to-use AI models",
      "Simple GUI interface",
      "Local data privacy",
      "Community support",
      "Basic AI agents",
    ],
    cta: "Pre-order Lite",
    featured: false,
  },
  {
    name: "iClaw Pro",
    price: "$499",
    desc: "For professionals and small teams who need more power.",
    features: [
      "All Lite features",
      "Advanced AI models",
      "Workflow automation",
      "Plugin ecosystem",
      "Priority support",
      "API access",
    ],
    cta: "Pre-order Pro",
    featured: true,
  },
  {
    name: "iClaw Enterprise",
    price: "Contact Us",
    desc: "For organizations requiring custom deployment and support.",
    features: [
      "All Pro features",
      "Custom model integration",
      "Team management",
      "Dedicated support",
      "SLA guarantee",
      "On-site setup",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="section-divider max-w-6xl mx-auto mb-32" />
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-20">
          <p className="text-[#2997ff] text-lg font-medium mb-4">Pricing</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Invest in your AI future.
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
            One-time purchase. No subscriptions. No hidden fees. AI that truly
            belongs to you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-2xl p-8 h-full flex flex-col ${
                  plan.featured
                    ? "bg-gradient-to-b from-[#2997ff]/10 to-transparent border-2 border-[#2997ff]/30"
                    : "glass-card"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2997ff] text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                </div>
                <p className="text-[#86868b] text-sm mb-6">{plan.desc}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-[#a1a1a6] flex items-center gap-3"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={plan.featured ? "#2997ff" : "#424245"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`inline-flex items-center justify-center w-full py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    plan.featured
                      ? "bg-[#2997ff] text-white hover:bg-[#0077ed] hover:shadow-[0_0_30px_rgba(41,151,255,0.3)]"
                      : "border border-[#424245] text-white hover:border-[#86868b]"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
