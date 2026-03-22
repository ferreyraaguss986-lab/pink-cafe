"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Palette, Heart, Users } from "lucide-react";

const features = [
  {
    icon: <Palette className="text-primary" />,
    title: "Art & Coffee",
    description: "Pintá tu propia pieza de cerámica mientras disfrutás de una merienda increíble.",
  },
  {
    icon: <Users className="text-secondary" />,
    title: "Ideal para compartir",
    description: "Un plan perfecto para venir con amigas, tu pareja o celebrar momentos especiales.",
  },
  {
    icon: <Heart className="text-accent" />,
    title: "Relax Creativo",
    description: "Desconectá del mundo y conectá con tu creatividad en un ambiente cálido.",
  },
];

export default function CeramicSection() {
  return (
    <section id="ceramica" className="py-24 bg-pink-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-premium aspect-square md:aspect-video lg:aspect-square relative">
              <Image
                src="/art.png"
                alt="Ceramic Painting Experience"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating decoration */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-8 -right-8 glass p-6 rounded-3xl shadow-soft hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Palette className="text-primary size-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Creatividad</p>
                  <p className="text-xs text-foreground/60 leading-none">Sin límites</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Nuestra Experiencia Estrella</span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
                Pintá tus <span className="text-primary italic">Sueños</span> con Cerámica
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                En Pink Café no solo venís a merendar, venís a crear. Nuestra experiencia Art & Coffee te permite elegir una pieza de cerámica y pintarla a tu gusto mientras disfrutás de nuestro menú premium.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-6 glass rounded-2xl border border-white/40 hover:shadow-soft transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4"
            >
              <a
                href="https://wa.me/3513539322"
                target="_blank"
                className="inline-block bg-primary hover:bg-secondary text-white px-10 py-4 rounded-full font-bold transition-all shadow-premium hover:shadow-2xl active:scale-95"
              >
                Reservar Mi Lugar
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
