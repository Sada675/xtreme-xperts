import {
ShieldCheck,
MessageCircle,
Smartphone,
Wrench,
} from "lucide-react";

const features = [
{
title: "Device-Focused Care",
description: "Solutions for different devices",
icon: Smartphone,
},
{
title: "Professional Support",
description: "Help with your repair needs",
icon: MessageCircle,
},
{
title: "Quality-Conscious",
description: "Attention to repair quality",
icon: ShieldCheck,
},
{
title: "Repair Expertise",
description: "Support for technical issues",
icon: Wrench,
},
];

export default function TrustBar() {
return ( <section className="border-b border-slate-100 bg-white"> <div className="container-custom grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:gap-5 md:py-10">
{features.map((feature) => {
const Icon = feature.icon;

      return (
        <div key={feature.title} className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Icon size={21} strokeWidth={1.8} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900">
              {feature.title}
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              {feature.description}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</section>

);
}
