"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/IMG_2462.JPEG", alt: "Nuestra Casa", size: "large" },
  { src: "/IMG_4828.JPEG", alt: "Pastelería Artesanal", size: "medium" },
  { src: "/IMG_5041.JPEG", alt: "Aesthetic Vibes", size: "medium" },
  { src: "/IMG_2468.JPEG", alt: "Specialty Coffee", size: "small" },
  { src: "/IMG_2485.JPEG", alt: "Arte en Proceso", size: "small" },
  { src: "/IMG_2488.JPEG", alt: "Rincón Cozy", size: "small" },
  { src: "/IMG_2500.JPEG", alt: "Detalles que Enamoran", size: "small" },
  { src: "/IMG_2700.JPEG", alt: "Inspiración", size: "large" },
  { src: "/IMG_2496.JPEG", alt: "Brunch Real", size: "medium" },
  { src: "/IMG_2501.JPEG", alt: "Pink Experience", size: "medium" },
  { src: "/IMG_2502.JPEG", alt: "Sweet Moments", size: "small" },
  { src: "/IMG_2701.JPEG", alt: "Comunidad Pink", size: "small" },
  { src: "/IMG_2711.JPEG", alt: "Sabor Unico", size: "small" },
  { src: "/IMG_2712.JPEG", alt: "Vibra Pink", size: "small" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 px-4">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-4"
          >
            Vibra <span className="text-primary italic">Pink</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60"
          >
            Capturamos momentos que inspiran.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 0.98 }}
              className={`relative rounded-3xl overflow-hidden shadow-soft group ${
                image.size === "large" ? "md:col-span-2 md:row-span-2" : 
                image.size === "medium" ? "md:row-span-2" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white font-serif italic text-lg">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
