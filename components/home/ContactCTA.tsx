import Link from "next/link";
import {
ArrowRight,
Phone,
Wrench,
ShieldCheck,
Clock,
} from "lucide-react";

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
return ( <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"> <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#342d19]">
{/* Decorative background elements */} <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

    <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

    <div className="relative grid items-center gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1fr_auto] lg:gap-12 lg:px-16 lg:py-20">
      {/* Left Content */}
      <div className="max-w-2xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="text-sm font-semibold text-amber-400">
            WE&apos;RE HERE TO HELP
          </span>
        </div>

        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Need a Repair?
          <br />
          <span className="text-amber-400">
            Let&apos;s Get It Fixed!
          </span>
        </h2>

        <p className="mt-5 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg">
          From smartphones to laptops, our team is ready to help.
          Get in touch today and let&apos;s find the right solution
          for your device.
        </p>

        {/* Benefits */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-6">
          {benefits.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2.5 text-sm text-neutral-300"
            >
              <Icon
                size={18}
                className="shrink-0 text-amber-400"
              />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Action Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row lg:min-w-[190px] lg:flex-col">
        <Link
          href="/contact"
          className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-amber-400 px-7 py-4 font-bold text-neutral-950 transition-all duration-300 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20"
        >
          Get in Touch
          <ArrowRight
            size={19}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <a
          href="tel:+441234567890"
          className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-amber-400/50 hover:bg-white/10"
        >
          <Phone size={18} className="text-amber-400" />
          Call Our Team
        </a>
      </div>
    </div>
  </div>
</section>

);
}
