import Navbar from "@/components/Navbar";
import StaticHero from "@/components/StaticHero";
import ScrollTransformation from "@/components/ScrollTransformation";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import GrainOverlay from "@/components/GrainOverlay";
import AmbientGlow from "@/components/AmbientGlow";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-vice-bg">
        <AmbientGlow />
        <GrainOverlay />
        <Navbar />
        <StaticHero />
        <StatsBar />
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
