"use client";

import { motion } from "framer-motion";
import { MapPin, Instagram, Clock, Phone, Map as MapIcon, ExternalLink } from "lucide-react";


export default function Location() {
  return (
    <section id="ubicacion" className="py-24 bg-pink-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Dónde Encontrarnos</span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
                Nuestro <span className="text-primary italic">Rincón Mágico</span> en Güemes
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed mb-10 font-medium">
                Estamos escondidos en una de las galerías más hermosas de Córdoba. Un refugio de paz y estética en medio de la ciudad. 💓
              </p>
            </div>

            <div className="grid gap-6">
              <div className="glass p-8 rounded-3xl flex items-start gap-6 border border-white/50">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-soft text-primary flex-shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1">Belgrano 867 Planta alta</h4>
                  <p className="text-foreground/50 font-medium italic mb-2">Galería "Tiempo Atrás", Güemes, Córdoba.</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Cómo llegar <MapIcon size={16} />
                  </a>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl flex items-start gap-6 border border-white/50">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-soft text-secondary flex-shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Horarios de Meriendas</h4>
                  <div className="space-y-1 text-foreground/50 font-medium text-sm">
                    <p>Miércoles a Domingos: 17:00 a 21:00 hs</p>
                    <p>Lunes y Martes: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-premium group"
          >
            {/* Map Placeholder with aesthetic overlay */}
            <div className="absolute inset-0 bg-pink-bg flex items-center justify-center">
              <div className="text-center p-12">
                <MapPin size={64} className="text-primary/20 mx-auto mb-6 animate-bounce" />
                <h4 className="text-2xl font-serif text-foreground/40 italic">Ubicación Estratégica</h4>
                <p className="text-sm text-foreground/30 mt-2 font-medium">Cerca de todo, lejos del ruido.</p>
              </div>
              {/* This would be an actual Google Map in a real project */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
            </div>
            
            <a
              href="https://maps.google.com"
              target="_blank"
              className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white text-primary px-8 py-4 rounded-full font-bold shadow-soft group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-translate-y-2 flex items-center gap-3"
            >
              Ver en Google Maps <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
