export default function WhyDrCode() {
  const reasons = [
    {
      title: "Build real-world systems",
      description:
        "We focus on shipping products that solve real problems, not just demos.",
    },
    {
      title: "Work directly with founders",
      description:
        "Close collaboration with your team to ensure alignment and speed.",
    },
    {
      title: "End-to-end ownership",
      description:
        "From initial concept to production deployment, we own the entire journey.",
    },
    {
      title: "Fast iteration and experimentation",
      description:
        "Move quickly, test ideas, and learn from real user feedback.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900">
          Why DrCode
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
