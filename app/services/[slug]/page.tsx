import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Wrench,
  Clock3,
  BadgeCheck,
  Sparkles,
  Settings2,
} from "lucide-react";

import { servicesData } from "@/app/data/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;

  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-backgorund overflow-hidden">
      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="bg-backgorund relative px-5 pt-18 pb-20 sm:pt-22 lg:pb-14">
        {/* Background Decorations */}

        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber-200/30 blur-[100px]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-100/40 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb */}

          <div className="mb-10 flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-400">
            <Link href="/" className="transition hover:text-amber-600">
              Home
            </Link>

            <span>/</span>

            <Link href="/services" className="transition hover:text-amber-600">
              Services
            </Link>

            <span>/</span>

            <span className="text-gray-800">{service.title}</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}

            <div className="hero-content">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 shadow-sm">
                <span className="flex h-2 w-2 animate-pulse rounded-full bg-amber-500" />

                <span className="text-[10px] font-extrabold tracking-[1.8px] text-amber-700 uppercase">
                  XTREME XPERTS REPAIR SERVICES
                </span>
              </div>

              <h1 className="mt-7 max-w-xl text-4xl leading-[1.15] font-black tracking-tight text-[#171923] sm:text-5xl lg:text-6xl">
                Expert{" "}
                <span className="relative inline-block text-amber-500">
                  {service.title}

                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-amber-300/70" />
                </span>
                <br />
                Repair Solutions
              </h1>

              <p className="mt-7 max-w-lg text-sm leading-8 text-gray-500 sm:text-base">
                {service.description}
              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-extrabold text-[#171923] shadow-lg shadow-amber-500/20 transition duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-xl"
                >
                  Book a Repair
                  <ArrowUpRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-gray-700 transition duration-300 hover:border-amber-400 hover:text-amber-600"
                >
                  <ArrowLeft size={16} />
                  All Services
                </Link>
              </div>

              {/* Trust Points */}

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                  <ShieldCheck size={18} className="text-amber-500" />
                  Professional Support
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                  <BadgeCheck size={18} className="text-amber-500" />
                  Quality Checks
                </div>
              </div>
            </div>

            {/* Right Image */}

            <div className="hero-image relative mx-auto w-full max-w-xl">
              {/* Decorative Background */}

              <div className="absolute -right-5 -bottom-5 h-full w-full rounded-[30px] bg-amber-400/20" />

              <div className="relative overflow-hidden rounded-[28px] border-[6px] border-white bg-gray-100 shadow-[0_25px_70px_-25px_rgba(0,0,0,0.3)]">
                <div className="relative h-[290px] sm:h-[380px]">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute right-5 bottom-5 left-5">
                    <span className="text-[10px] font-extrabold tracking-[2px] text-amber-300">
                      XTREME XPERTS
                    </span>

                    <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                      Professional Repair Solutions
                    </h3>
                  </div>
                </div>
              </div>

              {/* Floating Price Card */}

              <div className="absolute -right-2 -bottom-10 rounded-2xl border border-amber-100 bg-white p-5 shadow-xl sm:-right-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                    <Wrench size={21} />
                  </div>

                  <div>
                    <p className="text-[9px] font-extrabold tracking-widest text-gray-400 uppercase">
                      Repairs Starting From
                    </p>

                    <p className="mt-1 text-2xl font-black text-[#171923]">
                      {service.startingPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          REPAIR & PRICING SECTION
      ========================================= */}

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

                {/* Price */}

                <div className="mt-6 flex items-end justify-between border-t border-gray-100 pt-5">
                  <div>
                    <p className="text-[9px] font-extrabold tracking-[1.5px] text-gray-400">
                      STARTING FROM
                    </p>

                    <p className="mt-2 text-2xl font-black text-[#171923]">
                      {issue.price}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    aria-label={`Enquire about ${issue.title}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 group-hover:bg-amber-400 group-hover:text-[#171923]"
                  >
                    <ArrowUpRight size={20} />
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
                Prices are illustrative starting estimates. Final repair costs
                may vary depending on your device model, parts and diagnosis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          WHY CHOOSE US
      ========================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#251039] via-[#52218b] to-[#d97721] px-5 py-20 sm:py-24">
        {/* Background Effects */}

        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-400/10 blur-[100px]" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Heading */}

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

          {/* Benefits */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="benefit-card group rounded-2xl border border-white/10 bg-black/55 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/50 hover:bg-white/[0.09]"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 transition-all duration-300 group-hover:bg-amber-400 group-hover:text-[#171923]">
                  <CheckCircle2 size={23} />
                </div>

                <h3 className="mt-6 text-sm leading-6 font-extrabold text-white">
                  {benefit}
                </h3>

                <div className="mt-5 h-1 w-9 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          FAQ SECTION
      ========================================= */}

      <section className="px-5 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left Content */}

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-[10px] font-extrabold tracking-[2px] text-amber-700">
              <Clock3 size={14} />
              GOT QUESTIONS?
            </span>

            <h2 className="mt-6 text-3xl leading-tight font-black tracking-tight text-[#171923] sm:text-4xl">
              Frequently Asked <span className="text-amber-500">Questions</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-8 text-gray-500">
              Everything you need to know about our{" "}
              {service.title.toLowerCase()}
              services. Still have questions? Our team is here to help.
            </p>

            <Link
              href="/contact"
              className="group btn-dark mt-8 inline-flex items-center gap-3 rounded-full px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-amber-400 hover:text-[#171923]"
            >
              Contact Our Team
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* FAQ Items */}

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 open:border-amber-300 open:bg-amber-50/30 open:shadow-sm hover:border-amber-300 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm leading-6 font-extrabold text-[#171923]">
                  {faq.question}

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 group-open:rotate-180 group-open:bg-amber-400 group-open:text-[#171923]">
                    <ChevronDown size={19} />
                  </span>
                </summary>

                <div className="faq-answer">
                  <p className="mt-5 border-t border-gray-200/70 pt-5 text-sm leading-7 text-gray-500">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          FINAL CTA
      ========================================= */}

      <section className="px-5 pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#251039] via-[#52218b] to-[#d97721] px-7 py-12 sm:px-12 sm:py-14">
          {/* Decoration */}

          <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-amber-400/20 blur-[90px]" />

          <div className="absolute -bottom-32 left-20 h-64 w-64 rounded-full bg-amber-400/10 blur-[80px]" />

          <div className="relative flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div className="max-w-xl">
              <span className="text-[10px] font-extrabold tracking-[2px] text-amber-400">
                LET'S GET IT FIXED
              </span>

              <h2 className="mt-4 text-2xl leading-tight font-black text-white sm:text-3xl lg:text-4xl">
                Ready to Get Your Device Back in Action?
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Get in touch with our team and let us help you find the right
                repair solution.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-amber-400 px-8 py-4 text-sm font-extrabold text-[#171923] shadow-lg shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300"
            >
              Book Your Repair
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
