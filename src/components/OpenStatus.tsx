"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function OpenStatus() {
  const [status, setStatus] = useState<{ isOpen: boolean; message: string }>({
    isOpen: false,
    message: "",
  });

  useEffect(() => {
    const checkStatus = () => {
      // Get current time in Argentina (UTC-3)
      const now = new Date();
      const argTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" }));
      
      const day = argTime.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
      const hours = argTime.getHours();
      
      // Schedule: Wednesday (3) to Sunday (0) from 17:00 to 21:00
      const isWorkDay = day === 0 || (day >= 3 && day <= 6);
      const isOpenHour = hours >= 17 && hours < 21;
      
      const isOpen = isWorkDay && isOpenHour;
      
      let message = "";
      if (isOpen) {
        message = "ABIERTO AHORA 💓";
      } else {
        // Find when it opens next
        if (day === 1 || day === 2) {
          message = "Abrimos el miércoles a las 17hs";
        } else if (isWorkDay && hours < 17) {
          message = "Abrimos hoy a las 17hs";
        } else if (day === 0 && hours >= 21) {
          message = "Abrimos el miércoles a las 17hs";
        } else {
          // It's a work day but after 21hs
          message = "Abrimos mañana a las 17hs";
        }
      }
      
      setStatus({ isOpen, message });
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-2 px-6 py-2 rounded-full font-bold shadow-soft backdrop-blur-md border ${
        status.isOpen 
          ? "bg-white/80 text-primary border-primary/20" 
          : "bg-gray-100/80 text-foreground/50 border-gray-200"
      }`}
    >
      {status.isOpen && (
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-2 h-2 rounded-full bg-primary"
        />
      )}
      {!status.isOpen && <Clock size={16} />}
      <span className="text-sm tracking-wide uppercase">
        {status.message}
      </span>
    </motion.div>
  );
}
