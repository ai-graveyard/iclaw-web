"use client";

import FadeIn from "./FadeIn";

const useCases = [
  {
    role: "Entrepreneurs",
    tasks: ["Write business plans", "Automate customer support", "Generate marketing content"],
    color: "#2997ff",
  },
  {
    role: "Designers",
    tasks: ["Generate creative briefs", "Automate asset production", "AI-powered brainstorming"],
    color: "#bf5af2",
  },
  {
    role: "Students",
    tasks: ["Research assistance", "Essay writing support", "Study material generation"],
    color: "#30d158",
  },
  {
    role: "Marketers",
    tasks: ["Social media automation", "Content scheduling", "Campaign analytics"],
    color: "#ff9f0a",
  },
  {
    role: "Developers",
    tasks: ["Code generation", "API testing automation", "Documentation writing"],
    color: "#ff453a",
  },
  {
    role: "Creators",
    tasks: ["Video script writing", "Podcast show notes", "Newsletter generation"],
    color: "#64d2ff",
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="relative py-32 px-6">
      <div className="section-divider max-w-6xl mx-auto mb-32" />
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-20">
          <p className="text-[#ff9f0a] text-lg font-medium mb-4">Use Cases</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Built for how you work.
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
            No matter your profession, iClaw adapts to your workflow and
            amplifies your output.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <FadeIn key={uc.role} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500">
                <div
                  className="w-3 h-3 rounded-full mb-5"
                  style={{ backgroundColor: uc.color }}
                />
                <h3 className="text-xl font-semibold text-white mb-4">
                  {uc.role}
                </h3>
                <ul className="space-y-2.5">
                  {uc.tasks.map((task) => (
                    <li
                      key={task}
                      className="text-[#86868b] text-sm flex items-start gap-2"
                    >
                      <span className="text-[#424245] mt-1">—</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
