import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench, ShieldCheck, Clock } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Expert Repair Team",
  },
  {
    icon: ShieldCheck,
    title: "Quality Workmanship",
  },
  {
    icon: Clock,
    title: "Reliable Service",
  },
];

export default function ServicesHero() {
  return (
    <section className="bg-[#f8f8fa] px-3 pt-[100px] pb-10 sm:px-5 sm:pt-[115px] sm:pb-14 lg:px-8 lg:pt-[125px] lg:pb-16">
      <div className="mx-auto max-w-7xl">
        {/* Hero Card */}
        <div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-[#251039] via-[#52218b] to-[#d97721] px-3 py-6 shadow-xl sm:rounded-[2rem] sm:px-8 sm:py-10 lg:px-12 lg:py-14 xl:px-16">
          {/* Background Effects */}
          <div className="absolute -top-32 -left-32 -z-10 h-80 w-80 rounded-full bg-purple-500/30 blur-[110px]" />

          <div className="absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-amber-400/30 blur-[100px]" />

          {/* Two Column Layout - All Screens */}
          <div className="grid grid-cols-[1.15fr_0.85fr] items-center gap-2 sm:gap-6 lg:gap-10 xl:gap-14">
            {/* Left Content */}
            <div className="relative z-10 min-w-0">
              {/* Badge */}
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-black/10 px-2 py-1.5 text-[6px] font-bold tracking-[0.5px] text-amber-300 backdrop-blur-sm sm:mb-5 sm:gap-2 sm:px-3 sm:py-2 sm:text-[10px] lg:mb-6 lg:px-4 lg:py-2.5 lg:text-xs">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400 sm:h-2 sm:w-2" />
                PROFESSIONAL REPAIR SERVICES
              </div>

              {/* Heading */}
              <h1 className="text-[19px] leading-[1.2] font-extrabold tracking-tight text-white sm:text-3xl lg:text-[2.8rem] xl:text-5xl">
                Need a Repair?
                <span className="mt-1 block bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent sm:mt-2">
                  Let&apos;s Get It Fixed!
                </span>
              </h1>

              {/* Description */}
              <p className="mt-2 max-w-xl text-[8px] leading-[1.6] text-white/85 sm:mt-4 sm:text-sm sm:leading-7 lg:mt-5 lg:text-base lg:leading-8">
                From smartphones to laptops, our expert team is ready to help.
                Explore our repair services and let&apos;s find the right
                solution for your device.
              </p>

              {/* Features */}
              <div className="mt-3 flex flex-col gap-2 sm:mt-5 sm:gap-3 lg:mt-7 lg:flex-row lg:flex-wrap lg:gap-x-6 lg:gap-y-4">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="flex items-center gap-1.5 sm:gap-2.5"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-amber-400/30 bg-black/10 text-amber-300 sm:h-8 sm:w-8 sm:rounded-lg lg:h-9 lg:w-9 lg:rounded-xl">
                        <Icon
                          size={13}
                          className="sm:h-4 sm:w-4 lg:h-[18px] lg:w-[18px]"
                        />
                      </div>

                      <span className="text-[7px] leading-tight font-medium text-white sm:text-xs lg:text-sm">
                        {feature.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Button */}
              <div className="mt-4 sm:mt-6 lg:mt-8">
                <Link
                  href="#repair-services"
                  className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 px-2.5 py-2 text-[7px] font-bold text-[#171717] shadow-lg shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-400/30 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-xs lg:gap-3 lg:px-7 lg:py-3.5 lg:text-sm"
                >
                  Explore Our Services
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4 lg:h-[18px] lg:w-[18px]"
                  />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mx-auto w-full min-w-0">
              {/* Image Glow */}
              <div className="absolute -inset-1.5 rounded-xl bg-gradient-to-br from-purple-400/40 to-amber-400/40 opacity-70 blur-lg sm:-inset-3 sm:rounded-2xl sm:blur-2xl" />

              {/* Image Card */}
              <div className="relative overflow-hidden rounded-lg border border-white/20 bg-black/20 p-1 shadow-2xl backdrop-blur-sm sm:rounded-2xl sm:p-1.5 lg:rounded-[1.8rem] lg:p-2">
                <Image
                  src="/images/services-hero11.jpg"
                  alt="Professional technician repairing electronic devices"
                  width={800}
                  height={650}
                  priority
                  sizes="(max-width: 639px) 38vw, (max-width: 1023px) 40vw, 500px"
                  className="h-[145px] w-full rounded-md object-cover sm:h-[260px] sm:rounded-xl lg:h-[360px] xl:h-[390px]"
                />
              </div>

              {/* Top Floating Badge */}
              <div className="absolute top-3 -right-1 flex items-center gap-1 rounded-lg border border-purple-300/30 bg-[#24143b]/95 px-1.5 py-1.5 text-white shadow-xl backdrop-blur-md sm:top-5 sm:-right-3 sm:gap-2 sm:rounded-xl sm:px-2.5 sm:py-2.5 lg:-right-4 lg:gap-3 lg:rounded-2xl lg:px-4 lg:py-3">
                <ShieldCheck
                  size={14}
                  className="shrink-0 text-amber-400 sm:h-5 sm:w-5 lg:h-[22px] lg:w-[22px]"
                />

                <span className="text-[7px] leading-tight font-semibold sm:text-[10px] lg:text-sm">
                  Reliable
                  <br />
                  Service
                </span>
              </div>

              {/* Bottom Floating Badge */}
              <div className="absolute -bottom-2 -left-1 flex items-center gap-1 rounded-lg border border-purple-300/30 bg-[#24143b]/95 px-1.5 py-1.5 text-white shadow-xl backdrop-blur-md sm:-bottom-3 sm:-left-3 sm:gap-2 sm:rounded-xl sm:px-2.5 sm:py-2.5 lg:-left-4 lg:gap-3 lg:rounded-2xl lg:px-4 lg:py-3">
                <Wrench
                  size={13}
                  className="shrink-0 text-amber-400 sm:h-5 sm:w-5 lg:h-[21px] lg:w-[21px]"
                />

                <span className="text-[7px] leading-tight font-semibold sm:text-[10px] lg:text-sm">
                  Professional
                  <br />
                  Repairs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
