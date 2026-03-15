"use client";

import FadeIn from "./FadeIn";

const rows = [
  { feature: "Privacy", cloud: "Data on remote servers", local: "Complex self-hosting", iclaw: "100% local, zero leaks" },
  { feature: "Setup", cloud: "Account + API keys", local: "Hours of configuration", iclaw: "Plug in and go" },
  { feature: "Cost", cloud: "Monthly subscriptions", local: "Expensive hardware", iclaw: "One-time purchase" },
  { feature: "Performance", cloud: "Latency dependent", local: "Varies widely", iclaw: "Optimized & consistent" },
  { feature: "Offline Use", cloud: "No", local: "Yes", iclaw: "Yes" },
  { feature: "Updates", cloud: "Provider controlled", local: "Manual", iclaw: "One-click OTA" },
];

export default function ComparisonSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="section-divider max-w-6xl mx-auto mb-32" />
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-20">
          <p className="text-[#ff453a] text-lg font-medium mb-4">Comparison</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            See the difference.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left text-[#86868b] text-sm font-medium py-4 pr-6 w-1/4" />
                  <th className="text-center text-[#86868b] text-sm font-medium py-4 px-4 w-1/4">
                    Cloud AI
                  </th>
                  <th className="text-center text-[#86868b] text-sm font-medium py-4 px-4 w-1/4">
                    Self-hosted
                  </th>
                  <th className="text-center text-sm font-medium py-4 pl-4 w-1/4">
                    <span className="gradient-text-blue font-semibold">
                      iClaw
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="text-white font-medium py-5 pr-6 text-sm">
                      {row.feature}
                    </td>
                    <td className="text-[#86868b] text-center py-5 px-4 text-sm">
                      {row.cloud}
                    </td>
                    <td className="text-[#86868b] text-center py-5 px-4 text-sm">
                      {row.local}
                    </td>
                    <td className="text-[#2997ff] text-center py-5 pl-4 text-sm font-medium">
                      {row.iclaw}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
