import Link from "next/link";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="py-32 md:py-40 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Ultra-minimal centered text */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-12 leading-tight tracking-tight">
          Ready to build something great?
        </h2>

        {/* Single CTA button */}
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-black hover:bg-gray-900 text-white px-12 py-7 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
}
