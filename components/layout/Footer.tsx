import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Wrench } from "lucide-react";

const footerLinks = [
{ name: "Home", href: "/" },
{ name: "Services", href: "/services" },
{ name: "About Us", href: "/about" },
{ name: "Contact", href: "/contact" },
];

export default function Footer() {
return ( <footer className="bg-slate-950 text-white"> <div className="container-custom py-14 md:py-16"> <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:gap-16">
{/* Brand */} <div> <Link href="/" className="inline-flex items-center gap-3"> <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white"> <Wrench size={24} /> </div>

```
          <div>
            <div className="text-xl font-black tracking-tight">
              XTREME<span className="text-blue-400">XPERTS</span>
            </div>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-[2px] text-slate-400">
              Repair specialists
            </p>
          </div>
        </Link>

        <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
          Explore technology repair solutions and find the right support
          for your devices.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-sm font-extrabold uppercase tracking-[1.5px] text-white">
          Quick Links
        </h2>

        <ul className="mt-5 space-y-4">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h2 className="text-sm font-extrabold uppercase tracking-[1.5px] text-white">
          Get in Touch
        </h2>

        <div className="mt-5 space-y-5">
          <div className="flex items-start gap-3">
            <MapPin
              size={19}
              className="mt-0.5 shrink-0 text-blue-400"
            />

            <p className="text-sm leading-6 text-slate-400">
              Contact us for business location and service information.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Mail
              size={19}
              className="mt-0.5 shrink-0 text-blue-400"
            />

            <p className="text-sm leading-6 text-slate-400">
              Contact details will be confirmed with the business.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-blue-300"
          >
            Contact our team
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>

    <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © 2026 Xtreme Xperts. All rights reserved.
      </p>

      <p>Built with care for your technology.</p>
    </div>
  </div>
</footer>

);
}
