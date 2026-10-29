import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import CustomerReviews from "@/components/home/CustomerReviews";
import FAQ from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
return (
<> <Navbar />

  <main>
    <Hero />
    <TrustBar />
    <WhyChooseUs />
    <Services />
    <Process />
    <CustomerReviews />
    <FAQ />
    <ContactCTA />
  </main>

  <Footer />
</>

);
}
