import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  Headphones,
  Smartphone,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: Wrench,
    title: "Professional Repair Support",
    description:
      "Get assistance with common device faults and explore suitable repair options.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Service",
    description:
      "We believe in careful repair work and attention to your device's needs.",
  },
  {
    icon: Smartphone,
    title: "Multiple Device Solutions",
    description:
      "Find repair options for smartphones, laptops, tablets and other electronics.",
  },
  {
    icon: Headphones,
    title: "Customer-Focused Approach",
    description:
      "Get clear information to help you understand your device's repair requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#fafaf8] py-10 sm:py-10 lg:py-2"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          {/* RIGHT ON MOBILE: Image appears first */}
          <div className="relative order-1 mx-auto w-full max-w-xl lg:order-2 lg:ml-auto">
            {/* Decorative purple shape */}
            <div
              aria-hidden="true"
              className="absolute -right-2 -top-2 h-20 w-20 rounded-2xl bg-purple-200/70 sm:-right-5 sm:-top-5 sm:h-36 sm:w-36"
            />

            {/* Main image */}
            <div className="group relative h-[300px] w-full overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100 shadow-lg sm:h-[420px] sm:rounded-[28px] lg:h-[460px]">
  <Image
    src="/images/why-choose-us11.jpg"
    alt="Technician repairing a smartphone"
    fill
    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 50vw"
    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
    priority={false}
  />

              {/* Soft image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent pointer-events-none" />

              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  Device Care & Repair
                </span>

                <h3 className="mt-4 max-w-sm text-xl font-bold leading-snug text-white sm:text-3xl">
                  Better Support for Your Everyday Technology.
                </h3>
              </div>
            </div>

            {/* Yellow decorative element */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 right-6 h-5 w-14 rounded-full bg-amber-400 sm:right-12 sm:h-6 sm:w-16"
            />
          </div>

          {/* LEFT ON DESKTOP: Content appears second on mobile */}
          <div className="order-2 lg:order-1">
            {/* Section badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 shadow-sm">
            <Wrench size={15} className="text-amber-500" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-700 sm:text-xs">
              Why Choose Us
            </span>
          </div>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:mt-6 sm:text-4xl lg:text-5xl">
              Your Devices Deserve{" "}
              <span className="text-amber-500">Expert Care.</span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              Technology is part of everyday life. When something goes wrong,
              finding the right repair support matters. We help you explore
              solutions for your devices with a customer-focused approach.
            </p>

            {/* Benefits */}
            <div className="mt-7 space-y-5 sm:mt-9 sm:space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <div key={benefit.title} className="group flex gap-3 sm:gap-4">
                    {/* Benefit icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 text-amber-600 transition-all duration-300 group-hover:border-purple-200 group-hover:bg-purple-50 group-hover:text-purple-600 sm:h-12 sm:w-12">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    {/* Benefit text */}
                    <div className="min-w-0 flex-1 border-b border-slate-100 pb-4 sm:pb-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-purple-700 sm:text-lg">
                          {benefit.title}
                        </h3>

                        {index === 0 && (
                          <span className="rounded-full bg-amber-100 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-amber-700">
                            Our Approach
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to action */}
            <div className="mt-7 sm:mt-9">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 sm:w-auto sm:px-7 sm:py-4"
              >
                Talk to Our Team

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}