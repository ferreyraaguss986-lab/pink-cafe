"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Coffee,
  Cake,
  UtensilsCrossed,
  GlassWater,
  Star,
  Leaf,
  Soup,
  Heart,
  Sparkles,
  PawPrint,
  Beer,
} from "lucide-react";

// ─── IMAGE BASE PATH ─────────────────────────────────────────────────────────

const P = "/IMAGENES%20DE%20MENU%20PINKCAFE";

// ─── DATA ────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "especiales",
    label: "Especiales de la Semana",
    icon: Star,
    color: "from-pink-400 to-rose-400",
    items: [
      { name: "Cafe + 2 Medialunas de Manteca", description: "Café a elección + 2 medialunas", price: 10000, tag: "Especial", image: `${P}/%24image.png` },
    ],
  },
  {
    id: "cafeteria",
    label: "Cafetería",
    icon: Coffee,
    color: "from-rose-300 to-pink-400",
    items: [
      { name: "Cafe Coquette", description: "Café con leche rosa, glitter, pétalos, Nutella y perlas", price: 7500, tag: "Signature", image: `${P}/dot-image.png` },
      { name: "Ice Coffee Pink", description: "Café, leche rosa, frambuesa, Nutella", price: 7500, tag: "Pink", image: `${P}/dot-image%20(1).png` },
      { name: "Cafe con Leche Pink", description: "Café con leche rosa y glitter", price: 6800, image: `${P}/dot-image%20(2).png` },
      { name: "Lagrima Pink en Taza", description: "Leche rosa con toque de café", price: 6800, image: `${P}/dot-image%20(3).png` },
      { name: "Submarino Pink", description: "Leche rosa + chocolate blanco Águila", price: 7000, image: `${P}/dot-image%20(4).png` },
      { name: "Submarino Black", description: "Leche + chocolate Águila semiamargo", price: 7000, image: `${P}/dot-image%20(5).png` },
      { name: "Frapuccino de Pistachos", description: "Café, leche, pistacho, Nutella de pistacho", price: 7200, tag: "Favorito", image: `${P}/dot-image%20(6).png` },
      { name: "Latte Lemon Pie", description: "Café, leche y pasta lemon pie", price: 7000, image: `${P}/dot-image%20(7).png` },
      { name: "Capuchino de Avellanas", description: "Café, leche, avellanas, salsa", price: 7000, image: `${P}/dot-image%20(8).png` },
      { name: "Capuchino de Toffe Caramel", description: "Café, leche, caramelo", price: 7000, image: `${P}/dot-image%20(9).png` },
      { name: "Capuchino de Vainilla", description: "Café, leche, vainilla", price: 7000, image: `${P}/dot-image%20(10).png` },
      { name: "Ice Coffee Tonic", description: "Café + tónica + naranja", price: 7000, image: `${P}/dot-image%20(11).png` },
      { name: "Ice Latte Coffee", description: "Café + leche fría", price: 7000, image: `${P}/dot-image%20(12).png` },
      { name: "Cafe con Leche", description: "Mitad café, mitad leche", price: 6000, image: `${P}/dot-image%20(13).png` },
      { name: "Lagrima en Taza", description: "Más leche que café", price: 6000, image: `${P}/dot-image%20(14).png` },
      { name: "Cafe Doble", description: "Doble espresso", price: 5000, image: `${P}/dot-image%20(15).png` },
      { name: "Cortado en Taza", description: "Café con poca leche", price: 5000, image: `${P}/dot-image%20(16).png` },
    ],
  },
  {
    id: "infusiones",
    label: "Infusiones",
    icon: Leaf,
    color: "from-emerald-300 to-teal-400",
    items: [
      { name: "Te Negro English Breakfast", description: "Té importado", price: 5000, tag: "Importado", image: `${P}/dot-image%20(17).png` },
      { name: "Vainilla Sky", description: "Té verde/blanco con vainilla y frutas", price: 5000, tag: "Importado", image: `${P}/dot-image%20(18).png` },
      { name: "Chai on Fire", description: "Chai especiado picante", price: 5000, tag: "Importado", image: `${P}/dot-image%20(19).png` },
    ],
  },
  {
    id: "tortas",
    label: "Tartas y Tortas",
    icon: Cake,
    color: "from-fuchsia-300 to-pink-400",
    items: [
      { name: "Rainbow Pride Cake", description: "Bizcochuelo arcoiris + ganache", price: 13500, tag: "Especial", image: `${P}/dot-image%20(20).png` },
      { name: "Cheesecake (Frutos rojos / Maracuyá)", description: "Cheesecake NY", price: 13000, image: `${P}/dot-image%20(21).png` },
      { name: "Matilda", description: "Torta chocolate + dulce de leche", price: 13000, tag: "Favorita", image: `${P}/dot-image%20(22).png` },
      { name: "Pink Velvet", description: "Red velvet versión rosa", price: 13000, tag: "Signature", image: `${P}/dot-image%20(23).png` },
      { name: "Torta de la Pasión", description: "Chocolate + maracuyá", price: 10000, tag: "Sin TACC", image: `${P}/dot-image%20(24).png` },
      { name: "Key Lime Pie", description: "Tarta de lima", price: 11000, image: `${P}/image.png` },
      { name: "Mini Cake Banana Granizada y Marroc", description: "Banana + chocolate + maní", price: 15000, tag: "Premium", image: `${P}/image%20(1).png` },
      { name: "Mini Cake Pink", description: "Limón + frutilla", price: 15000, tag: "Signature", image: `${P}/image%20(2).png` },
      { name: "Torta Cookie Mani, Pistachos y Frambuesa", description: "Cookie + cremas", price: 13500, image: `${P}/image%20(3).png` },
      { name: "Cheesecake Vasco Dubai de Pistachos", description: "Cheesecake con pistacho", price: 13500, tag: "Estrella", image: `${P}/image%20(4).png` },
      { name: "Rogel Primaveral", description: "Capas con dulce de leche", price: 9500, image: `${P}/image%20(5).png` },
    ],
  },
  {
    id: "varietes",
    label: "Varietés",
    icon: Sparkles,
    color: "from-pink-300 to-fuchsia-400",
    items: [
      { name: "Cookie Nutella y Praline de Avellanas", description: "", price: 7500, image: `${P}/image%20(6).png` },
      { name: "Cookie Red Velvet", description: "", price: 7500, image: `${P}/image%20(7).png` },
      { name: "Budin Carrot Cake Pink", description: "", price: 7800, image: `${P}/image%20(8).png` },
      { name: "Budín Limón y Arándanos Amapola", description: "", price: 7800, image: `${P}/image%20(9).png` },
      { name: "Budín Chocolatoso", description: "", price: 7800, tag: "Vegano", image: `${P}/image%20(10).png` },
      { name: "Budín Naranja y Frutos del Bosque", description: "", price: 7800, image: `${P}/image%20(11).png` },
      { name: "Alfajor Choco Cafe y Toffee", description: "", price: 8500, tag: "Sin TACC", image: `${P}/image%20(12).png` },
    ],
  },
  {
    id: "salados",
    label: "Salados",
    icon: UtensilsCrossed,
    color: "from-amber-300 to-orange-400",
    items: [
      { name: "Tostado de Jamon y Queso", description: "", price: 14000, image: `${P}/image%20(13).png` },
      { name: "Toston Mediterraneo", description: "", price: 13700, image: `${P}/image%20(14).png` },
      { name: "Toston de Girgolas", description: "", price: 12500, tag: "Vegano", image: `${P}/image%20(15).png` },
      { name: "Sandwich de Chipa Prensado", description: "", price: 14000, tag: "Sin TACC", image: `${P}/image%20(16).png` },
      { name: "Chipa Casero", description: "", price: 4500, image: `${P}/image%20(17).png` },
      { name: "Sandwich de Focaccia", description: "", price: 15000, image: `${P}/image%20(18).png` },
      { name: "Sandwich de Berenjena", description: "", price: 11500, tag: "Vegano", image: `${P}/image%20(19).png` },
    ],
  },
  {
    id: "combos",
    label: "Combos",
    icon: Heart,
    color: "from-rose-400 to-pink-500",
    items: [
      { name: "Combo Proteico", description: "", price: 18500, tag: "Completo", image: `${P}/image%20(20).png` },
      { name: "Combo Vegano", description: "", price: 16500, tag: "Vegano", image: `${P}/image%20(21).png` },
    ],
  },
  {
    id: "smoothies",
    label: "Smoothies y Limonadas",
    icon: GlassWater,
    color: "from-pink-300 to-fuchsia-300",
    items: [
      { name: "Smoothie Banana", description: "", price: 8500, image: `${P}/image%20(22).png` },
      { name: "Smoothie Passion Tropical", description: "", price: 8500, image: `${P}/image%20(23).png` },
      { name: "Smoothie Passion Tropical con Leche", description: "", price: 8700, image: `${P}/image%20(24).png` },
      { name: "Smoothie Diosa del Bosque", description: "", price: 8500, image: `${P}/image%20(25).png` },
      { name: "Smoothie Diosa del Bosque con Leche", description: "", price: 8700, image: `${P}/image%20(26).png` },
      { name: "Limonada Frutos Rojos 1.5L", description: "", price: 15000, tag: "Jarra", image: `${P}/image%20(27).png` },
      { name: "Limonada Menta y Jengibre 1.5L", description: "", price: 13500, tag: "Jarra", image: `${P}/image%20(28).png` },
      { name: "Limonada Maracuya 1.5L", description: "", price: 16000, tag: "Jarra", image: `${P}/image%20(29).png` },
      { name: "Jugo de Naranja Exprimido", description: "", price: 9000, image: `${P}/image%20(30).png` },
    ],
  },
  {
    id: "icetea",
    label: "Ice Tea",
    icon: GlassWater,
    color: "from-teal-300 to-emerald-400",
    items: [
      { name: "Ice Tea Grapefruit", description: "", price: 7500, image: `${P}/image%20(31).png` },
    ],
  },
  {
    id: "ceramica",
    label: "Experiencia Art & Coffee",
    icon: Sparkles,
    color: "from-violet-300 to-fuchsia-400",
    items: [
      { name: "Pieza Chica", description: "", price: 12500, image: `${P}/image%20(32).png` },
      { name: "Pieza Grande", description: "", price: 15000, image: `${P}/image%20(33).png` },
      { name: "Pieza XL", description: "", price: 20000, image: `${P}/image%20(34).png` },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas sin Alcohol",
    icon: GlassWater,
    color: "from-sky-300 to-blue-400",
    items: [
      { name: "Agua con Gas 500ml", description: "", price: 3000, image: `${P}/image%20(35).png` },
      { name: "Jarra Agua Mineral 1.5L", description: "", price: 6000, tag: "Jarra", image: `${P}/image%20(36).png` },
      { name: "Sprite 357ml", description: "", price: 3000, image: `${P}/image%20(37).png` },
      { name: "Fanta 354ml", description: "", price: 3000, image: `${P}/image%20(38).png` },
      { name: "Agua Saborizada 500ml", description: "", price: 3000, image: `${P}/image%20(39).png` },
      { name: "Schweppes Tónica 354ml", description: "", price: 3000, image: `${P}/image%20(40).png` },
      { name: "Coca Cola Zero", description: "", price: 3000, image: `${P}/image%20(41).png` },
    ],
  },
  {
    id: "alcohol",
    label: "Bebidas con Alcohol",
    icon: Beer,
    color: "from-yellow-300 to-amber-400",
    items: [
      { name: "Imperial Golden 473ml", description: "", price: 6500, image: `${P}/image%20(42).png` },
      { name: "Imperial Lager 473ml", description: "", price: 6500, image: `${P}/image%20(43).png` },
      { name: "Cerveza Chang 350ml", description: "", price: 9000, image: `${P}/image%20(44).png` },
      { name: "Imperial IPA 473ml", description: "", price: 6500, image: `${P}/image%20(45).png` },
    ],
  },
  {
    id: "pet",
    label: "Pet Menu",
    icon: PawPrint,
    color: "from-orange-300 to-amber-400",
    items: [
      { name: "Snack Pet Black Stix", description: "", price: 5000, image: `${P}/image%20(46).png` },
      { name: "Snack Pet White Stix", description: "", price: 5000, image: `${P}/image%20(47).png` },
      { name: "Snack Pet Black and White Stix", description: "", price: 5200, image: `${P}/image%20(48).png` },
    ],
  },
  {
    id: "sintacc",
    label: "Sin TACC",
    icon: Leaf,
    color: "from-lime-300 to-green-400",
    items: [
      { name: "Extra Pan Sin TACC (2 rebanadas)", description: "", price: 5000, tag: "Sin TACC", image: `${P}/image%20(49).png` },
    ],
  },
  {
    id: "extras",
    label: "Extras",
    icon: Soup,
    color: "from-pink-200 to-rose-300",
    items: [
      { name: "Vela con Glitter", description: "", price: 2000, image: `${P}/image%20(50).png` },
      { name: "Extra Tostadas x2", description: "", price: 4000, image: `${P}/image%20(51).png` },
      { name: "Extra Chocolate Aguila", description: "", price: 1500, image: `${P}/image%20(52).png` },
      { name: "Vela Ondas Rosa", description: "", price: 2000, image: `${P}/image%20(53).png` },
      { name: "Vela Ondas Plateada", description: "", price: 2000, image: `${P}/image%20(54).png` },
      { name: "Vela Ondas Dorada", description: "", price: 2000, image: `${P}/image%20(55).png` },
      { name: "Medialuna Extra", description: "", price: 3500, image: `${P}/image%20(56).png` },
    ],
  },
];

// ─── TAG COLOR MAP ───────────────────────────────────────────────────────────

const tagColors: Record<string, string> = {
  "Especial de la semana": "bg-fuchsia-100 text-fuchsia-700",
  Signature: "bg-rose-100 text-rose-700",
  Pink: "bg-pink-100 text-pink-700",
  Favorito: "bg-pink-100 text-pink-700",
  Favorita: "bg-pink-100 text-pink-700",
  Importado: "bg-emerald-100 text-emerald-700",
  Especial: "bg-violet-100 text-violet-700",
  Vegano: "bg-green-100 text-green-700",
  "Sin TACC": "bg-amber-100 text-amber-700",
  Premium: "bg-purple-100 text-purple-700",
  Estrella: "bg-yellow-100 text-yellow-700",
  Completo: "bg-sky-100 text-sky-700",
  Jarra: "bg-blue-100 text-blue-700",
};

// ─── FORMAT PRICE ────────────────────────────────────────────────────────────

function formatPrice(price: number) {
  return `$ ${price.toLocaleString("es-AR")}`;
}

// ─── MENU ITEM CARD ──────────────────────────────────────────────────────────

function MenuItem({
  item,
  index,
}: {
  item: (typeof categories)[0]["items"][0];
  index: number;
}) {
  return (
    <motion.div
      key={item.name}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.28, delay: index * 0.04 }}
      className="group flex items-center gap-4 py-4 border-b border-primary/8 last:border-0 hover:bg-white/60 rounded-xl px-3 -mx-3 transition-colors duration-200 cursor-default"
    >
      {/* Thumbnail */}
      {item.image && (
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-primary/10 bg-pink-50">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-0.5">
          <h4 className="font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-colors duration-200">
            {item.name}
          </h4>
          {item.tag && (
            <span
              className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                tagColors[item.tag] ?? "bg-primary/10 text-primary"
              }`}
            >
              {item.tag}
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-xs text-foreground/50 leading-relaxed">
            {item.description}
          </p>
        )}
      </div>

      {/* Price */}
      <span className="shrink-0 text-sm font-bold text-primary tabular-nums">
        {formatPrice(item.price)}
      </span>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function Menu() {
  const [active, setActive] = useState(categories[0].id);

  const activeCategory = categories.find((c) => c.id === active)!;
  const Icon = activeCategory.icon;

  return (
    <section id="carta" className="py-24 bg-pink-bg relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Nuestra Carta
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-4"
          >
            Sabores que{" "}
            <span className="text-primary italic">Enamoran</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 text-base"
          >
            Cada plato es una obra de arte pensada para deleitar tus sentidos.
            💓
          </motion.p>
        </div>

        {/* Tab navigation (pill scroll) */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-2 min-w-max mx-auto justify-start sm:justify-center">
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              const isActive = active === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap border ${
                    isActive
                      ? "bg-primary text-white border-primary shadow-md scale-105"
                      : "bg-white/70 text-foreground/60 border-primary/10 hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  <CatIcon size={14} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Items panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass rounded-[2.5rem] border border-primary/8 p-6 sm:p-10 shadow-soft max-w-4xl mx-auto"
        >
          {/* Panel header */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${activeCategory.color} flex items-center justify-center shadow-md shrink-0`}
            >
              <Icon size={22} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-foreground font-bold leading-tight">
                {activeCategory.label}
              </h3>
              <p className="text-xs text-foreground/40 font-medium">
                {activeCategory.items.length}{" "}
                {activeCategory.items.length === 1 ? "producto" : "productos"}
              </p>
            </div>
          </div>

          {/* Items list */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active + "-list"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {activeCategory.items.map((item, i) => (
                <MenuItem key={item.name} item={item} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Footer note */}
        <p className="text-center text-xs text-foreground/40 mt-6 font-medium">
          Precios en pesos argentinos · puede haber variaciones de temporada
        </p>
      </div>
    </section>
  );
}
