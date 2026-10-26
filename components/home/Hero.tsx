"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Clock3,
  Star,
} from "lucide-react";

const slides = [
  {
    prefix: "Broken Device?",
    typing: "We'll fix it.",
    description:
      "From smartphones to laptops and gaming consoles, our expert technicians bring your devices back to life.",
    badge: "EXPERT REPAIR SERVICES",
  },
  {
    prefix: "Need a Quick Repair?",
    typing: "We're ready.",
    description:
      "Get reliable repairs, professional service, and expert care without unnecessary delays.",
    badge: "FAST & RELIABLE SERVICE",
  },
  {
    prefix: "Your Tech Matters.",
    typing: "Trust the experts.",
    description:
      "From everyday devices to complex repairs, we deliver dependable solutions you can count on.",
    badge: "YOUR TRUSTED REPAIR PARTNER",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [videoReady, setVideoReady] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Letter-by-letter typing and deleting animation
  useEffect(() => {
    const fullText = slides[currentIndex].typing;

    let characterIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const typeNextCharacter = () => {
      if (!deleting) {
        characterIndex += 1;

        setTypedText(fullText.slice(0, characterIndex));

        if (characterIndex >= fullText.length) {
          timeout = setTimeout(() => {
            deleting = true;
            typeNextCharacter();
          }, 1800);

          return;
        }

        timeout = setTimeout(typeNextCharacter, 75);
      } else {
        characterIndex -= 1;

        setTypedText(fullText.slice(0, characterIndex));

        if (characterIndex <= 0) {
          timeout = setTimeout(() => {
            setCurrentIndex(
              (previous) => (previous + 1) % slides.length
            );
          }, 300);

          return;
        }

        timeout = setTimeout(typeNextCharacter, 35);
      }
    };

    setTypedText("");

    timeout = setTimeout(typeNextCharacter, 400);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  // Slow background video
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.playbackRate = 0.75;

    const handleVideoReady = () => {
      video.playbackRate = 0.75;
      setVideoReady(true);
    };

    video.addEventListener("loadeddata", handleVideoReady);

    if (video.readyState >= 2) {
      setVideoReady(true);
    }

    return () => {
      video.removeEventListener("loadeddata", handleVideoReady);
    };
  }, []);

  // Reduced-motion accessibility
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotion = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotion();

    mediaQuery.addEventListener("change", updateMotion);

    return () => {
      mediaQuery.removeEventListener("change", updateMotion);
    };
  }, []);

  return (
    <section className="relative isolate flex min-h-[680px] w-full items-center justify-center overflow-hidden bg-slate-50 sm:min-h-[720px] lg:min-h-[740px]">

      {/* Background Video */}
      <div className="absolute inset-0 -z-30 overflow-hidden bg-slate-950">
        <video
          ref={videoRef}
          src="/videos/phone-repair11.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onLoadedMetadata={(event) => {
            event.currentTarget.playbackRate = 0.75;
          }}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Balanced Video Overlays */}
      <div className="absolute inset-0 -z-20 bg-slate-950/25" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/65 via-slate-950/40 to-slate-950/50" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20" />

      {/* Centered Hero Content */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-28 text-center sm:px-8 sm:py-32 lg:px-12">

        <div className="w-full max-w-2xl">

          {/* Badge */}
          <div
            key={`badge-${currentIndex}`}
            className={`mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-md ${
              reducedMotion
                ? ""
                : "animate-[fadeUp_0.6s_ease-out_both]"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/95 sm:text-xs">
              {slides[currentIndex].badge}
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-3xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]"
            aria-label={`${slides[currentIndex].prefix} ${slides[currentIndex].typing}`}
          >
            <span
              key={`prefix-${currentIndex}`}
              className={
                reducedMotion
                  ? "block"
                  : "block animate-[fadeUp_0.6s_ease-out_both]"
              }
            >
              {slides[currentIndex].prefix}
            </span>

            {/* Typing Text */}
            <span className="mt-2 flex min-h-[1.3em] items-center justify-center text-amber-400">
              <span aria-hidden="true">{typedText}</span>

              <span
                aria-hidden="true"
                className={`ml-1 inline-block h-[0.95em] w-[2px] shrink-0 translate-y-[1px] bg-amber-400 ${
                  reducedMotion ? "" : "animate-[cursorBlink_0.8s_steps(2,start)_infinite]"
                }`}
              />
            </span>
          </h1>

          {/* Description */}
          <p
            key={`description-${currentIndex}`}
            className={`mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8 ${
              reducedMotion
                ? ""
                : "animate-[fadeUp_0.8s_ease-out_both]"
            }`}
          >
            {slides[currentIndex].description}
          </p>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">

            <Link
              href="/services"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-400/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
            >
              Explore Our Services

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/80 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
            >
              Contact Our Team

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* Trust Indicators */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-4 border-t border-white/15 pt-6 sm:gap-x-7">

            <div className="flex items-center gap-2.5">
              <ShieldCheck
                size={21}
                className="shrink-0 text-amber-400"
              />

              <span className="text-xs font-medium leading-5 text-slate-200 sm:text-sm">
                Expert Technicians
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock3
                size={21}
                className="shrink-0 text-amber-400"
              />

              <span className="text-xs font-medium leading-5 text-slate-200 sm:text-sm">
                Reliable Service
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Star
                size={21}
                className="shrink-0 text-amber-400"
              />

              <span className="text-xs font-medium leading-5 text-slate-200 sm:text-sm">
                Quality Repairs
              </span>
            </div>

          </div>

          {/* Slide Indicators */}
          <div
            className="mt-7 flex items-center justify-center gap-2.5"
            aria-label="Hero slides"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.badge}
                type="button"
                onClick={() => {
                  if (index !== currentIndex) {
                    setCurrentIndex(index);
                  }
                }}
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={currentIndex === index}
                className={`h-1.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  currentIndex === index
                    ? "w-9 bg-amber-400"
                    : "w-4 bg-white/40 hover:bg-white/75"
                }`}
              />
            ))}

            
          </div>

        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cursorBlink {
          0%,
          49% {
            opacity: 1;
          }

          50%,
          100% {
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

    </section>
  );
}
