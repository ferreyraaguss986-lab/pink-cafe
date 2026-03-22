"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 right-6 z-[70]"
    >
      <a
        href="https://wa.me/3513539322"
        target="_blank"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
        <span className="absolute right-full mr-4 bg-white text-[#25D366] px-4 py-2 rounded-xl text-sm font-bold shadow-soft opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-[#25D366]/20">
          ¡Reservá tu mesa! 💓
        </span>
      </a>
    </motion.div>
  );
}
