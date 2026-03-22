import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import CeramicSection from "@/components/CeramicSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import OpenStatus from "@/components/OpenStatus";

export default function InicioPage() {
  return (
    <main>
      <div className="absolute top-28 left-1/2 -translate-x-1/2 z-30">
        <OpenStatus />
      </div>
      <Hero centered={true} backgroundImg="/IMG_4770.JPEG" waveColor="pink-bg" />
      <Experiences />
      <CeramicSection />
      <Gallery />
      <Testimonials />
    </main>
  );
}
