"use client";

import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";

const reviews = [
  {
    name: "Sofía",
    text: "Todo es hermoso y muy rico 💓. La atención es de diez.",
    rating: 5,
  },
  {
    name: "Julieta",
    text: "Las tortas son exquisitas, me hicieron llorar de lo ricas. El ambiente es único.",
    rating: 5,
  },
  {
    name: "Martín",
    text: "Muy buen café, la atención cálida y las cosas dulces riquísimas.",
    rating: 5,
  },
  {
    name: "Lucía",
    text: "Pasamos una hermosa tarde con la experiencia Art & Coffee. Súper relajante.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-pink-bg overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-foreground mb-4"
            >
              Lo que dicen <span className="text-primary italic">Nuestros Clientes</span>
            </motion.h2>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="font-bold text-foreground">4.3</span>
              <span className="text-foreground/40 text-sm">(1112 reseñas en Google)</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex -space-x-4 pr-12"
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-14 h-14 rounded-full border-4 border-white overflow-hidden bg-accent/20">
                <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] shadow-soft border border-primary/5 flex flex-col justify-between"
            >
              <div>
                <MessageCircle className="text-primary/20 mb-6" size={32} />
                <p className="text-foreground/80 italic leading-relaxed mb-6 font-medium">"{review.text}"</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="font-serif font-bold text-primary">{review.name}</span>
                <div className="flex text-primary">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
