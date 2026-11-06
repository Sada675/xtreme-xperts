import { notFound } from "next/navigation";

import { servicesData } from "@/app/data/services";

import ServiceHero from "./components/ServiceHero";
import RepairPricing from "./components/RepairPricing";
import WhyChooseUs from "./components/WhyChooseUs";
import ServiceFAQ from "./components/ServiceFAQ";
import ServiceCTA from "./components/ServiceCTA";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;

  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-background overflow-hidden">
      <ServiceHero service={service} />

      <RepairPricing service={service} />

      <WhyChooseUs service={service} />

      <ServiceFAQ service={service} />

      <ServiceCTA />
    </main>
  );
}
