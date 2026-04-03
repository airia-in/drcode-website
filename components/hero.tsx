"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const GLSLHills = dynamic(
  () => import("./ui/glsl-hills").then((mod) => mod.GLSLHills),
  {
    ssr: false,
  },
);

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-white">
      <GLSLHills />
      <div className="space-y-6 pointer-events-none z-10 text-center absolute px-6">
        {/* Staggered entrance animations */}
        <p
          className="text-sm md:text-base font-medium tracking-widest uppercase text-purple-600 transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "100ms",
          }}
        >
          AI Venture Studio
        </p>
        <h1
          className="font-semibold text-5xl md:text-7xl whitespace-pre-wrap text-gray-900 transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "250ms",
          }}
        >
          <span className="italic text-4xl md:text-6xl font-thin">
            Build AI Products
            <br />
          </span>
          from Idea to Production
        </h1>
        <p
          className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "400ms",
          }}
        >
          We partner with startups and companies to design, build, and launch
          <br className="hidden md:block" />
          AI-native products used in the real world.
        </p>
        <div
          className="flex justify-center items-center pointer-events-auto pt-4 transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "550ms",
          }}
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 group"
            >
              <span className="inline-flex items-center gap-2">
                Start a Project
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Reduced motion support */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
