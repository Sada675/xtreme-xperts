import Link from "next/link";
import {
ArrowRight,
Smartphone,
Laptop,
Tablet,
Gamepad2,
Headphones,
Monitor,
} from "lucide-react";

const services = [
{
title: "Mobile Phone Repair",
description:
"Explore repair options for smartphone issues and device faults.",
icon: Smartphone,
category: "MOBILE",
color: "bg-blue-50 text-blue-600",
},
{
title: "Laptop Repair",
description:
"Find support for laptop hardware, performance and technical issues.",
icon: Laptop,
category: "COMPUTING",
color: "bg-violet-50 text-violet-600",
},
{
title: "Tablet Repair",
description:
"Discover repair services for tablets and compatible devices.",
icon: Tablet,
category: "TABLETS",
color: "bg-emerald-50 text-emerald-600",
},
{
title: "Gaming Console Repair",
description:
"Explore repair options for supported gaming consoles.",
icon: Gamepad2,
category: "GAMING",
color: "bg-orange-50 text-orange-600",
},
{
title: "Audio Device Repair",
description:
"Ask about repair support for compatible audio accessories.",
icon: Headphones,
category: "AUDIO",
color: "bg-pink-50 text-pink-600",
},
{
title: "Computer & Display",
description:
"Explore technical support for compatible computers and displays.",
icon: Monitor,
category: "COMPUTERS",
color: "bg-cyan-50 text-cyan-600",
},
];

export default function Services() {
return ( <section id="services" className="section-padding bg-white"> <div className="container-custom">
{/* Section Heading */} <div className="mx-auto max-w-2xl text-center"> <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[2px] text-blue-600">
What We Repair </span>

      <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        The right care for
        <span className="text-blue-600"> your devices.</span>
      </h2>

      <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
        Explore our device categories and find the repair support
        that matches your needs.
      </p>
    </div>

    {/* Service Cards */}
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <article
            key={service.title}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_20px_55px_-25px_rgba(37,99,235,0.28)] sm:p-7"
          >
            <div className="flex items-start justify-between gap-3">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.color} transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon size={27} strokeWidth={1.8} />
              </div>

              <span className="rounded-full bg-slate-50 px-3 py-1.5 text-[10px] font-extrabold tracking-[1px] text-slate-500">
                {service.category}
              </span>
            </div>

            <h3 className="mt-7 text-xl font-extrabold tracking-tight text-slate-950">
              {service.title}
            </h3>

            <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
              {service.description}
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-800"
            >
              Enquire Now

              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <div className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-blue-50/0 transition-colors duration-300 group-hover:bg-blue-50/80" />
          </article>
        );
      })}
    </div>

    {/* Bottom CTA */}
    <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-slate-950 p-7 text-center sm:p-10 md:flex-row md:text-left">
      <div>
        <h3 className="text-xl font-extrabold text-white sm:text-2xl">
          Need help with your device?
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Contact our team to discuss your repair requirements.
        </p>
      </div>

      <Link
        href="/contact"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
      >
        Contact Us
        <ArrowRight size={18} />
      </Link>
    </div>
  </div>
</section>

);
}
