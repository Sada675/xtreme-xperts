// "use client";

// import Link from "next/link";
// import {
// ArrowDownRight,
// ArrowUpRight,
// Smartphone,
// Laptop,
// Tablet,
// Gamepad2,
// Monitor,
// Sparkles,
// Wrench,
// } from "lucide-react";

// const services = [
// {
// number: "01",
// title: "Mobile Phone Repair",
// description:
// "Cracked screens, battery issues and charging problems. Get your phone back in action.",
// image:
// "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=90",
// icon: Smartphone,
// accent: "bg-purple-100 text-purple-700",
// imageBg: "bg-[#F2EDFF]",
// shape: "rounded-[2rem] rounded-bl-[5rem]",
// },
// {
// number: "02",
// title: "Laptop Repair",
// description:
// "Professional assistance for laptop hardware, display and software issues.",
// image:
// "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=90",
// icon: Laptop,
// accent: "bg-amber-100 text-amber-800",
// imageBg: "bg-[#FFF6DE]",
// shape: "rounded-[2rem] rounded-tr-[5rem]",
// },
// {
// number: "03",
// title: "Tablet Repair",
// description:
// "Restore your tablet with support for screen damage, charging faults and more.",
// image:
// "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=90",
// icon: Tablet,
// accent: "bg-purple-100 text-purple-700",
// imageBg: "bg-[#F2EDFF]",
// shape: "rounded-[2rem] rounded-tl-[5rem]",
// },
// {
// number: "04",
// title: "Gaming Console Repair",
// description:
// "Get help diagnosing console faults, performance issues and hardware problems.",
// image:
// "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1000&q=90",
// icon: Gamepad2,
// accent: "bg-amber-100 text-amber-800",
// imageBg: "bg-[#FFF6DE]",
// shape: "rounded-[2rem] rounded-br-[5rem]",
// },
// {
// number: "05",
// title: "Xbox Repair",
// description:
// "Troubleshooting and repair support for Xbox hardware and connectivity issues.",
// image:
// "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=1000&q=90",
// icon: Gamepad2,
// accent: "bg-purple-100 text-purple-700",
// imageBg: "bg-[#F2EDFF]",
// shape: "rounded-[2rem] rounded-bl-[5rem]",
// },
// {
// number: "06",
// title: "PlayStation Repair",
// description:
// "Get assistance with PlayStation hardware faults and console performance issues.",
// image:
// "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1000&q=90",
// icon: Monitor,
// accent: "bg-amber-100 text-amber-800",
// imageBg: "bg-[#FFF6DE]",
// shape: "rounded-[2rem] rounded-tr-[5rem]",
// },
// ];

// export default function ServicesPage() {
// return ( <main className="overflow-hidden bg-white text-[#171525]">

// ```
//   {/* HERO SECTION */}
//   <section className="relative px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-12 lg:pb-28 lg:pt-20">

//     {/* Decorative background elements */}
//     <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-purple-100/70 blur-[90px]" />
//     <div className="pointer-events-none absolute left-0 top-1/2 h-40 w-40 rounded-full bg-amber-100/60 blur-[80px]" />

//     <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-8">

//       {/* Hero content */}
//       <div className="relative z-10">

//         <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-2.5 text-xs font-extrabold uppercase tracking-[2px] text-purple-800 sm:text-sm">
//           <Sparkles size={15} />
//           Xtreme Xperts Services
//         </div>

//         <h1 className="mt-7 max-w-2xl text-[2.8rem] font-black leading-[1.08] tracking-[-2px] sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
//           Giving Your
//           <br />
//           Devices a{" "}
//           <span className="relative inline-block text-[#7F2BE8]">
//             Second Life.
//             <svg
//               viewBox="0 0 300 15"
//               className="absolute -bottom-2 left-0 w-full"
//               fill="none"
//               aria-hidden="true"
//             >
//               <path
//                 d="M4 10C75 2 192 2 294 8"
//                 stroke="#F9A603"
//                 strokeWidth="7"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </span>
//         </h1>

//         <p className="mt-7 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
//           From everyday devices to your favourite gaming consoles, explore
//           our repair services and find the right support for your
//           technology.
//         </p>

//         <div className="mt-9 flex flex-wrap items-center gap-4">

//           <Link
//             href="#our-services"
//             className="group inline-flex items-center gap-3 rounded-2xl bg-[#7F2BE8] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-purple-200/70 transition duration-300 hover:-translate-y-1 hover:bg-[#6920C5]"
//           >
//             Explore Our Services
//             <ArrowDownRight
//               size={19}
//               className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
//             />
//           </Link>

//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2 rounded-2xl px-4 py-4 text-sm font-bold text-slate-800 transition hover:text-[#7F2BE8]"
//           >
//             Get in Touch
//             <ArrowUpRight size={18} />
//           </Link>

//         </div>

//         <div className="mt-10 flex items-center gap-3 text-sm font-medium text-slate-500">
//           <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-700">
//             <Wrench size={17} />
//           </span>
//           Repair support for the technology you rely on.
//         </div>

//       </div>

//       {/* Creative hero image composition */}
//       <div className="relative mx-auto w-full max-w-[580px] lg:ml-auto lg:mr-0">

//         {/* Purple decorative shape */}
//         <div className="absolute -right-2 top-0 h-28 w-28 rounded-[2rem] bg-[#7F2BE8] sm:-right-5 sm:h-36 sm:w-36" />

//         {/* Yellow decorative circle */}
//         <div className="absolute -bottom-5 -left-3 h-24 w-24 rounded-full bg-[#F9A603] sm:-bottom-8 sm:-left-7 sm:h-32 sm:w-32" />

//         {/* Main image */}
//         <div className="relative ml-5 mr-3 mt-5 overflow-hidden rounded-[2.5rem] rounded-bl-[7rem] border-[6px] border-white shadow-[0_30px_80px_-25px_rgba(41,25,72,0.22)] sm:ml-8 sm:mr-7 sm:mt-7">
//           <img
//             src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1400&q=90"
//             alt="Electronics repair workspace"
//             className="h-[340px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[450px] lg:h-[490px]"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-[#171525]/65 via-transparent to-transparent" />

//           <div className="absolute bottom-0 left-0 p-6 sm:p-9">
//             <span className="text-xs font-extrabold uppercase tracking-[3px] text-amber-300">
//               Xtreme Xperts
//             </span>
//             <h2 className="mt-3 max-w-xs text-2xl font-black leading-tight text-white sm:text-3xl">
//               Technology deserves expert care.
//             </h2>
//           </div>
//         </div>

//         {/* Floating image badge */}
//         <div className="absolute -left-1 top-16 flex items-center gap-3 rounded-2xl border border-white bg-white p-3.5 shadow-[0_15px_45px_-12px_rgba(35,20,60,0.22)] sm:-left-5 sm:top-24 sm:p-4">
//           <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-[#7F2BE8]">
//             <Wrench size={22} />
//           </div>
//           <div>
//             <p className="text-sm font-extrabold text-slate-900">
//               Device Repair
//             </p>
//             <p className="mt-1 text-xs text-slate-500">
//               Phones, laptops & more
//             </p>
//           </div>
//         </div>

//         {/* Floating yellow detail */}
//         <div className="absolute -right-1 bottom-16 flex h-14 w-14 rotate-12 items-center justify-center rounded-2xl bg-[#F9A603] text-slate-950 shadow-lg sm:-right-3 sm:bottom-20 sm:h-[4.5rem] sm:w-[4.5rem]">
//           <Sparkles size={27} />
//         </div>

//       </div>

//     </div>
//   </section>


//   {/* SERVICES SECTION */}
//   <section
//     id="our-services"
//     className="scroll-mt-24 border-t border-slate-100 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
//   >

//     <div className="mx-auto max-w-7xl">

//       {/* Section heading */}
//       <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

//         <div className="max-w-2xl">

//           <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[3px] text-[#7F2BE8] sm:text-sm">
//             <span className="h-2 w-2 rounded-full bg-[#F9A603]" />
//             What We Repair
//           </div>

//           <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-1px] sm:text-5xl lg:text-6xl">
//             Our Repair{" "}
//             <span className="text-[#7F2BE8]">Services.</span>
//           </h2>

//           <p className="mt-5 max-w-xl text-base leading-8 text-slate-500">
//             The right care for the devices that keep you connected,
//             productive and entertained.
//           </p>

//         </div>

//         <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-purple-100 text-[#7F2BE8] md:flex">
//           <ArrowDownRight size={30} strokeWidth={1.5} />
//         </div>

//       </div>


//       {/* Asymmetric image cards */}
//       <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-9 lg:gap-y-16">

//         {services.map((service, index) => {
//           const Icon = service.icon;

//           return (
//             <article
//               key={service.number}
//               className={`group relative min-w-0 ${
//                 index % 2 === 1 ? "lg:translate-y-10" : ""
//               }`}
//             >

//               {/* Image panel */}
//               <div
//                 className={`relative isolate h-[270px] overflow-visible sm:h-[290px] lg:h-[300px] ${service.imageBg}`}
//               >

//                 {/* Decorative shape behind image */}
//                 <div
//                   className={`absolute -right-2 -top-2 h-20 w-20 rounded-[1.75rem] bg-[#7F2BE8] transition duration-500 group-hover:-right-4 group-hover:-top-4 sm:-right-3 sm:-top-3 ${
//                     index % 2 === 1 ? "bg-[#F9A603]" : ""
//                   }`}
//                 />

//                 {/* Image container */}
//                 <div
//                   className={`absolute inset-0 overflow-hidden ${service.shape} shadow-[0_18px_45px_-20px_rgba(30,20,50,0.20)]`}
//                 >
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     loading="lazy"
//                     className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#171525]/35 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
//                 </div>

//                 {/* Number badge */}
//                 <div className="absolute left-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-sm font-black text-slate-900 shadow-lg backdrop-blur-md transition duration-300 group-hover:bg-[#7F2BE8] group-hover:text-white">
//                   {service.number}
//                 </div>

//                 {/* Floating icon */}
//                 <div className="absolute -bottom-5 right-5 z-10 flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-[1.4rem] border-4 border-white bg-[#F9A603] text-slate-950 shadow-lg transition duration-300 group-hover:-translate-y-2 group-hover:rotate-6">
//                   <Icon size={27} strokeWidth={1.8} />
//                 </div>

//                 {/* Small floating decorative dot */}
//                 <div className="absolute -bottom-3 -left-3 z-10 h-7 w-7 rounded-full border-[5px] border-white bg-[#7F2BE8]" />

//               </div>


//               {/* Card content */}
//               <div className="relative pt-9">

//                 <div className="flex items-start justify-between gap-3">

//                   <h3 className="text-xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[#7F2BE8] sm:text-2xl">
//                     {service.title}
//                   </h3>

//                   <span
//                     className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition duration-300 group-hover:rotate-45 ${service.accent}`}
//                   >
//                     <ArrowUpRight size={19} />
//                   </span>

//                 </div>

//                 <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-[15px]">
//                   {service.description}
//                 </p>

//                 <Link
//                   href="/contact"
//                   aria-label={`Enquire about ${service.title}`}
//                   className="mt-5 inline-flex items-center gap-2 border-b-2 border-amber-300 pb-1.5 text-sm font-extrabold text-slate-900 transition-all duration-300 hover:gap-4 hover:border-[#7F2BE8] hover:text-[#7F2BE8]"
//                 >
//                   Enquire Now
//                   <ArrowUpRight size={17} />
//                 </Link>

//               </div>

//             </article>
//           );
//         })}

//       </div>


//       {/* Bottom contact strip */}
//       <div className="relative mt-24 overflow-hidden rounded-[2rem] border border-purple-100 bg-[#F8F5FF] p-7 sm:p-10 lg:mt-32 lg:p-12">

//         <div className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full bg-purple-200/50 blur-3xl" />

//         <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">

//           <div className="max-w-2xl">

//             <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-[#7F2BE8]">
//               <Sparkles size={14} />
//               Need a Helping Hand?
//             </div>

//             <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
//               Not sure which repair you need?
//             </h3>

//             <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
//               Tell us about your device and the issue. Our team can help
//               you explore the next steps.
//             </p>

//           </div>

//           <Link
//             href="/contact"
//             className="group inline-flex shrink-0 items-center gap-3 rounded-2xl bg-[#171525] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#7F2BE8]"
//           >
//             Contact Our Team
//             <ArrowUpRight
//               size={19}
//               className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </Link>

//         </div>

//       </div>

//     </div>
//   </section>

// </main>

// );
// }
