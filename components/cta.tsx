import Link from "next/link";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="py-28 md:py-40 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Large display heading */}
        <h2 
          className="font-extrabold text-gray-900 mb-6 tracking-[-0.03em]"
          style={{
            fontSize: "clamp(2.75rem, 6vw + 1rem, 5.5rem)",
            lineHeight: 1.05,
          }}
        >
          Ready to build<br className="hidden sm:block" /> something great?
        </h2>
        
        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
          Let's turn your idea into a production-ready AI product.
        </p>

        {/* CTA button */}
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-7 text-lg font-semibold rounded-full transition-all duration-200 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#875BF8] focus-visible:ring-offset-2 active:scale-[0.98]"
          >
            Start a Project
          </Button>
        </Link>
      </div>
    </section>
  );
}
