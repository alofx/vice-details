import Navbar from "@/components/Navbar";
import StaticHero from "@/components/StaticHero";
import ScrollTransformation from "@/components/ScrollTransformation";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-vice-bg">
        <Navbar />
        <StaticHero />
        <ScrollTransformation />
        <Services />
        <HowItWorks />
        <Reviews />
        <CTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
