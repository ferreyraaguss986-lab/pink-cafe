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

// ─── DATA ────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "especiales",
    label: "Especiales",
    icon: Star,
    color: "from-pink-400 to-rose-400",
    items: [
      {
        name: "Café + 2 Medialunas de Manteca",
        description:
          "Café a elección de la carta, más dos medialunas de manteca. No aplica otros descuentos.",
        price: 10000,
        tag: "Especial de la semana",
      },
    ],
  },
  {
    id: "cafeteria",
    label: "Cafetería",
    icon: Coffee,
    color: "from-rose-300 to-pink-400",
    items: [
      {
        name: "Café Coquette",
        description:
          "Café con leche rosa texturizada, glitter, pétalos de rosa, Nutella y perlas comestibles de chocolate.",
        price: 7500,
        tag: "Signature",
      },
      {
        name: "Ice Coffee Pink",
        description:
          "Syrup de frambuesa, shot de café, leche rosa texturizada. Copa decorada con Nutella y granas de azúcar.",
        price: 7500,
        tag: "Pink",
      },
      {
        name: "Café con Leche Pink",
        description: "Shot de café con leche rosa texturizada y glitter.",
        price: 6800,
      },
      {
        name: "Lágrima Pink en Taza",
        description:
          "Leche rosa texturizada con un touch de café y glitter.",
        price: 6800,
      },
      {
        name: "Submarino Pink",
        description:
          "Leche rosa con barra de chocolate Águila blanco y brillitos.",
        price: 7000,
      },
      {
        name: "Submarino Black",
        description:
          "Leche con barra de chocolate Águila semi amargo y glitter.",
        price: 7000,
      },
      {
        name: "Frappuccino de Pistachos",
        description:
          "Syrup de pistacho, shot de café, leche texturizada. Copa coronada con Nutella de pistachos y trozos de pistachos tostados.",
        price: 7200,
        tag: "Favorito",
      },
      {
        name: "Latte Lemon Pie",
        description:
          "Shot de espresso, leche texturizada, pasta lemon pie crunch.",
        price: 7000,
      },
      {
        name: "Capuchino de Avellanas",
        description:
          "Syrup de avellanas, shot de café, leche texturizada, coronado con salsa de caramelo y/o chocolate.",
        price: 7000,
      },
      {
        name: "Capuchino de Toffee Caramel",
        description:
          "Syrup de caramelo, shot de café, leche texturizada, coronado con salsa de caramelo y/o chocolate.",
        price: 7000,
      },
      {
        name: "Capuchino de Vainilla",
        description:
          "Syrup de vainilla, shot de café, leche texturizada, coronado con salsa de caramelo y/o chocolate.",
        price: 7000,
      },
      {
        name: "Ice Coffee Tonic",
        description:
          "Shot de café + agua tónica + cubitos de hielo + rodaja de naranja.",
        price: 7000,
      },
      {
        name: "Ice Latte Coffee",
        description: "Shot de café + leche fría + cubitos de hielo.",
        price: 7000,
      },
      {
        name: "Café con Leche",
        description: "50% leche, 50% café.",
        price: 6000,
      },
      {
        name: "Lágrima en Taza",
        description: "Más leche que café.",
        price: 6000,
      },
      {
        name: "Café Doble",
        description: "Dos shots de café espresso.",
        price: 5000,
      },
      {
        name: "Cortado en Taza",
        description: "Café con apenas leche en taza.",
        price: 5000,
      },
    ],
  },
  {
    id: "infusiones",
    label: "Infusiones",
    icon: Leaf,
    color: "from-emerald-300 to-teal-400",
    items: [
      {
        name: "Té Negro English Breakfast",
        description:
          "Té English Breakfast importado de Assam (India) y Rwanda.",
        price: 5000,
        tag: "Importado",
      },
      {
        name: "Vainilla Sky",
        description:
          "Perfumada elegancia de vainilla y flores de jazmín. Con trozos de frutilla, té verde y bellas agujas de plata del té blanco de Yunnan.",
        price: 5000,
        tag: "Importado",
      },
      {
        name: "Chai on Fire",
        description:
          "Explosivo Chai de té negro, cúrcuma, canela, jengibre, anís, pimienta negra y chilli picante.",
        price: 5000,
        tag: "Importado",
      },
    ],
  },
  {
    id: "tortas",
    label: "Tartas y Tortas",
    icon: Cake,
    color: "from-fuchsia-300 to-pink-400",
    items: [
      {
        name: "Rainbow Pride Cake",
        description:
          "Bizcochuelo húmedo arcoiris con 6 colores, relleno con ganache de chocolate blanco y jalea de maracuyá, cubierta con buttercream de merengue suizo.",
        price: 12500,
        tag: "Especial",
      },
      {
        name: "Matilda",
        description:
          "Bizcochuelo de chocolate con dulce de leche y ganache de cacao, coronado con ganache de chocolate y trufas de cacao y coco.",
        price: 13000,
        tag: "Favorita",
      },
      {
        name: "Pink Velvet",
        description:
          "Nuestra reversión de la Red Velvet, rellena de ganache de chocolate blanco y reducción de frambuesa, cubierta con buttercream de merengue suizo rosa y perlas.",
        price: 13000,
        tag: "Signature",
      },
      {
        name: "Key Lime Pie",
        description:
          "Base de galleta de vainilla, crema de lima, decorado con crema chantilly, granada y ralladura de lima.",
        price: 11000,
      },
      {
        name: "Mini Cake Banana, Granizada y Marroc",
        description:
          "Bizcochuelo de banana y chocolate con ganache de chocolate blanco y maní, cubierta de frosting de cacao y pralinè de maní.",
        price: 15000,
        tag: "Premium",
      },
      {
        name: "Cheesecake Vasco Dubai de Pistachos",
        description:
          "Cheesecake estilo vasco (sin base de galletas, solo queso y crema horneada) con crema de pistachos y kadaif. ¡Una delicia!",
        price: 13500,
        tag: "Estrella",
      },
    ],
  },
  {
    id: "varietes",
    label: "Varietés",
    icon: Sparkles,
    color: "from-pink-300 to-fuchsia-400",
    items: [
      {
        name: "Cookie de Nutella y Pralinè de Avellanas",
        description:
          "Cookie de cacao, rellena de Nutella y decorada con garrapiñada de avellanas.",
        price: 7500,
      },
      {
        name: "Cookie Red Velvet",
        description:
          "Cookie de vainilla y cacao suave, con centro de ganache de queso crema, decorado con ganache de chocolate blanco, frambuesas y frutillas deshidratadas. Moño de chocolate blanco.",
        price: 7500,
      },
      {
        name: "Budín Carrot Cake Pink",
        description:
          "Abundante porción de budín de zanahoria con nueces, cubierta con frosting rosa de queso crema y pralinè de almendras.",
        price: 7800,
      },
      {
        name: "Budín de Limón y Arándanos Amapola",
        description: "",
        price: 7800,
      },
      {
        name: "Budín de Naranja y Frutos del Bosque",
        description:
          "Budín de naranja con frutos del bosque, cubierto de glaseado rosa de naranja.",
        price: 7800,
      },
      {
        name: "Alfajor Pink — Frutos Rojos y Rosas",
        description:
          "Alfajor de limón relleno de dulce de leche y reducción de frutos rojos, bañado con chocolate blanco y pétalos de rosas.",
        price: 8500,
        tag: "Sin TACC",
      },
      {
        name: "Alfajor Choco Café y Toffee",
        description:
          "Alfajor de chocolate, relleno con ganache de chocolate y café y centro de caramelo toffee, bañado en chocolate, coco y sal en escamas.",
        price: 8500,
        tag: "Sin TACC",
      },
    ],
  },
  {
    id: "salados",
    label: "Salados",
    icon: UtensilsCrossed,
    color: "from-amber-300 to-orange-400",
    items: [
      {
        name: "Tostado de Jamón y Queso",
        description:
          "Sándwich de ciabatta de masa madre propia, con queso Tybo y jamón cocido natural. Acompañado de nachos y dip untable.",
        price: 12000,
      },
      {
        name: "Tostón Mediterráneo",
        description:
          "Pan de campo de masa madre propio, queso crema, rúcula, cherrys, jamón crudo, aceite de oliva y queso en hebras. Con nachos y dip untable.",
        price: 13700,
      },
      {
        name: "Tostón de Girgolas",
        description:
          "Tostón con pan de masa madre y semillas propio, cremoso de zapallo, rúcula fresca con vinagreta de naranja, girgolas marinadas en curry, semillas de zapallo con salsa de soja, microgreens, pétalos y dip de hummus de remolacha con sésamo.",
        price: 12500,
        tag: "Vegano",
      },
      {
        name: "Chipa Casero",
        description:
          "Chipa con blend de quesos Sardo y Pategras. Una unidad de 120 gr.",
        price: 4500,
      },
      {
        name: "Sándwich de Berenjena",
        description:
          "Sándwich de ciabatta de masa madre propia, hummus de remolacha, lechuga fresca, escabeche de berenjena, pickles de cebolla morada y tomates asados. Con nachos y dip de zanahoria.",
        price: 11500,
        tag: "Vegano",
      },
    ],
  },
  {
    id: "combos",
    label: "Combos",
    icon: Heart,
    color: "from-rose-400 to-pink-500",
    items: [
      {
        name: "Combo Proteico",
        description:
          "Queso Tybo + jamón cocido + 2 huevos revueltos + dip de queso crema + dip de palta + 2 rebanadas de pan de masa madre + soda + bebida a elección (infusión, café doble, cortado, café con leche, gaseosa o agua saborizada).",
        price: 18500,
        tag: "Completo",
      },
      {
        name: "Combo Vegano",
        description:
          "Cherrys + champis + palta + emulsión de zanahoria y cebolla asada + 2 rebanadas de pan de masa madre + soda + bebida a elección (infusión, café doble, cortado, café con leche, gaseosa o agua saborizada).",
        price: 16500,
        tag: "Vegano",
      },
    ],
  },
  {
    id: "smoothies",
    label: "Smoothies y Limonadas",
    icon: GlassWater,
    color: "from-pink-300 to-fuchsia-300",
    items: [
      {
        name: "Smoothie Banana",
        description: "Licuado de banana con leche.",
        price: 8500,
      },
      {
        name: "Smoothie Passion Tropical",
        description:
          "Licuado de fruta natural de durazno, maracuyá y mango al agua.",
        price: 8500,
      },
      {
        name: "Smoothie Passion Tropical con Leche",
        description:
          "Licuado de fruta natural de durazno, maracuyá y mango con leche de vaca.",
        price: 8700,
      },
      {
        name: "Smoothie Diosa del Bosque",
        description:
          "Licuado de fruta natural de frutilla, arándanos, frambuesa y moras al agua.",
        price: 8500,
      },
      {
        name: "Smoothie Diosa del Bosque con Leche",
        description:
          "Licuado de fruta natural de frutilla, arándanos, frambuesa y moras con leche de vaca.",
        price: 8700,
      },
      {
        name: "Limonada Frutos Rojos — 1.5 L",
        description:
          "Jarra de 1.5 L con jugo natural de limón, frutillas, arándanos y moras.",
        price: 15000,
        tag: "Jarra",
      },
      {
        name: "Limonada de Menta y Jengibre — 1.5 L",
        description:
          "Jarra de 1.5 L con jugo natural de limón, menta y jengibre.",
        price: 13500,
        tag: "Jarra",
      },
      {
        name: "Limonada de Maracuyá — 1.5 L",
        description:
          "Jarra de 1.5 L con jugo natural de limón y maracuyá.",
        price: 16000,
        tag: "Jarra",
      },
      {
        name: "Ice Tea Grapefruit",
        description:
          "Té helado de hebras importadas (té ceylon, trozos de manzana, pera, cubitos de piña, rosa mosqueta, canela, pétalos de girasol) con jugo exprimido de pomelo.",
        price: 7500,
      },
    ],
  },
  {
    id: "ceramica",
    label: "Art & Coffee",
    icon: Sparkles,
    color: "from-violet-300 to-fuchsia-400",
    items: [
      {
        name: "Pieza Chica",
        description:
          "Incluye la pieza de cerámica, acrílicos de primera calidad, pinceles y todo lo necesario para pintar y llevarte lista tu pieza.",
        price: 12500,
      },
      {
        name: "Pieza Grande",
        description:
          "Incluye la pieza de cerámica, acrílicos de primera calidad, pinceles y todo lo necesario para pintar y llevarte lista tu pieza.",
        price: 15000,
      },
      {
        name: "Pieza XL",
        description:
          "Incluye la pieza de cerámica, acrílicos de primera calidad, pinceles y todo lo necesario para pintar y llevarte lista tu pieza.",
        price: 20000,
      },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    icon: GlassWater,
    color: "from-sky-300 to-blue-400",
    items: [
      { name: "Agua sin Gas 500 ml", description: "", price: 3000 },
      { name: "Agua con Gas 500 ml", description: "", price: 3000 },
      {
        name: "Jarra Agua Mineral con Hielo 1.5 L",
        description: "Jarra de 1.5 L de agua mineral con hielo.",
        price: 6000,
      },
      { name: "Coca Cola 354 ml", description: "", price: 3000 },
      { name: "Sprite 357 ml", description: "", price: 3000 },
      { name: "Fanta 354 ml", description: "", price: 3000 },
      {
        name: "Agua Saborizada 500 ml",
        description: "Consultar sabores disponibles.",
        price: 3000,
      },
      { name: "Schweppes Tónica 354 ml", description: "", price: 3000 },
      { name: "Coca Cola Zero", description: "", price: 3000 },
    ],
  },
  {
    id: "alcohol",
    label: "Con Alcohol",
    icon: Beer,
    color: "from-yellow-300 to-amber-400",
    items: [
      { name: "Imperial Golden 473 ml", description: "", price: 6500 },
      { name: "Imperial Lager 473 ml", description: "", price: 6500 },
      { name: "Cerveza Chang Lata 350 ml", description: "", price: 9000 },
      { name: "Imperial IPA 473 ml", description: "", price: 6500 },
    ],
  },
  {
    id: "pet",
    label: "Pet Menu",
    icon: PawPrint,
    color: "from-orange-300 to-amber-400",
    items: [
      {
        name: "Snack Pet — Black Stix",
        description:
          "Tiritas de hígado deshidratado. Sin químicos ni harinas. Aptas para alimentación BARF.",
        price: 5000,
      },
      {
        name: "Snack Pet — White Stix",
        description:
          "Tiritas de mondongo deshidratado. Sin químicos ni harinas. Aptas para alimentación BARF.",
        price: 5000,
      },
      {
        name: "Snack Pet — Black and White Stix",
        description:
          "Tiritas de hígado y mondongo. Sin químicos ni harinas. Aptas para alimentación BARF.",
        price: 5200,
      },
    ],
  },
  {
    id: "extras",
    label: "Extras",
    icon: Soup,
    color: "from-pink-200 to-rose-300",
    items: [
      {
        name: "Vela con Glitter",
        description: "Consultar disponibilidad de colores.",
        price: 2000,
      },
      {
        name: "Extra Tostadas x2 (Masa Madre)",
        description:
          "Dos unidades de tostadas de masa madre. Válido para agregar a los combos. No se venden solas.",
        price: 4000,
      },
      {
        name: "Extra Tostadas x2 (Sin TACC)",
        description:
          "Dos unidades de tostadas sin TACC. Válido para agregar a los combos. No se venden solas.",
        price: 5000,
        tag: "Sin TACC",
      },
      { name: "Extra Chocolate Águila", description: "", price: 1500 },
      { name: "Vela Ondas Rosa", description: "", price: 2000 },
      { name: "Vela Ondas Plateada", description: "", price: 2000 },
      { name: "Vela Ondas Dorada", description: "", price: 2000 },
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
      className="group flex items-start gap-4 py-4 border-b border-primary/8 last:border-0 hover:bg-white/60 rounded-xl px-3 -mx-3 transition-colors duration-200 cursor-default"
    >
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
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
      <span className="shrink-0 text-sm font-bold text-primary tabular-nums mt-0.5">
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
