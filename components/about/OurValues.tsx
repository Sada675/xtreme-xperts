"use client";

import { motion } from "motion/react";
import {
  HeartHandshake,
  Award,
  Users,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "We put our customers' needs first and aim to make every service experience helpful and convenient.",
  },
  {
    number: "02",
    icon: Award,
    title: "Quality Matters",
    description:
      "We believe in careful workmanship and paying attention to every detail of the repair process.",
  },
  {
    number: "03",
    icon: Users,
    title: "Honest Communication",
    description:
      "We value clear communication and believe customers should understand their device issues and repair options.",
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Continuous Improvement",
    description:
      "We believe in learning, adapting, and improving our approach to serve customers better.",
  },
];

export default function OurValues() {
  return (
    <section className="bg-background relative overflow-hidden py-20 sm:py-24 lg:py-10">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute top-20 -left-32 h-72 w-72 rounded-full bg-amber-200/30 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-200/30 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2">
            <Sparkles size={15} className="text-amber-600" />

            <span className="text-xs font-bold tracking-[0.18em] text-amber-700 uppercase">
              What We Believe In
            </span>
          </div>

          <h2 className="text-3xl leading-tight font-extrabold text-[#251039] sm:text-4xl lg:text-5xl">
            The Values Behind
            <span className="block text-amber-500">Everything We Do</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
            Our values shape the way we work, communicate, and serve our
            customers. They guide us in creating a better repair experience.
          </p>
        </motion.div>

        {/* Values Layout */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-7 shadow-sm transition-all duration-500 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-900/10 sm:p-8"
              >
                {/* Number */}
                <div className="absolute top-5 right-6 text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-amber-100">
                  {value.number}
                </div>

                {/* Icon */}
                <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 text-amber-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:from-amber-400 group-hover:to-orange-500 group-hover:text-white">
                  <Icon size={29} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-extrabold text-[#251039] transition-colors duration-300 group-hover:text-amber-600">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {value.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-7 h-1 w-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
