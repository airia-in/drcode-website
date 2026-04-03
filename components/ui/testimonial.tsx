"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  src: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "They understood the idea quickly, turned it into a clear product plan, and moved with real startup speed.",
    name: "Nithyakala",
    src: "/illustration/woman-with-long-hair-avatar.svg",
  },
  {
    quote:
      "The team made the process simple from day one and kept every step focused on what would actually ship.",
    name: "Aditya Ji",
    src: "/illustration/man-with-short-hair-avatar.svg",
  },
  {
    quote:
      "We got thoughtful product direction, clean execution, and a working solution that felt built for the real market.",
    name: "Yourmitra",
    src: "/illustration/woman-with-curly-hair-avatar.svg",
  },
  {
    quote:
      "They balance strategy and delivery well, which made it easier to go from concept to launch without friction.",
    name: "Aarav",
    src: "/illustration/man-with-long-hair-avatar.svg",
  },
];

// Smooth easing
const easeOutQuart: [number, number, number, number] = [0.25, 1, 0.5, 1];

const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const rotations = useMemo(
    () => testimonials.map(() => `${Math.floor(Math.random() * 12) - 6}deg`),
    [testimonials],
  );

  const handleNext = React.useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const isActive = (index: number) => index === active;

  return (
    <div className="mx-auto max-w-sm px-4 py-20 antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-20">
        <div className="flex items-center justify-center">
          <div className="relative h-80 w-full max-w-xs">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                    y: 30,
                    rotate: rotations[index],
                  }}
                  animate={{
                    opacity: 1,
                    scale: isActive(index) ? 1 : 0.95,
                    y: isActive(index) ? 0 : 15,
                    zIndex: isActive(index)
                      ? testimonials.length
                      : testimonials.length - Math.abs(index - active),
                    rotate: isActive(index) ? "0deg" : rotations[index],
                  }}
                  exit={{ opacity: 0, scale: 0.95, y: -30 }}
                  transition={{ duration: 0.4, ease: easeOutQuart }}
                  className="absolute inset-0 origin-bottom"
                  style={{ perspective: "1000px" }}
                >
                  <motion.img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl bg-white object-cover shadow-xl"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col justify-center py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: easeOutQuart }}
              className="flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                  {testimonials[active].name}
                </h3>
                <motion.p className="mt-8 text-lg leading-8 text-gray-600">
                  {testimonials[active].quote}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 pt-12">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 transition-all duration-200 ease-out hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#875BF8] focus-visible:ring-offset-2 active:scale-95"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700 transition-transform duration-200 ease-out group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 transition-all duration-200 ease-out hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#875BF8] focus-visible:ring-offset-2 active:scale-95"
            >
              <ArrowRight className="h-5 w-5 text-gray-700 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function AnimatedTestimonialsDemo() {
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export function Component() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4 leading-[0.95] tracking-[-0.02em]">
            What our clients say
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-[58ch] mx-auto leading-8">
            Real feedback from founders and teams we've partnered with
          </p>
        </div>
        <AnimatedTestimonialsDemo />
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
