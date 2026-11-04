import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurMissionVision from "@/components/about/OurMissionVision";
import OurValues from "@/components/about/OurValues";
import OurJourney from "@/components/about/OurJourney";
import ContactCTA from "@/components/home/ContactCTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <AboutHero />
        <WhoWeAre />
        <OurMissionVision />
        <OurValues />
        <OurJourney />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
