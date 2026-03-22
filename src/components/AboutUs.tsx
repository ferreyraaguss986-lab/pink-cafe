"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, Cake, Heart, Users } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-24 bg-pink-bg overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 order-2 lg:order-1"
          >
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Nuestra Historia</span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
                Pasión por el Café y <span className="text-primary italic">Momentos Reales</span>
              </h2>
              <div className="space-y-6 text-foreground/70 leading-relaxed text-lg">
                <p>
                  Pink Café nació de un sueño: crear un espacio donde la estética, la calidez y el sabor se encuentren en perfecta armonía. Somos un emprendimiento liderado por mujeres apasionadas por la pastelería y el café de especialidad.
                </p>
                <p>
                  Nuestro local en el corazón de Güemes es más que una cafetería; es un refugio creativo, un espacio inclusivo y amigable donde cada visitante puede sentirse libre de ser y crear.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-bg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Inclusivo</h4>
                  <p className="text-sm text-foreground/60 leading-snug">Espacio amigable con LGBTQ+ y Pets.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-bg flex items-center justify-center flex-shrink-0">
                  <Users className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Women Led</h4>
                  <p className="text-sm text-foreground/60 leading-snug">Pasión y liderazgo femenino local.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-premium aspect-[4/5]">
              <Image
                src="/IMG_5025.JPEG"
                alt="Pink Café Team & Story"
                fill
                className="object-cover"
              />
            </div>
            {/* Soft decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-primary/10 rounded-full blur-3xl z-0" />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -right-10 w-40 h-40 hidden md:block"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-primary/10">
                <path d="M50 0 A50 50 0 1 1 50 100 A50 50 0 1 1 50 0" />
                <text className="font-serif text-[10px] uppercase tracking-widest font-bold fill-primary/40">
                  <textPath href="#circlePath">HECHO CON AMOR • PINK CAFE • </textPath>
                </text>
                <defs>
                  <path id="circlePath" d="M50 10 A40 40 0 1 1 50 90 A40 40 0 1 1 50 10" />
                </defs>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
