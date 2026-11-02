import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team about your repair.",
    value: "+44 1287 619 91",
    href: "tel:+44128761991",
    action: "Call now",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your questions or repair details.",
    value: "info@xtremexperts.co.uk",
    href: "mailto:info@xtremexperts.co.uk",
    action: "Send email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Visit our store for expert repair assistance.",
    value: "32 Market Place, Guisborough",
    href: "https://www.google.com/maps/search/?api=1&query=32+Market+Place+Guisborough+TS14+6HF+UK",
    action: "Get directions",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-[#f8f8fa] px-4 py-12 sm:px-6 sm:py-8 lg:px-7">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold tracking-wider text-amber-700">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            GET IN TOUCH
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#251039] sm:text-4xl lg:text-5xl">
            We&apos;re Here to Help
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Whether you need a repair, have a question, or want expert advice,
            our friendly team is just a call or message away.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-purple-950/5 sm:p-8"
              >
                {/* Top Gradient */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#7F2BE8] via-purple-400 to-[#F59E0B] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#52218b] to-[#d97721] text-white shadow-lg shadow-purple-900/15 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-[#251039]">
                  {item.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>

                {/* Contact Link */}
                <a
                  href={item.href}
                  target={item.title === "Visit Us" ? "_blank" : undefined}
                  rel={
                    item.title === "Visit Us"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-5 inline-flex max-w-full items-center gap-2 text-sm font-semibold break-words text-[#52218b] transition-colors hover:text-[#d97721]"
                >
                  <span>{item.value}</span>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-amber-200 via-purple-100 to-transparent" />

                {/* Action */}
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                  {item.action}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
