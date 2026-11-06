import Link from "next/link";

import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Wrench,
  BadgeCheck,
} from "lucide-react";

import { servicesData } from "@/app/data/services";

type Service = (typeof servicesData)[number];

type Props = {
  service: Service;
};

export default function ServiceHero({ service }: Props) {
  return (
    <section className="bg-background relative overflow-hidden px-5 pt-18 pb-20 sm:pt-22 lg:pb-14">
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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 shadow-sm">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-amber-500" />

              <span className="text-[10px] font-extrabold tracking-[1.8px] text-amber-700 uppercase">
                XTREME XPERTS REPAIR SERVICES
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-7 max-w-xl text-4xl leading-[1.15] font-black tracking-tight text-[#171923] sm:text-5xl lg:text-6xl">
              Expert{" "}
              <span className="relative inline-block text-amber-500">
                {service.title}

                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-amber-300/70" />
              </span>
              <br />
              Repair Solutions
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-lg text-sm leading-8 text-gray-500 sm:text-base">
              {service.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-extrabold text-[#171923] transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
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

            {/* Main Image */}
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
  );
}
