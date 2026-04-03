"use client";

import Image from "next/image";

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Idea & Discovery",
      description: "We start by understanding your vision, challenges, and goals through in-depth discussions.",
      image: "/illustration/idea-launch.svg",
    },
    {
      number: "02",
      title: "Rapid Prototyping",
      description: "Quick iterations to validate concepts and get early feedback before full development.",
      image: "/illustration/working-vacation.svg",
    },
    {
      number: "03",
      title: "Build & Scale",
      description: "Production-grade development with clean code, testing, and scalable architecture.",
      image: "/illustration/product-launch.svg",
    },
    {
      number: "04",
      title: "Deploy & Monitor",
      description: "Launch with confidence and continuous monitoring to ensure everything runs smoothly.",
      image: "/illustration/remote-work.svg",
    },
  ];

  return (
    <section
      id="how-we-work"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-semibold text-gray-900 mb-6 leading-[0.95] tracking-[-0.02em]">
            How we work
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-[44ch] mx-auto leading-8">
            Four steps from idea to production
          </p>
        </div>

        {/* Vertical timeline layout */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Number & Image Side */}
              <div className="flex-shrink-0 relative md:w-64">
                <div className="relative w-64 h-64 flex items-center justify-center">
                  {/* Step number - large background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[200px] font-bold text-gray-100 leading-none">
                      {step.number}
                    </span>
                  </div>
                  {/* Image overlay */}
                  <div className="relative z-10">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={160}
                      height={160}
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`flex-1 text-center md:text-left ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}>
                <div className="inline-block mb-3 px-4 py-1 bg-purple-100 text-purple-900 rounded-full text-sm font-semibold">
                  Step {step.number}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className={`text-lg text-gray-600 leading-relaxed max-w-md ${
                  index % 2 === 1 ? "md:ml-auto" : ""
                }`}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
