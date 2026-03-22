import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat, Sacramento } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["800", "900"],
});

const sacramento = Sacramento({
  variable: "--font-sacramento",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Pink Café | Café & Experiencias en Córdoba",
  description: "Disfrutá del mejor café de especialidad, pastelería artesanal y la experiencia Art & Coffee en el corazón de Güemes, Córdoba.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import FloatingReservationButton from "@/components/FloatingReservationButton";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${montserrat.variable} ${sacramento.variable}`}>
      <body className="antialiased min-h-screen bg-pink-bg selection:bg-primary/20 relative cursor-none">
        <CustomCursor />
        <Navbar />
        <FloatingIcons />
        {children}
        <Footer />
        <FloatingReservationButton />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

