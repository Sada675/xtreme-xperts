import Link from "next/link";

import { ArrowUpRight, Wrench, Settings2, ShieldCheck } from "lucide-react";

import { servicesData } from "@/app/data/services";

type Service = (typeof servicesData)[number];

type Props = {
  service: Service;
};

export default function RepairPricing({ service }: Props) {
  return (
    <section id="pricing" className="relative px-5 py-14 sm:py-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-[10px] font-extrabold tracking-[2px] text-amber-700">
            <Settings2 size={14} />
            OUR REPAIR SOLUTIONS
          </span>

          <h2 className="mt-5 text-3xl leading-tight font-black tracking-tight text-[#171923] sm:text-4xl lg:text-5xl">
            What We Repair & <span className="text-amber-500">Pricing</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            From common faults to complex issues, explore our repair solutions
            and estimated starting prices.
          </p>
        </div>

        {/* Repair Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.issues.map((issue, index) => (
            <div
              key={issue.title}
              className="repair-card group relative overflow-hidden rounded-[22px] border border-gray-200 bg-white p-6 shadow-[0_5px_25px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-300 hover:shadow-[0_20px_45px_-20px_rgba(217,119,6,0.3)] sm:p-7"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-amber-400 transition-transform duration-500 group-hover:scale-x-100" />

              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-all duration-300 group-hover:rotate-6 group-hover:bg-amber-400 group-hover:text-white">
                  <Wrench size={24} />
                </div>

                <span className="text-4xl font-black tracking-tight text-gray-100 transition-colors duration-300 group-hover:text-amber-100">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Card Content */}
              <h3 className="mt-7 text-lg font-extrabold text-[#171923] transition-colors group-hover:text-amber-600">
                {issue.title}
              </h3>

              <p className="mt-3 min-h-[65px] text-sm leading-7 text-gray-500">
                {issue.description}
              </p>

              {/* Price & CTA */}
              <div className="mt-6 flex items-end justify-between gap-3 border-t border-gray-100 pt-5">
                <div>
                  <p className="text-[9px] font-extrabold tracking-[1.5px] text-gray-400">
                    STARTING FROM
                  </p>

                  <p className="mt-2 text-2xl font-black text-[#171923]">
                    {issue.price}
                  </p>
                </div>

                <Link
                  href="/contact#contact-form"
                  aria-label={`Book a repair for ${issue.title}`}
                  className="btn-dark inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-3 text-xs font-extrabold text-amber-700 transition-all duration-300"
                >
                  Book Repair
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="mt-9 flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-amber-600 shadow-sm">
            <ShieldCheck size={21} />
          </div>

          <div>
            <h4 className="text-sm font-extrabold text-[#171923]">
              A Quick Note About Pricing
            </h4>

            <p className="mt-2 text-xs leading-6 text-gray-600 sm:text-sm">
              Prices are illustrative starting estimates. Final repair costs may
              vary depending on your device model, parts and diagnosis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
