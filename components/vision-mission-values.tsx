"use client";

import Image from "next/image";
import { DotPattern } from "@/components/ui/dot-pattern";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function VisionMissionValues() {
  const items = [
    {
      title: "Vision",
      tagline: "Tech for everyone",
      image: "/illustration/surreal-flying-bulbs.svg",
      sticker: "/illustration/question-mark.svg",
      color: "from-purple-500/10 to-purple-600/10",
    },
    {
      title: "Mission",
      tagline: "Build, grow, scale",
      image: "/illustration/product-launch.svg",
      sticker: "/illustration/microphone.svg",
      color: "from-blue-500/10 to-blue-600/10",
    },
    {
      title: "Values",
      tagline: "Own it, build it right",
      image: "/illustration/shaking-hands.svg",
      sticker: "/illustration/happy-man-waving.svg",
      color: "from-indigo-500/10 to-indigo-600/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-semibold text-gray-900 mb-6 leading-[0.95] tracking-[-0.02em]">
            Who we are
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-[58ch] mx-auto leading-8">
            Our vision, mission, and values drive everything we build
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 p-10 h-full hover:border-[#875BF8] transition-all duration-200 hover:shadow-xl">
                {/* Background pattern - alternating between Grid and Dot */}
                {index === 0 && (
                  <DotPattern
                    className={cn(
                      "absolute inset-0 h-full w-full fill-purple-400/30",
                      "[mask-image:radial-gradient(400px_circle_at_top_left,white,transparent)]",
                    )}
                  />
                )}
                {index === 1 && (
                  <GridPattern
                    width={20}
                    height={20}
                    className={cn(
                      "absolute inset-0 h-full w-full stroke-blue-400/30",
                      "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                    )}
                  />
                )}
                {index === 2 && (
                  <DotPattern
                    className={cn(
                      "absolute inset-0 h-full w-full fill-indigo-400/30",
                      "[mask-image:radial-gradient(400px_circle_at_top_right,white,transparent)]",
                    )}
                  />
                )}

                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none`}
                />

                {/* Illustration */}
                <div className="relative mb-8 h-56 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={220}
                      height={220}
                      loading="lazy"
                      className="object-contain"
                    />
                  </motion.div>
                  <motion.div
                    className="pointer-events-none absolute right-1 top-1"
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={item.sticker}
                      alt=""
                      width={76}
                      height={76}
                      loading="lazy"
                      className="h-12 w-12 object-contain opacity-60"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-8">
                    {item.tagline}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Reduced motion support */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
