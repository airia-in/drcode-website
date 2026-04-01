"use client";

import { BorderBeam } from "./ui/border-beam";
import { cn } from "@/lib/utils";
import { Target, Users, Layers, Zap } from "lucide-react";

export default function WhyDrCode() {
  const reasons = [
    {
      title: "Build real-world systems",
      description:
        "We focus on shipping products that solve real problems, not just demos or prototypes.",
      icon: Target,
    },
    {
      title: "Work directly with founders",
      description:
        "Close collaboration with your team. Fast decisions, clear communication, zero bureaucracy.",
      icon: Users,
    },
    {
      title: "End-to-end ownership",
      description:
        "From initial concept to production deployment, we own the entire journey with you.",
      icon: Layers,
    },
    {
      title: "Fast iteration",
      description:
        "Move quickly, test ideas, and learn from real user feedback. Build, measure, improve.",
      icon: Zap,
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
            Why work with us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not consultants. We're builders who ship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="group relative">
                <div
                  className={cn(
                    "relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-8 h-full",
                    "transition-all duration-300 hover:border-[#875BF8]/35 hover:shadow-lg",
                  )}
                >
                  {/* Hover gradient tint */}
                  <div className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-[#875BF8]/18 via-indigo-500/12 to-transparent" />

                  {/* Soft light fade on hover */}
                  <div className="pointer-events-none absolute -top-10 -right-10 z-[1] h-52 w-52 rounded-full bg-[#875BF8]/25 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Subtle inset fade to make hover state clearly visible */}
                  <div className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-[inset_0_0_0_1px_rgba(135,91,248,0.22)]" />

                  {/* Border beam on hover */}
                  <BorderBeam
                    size={180}
                    duration={10}
                    delay={index * 1.5}
                    colorFrom="#875BF8"
                    colorTo="#6366f1"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#875BF8]/10 transition-colors">
                      <Icon className="w-6 h-6 text-gray-600 group-hover:text-[#875BF8] transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-semibold text-black mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
