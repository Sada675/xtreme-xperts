import Link from "next/link";

import { ArrowRight, Clock3, ChevronDown } from "lucide-react";

import { servicesData } from "@/app/data/services";

type Service = (typeof servicesData)[number];

type Props = {
  service: Service;
};

export default function ServiceFAQ({ service }: Props) {
  return (
    <section className="px-5 py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-[10px] font-extrabold tracking-[2px] text-amber-700">
            <Clock3 size={14} />
            GOT QUESTIONS?
          </span>

          <h2 className="mt-6 text-3xl leading-tight font-black tracking-tight text-[#171923] sm:text-4xl">
            Frequently Asked <span className="text-amber-500">Questions</span>
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-8 text-gray-500">
            Everything you need to know about our {service.title.toLowerCase()}{" "}
            services. Still have questions? Our team is here to help.
          </p>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="group btn-dark mt-8 inline-flex items-center gap-3 rounded-full px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-amber-400 hover:text-[#171923]"
          >
            Contact Our Team
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {service.faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 open:border-amber-300 open:bg-white open:shadow-sm hover:border-amber-300 sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm leading-6 font-extrabold text-[#171923]">
                {faq.question}

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 group-open:rotate-180 group-open:bg-amber-400 group-open:text-[#171923]">
                  <ChevronDown size={19} />
                </span>
              </summary>

              <div className="faq-answer">
                <p className="mt-5 border-t border-gray-200/70 pt-5 text-sm leading-7 text-gray-500">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
