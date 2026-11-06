"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight, MessageCircle } from "lucide-react";

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
    <section className="bg-background relative overflow-hidden px-5 py-16 sm:px-8 sm:py-10 lg:py-4">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-yellow-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-xs font-bold tracking-[0.18em] text-amber-700 uppercase shadow-sm sm:text-sm">
            <MessageCircle size={15} />
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Questions?
            <span className="mt-1 block text-amber-500">
              We&apos;ve Got Answers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Everything you need to know about our repair services, process, and
            how to get your device back in working order.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-amber-300 bg-white shadow-lg shadow-amber-950/[0.05]"
                    : "border-slate-200 bg-white/70 hover:border-amber-200 hover:bg-white hover:shadow-md"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left sm:px-6 sm:py-6"
                >
                  <span className="flex min-w-0 items-center gap-4 sm:gap-5">
                    {/* Question Number */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold transition-all duration-300 ${
                        isOpen
                          ? "bg-amber-400 text-slate-950"
                          : "bg-slate-100 text-slate-500 group-hover:bg-amber-100 group-hover:text-amber-700"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question Text */}
                    <span
                      className={`text-sm leading-6 font-bold transition-colors duration-300 sm:text-base ${
                        isOpen
                          ? "text-slate-950"
                          : "text-slate-700 group-hover:text-slate-950"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </span>

                  {/* Toggle Icon */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-amber-400 text-slate-950"
                        : "bg-slate-100 text-slate-500 group-hover:bg-amber-100 group-hover:text-amber-700"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={18} strokeWidth={2.5} />
                    ) : (
                      <Plus size={18} strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                {/* Answer - White Background */}
                <div
                  id={answerId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`border-t border-amber-100 bg-white px-4 sm:px-6 ${
                        isOpen ? "py-5 opacity-100" : "py-0 opacity-0"
                      } transition-all duration-300`}
                    >
                      <div className="flex gap-4 pl-0 sm:pl-14">
                        {/* Answer Indicator */}
                        <span className="mt-1 h-6 w-1 shrink-0 rounded-full bg-amber-400" />

                        <p className="text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact CTA */}
        <div className="mt-12 text-center sm:mt-14">
          <p className="text-base font-semibold text-slate-800">
            Still have questions?
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Our team is here to help you find the right repair solution.
          </p>

          <Link
            href="/contact#contact-form"
            className="group mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20"
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
