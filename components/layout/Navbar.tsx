"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Phone, X, Wrench } from "lucide-react";

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

  // Close mobile menu when the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling while the mobile menu is open
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
      {/* Fixed Floating Navbar */}
      <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div
            className={`flex min-h-[68px] items-center justify-between gap-3 border border-yellow-400/70 bg-white px-3 shadow-xl shadow-black/[0.08] backdrop-blur-xl transition-all duration-300 sm:px-5 lg:min-h-[76px] lg:gap-6 lg:rounded-full lg:px-6 ${
              menuOpen ? "rounded-2xl" : "rounded-full"
            }`}
          >
            
{/* Original Logo with Built-in Text */}
<Link
  href="/"
  aria-label="Xtreme Xperts Tech and Repair homepage"
  className="relative block h-[58px] w-[190px] shrink-0 sm:h-[68px] sm:w-[230px] lg:h-[66px] lg:w-[255px]"
>
  <Image
    src="/images/logo22.png"
    alt="Xtreme Xperts — Tech & Repair"
    fill
    priority
    sizes="(max-width: 640px) 190px, (max-width: 1024px) 230px, 255px "
    className="object-contain object-left "
  />
</Link>



            {/* Desktop Navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-5 lg:flex xl:gap-7"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`group relative py-3 text-sm font-semibold transition-colors duration-300 ${
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

            {/* Desktop Get a Quote Button */}
            <Link
              href="/contact"
              className="group hidden shrink-0 items-center gap-2 rounded-full bg-yellow-400 px-5 py-3.5 text-sm font-extrabold text-slate-950 shadow-md shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-lg lg:inline-flex"
            >
              <Phone size={16} />

              <span>Get a Quote</span>

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-slate-950 transition-all duration-300 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 lg:hidden"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-[60] bg-slate-950/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed bottom-0 right-0 top-0 z-[70] flex w-[85%] max-w-[360px] flex-col overflow-y-auto bg-white px-5 pb-8 pt-24 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Drawer Heading */}
        <div className="mb-5 rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
          <p className="text-lg font-extrabold text-slate-950">
            Xtreme <span className="text-yellow-600">Xperts</span>
          </p>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            Expert repairs. Reliable service.
          </p>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className={`rounded-xl px-4 py-3.5 text-sm font-bold transition-colors ${
                isActive(item.href)
                  ? "bg-yellow-100 text-slate-950"
                  : "text-slate-700 hover:bg-yellow-50 hover:text-slate-950"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Get a Quote Button */}
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3.5 text-sm font-extrabold text-slate-950 shadow-md transition-colors hover:bg-yellow-300"
        >
          <Phone size={17} />
          Get a Quote
          <ArrowUpRight size={17} />
        </Link>

        <p className="mt-5 text-center text-xs leading-5 text-slate-500">
          Need help with your device? Get in touch with our team.
        </p>
      </aside>
    </>
  );
}
