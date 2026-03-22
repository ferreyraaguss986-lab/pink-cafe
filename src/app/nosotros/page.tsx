import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";

export default function NosotrosPage() {
  return (
    <main>
      <Hero 
        title="Nuestra Historia" 
        subtitle="Conocé el corazón de Pink Café, un espacio diseñado para inspirar y crear momentos mágicos. ✨"
        backgroundImg="/IMG_5025.JPEG"
        waveColor="pink-bg"
      />
      <AboutUs />
      <FAQ />
    </main>
  );
}
