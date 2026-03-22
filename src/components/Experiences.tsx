"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Café de Especialidad",
    description: "Granos seleccionados y tostados a la perfección para un sabor inigualable.",
    image: "/IMG_4817.JPEG",
  },
  {
    title: "Pastelería Artesanal",
    description: "Recetas propias, ingredientes premium y todo el amor en cada porción.",
    image: "/IMG_4763.JPEG",
  },
  {
    title: "Meriendas Premium",
    description: "Propuestas completas para compartir y disfrutar de una tarde especial.",
    image: "/IMG_2700.JPEG",
  },
  {
    title: "Experiencia Art & Coffee",
    description: "Pintá cerámica mientras disfrutás de lo que más te gusta. Creatividad y relax.",
    image: "/IMG_2743.JPEG",
  },
];

export default function Experiences() {
  return (
    <section id="experiencias" className="py-24 bg-pink-bg relative overflow-hidden">


      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-4"
          >
            Nuestras <span className="text-primary italic">Experiencias</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 leading-relaxed"
          >
            Cada rincón de Pink Café está diseñado para que vivas momentos inolvidables. Desde la primera gota de café hasta el último trazo en tu cerámica.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-pink-bg rounded-[2rem] p-4 h-full transition-all duration-500 hover:shadow-premium hover:-translate-y-2 group-hover:bg-white overflow-hidden border border-primary/5">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-soft">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white font-medium bg-primary/80 px-4 py-2 rounded-full backdrop-blur-sm">Descubrir</span>
                  </div>
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3 text-center group-hover:text-primary transition-colors">{exp.title}</h3>
                <p className="text-sm text-foreground/60 text-center leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
