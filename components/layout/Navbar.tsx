"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Menu,
  Phone,
  X,
  Wrench,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Close mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock background scrolling and support the Escape key.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Floating Responsive Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div
            className={`relative flex min-h-[68px] items-center justify-between gap-2 border border-slate-200/80 bg-white px-3 shadow-lg shadow-slate-950/[0.08] backdrop-blur-xl transition-all duration-300 sm:min-h-[74px] sm:px-5 lg:min-h-[82px] lg:gap-6 lg:rounded-full lg:px-6 ${
              menuOpen ? "rounded-2xl" : "rounded-full"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              aria-label="Xtreme Xperts Tech and Repair homepage"
              className="relative block h-[48px] w-[150px] shrink-0 sm:h-[56px] sm:w-[205px] lg:h-[62px] lg:w-[230px] xl:w-[250px]"
            >
              <Image
                src="/images/logo22.png"
                alt="Xtreme Xperts Tech & Repair"
                fill
                priority
                sizes="(max-width: 639px) 150px, (max-width: 1023px) 205px, 250px"
                className="object-contain object-left"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-4 lg:flex xl:gap-7"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={
                    isActive(item.href) ? "page" : undefined
                  }
                  className={`group relative whitespace-nowrap py-3 text-sm font-semibold transition-colors duration-200 xl:text-[15px] ${
                    isActive(item.href)
                      ? "text-slate-950"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute bottom-1 left-0 h-[3px] rounded-full bg-yellow-400 transition-all duration-300 ${
                      isActive(item.href)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="group hidden min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-yellow-400 px-4 text-sm font-extrabold text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 xl:px-5 lg:inline-flex"
            >
              <Phone size={16} />

              <span>Get a Quote</span>

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-slate-950 transition-colors hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 lg:hidden"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[60] bg-slate-950/50 backdrop-blur-[3px] transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Navigation Drawer */}
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed bottom-0 right-0 top-0 z-[70] flex w-[min(88%,360px)] flex-col overflow-y-auto border-l border-slate-200 bg-white px-5 pb-8 pt-6 shadow-2xl transition-transform duration-300 ease-out sm:px-6 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Brand Header */}
        <div className="mb-6  rounded-2xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white p-4">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-slate-950">
              <Wrench size={21} />
            </span>

            <div>
              <p className="text-base font-extrabold leading-tight text-slate-950">
                Xtreme Xperts
              </p>

              <p className="mt-1 text-xs font-medium text-slate-500">
                Tech & Repair
              </p>
            </div>
          </div>

          <p className="text-sm leading-6 text-slate-600">
            Expert repairs. Reliable service. Solutions you can trust.
          </p>
        </div>

        {/* Drawer Navigation */}
        <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
          Navigation
        </p>

        <nav className="flex flex-col gap-1.5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={
                isActive(item.href) ? "page" : undefined
              }
              onClick={() => setMenuOpen(false)}
              className={`flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                isActive(item.href)
                  ? "bg-yellow-100 text-slate-950"
                  : "text-slate-600 hover:bg-yellow-50 hover:text-slate-950"
              }`}
            >
              <span>{item.name}</span>

              <ArrowUpRight
                size={16}
                className={
                  isActive(item.href)
                    ? "text-yellow-700"
                    : "text-slate-400"
                }
              />
            </Link>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className="mt-7 border-t border-slate-100 pt-6">
          <p className="mb-3 text-sm font-semibold text-slate-700">
            Need help with your device?
          </p>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-extrabold text-slate-950 shadow-sm transition-colors hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
          >
            <Phone size={17} />

            Get a Quote

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Drawer Footer */}
        <div className="mt-auto pt-8">
          <div className="rounded-xl bg-slate-50 p-4 text-center">
            <p className="text-xs leading-5 text-slate-500">
              Professional tech support and repair services.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
