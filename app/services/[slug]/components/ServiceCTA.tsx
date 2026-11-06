import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

export default function ServiceCTA() {
  return (
    <section className="px-5 pb-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#251039] via-[#52218b] to-[#d97721] px-7 py-12 sm:px-12 sm:py-14">
        {/* Background Decorations */}
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-amber-400/20 blur-[90px]" />

        <div className="absolute -bottom-32 left-20 h-64 w-64 rounded-full bg-amber-400/10 blur-[80px]" />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          {/* Left Content */}
          <div className="max-w-xl">
            <span className="text-[10px] font-extrabold tracking-[2px] text-amber-400">
              LET'S GET IT FIXED
            </span>

            <h2 className="mt-4 text-2xl leading-tight font-black text-white sm:text-3xl lg:text-4xl">
              Ready to Get Your Device Back in Action?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-300">
              Get in touch with our team and let us help you find the right
              repair solution.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-amber-400 px-8 py-4 text-sm font-extrabold text-[#171923] transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300"
          >
            Book Your Repair
            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
