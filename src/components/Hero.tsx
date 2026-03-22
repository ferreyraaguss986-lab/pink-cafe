"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

interface HeroProps {
  centered?: boolean;
  title?: string;
  subtitle?: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface HeroProps {
  centered?: boolean;
  title?: string;
  subtitle?: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImg?: string;
  waveColor?: string;
}

export default function Hero({ 
  centered = false, 
  title = "Pink Café", 
  subtitle = "Café de especialidad, pastelería artesanal y experiencias creativas en el corazón de Güemes, Córdoba. 💓",
  image = "/IMG_4763.JPEG",
  ctaText = "Ver Carta",
  ctaLink = "#carta",
  backgroundImg,
  waveColor = "white"
}: HeroProps) {
  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center pt-20 overflow-hidden ${centered ? 'text-center' : ''}`}>
      {/* Background Image with Overlay */}
      {backgroundImg && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImg}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-pink-bg/40 backdrop-blur-[2px] z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40 z-10" />
          </div>
        </>
      )}

      {/* Background soft shapes - only if no backgroundImg */}
      {!backgroundImg && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 2 }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl -mr-64 -mt-32" 
          />
           {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-bg rounded-full blur-3xl opacity-50 z-0" />
      
      <div className="absolute top-20 left-10 opacity-10 motion-safe:animate-pulse" style={{ animationDuration: '4s' }}>
        <Coffee size={120} className="text-primary rotate-12" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 motion-safe:animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}>
        <Coffee size={100} className="text-secondary -rotate-12" />
      </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl -ml-48 -mb-32" 
          />
        </>
      )}

      <div className={`container mx-auto px-6 relative z-10 ${centered ? 'flex flex-col items-center' : 'grid md:grid-cols-2 gap-12 items-center'}`}>
        <motion.div
          initial={{ opacity: 0, y: centered ? 30 : 0, x: centered ? 0 : -50 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={centered ? "max-w-3xl" : ""}
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`flex items-center gap-2 font-medium tracking-wider mb-4 uppercase text-sm ${backgroundImg ? 'text-primary bg-white/80 px-4 py-1 rounded-full backdrop-blur-md shadow-sm' : 'text-primary'}`}
          >
            <Coffee size={18} className="text-primary/60" />
            Viví la experiencia Pink
          </motion.span>
          <h1 className={`${centered ? 'mb-10' : 'mb-6'} leading-tight ${backgroundImg ? 'drop-shadow-sm' : ''}`}>
            {title === "Pink Café" ? (
              <div className={`text-6xl md:text-9xl text-[#FFFDF0] font-bold drop-shadow-lg tracking-tight`}>
                𝗣𝗜𝗡𝗞 𝒞𝒶𝒻𝑒́
              </div>
            ) : (
              <span className="font-serif text-4xl md:text-6xl text-foreground block">{title}</span>
            )}
          </h1>
          <p className={`text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 font-medium ${centered ? 'mx-auto' : 'max-w-lg'} ${backgroundImg ? 'bg-white/30 backdrop-blur-sm p-4 rounded-2xl border border-white/20 max-w-2xl' : ''}`}>
            {subtitle}
          </p>
          <div className={`flex flex-wrap gap-4 ${centered ? 'justify-center' : ''}`}>
            <a
              href={ctaLink}
              className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold transition-all shadow-premium hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              {ctaText}
            </a>
            <a
              href="https://wa.me/3513539322"
              target="_blank"
              className="bg-white hover:bg-pink-bg text-primary border-2 border-primary/20 px-8 py-4 rounded-full font-semibold transition-all hover:border-primary/40 active:scale-95"
            >
              Reservar Mesa
            </a>
          </div>
        </motion.div>

        {!centered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-premium rotate-2 hover:rotate-0 transition-transform duration-700">
              <Image
                src={image}
                alt="Pink Café"
                width={600}
                height={700}
                className="w-full h-[500px] md:h-[600px] object-cover"
                priority
              />
            </div>
            {/* Decorative floating card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 md:-left-12 glass p-6 rounded-2xl shadow-soft max-w-[200px] z-20"
            >
              <p className="text-sm font-serif text-primary italic mb-1">Aesthetic Spot</p>
              <p className="text-xs text-foreground/60 leading-tight">El lugar más instagrameable de Córdoba para merendar.</p>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Improved Wave shape at the bottom */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[100px]"
          style={{ fill: waveColor === 'white' ? '#FFFFFF' : waveColor === 'pink-bg' ? '#FFF1F5' : waveColor }}
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-32.82C989.49,25,1113,0,1200,0V0H0Z" transform="rotate(180 600 60)"></path>
        </svg>
      </div>

      {/* Scroll indicator - only if no backgroundImg or centered */}
      {!centered && !backgroundImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-[10px] uppercase tracking-widest text-primary font-medium">Scroll para descubrir</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      )}
    </section>
  );
}
