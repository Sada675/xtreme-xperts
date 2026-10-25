"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: (
      <>
        Broken Device? <br />
        <span className="text-amber-400">We've Got You Covered.</span>
      </>
    ),
    description:
      "From smartphones to laptops and gaming consoles, our expert technicians are ready to bring your devices back to life.",
    badge: "EXPERT REPAIR SERVICES",
  },
  {
    title: (
      <>
        Expert Repairs. <br />
        <span className="text-amber-400">Less Waiting.</span>
      </>
    ),
    description:
      "Fast, reliable repairs with professional care. We help you get back to what matters without unnecessary delays.",
    badge: "FAST & RELIABLE SERVICE",
  },
  {
    title: (
      <>
        Your Device Deserves <br />
        <span className="text-amber-400">Expert Care.</span>
      </>
    ),
    description:
      "Whether it is a phone, tablet, laptop, or console, trust our team to provide dependable repair solutions.",
    badge: "YOUR TRUSTED REPAIR PARTNER",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate flex h-screen min-h-0 w-full items-center justify-center overflow-hidden bg-slate-950">
      {/* Full-screen video background */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-slate-950">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/videos/phone-repair11.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-slate-250/50" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-slate-950/65" />

      {/* Hero content */}
      <div className="mx-auto w-full max-w-7xl px-5 py-24 text-center sm:px-8 lg:px-12">
        <div
          key={currentIndex}
          className="mx-auto max-w-4xl animate-[heroFadeIn_0.8s_ease-out_both]"
        >
          {/* Badge */}
          <span className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold tracking-[0.2em] text-white shadow-lg backdrop-blur-md sm:text-sm">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            {slides[currentIndex].badge}
          </span>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {slides[currentIndex].title}
          </h1>

          {/* Description */}
          <p className="mx-auto mb-9 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
            {slides[currentIndex].description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/services"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-amber-400 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-amber-400/20 transition duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-xl sm:w-auto"
            >
              Explore Our Services
              <span className="ml-2 text-xl" aria-hidden="true">
                →
              </span>
            </a>

            <a
              href="/contact"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-white/60 bg-white/20 px-8 py-4 font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/30 sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.badge}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={currentIndex === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                currentIndex === index
                  ? "w-10 bg-amber-400"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
