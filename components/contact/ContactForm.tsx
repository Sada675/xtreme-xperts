"use client";

import { useState, type FormEvent } from "react";
import { Send, MessageSquare, Clock, ShieldCheck } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setLoading(true);
    setSubmitted(false);
    setErrorMessage("");

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send your message.");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact-form"
      className="bg-background scroll-mt-28 px-4 py-14 sm:px-6 sm:py-20 lg:scroll-mt-32 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            CONTACT OUR TEAM
          </span>

          <h2 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-[#251039] sm:text-4xl lg:text-5xl">
            Tell Us How
            <span className="text-glow-amber block bg-clip-text">
              We Can Help
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
            Having trouble with your device? Whether it needs a quick fix or
            expert attention, tell us what is going on and our team will help
            you find the right repair solution.
          </p>

          {/* Support Features */}
          <div className="mt-9 space-y-7">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <MessageSquare size={21} />
              </div>

              <div>
                <h3 className="font-bold text-[#251039]">
                  Clear Communication
                </h3>
                <p className="mt-1 max-w-sm text-sm leading-6 text-gray-600">
                  Share your concerns with us and get straightforward
                  information about your repair.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Clock size={21} />
              </div>

              <div>
                <h3 className="font-bold text-[#251039]">Helpful Support</h3>
                <p className="mt-1 max-w-sm text-sm leading-6 text-gray-600">
                  Our friendly team is ready to help you with your technology
                  repair questions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <ShieldCheck size={21} />
              </div>

              <div>
                <h3 className="font-bold text-[#251039]">
                  Customer-Focused Service
                </h3>
                <p className="mt-1 max-w-sm text-sm leading-6 text-gray-600">
                  We focus on understanding your needs and finding suitable
                  solutions for your device.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-xl shadow-gray-900/5 sm:rounded-3xl sm:p-8 lg:p-10">
          {/* Top Gradient */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400" />

          {/* Form Heading */}
          <div className="mb-8">
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">
              GET IN TOUCH
            </span>

            <h3 className="mt-2 text-2xl font-extrabold text-[#251039] sm:text-3xl">
              Send Us a Message
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Fill in your details below and tell us how we can assist you.
            </p>
          </div>

          {/* Success Message */}
          {submitted && (
            <div
              role="status"
              className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm leading-6 font-medium text-green-800"
            >
              Thank you for reaching out! Your enquiry has been sent
              successfully. Our team will get back to you soon.
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div
              role="alert"
              className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 font-medium text-red-700"
            >
              {errorMessage}
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name & Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full Name <span className="text-amber-600">*</span>
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  maxLength={100}
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 transition outline-none placeholder:text-gray-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address <span className="text-amber-600">*</span>
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  maxLength={254}
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 transition outline-none placeholder:text-gray-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                />
              </div>
            </div>

            {/* Phone & Device */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Phone Number
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  maxLength={30}
                  autoComplete="tel"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 transition outline-none placeholder:text-gray-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-device"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Device Type <span className="text-amber-600">*</span>
                </label>

                <select
                  id="contact-device"
                  name="device"
                  defaultValue=""
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 transition outline-none focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                >
                  <option value="" disabled>
                    Select your device
                  </option>
                  <option value="mobile">Mobile Phone</option>
                  <option value="laptop">Laptop</option>
                  <option value="tablet">Tablet</option>
                  <option value="gaming-console">Gaming Console</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Subject <span className="text-amber-600">*</span>
              </label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What do you need help with?"
                maxLength={150}
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 transition outline-none placeholder:text-gray-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Your Message <span className="text-amber-600">*</span>
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                maxLength={5000}
                placeholder="Tell us a little about the issue with your device..."
                required
                className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 transition outline-none placeholder:text-gray-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 px-6 py-3.5 text-sm font-bold text-[#171717] shadow-lg shadow-amber-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-400/30 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {loading ? "Sending Message..." : "Send Message"}

              {!loading && (
                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </button>

            <p className="text-xs leading-5 text-gray-400">
              * Required fields. Your information will only be used to respond
              to your enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
