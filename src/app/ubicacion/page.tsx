import Hero from "@/components/Hero";
import Location from "@/components/Location";

export default function UbicacionPage() {
  return (
    <main>
      <Hero 
        title="Donde Estamos" 
        subtitle="Te esperamos en el corazón de Güemes, Córdoba, para vivir la experiencia Pink. 📍"
        backgroundImg="/IMG_2496.JPEG"
        waveColor="pink-bg"
      />
      <Location />
    </main>
  );
}
