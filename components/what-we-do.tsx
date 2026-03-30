export default function WhatWeDo() {
  const services = [
    {
      title: "AI Systems for Industrial Intelligence",
      description:
        "Enterprise-grade AI systems that transform industrial operations",
    },
    {
      title: "AI Platforms for Startups",
      description: "Build and scale AI products from zero to production",
    },
    {
      title: "AI Voice Systems",
      description: "Intelligent voice interfaces for real-world applications",
    },
    {
      title: "Internal AI Products",
      description: "Custom AI tools that accelerate your team's workflow",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900">
          What We Do
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10 border border-gray-200 rounded-2xl hover:border-gray-400 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
