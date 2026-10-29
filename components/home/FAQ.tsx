"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Which devices can you repair?",
    answer:
      "We work with a range of electronic devices, including mobile phones, tablets, laptops and other supported devices. Contact our team to check whether we can help with your specific device.",
  },
  {
    question: "How long does a repair usually take?",
    answer:
      "Repair times depend on the device, the type of fault and the availability of parts. Get in touch with our team to discuss your device and the expected timeframe.",
  },
  {
    question: "How much will my repair cost?",
    answer:
      "Repair costs depend on your device model and the issue you're experiencing. Contact our team with these details so we can discuss the available repair options.",
  },
  {
    question: "Do I need to book an appointment?",
    answer:
      "We recommend contacting our team before visiting to discuss your repair and confirm the next steps.",
  },
  {
    question: "Do you offer a warranty on repairs?",
    answer:
      "Warranty coverage depends on the repair service provided. Please contact our team to confirm the applicable warranty terms before proceeding.",
  },
  {
    question: "How can I contact Xtreme Xperts?",
    answer:
      "Visit our Contact page to find the available ways to reach our team. Tell us about your device and its issue, and we'll help you with the next steps.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#fafaf8] px-5 py-10 sm:px-8 sm:py-14 lg:py-10">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-700 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Questions?
            <span className="block text-amber-500">
              We&apos;ve Got Answers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Everything you need to know about our repair services, process,
            and how to get your device back in working order.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className={`border-b border-slate-200 transition-colors duration-300 ${
                  isOpen ? "border-amber-300" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="group flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
                >
                  <span className="flex min-w-0 items-start gap-4 sm:gap-5">
                    {/* Question number */}
                    <span
                      className={`pt-0.5 text-sm font-bold transition-colors duration-300 ${
                        isOpen
                          ? "text-amber-600"
                          : "text-slate-400 group-hover:text-amber-500"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className={`text-sm font-bold leading-6 transition-colors duration-300 sm:text-base lg:text-lg ${
                        isOpen
                          ? "text-slate-950"
                          : "text-slate-800 group-hover:text-amber-700"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </span>

                  {/* Plus / Minus Icon */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-0 bg-amber-400 text-slate-950"
                        : "bg-white text-slate-500 ring-1 ring-slate-200 group-hover:bg-amber-50 group-hover:text-amber-600 group-hover:ring-amber-300"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={18} strokeWidth={2} />
                    ) : (
                      <Plus size={18} strokeWidth={2} />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={answerId}
                  hidden={!isOpen}
                  className="pb-6 pl-9 pr-2 sm:pb-7 sm:pl-12 sm:pr-12"
                >
                  <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact CTA */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="text-base font-medium text-slate-600">
            Still have questions?
          </p>

          <Link
            href="/contact"
            className="group mt-4 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20"
          >
            Contact Our Team
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}