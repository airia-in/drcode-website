"use client";

import Image from "next/image";

export default function WhyDrCode() {
  const reasons = [
    {
      title: "Real products, not demos",
      description: "We build production systems that serve real users, not proof-of-concepts that sit on a shelf.",
      image: "/illustration/man-riding-a-rocket.svg",
    },
    {
      title: "Close collaboration",
      description: "Your team works directly with ours. No layers of account managers or project coordinators.",
      image: "/illustration/shaking-hands.svg",
    },
    {
      title: "End-to-end ownership",
      description: "We own the entire journey from initial idea to deployment and beyond. One team, full accountability.",
      image: "/illustration/engineer.svg",
    },
    {
      title: "Build, measure, improve",
      description: "Rapid iterations based on real data and user feedback. We ship fast and learn faster.",
      image: "/illustration/business-success-chart.svg",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-semibold text-gray-900 mb-6 leading-[0.95] tracking-[-0.02em]">
            Why work with us
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-[46ch] mx-auto leading-8">
            We're not consultants. We're builders who ship.
          </p>
        </div>

        {/* Two-column list layout */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-6 group"
            >
              {/* Icon/Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#875BF8] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
