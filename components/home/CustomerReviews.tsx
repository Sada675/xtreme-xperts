import { Star, Quote } from "lucide-react";

const reviews = [
{
name: "Oliver Thompson",
initials: "OT",
service: "Phone Repair",
review:
"Add a genuine customer review here describing their experience with the phone repair service.",
},
{
name: "Charlotte Williams",
initials: "CW",
service: "Laptop Repair",
review:
"Add a genuine customer review here about the service quality and their overall experience.",
},
{
name: "Harry Wilson",
initials: "HW",
service: "Device Repair",
review:
"Add a genuine customer review here highlighting what the customer appreciated about the service.",
},
];

export default function CustomerReviews() {
return ( <section className="relative overflow-hidden bg-[#fafaf8] px-5 py-10 sm:px-8 lg:px-16 lg:py-14"> <div className="mx-auto max-w-7xl">
{/* Section Heading */} <div className="mx-auto mb-14 max-w-3xl text-center"> <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 shadow-sm"> <Star size={15} className="text-amber-500" />

        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-700 sm:text-xs">
          Customer Reviews
        </span>
      </div>

      <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        What Our{" "}
        <span className="text-amber-500">Customers Say</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        We believe every repair deserves care and attention.
        Discover what makes a great customer experience.
      </p>
    </div>

    {/* Review Cards */}
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((item) => (
        <article
          key={item.initials}
          className="group relative rounded-2xl border border-amber-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/60 sm:p-8"
        >
          {/* Top Row */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-white">
              <Quote size={24} />
            </div>

            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800">
              {item.service}
            </span>
          </div>

          {/* Star Rating */}
          <div
            className="mb-4 flex gap-1 text-amber-400"
            aria-label="Sample five-star rating"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={18}
                fill="currentColor"
                strokeWidth={1.5}
              />
            ))}
          </div>

          {/* Review Text */}
          <p className="min-h-28 text-sm leading-7 text-slate-600 sm:text-base">
            {item.review}
          </p>

          {/* Customer Information */}
          <div className="mt-7 flex items-center gap-3 border-t border-amber-100 pt-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-200 bg-amber-100 font-bold text-amber-800 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-white">
              {item.initials}
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                {item.name}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Customer
              </p>
            </div>

            <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-500">
              <Star size={15} fill="currentColor" />
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-7 right-7 h-1 origin-left scale-x-0 rounded-full bg-amber-400 transition-transform duration-300 group-hover:scale-x-100" />
        </article>
      ))}
    </div>

    {/* Bottom Message */}
    <div className="mt-12 text-center">
      <p className="text-sm text-slate-600 sm:text-base">
        Your feedback helps us improve our service.
      </p>
    </div>
  </div>
</section>


);
}
