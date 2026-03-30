"use client";

import { GLSLHills } from "./glsl-hills";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-white">
      <GLSLHills />
      <div className="space-y-6 pointer-events-none z-10 text-center absolute px-6">
        <h1 className="font-semibold text-5xl md:text-7xl whitespace-pre-wrap text-gray-900">
          <span className="italic text-4xl md:text-6xl font-thin">
            Build AI Products
            <br />
          </span>
          from Idea to Production
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          We partner with startups and companies to design, build, and launch
          <br className="hidden md:block" />
          AI-native products used in the real world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto pt-4">
          <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Start a Project
          </button>
          <button className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Work With Us
          </button>
        </div>
      </div>
    </section>
  );
}
