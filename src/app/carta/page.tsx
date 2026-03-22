import Hero from "@/components/Hero";
import Menu from "@/components/Menu";

export default function CartaPage() {
  return (
    <main>
      <Hero 
        title="Nuestra Carta" 
        subtitle="Sabores artesanales, café de especialidad y delicias pensadas para cada momento del día. 🥐"
        backgroundImg="/IMG_4763.JPEG"
        waveColor="pink-bg"
      />
      <Menu />
    </main>
  );
}
