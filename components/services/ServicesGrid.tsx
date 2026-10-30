"use client";

import { useEffect, useRef, useState } from "react";
import type { WheelEvent, TouchEvent, KeyboardEvent } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BatteryCharging,
  CheckCircle2,
  Droplets,
  Gamepad2,
  Laptop,
  Monitor,
  PlugZap,
  ShieldCheck,
  Smartphone,
  Tablet,
  Wrench,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Mobile Phone Repair",
    subtitle: "SMARTPHONES & DEVICES",
    description:
      "Cracked screen, weak battery or charging trouble? Get your phone back to its best with reliable repair support from our team.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Modern smartphone close-up",
    icon: Smartphone,
    issues: [
      "Screen Replacement",
      "Battery Problems",
      "Charging Port",
      "Water Damage",
    ],
  },
  {
    number: "02",
    title: "Laptop Repair",
    subtitle: "LAPTOPS & COMPUTERS",
    description:
      "From slow performance to hardware faults, we can help diagnose and resolve common laptop problems.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Laptop on a desk",
    icon: Laptop,
    issues: [
      "Screen Problems",
      "Battery Replacement",
      "Overheating",
      "Hardware Faults",
    ],
  },
  {
    number: "03",
    title: "Tablet Repair",
    subtitle: "IPAD & ANDROID TABLETS",
    description:
      "Get help with damaged displays, battery issues, charging faults and other common tablet problems.",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Tablet device on a desk",
    icon: Tablet,
    issues: [
      "Screen Damage",
      "Battery Issues",
      "Charging Faults",
      "Audio Problems",
    ],
  },
  {
    number: "04",
    title: "Xbox Repair",
    subtitle: "GAMING CONSOLE SOLUTIONS",
    description:
      "Console overheating, power faults or HDMI trouble? Explore support for common Xbox issues.",
    image:
      "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Gaming setup with console and controller",
    icon: Gamepad2,
    issues: ["Overheating", "Power Problems", "HDMI Issues", "Connectivity"],
  },
  {
    number: "05",
    title: "PlayStation Repair",
    subtitle: "PS4 & PS5 SOLUTIONS",
    description:
      "Having trouble with your PlayStation? Find help for common console hardware and performance issues.",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Gaming controller and console setup",
    icon: Gamepad2,
    issues: [
      "Cooling Problems",
      "HDMI Port",
      "Power Faults",
      "Storage Problems",
    ],
  },
];

const issueIcons = [Monitor, BatteryCharging, PlugZap, Droplets];

export default function ServicesGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const total = services.length;

  const lastWheelChange = useRef(0);
  const touchStartX = useRef<number | null>(null);

  // Detect mobile screen
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    const updateScreen = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateScreen();

    mediaQuery.addEventListener("change", updateScreen);

    return () => {
      mediaQuery.removeEventListener("change", updateScreen);
    };
  }, []);

  // Change active slide
  const changeSlide = (direction: number) => {
    setAutoPlay(false);

    setActiveIndex((current) => {
      return (current + direction + total) % total;
    });
  };

  // Select particular card
  const selectSlide = (index: number) => {
    setAutoPlay(false);
    setActiveIndex(index);
  };

  // Slow automatic rotation
  useEffect(() => {
    if (!autoPlay) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [autoPlay, total]);

  // Smooth touchpad scrolling
  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaX) < 35) return;

    const now = Date.now();

    // Prevent rapid slide changes
    if (now - lastWheelChange.current < 1200) return;

    lastWheelChange.current = now;

    changeSlide(event.deltaX > 0 ? 1 : -1);
  };

  // Touch start
  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  // Touch end
  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(distance) > 50) {
      changeSlide(distance < 0 ? 1 : -1);
    }

    touchStartX.current = null;
  };

  // Keyboard accessibility
  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    index: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectSlide(index);
    }
  };

  return (
    <section
      id="repair-services"
      className="relative overflow-hidden bg-[#f8f8fa] px-3 py-10 sm:px-6 sm:py-24 lg:px-8 lg:py-8"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute top-40 -left-36 h-80 w-80 rounded-full bg-amber-200/35 blur-[100px]" />

      <div className="pointer-events-none absolute -right-36 bottom-10 h-96 w-96 rounded-full bg-violet-200/30 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-white px-4 py-2 text-[10px] font-extrabold tracking-[2px] text-amber-700 shadow-sm sm:text-[11px]">
            <Wrench size={14} />
            REPAIR SERVICES
          </div>

          <h2 className="text-[27px] leading-tight font-black tracking-tight text-[#171923] sm:text-4xl lg:text-5xl">
            We Fix Your Tech.
            <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              You Get Back to Life.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[12px] leading-6 text-[#686b76] sm:mt-5 sm:text-base sm:leading-7">
            From smartphones and laptops to gaming consoles, discover expert
            repair support for the devices you rely on every day.
          </p>
        </div>

        <div className="mx-auto max-w-6xl" onWheel={handleWheel}>
          {/* Carousel stage */}
          <div
            className="relative h-[450px] touch-pan-y overflow-hidden sm:h-[690px] lg:h-[650px]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {services.map((service, index) => {
              let offset = index - activeIndex;

              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              const ServiceIcon = service.icon;

              // Mobile: smaller cards with more visible side cards
              const cardWidth = isMobile
                ? "min(76vw, 360px)"
                : "min(470px, calc(100% - 28px))";

              const translateDistance = isMobile ? 71 : 76;

              return (
                <article
                  key={service.number}
                  aria-hidden={!isVisible}
                  role="button"
                  tabIndex={isVisible ? 0 : -1}
                  aria-label={`Show ${service.title}`}
                  onClick={() => {
                    if (!isActive) selectSlide(index);
                  }}
                  onKeyDown={(event) => handleCardKeyDown(event, index)}
                  className={`absolute top-1/2 left-1/2 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] outline-none ${
                    !isActive ? "cursor-pointer" : "cursor-default"
                  }`}
                  style={{
                    width: cardWidth,
                    transform: `
                      translate(-50%, -50%)
                      translateX(${offset * translateDistance}%)
                      translateY(${Math.abs(offset) * 14}px)
                      rotateY(${offset * -10}deg)
                      scale(${isActive ? 1 : isMobile ? 0.82 : 0.78})
                    `,
                    opacity: isActive ? 1 : isVisible ? 0.55 : 0,
                    zIndex: 20 - Math.abs(offset),
                    pointerEvents: isVisible ? "auto" : "none",
                    visibility: isVisible ? "visible" : "hidden",
                  }}
                >
                  <div
                    className={`overflow-hidden rounded-[23px] border bg-white shadow-[0_24px_70px_-28px_rgba(30,35,50,0.28)] transition-all duration-1000 sm:rounded-[28px] ${
                      isActive
                        ? "border-amber-300 shadow-[0_28px_80px_-28px_rgba(217,119,6,0.28)]"
                        : "border-white/80"
                    }`}
                  >
                    {/* Service image */}
                    <div className="relative h-[135px] overflow-hidden sm:h-[225px]">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        draggable={false}
                        loading={Math.abs(offset) > 0 ? "lazy" : "eager"}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#11131c]/85 via-[#11131c]/15 to-transparent" />

                      <div className="absolute top-3 left-3 flex max-w-[75%] items-center gap-1.5 rounded-full border border-white/25 bg-black/25 px-2.5 py-1.5 text-[8px] font-bold tracking-[1px] text-white backdrop-blur-md sm:top-5 sm:left-5 sm:gap-2 sm:px-3 sm:py-2 sm:text-[10px] sm:tracking-[1.5px]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400 sm:h-2 sm:w-2" />
                        <span className="truncate">{service.subtitle}</span>
                      </div>

                      <span className="absolute top-3 right-3 text-2xl font-black text-white/70 sm:top-5 sm:right-5 sm:text-3xl">
                        {service.number}
                      </span>

                      <div className="absolute bottom-3 left-3 flex items-center gap-2.5 text-white sm:bottom-5 sm:left-5 sm:gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-amber-300 backdrop-blur-md sm:h-11 sm:w-11 sm:rounded-2xl">
                          <ServiceIcon size={20} />
                        </span>

                        <div>
                          <p className="text-[8px] font-semibold tracking-[1px] text-white/75 uppercase sm:text-[10px] sm:tracking-[1.5px]">
                            Xtreme Xperts
                          </p>

                          <h3 className="text-[14px] leading-tight font-extrabold sm:text-2xl">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Card details */}
                    <div className="p-3 sm:p-8">
                      <p className="text-[10px] leading-[1.6] text-[#666a75] sm:text-sm sm:leading-7">
                        {service.description}
                      </p>

                      {/* Common issues */}
                      <div className="mt-3 sm:mt-5">
                        <div className="mb-2 flex items-center justify-between sm:mb-3">
                          <h4 className="text-[8px] font-extrabold tracking-[0.8px] text-[#252936] uppercase sm:text-[11px] sm:tracking-[1.5px]">
                            Common issues we help with
                          </h4>

                          <span className="h-px w-8 bg-amber-400 sm:w-10" />
                        </div>

                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5">
                          {service.issues.map((issue, issueIndex) => {
                            const IssueIcon =
                              issueIcons[issueIndex] ?? CheckCircle2;

                            return (
                              <div
                                key={issue}
                                className="flex min-h-8 items-center gap-1 rounded-lg border border-[#ececf0] bg-[#f8f8fa] px-1.5 py-1.5 text-[#454956] sm:min-h-11 sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2"
                              >
                                <IssueIcon
                                  size={11}
                                  className="shrink-0 text-amber-600 sm:h-4 sm:w-4"
                                />

                                <span className="text-[8px] leading-tight font-semibold sm:text-xs">
                                  {issue}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Card footer */}
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-[#eeeeF1] pt-3 sm:mt-6 sm:pt-5">
                        <div className="flex items-center gap-1 text-[8px] font-semibold text-[#777b85] sm:gap-2 sm:text-xs">
                          <ShieldCheck
                            size={14}
                            className="shrink-0 text-amber-600 sm:h-[17px] sm:w-[17px]"
                          />

                          <span>Professional Repair Support</span>
                        </div>

                        <Link
                          href="/contact"
                          tabIndex={isActive ? 0 : -1}
                          onClick={(event) => event.stopPropagation()}
                          className="group inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-400 px-3 py-2 text-[8px] font-extrabold text-[#171923] shadow-md shadow-amber-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-500/30 sm:gap-1.5 sm:px-4 sm:py-2.5 sm:text-xs"
                        >
                          Book a Repair
                          <ArrowUpRight
                            size={12}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-[15px] sm:w-[15px]"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Dots only */}
          <div className="relative z-30 mt-2 flex items-center justify-center gap-2.5">
            {services.map((service, index) => (
              <button
                key={service.number}
                type="button"
                onClick={() => selectSlide(index)}
                aria-label={`Show ${service.title}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-500 ${
                  activeIndex === index
                    ? "w-8 bg-amber-500"
                    : "w-2 bg-[#c9cad1] hover:bg-amber-300"
                }`}
              />
            ))}
          </div>

          <p className="mt-5 text-center text-[9px] font-bold tracking-[1.5px] text-[#9a9ca5] sm:text-[10px] sm:tracking-[2px]">
            {autoPlay
              ? "AUTO ROTATING · SWIPE TO EXPLORE"
              : "EXPLORE OUR REPAIR SERVICES"}
          </p>
        </div>
      </div>
    </section>
  );
}
