"use client";

import { motion } from "motion/react";
import {
  Lightbulb,
  Users,
  Wrench,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const journey = [
  {
    number: "01",
    title: "The Beginning",
    description:
      "Xtreme Xperts was built around a simple idea: making device repair services more accessible and convenient for customers.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Growing Our Expertise",
    description:
      "Our focus expanded across different device categories, including smartphones, laptops, tablets, and gaming consoles.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Building Customer Relationships",
    description:
      "We continue to focus on understanding customer needs, offering helpful guidance, and creating a positive service experience.",
    icon: Users,
  },
  {
    number: "04",
    title: "Looking Ahead",
    description:
      "We remain committed to improving our approach, expanding our knowledge, and delivering practical repair solutions.",
    icon: HeartHandshake,
  },
];

export default function OurJourney() {
  return (
    <section className="bg-background relative overflow-hidden py-10 sm:py-3 lg:py-10">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute top-20 -left-32 h-72 w-72 rounded-full bg-amber-100/50 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-100/40 blur-[110px]" />

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
              Our Journey
            </span>
          </div>

          <h2 className="text-3xl leading-tight font-extrabold text-[#251039] sm:text-4xl lg:text-5xl">
            A Story of Passion
            <span className="block text-amber-500">and Progress</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
            Every step reflects our commitment to learning, improving, and
            helping customers keep their devices working.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute top-5 left-[27px] h-[calc(100%-40px)] w-[2px] bg-gradient-to-b from-amber-300 via-orange-400 to-amber-100 sm:left-1/2 sm:-translate-x-1/2" />

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-5 left-[27px] h-[calc(100%-40px)] w-[2px] origin-top bg-amber-500 sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="space-y-10 sm:space-y-14">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  className={`relative flex items-start gap-7 sm:items-center ${
                    isRight ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Icon */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/20 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                    <Icon size={23} />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full rounded-3xl border border-slate-200/70 bg-[#fafafa] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-xl hover:shadow-amber-900/10 sm:w-[calc(50%-55px)] sm:p-8 ${
                      isRight ? "sm:text-left" : "sm:text-right"
                    }`}
                  >
                    <span className="text-xs font-extrabold tracking-[0.2em] text-amber-600">
                      STEP {item.number}
                    </span>

                    <h3 className="mt-3 text-xl font-extrabold text-[#251039] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  {/* Empty Space */}
                  <div className="hidden w-[calc(50%-55px)] sm:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
