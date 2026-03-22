"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Coffee } from "lucide-react";

const faqs = [
  {
    question: "¿Cuáles son sus horarios de atención?",
    answer: "Estamos abiertos de miércoles a domingos de 17:00 a 21:00 hs. ¡Te esperamos para merendar y crear! 💓",
  },
  {
    question: "¿Toman reservas para merendar?",
    answer: "¡Sí! Podés reservar tu mesa a través de nuestro Instagram @pinkcafe.cba o haciendo clic en el botón de reserva de la web. Recomendamos reservar especialmente los fines de semana.",
  },
  {
    question: "¿El local es Pet Friendly?",
    answer: "¡Absolutamente! Amamos a los animales y tu mascota es más que bienvenida en nuestro rincón rosa.",
  },
  {
    question: "¿Tienen opciones sin TACC o veganas?",
    answer: "Sí, contamos con una selección de pastelería artesanal sin TACC y opciones veganas. Consultá con nuestro equipo al llegar para conocer las opciones del día.",
  },
  {
    question: "¿En qué consiste la experiencia de pintar cerámica?",
    answer: "Es nuestra actividad estrella. Podés elegir una pieza de cerámica, nosotros te damos los materiales y mientras pintás, disfrutás de una merienda premium. ¡Es ideal para desconectar y crear!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-pink-bg/30 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-4">
            <Coffee className="text-primary" size={18} />
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Preguntas Frecuentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Todo lo que querés <span className="text-primary italic">saber</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-soft border border-primary/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left transition-colors hover:bg-pink-bg/10"
              >
                <span className="text-lg md:text-xl font-bold text-foreground pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary flex-shrink-0"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-foreground/70 leading-relaxed text-lg border-t border-pink-bg/20 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background icons */}
      <div className="absolute top-10 right-10 opacity-5 -rotate-12">
        <Coffee size={200} className="text-primary" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-5 rotate-12">
        <Coffee size={150} className="text-primary" />
      </div>
    </section>
  );
}
