import Link from "next/link";
import { ArrowRight, Phone, Wrench, ShieldCheck, Clock } from "lucide-react";

const benefits = [
  {
    icon: Wrench,
    text: "Expert Repair Team",
  },
  {
    icon: ShieldCheck,
    text: "Quality Workmanship",
  },
  {
    icon: Clock,
    text: "Reliable Service",
  },
];

export default function ContactCTA() {
  return (
    <section className="bg-[#fafaf8] px-4 py-4 sm:px-6 sm:py-10 lg:px-8">
      {" "}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-amber-300/20 bg-gradient-to-br from-[#140B25] via-[#4C1D95] to-[#D97706]">
        {/* Decorative Background Glow */}
        <div className="pointer-events-none absolute -top-28 -right-20 h-80 w-80 rounded-full bg-amber-400/15 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-yellow-500/10 blur-[100px]" />

        {/* Subtle Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/10" />

        <div className="relative grid items-center gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1fr_auto] lg:gap-14 lg:px-16 lg:py-20">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Eyebrow Badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-amber-300/30 bg-black/15 px-4 py-2.5 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-300" />
              </span>

              <span className="text-xs font-bold tracking-[0.16em] text-amber-200 uppercase sm:text-sm">
                We&apos;re Here to Help
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
              Need a Repair?
              <br />
              <span className="mt-2 inline-block bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                Let&apos;s Get It Fixed!
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-amber-50/90 sm:text-lg sm:leading-8">
              From smartphones to laptops, our expert team is ready to help. Get
              in touch today and let&apos;s find the right solution for your
              device.
            </p>

            {/* Benefits */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-4">
              {benefits.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2.5 text-sm font-medium text-white/90"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-300/20 bg-black/15">
                    <Icon
                      size={16}
                      strokeWidth={2}
                      className="text-amber-300"
                    />
                  </span>

                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-52 lg:flex-col">
            {/* Primary Button */}
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-amber-200/40 bg-gradient-to-r from-amber-300 to-yellow-400 px-6 py-4 text-center font-bold text-[#292114] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:from-amber-200 hover:to-yellow-300 hover:shadow-xl hover:shadow-amber-400/15 focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#342d19] focus-visible:outline-none"
            >
              Get in Touch
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Secondary Button */}
            <a
              href="tel:+441234567890"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-amber-100/70 bg-[#f5edda] px-6 py-4 text-center font-bold text-[#342d19] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:shadow-lg hover:shadow-black/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#342d19] focus-visible:outline-none"
            >
              <Phone
                size={18}
                className="text-[#9a6b16] transition-transform duration-300 group-hover:rotate-12"
              />
              Call Our Team{" "}
            </a>

            <p className="text-center text-xs leading-5 text-amber-100/95">
              Professional support for your devices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
