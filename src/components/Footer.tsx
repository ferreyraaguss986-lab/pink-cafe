"use client";

import { motion } from "framer-motion";
import { Instagram, Smartphone, MessageCircle, Heart, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-white pt-32 pb-12 relative overflow-hidden">
      {/* Wave shape at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-pink-bg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative gradient background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-pink-bg to-transparent opacity-50 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-serif text-primary mb-6 italic">Pink Café</h3>
            <p className="text-foreground/60 leading-relaxed mb-8 font-medium">
              Donde la pastelería artesanal y la creatividad se encuentran para crear momentos inolvidables. 💓
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pinkcafe.cba/"
                target="_blank"
                className="w-12 h-12 bg-pink-bg rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-soft"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.me/3513539322"
                target="_blank"
                className="w-12 h-12 bg-pink-bg rounded-2xl flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1 shadow-soft"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@pinkcafe.cba"
                target="_blank"
                className="w-12 h-12 bg-pink-bg rounded-2xl flex items-center justify-center text-foreground/60 hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 shadow-soft"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-widest text-sm">Explorá</h4>
            <ul className="space-y-4 text-foreground/50 font-medium">
              <li><Link href="/inicio" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link href="/nosotros" className="hover:text-primary transition-colors">Nosotros</Link></li>
              <li><Link href="/carta" className="hover:text-primary transition-colors">Carta</Link></li>
              <li><Link href="/ubicacion" className="hover:text-primary transition-colors">Ubicación</Link></li>
              <li><Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-widest text-sm">Contacto</h4>
            <ul className="space-y-4 text-foreground/50 font-medium">
              <li className="flex items-center gap-3">
                <Smartphone size={18} className="text-primary/40" />
                <a href="tel:+543513539322">+54 351 353 9322</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-primary/40" />
                <span>Belgrano 867 Planta alta, Córdoba</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-widest text-sm">Nuestras Redes</h4>
            <div className="p-6 glass rounded-3xl border border-primary/10">
              <p className="text-xs text-foreground/40 font-bold mb-4 uppercase tracking-tighter">Seguinos para promos 💓</p>
              <a
                href="https://www.instagram.com/pinkcafe.cba/"
                target="_blank"
                className="group flex items-center gap-4 py-3 border-b border-primary/5 hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-tr from-primary via-secondary to-accent rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="font-bold text-foreground group-hover:text-primary transition-colors">@pinkcafe.cba</p>
                  <p className="text-[10px] text-foreground/40">Comunidad Aesthetic</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/30 text-sm font-medium">
            &copy; {currentYear} Pink Café. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-foreground/30 text-sm font-medium">
            Hecho con <Heart size={14} className="text-primary fill-primary" /> en Córdoba.
          </div>
        </div>
      </div>
    </footer>
  );
}
