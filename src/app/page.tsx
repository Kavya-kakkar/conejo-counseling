import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroBlock from "@/components/IntroBlock";
import WhoWeHelp from "@/components/WhoWeHelp";
import Specialties from "@/components/Specialties";
import Expertise from "@/components/Expertise";
import HowWeWork from "@/components/HowWeWork";
import IntermediateBanner from "@/components/IntermediateBanner";
import OurOffice from "@/components/OurOffice";
import QuoteBanner from "@/components/QuoteBanner";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroBlock />
        <WhoWeHelp />
        <Specialties />
        <Expertise />
        <HowWeWork />
        <IntermediateBanner />
        <OurOffice />
        <QuoteBanner />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}