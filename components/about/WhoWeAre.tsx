"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  "Professional device repair services",
  "Customer-focused support",
  "Careful attention to every repair",
  "Solutions for multiple device types",
];

export default function WhoWeAre() {
  return (
    <section
      id="our-story"
      className="bg-background relative overflow-hidden py-20 sm:py-24 lg:py-10"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute top-20 -left-32 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[540px]"
          >
            {/* Decorative Border */}
            <div className="absolute -top-4 -left-4 h-full w-full rounded-[2rem] border-2 border-amber-400/70 sm:-top-5 sm:-left-5" />

            {/* Main Image */}
            <div className="group relative aspect-[5/4] overflow-hidden rounded-[1.7rem] bg-slate-100 shadow-2xl">
              <Image
                src="/images/WhoWeAre.jpg"
                alt="Xtreme Xperts professional device repair work"
                fill
                priority={false}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#251039]/45 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 -bottom-7 flex items-center gap-3 rounded-2xl border border-white/70 bg-white p-4 shadow-xl sm:-right-7 sm:p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <Sparkles size={25} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#251039]">
                  Your Tech Partner
                </p>
                <p className="mt-1 text-xs text-slate-500">Here to help you</p>
              </div>
            </motion.div>

            {/* Small Decorative Circle */}
            <div className="absolute -bottom-12 -left-8 -z-10 h-28 w-28 rounded-full border-[12px] border-amber-400/20" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pt-5 lg:pt-0"
          >
            {/* Section Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.18em] text-amber-700 uppercase">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl leading-tight font-extrabold text-[#251039] sm:text-4xl lg:text-[46px]">
              Your Trusted Partner for{" "}
              <span className="text-glow-amber relative inline-block">
                Tech Repairs
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-amber-300/70" />
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-base leading-8 text-slate-600">
              At Xtreme Xperts, we understand how important your devices are in
              everyday life. Whether it is your mobile phone, laptop, tablet, or
              gaming console, our goal is to help you get back to what matters.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              We focus on providing helpful support, careful workmanship, and
              practical repair solutions. Every customer deserves a service
              experience built around their needs.
            </p>

            {/* Highlights */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-amber-500"
                  />
                  <span className="text-sm leading-6 font-medium text-slate-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/contact"
                className="group btn-dark inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-bold text-white shadow-lg shadow-purple-950/15 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-500 hover:shadow-amber-500/25"
              >
                Get in Touch
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
