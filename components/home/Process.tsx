
import {
  MessageSquareText,
  SearchCheck,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Get in Touch",
    description:
      "Tell us about your device and the problem you're experiencing. Our team will help you get started.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Device Assessment",
    description:
      "We'll assess the issue, explain the available repair options, and discuss the next steps with you.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Expert Repair",
    description:
      "Once you approve the proposed repair, our technicians will get to work on your device.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Back in Your Hands",
    description:
      "Your device is ready for collection or return according to the repair service you've arranged.",
    icon: CheckCircle2,
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-14">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-700 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            How It Works
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Your Repair,
            <span className="text-amber-500"> Made Simple.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Getting your device repaired doesn't have to be complicated.
            Follow four simple steps to get started with Xtreme Xperts.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                {/* Connector between cards on desktop */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[calc(100%+2px)] top-12 z-10 hidden w-4 border-t-2 border-dashed border-amber-300 lg:block" />
                )}

                <article className="group relative h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/60 sm:p-8">
                  {/* Number */}
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-4xl font-black tracking-tight text-amber-100 transition-colors duration-300 group-hover:text-amber-300">
                      {step.number}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">
                      <Icon size={27} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-amber-600">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {step.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-7 h-1 w-12 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-20" />
                </article>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-slate-950 px-6 py-8 sm:flex-row sm:px-10 lg:px-12">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Ready to get your device fixed?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
              Get in touch with our team to discuss your repair.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
