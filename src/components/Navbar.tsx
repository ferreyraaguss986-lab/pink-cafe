"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Inicio", href: "/inicio" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Carta", href: "/carta" },
  { name: "Ubicación", href: "/ubicacion" },
  { name: "Contacto", href: "/contacto" },
  { name: "Trabajo", href: "/trabajo" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-500 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/inicio" className="flex items-center gap-2 group">
          <span className={`hidden md:block text-3xl md:text-4xl font-bold transition-all duration-500 drop-shadow-sm ${scrolled ? 'text-primary' : 'text-[#FFFDF0]'}`}>
            𝗣𝗜𝗡𝗞 𝒞𝒶𝒻𝑒́
          </span>
          <div className="md:hidden flex items-center">
            <Image 
              src="/PinkCafelogo.png" 
              alt="Pink Café" 
              width={140} 
              height={40} 
              className={`w-auto h-10 transition-all duration-500 ${scrolled ? '' : 'brightness-0 invert'}`} 
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="https://wa.me/3513539322"
            target="_blank"
            className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
          >
            Reservar Mesa
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-primary/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://wa.me/3513539322"
                target="_blank"
                className="bg-primary text-white px-6 py-3 rounded-full font-medium text-center shadow-md active:scale-95 transition-all"
              >
                Reservar Mesa
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
