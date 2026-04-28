import Navbar from "@/components/Navbar";
import ScrollHero from "@/components/ScrollHero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-vice-bg">
      <Navbar />
      <ScrollHero />
      <Services />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
