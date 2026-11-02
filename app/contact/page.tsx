import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <ContactHero />

        <ContactInfo />

        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
