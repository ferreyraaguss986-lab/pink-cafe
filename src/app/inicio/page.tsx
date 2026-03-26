import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import OpenStatus from "@/components/OpenStatus";

const Experiences = dynamic(() => import("@/components/Experiences"));
const CeramicSection = dynamic(() => import("@/components/CeramicSection"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));

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
