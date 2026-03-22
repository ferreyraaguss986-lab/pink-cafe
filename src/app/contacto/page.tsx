import Hero from "@/components/Hero";

export default function ContactoPage() {
  return (
    <main>
      <Hero 
        title="Contacto" 
        subtitle="¿Tenés alguna duda o querés reservar para un evento? Escribinos y te responderemos a la brevedad. 💌"
        backgroundImg="/IMG_4817.JPEG"
        ctaText="Enviar WhatsApp"
        ctaLink="https://wa.me/3513539322"
        waveColor="pink-bg"
      />
      <section className="py-24 bg-pink-bg relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8">¡Hablemos!</h2>
            <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto font-medium">
              Estamos en Belgrano 867, Córdoba. Pasá a visitarnos o contactanos por cualquiera de nuestros canales.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a 
                  href="https://www.instagram.com/pinkcafe.cba/" 
                  target="_blank"
                  className="bg-primary hover:bg-secondary text-white px-12 py-6 rounded-full font-bold text-xl transition-all shadow-premium active:scale-95"
              >
                  Instagram @pinkcafe.cba
              </a>
              <a 
                  href="https://wa.me/3513539322" 
                  target="_blank"
                  className="bg-white border-2 border-primary/20 text-primary hover:border-primary/40 px-12 py-6 rounded-full font-bold text-xl transition-all active:scale-95"
              >
                  WhatsApp
              </a>
            </div>
        </div>
      </section>
    </main>
  );
}
