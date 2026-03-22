"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";

export default function FloatingReservationButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          className="fixed bottom-24 right-8 z-[60]"
        >
          <a
            href="https://www.instagram.com/pinkcafe.cba/"
            target="_blank"
            className="flex items-center gap-3 bg-primary hover:bg-secondary text-white px-6 py-4 rounded-full font-bold shadow-2xl transition-all transform hover:-translate-y-2 active:scale-95 group overflow-hidden"
          >
            <div className="relative z-10 flex items-center gap-3">
              <Instagram size={22} className="group-hover:rotate-12 transition-transform" />
              <span>Conocé mas sobre Pink Café</span>
            </div>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
