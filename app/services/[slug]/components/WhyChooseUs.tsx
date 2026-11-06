import { CheckCircle2, Sparkles } from "lucide-react";

import { servicesData } from "@/app/data/services";

type Service = (typeof servicesData)[number];

type Props = {
  service: Service;
};

export default function WhyChooseUs({ service }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#251039] via-[#52218b] to-[#d97721] px-5 py-20 sm:py-24">
      {/* Background Effects */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-400/10 blur-[100px]" />

      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-[100px]" />

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-[10px] font-extrabold tracking-[2px] text-amber-400">
            <Sparkles size={15} />
            THE XTREME XPERTS DIFFERENCE
          </span>

          <h2 className="mt-5 text-3xl leading-tight font-black text-white sm:text-4xl">
            Why Choose <span className="text-amber-400">Xtreme Xperts?</span>
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-7 text-gray-400">
            We focus on reliable repair solutions, professional support and
            quality checks to help keep your devices working.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="benefit-card group rounded-2xl border border-white/10 bg-black/55 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/50 hover:bg-white/[0.09]"
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 transition-all duration-300 group-hover:bg-amber-400 group-hover:text-[#171923]">
                <CheckCircle2 size={23} />
              </div>

              {/* Benefit */}
              <h3 className="mt-6 text-sm leading-6 font-extrabold text-white">
                {benefit}
              </h3>

              {/* Bottom Accent */}
              <div className="mt-5 h-1 w-9 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
