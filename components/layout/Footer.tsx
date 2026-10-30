import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { FaFacebookF, FaInstagram } from "react-icons/fa";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      {/* Gradient Top Border */}{" "}
      <div className="h-1 bg-gradient-to-r from-[#7F2BE8] via-purple-400 to-[#F59E0B]" />
      <div className="container-custom py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_1.1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/logo11.png"
                alt="Xtreme Xperts - Repair Specialists"
                width={220}
                height={80}
                className="h-auto w-[180px] object-contain object-left"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-300">
              Explore technology repair solutions and find the right support for
              your devices. We help keep your technology running smoothly.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex items-center gap-3">
              {/* Facebook Official Icon */}
              <a
                href="https://www.facebook.com/people/Xtreme-Xperts/100089646489589/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <FaFacebookF size={20} className="text-white" />
              </a>

              {/* Instagram Official Icon with Brand Gradient */}
              <a
                href="https://www.instagram.com/xtreme.xperts?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <FaInstagram size={22} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-extrabold tracking-[1.5px] text-amber-400 uppercase">
              Quick Links
            </h2>

            <ul className="mt-5 space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-sm text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-amber-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-sm font-extrabold tracking-[1.5px] text-amber-400 uppercase">
              Get in Touch
            </h2>

            <div className="mt-5 space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={19} className="mt-0.5 shrink-0 text-purple-400" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=32+Market+Place+Guisborough+TS14+6HF+UK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 text-gray-300 transition-colors hover:text-amber-400"
                >
                  32 Market Place,
                  <br />
                  Guisborough, TS14 6HF,
                  <br />
                  United Kingdom.
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail size={19} className="mt-0.5 shrink-0 text-purple-400" />
                <a
                  href="mailto:info@xtremexperts.co.uk"
                  className="text-sm break-all text-gray-300 transition-colors hover:text-amber-400"
                >
                  info@xtremexperts.co.uk
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone size={19} className="mt-0.5 shrink-0 text-purple-400" />
                <a
                  href="tel:+44128761991"
                  className="text-sm text-gray-300 transition-colors hover:text-amber-400"
                >
                  +44 1287 619 91
                </a>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 transition-colors duration-300 hover:text-purple-300"
              >
                Contact our team
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Xtreme Xperts. All rights reserved.</p>

          <p>
            Built with <span className="text-amber-400">care</span> for your
            technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
