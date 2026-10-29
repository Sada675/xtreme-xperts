import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Smartphone,
  Laptop,
  Tablet,
  Gamepad2,
  Headphones,
  Monitor,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Mobile Phone Repair",
    description:
      "From cracked screens to battery issues, get your smartphone back to its best.",
    category: "MOBILE DEVICES",
    image: "/images/services/mobile-repair.jpg",
    alt: "Technician repairing a smartphone",
    icon: Smartphone,
    accent: "group-hover:text-amber-500",
  },
  {
    id: "02",
    title: "Laptop Repair",
    description:
      "Expert help with laptop hardware, performance problems and everyday faults.",
    category: "COMPUTING",
    image: "/images/services/laptop-repair.jpg",
    alt: "Professional laptop repair service",
    icon: Laptop,
    accent: "group-hover:text-amber-500",
  },
  {
    id: "03",
    title: "Tablet Repair",
    description:
      "Get support for tablet screens, charging issues and other device problems.",
    category: "TABLETS",
    image: "/images/services/tablet-repair11.jpg",
    alt: "Tablet device repair",
    icon: Tablet,
    accent: "group-hover:text-amber-500",
  },
  {
    id: "04",
    title: "Gaming Console Repair",
    description:
      "Get help with console faults, connectivity issues and gaming hardware.",
    category: "GAMING",
    image: "/images/services/console-repair.jpg",
    alt: "Gaming console and repair equipment",
    icon: Gamepad2,
    accent: "group-hover:text-amber-500",
  },
  {
    id: "05",
    title: "Audio Device Repair",
    description:
      "Explore repair options for headphones, audio accessories and sound devices.",
    category: "AUDIO",
    image: "/images/services/audio-repair.jpg",
    alt: "Headphones and audio equipment",
    icon: Headphones,
    accent: "group-hover:text-amber-500",
  },
  {
    id: "06",
    title: "Computer & Display",
    description:
      "Find support for desktop computers, monitors and compatible displays.",
    category: "COMPUTERS",
    image: "/images/services/computer-repair.jpg",
    alt: "Computer and monitor repair",
    icon: Monitor,
    accent: "group-hover:text-amber-500",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#fafaf8] py-10 sm:py-10 lg:py-12"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-amber-100/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 shadow-sm">
            <Wrench size={15} className="text-amber-500" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-700 sm:text-xs">
              What We Repair
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Expert care for
            <span className="block text-amber-500 sm:inline">
              {" "}every device.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Technology problems should not slow you down. Discover our
            repair services and find the right support for your device.
          </p>

          {/* Small Trust Indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-semibold text-slate-600 sm:text-sm">

            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={17} className="text-amber-500" />
              Professional Care
            </span>

            <span className="hidden h-4 w-px bg-slate-300 sm:block" />

            <span className="inline-flex items-center gap-2">
              <Wrench size={16} className="text-amber-500" />
              Multiple Device Types
            </span>
          </div>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group relative overflow-hidden rounded-[22px] border border-slate-200/80 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/80 hover:shadow-[0_24px_60px_-25px_rgba(15,23,42,0.22)]"
              >
                {/* Image Area */}
                <div className="relative h-56 overflow-hidden bg-slate-100 sm:h-60">

                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-slate-950/10 transition-opacity duration-300 group-hover:from-slate-950/80" />

                  {/* Category Badge */}
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center rounded-full border border-white/30 bg-white/95 px-3 py-1.5 text-[9px] font-extrabold tracking-[0.15em] text-slate-800 shadow-lg backdrop-blur-md sm:text-[10px]">
                      {service.category}
                    </span>
                  </div>

                  {/* Number */}
                  <div className="absolute bottom-4 left-5">
                    <span className="text-5xl font-black tracking-tighter text-white/30 transition-colors duration-300 group-hover:text-amber-400/80">
                      {service.id}
                    </span>
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/95 text-slate-950 shadow-xl transition-all duration-300 group-hover:rotate-[-6deg] group-hover:bg-amber-400">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">

                  <h3 className={`text-lg font-extrabold tracking-tight text-slate-950 transition-colors duration-300 sm:text-xl ${service.accent}`}>
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  {/* Bottom Divider */}
                  <div className="my-5 h-px bg-slate-100 transition-colors duration-300 group-hover:bg-amber-100" />

                  {/* Card Link */}
                  <Link
                    href="/contact"
                    aria-label={`Enquire about ${service.title}`}
                    className="group/link inline-flex w-full items-center justify-between gap-3 text-sm font-bold text-slate-800 transition-colors hover:text-amber-600"
                  >
                    <span>Explore Service</span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover/link:border-amber-400 group-hover/link:bg-amber-400 group-hover/link:text-slate-950">
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </span>
                  </Link>

                </div>

                {/* Hover Accent */}
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-amber-400 transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-[#342d19] via-[#9333EA] to-[#F59E0B] relative mt-14 overflow-hidden rounded-[26px]  p-7 sm:mt-16 sm:p-10 lg:p-12">

          {/* CTA Decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border-[35px] border-white/[0.04]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 right-40 h-60 w-60 rounded-full bg-amber-400/90 blur-3xl"
          />

          <div className="relative flex flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">

            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                Need a little help?
              </span>

              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Not sure what your device needs?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-base">
                Tell us what is wrong, and our team can help you explore
                the available repair options.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-400/10 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
            >
              Talk to Our Team

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
