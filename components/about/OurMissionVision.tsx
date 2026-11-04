"use client";

import { motion } from "motion/react";
import { Target, Eye, ArrowUpRight, Sparkles } from "lucide-react";

const cards = [
  {
    number: "01",
    title: "Our Mission",
    subtitle: "What Drives Us",
    description:
      "Our mission is to make technology repairs easier and more accessible. We aim to provide helpful support, careful workmanship, and practical solutions that help our customers stay connected.",
    icon: Target,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    number: "02",
    title: "Our Vision",
    subtitle: "Where We Are Going",
    description:
      "Our vision is to become a trusted destination for device repair services, where customers feel confident bringing their devices and receive a service experience built around their needs.",
    icon: Eye,
    gradient: "from-yellow-400 to-amber-500",
  },
];

export default function OurMissionVision() {
  return (
    <section className="bg-background relative overflow-hidden py-20 sm:py-4 lg:py-10">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute top-20 -left-32 h-72 w-72 rounded-full bg-amber-200/30 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-200/30 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2">
            <Sparkles size={15} className="text-amber-600" />
            <span className="text-xs font-bold tracking-[0.18em] text-amber-700 uppercase">
              Our Purpose
            </span>
          </div>

          <h2 className="text-3xl leading-tight font-extrabold text-[#251039] sm:text-4xl lg:text-5xl">
            Driven by Purpose,
            <span className="block text-amber-500">Focused on People.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Everything we do is guided by our commitment to helping customers
            with reliable technology repair solutions.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:gap-9">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white p-7 shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-amber-900/10 sm:p-10 lg:p-12"
              >
                {/* Decorative Background */}
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-amber-100/50 blur-3xl transition-transform duration-700 group-hover:scale-150" />

                <div className="relative z-10">
                  {/* Top Row */}
                  <div className="mb-10 flex items-center justify-between">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-lg shadow-amber-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <Icon size={30} strokeWidth={1.8} />
                    </div>

                    <span className="text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-amber-100">
                      {card.number}
                    </span>
                  </div>

                  {/* Content */}
                  <span className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase">
                    {card.subtitle}
                  </span>

                  <h3 className="mt-3 text-2xl font-extrabold text-[#251039] sm:text-3xl">
                    {card.title}
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                    {card.description}
                  </p>

                  {/* Bottom Decoration */}
                  <div className="mt-9 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-500 group-hover:w-32" />

                    <ArrowUpRight
                      size={22}
                      className="text-amber-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
