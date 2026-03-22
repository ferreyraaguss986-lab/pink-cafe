"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { Briefcase, User, Mail, Phone, FileText, CheckCircle, Loader2, Sparkles } from "lucide-react";

const puestos = [
  { value: "", label: "Seleccioná un puesto..." },
  { value: "Barista", label: "☕ Barista" },
  { value: "Cocina", label: "🍳 Cocina" },
  { value: "Atencion al publico", label: "💬 Atención al público" },
  { value: "Encargado/a", label: "⭐ Encargado/a" },
  { value: "Limpieza", label: "✨ Limpieza" },
];

export default function Trabajo() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/aferreyramansur@gmail.com", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setEnviado(true);
      setFileName(null);
      form.reset();
    } catch {
      // fallback: submit normally
      form.submit();
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="trabajo" className="py-32 bg-pink-bg relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20 drop-shadow-md pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px]">
          {/* Capa base (más clara) */}
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-secondary opacity-70"></path>
          {/* Capa principal que parece cobertura/drip */}
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-40.45C345.54,35.84,378.17,21.5,413.27,24c31.6,2.2,60.52,15.71,88.9,29.83,32.53,16.18,66,32.55,102.3,31.42,33.56-1,66-15.08,98.6-29.07,31.54-13.56,63-27.1,95-30,32.11-2.93,64.21,7.21,95.73,17.44,30.34,9.85,60.42,19.3,91.31,20.25,32.31,1,64.6-7.85,96-18.73A410.6,410.6,0,0,0,1200,15.81V0Z" className="fill-primary"></path>
        </svg>
      </div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/30 rounded-full blur-3xl z-0" />

      {/* Floating sparkles */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-12 text-primary/30 hidden md:block"
      >
        <Sparkles size={32} />
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 right-16 text-secondary/40 hidden md:block"
      >
        <Sparkles size={24} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <Briefcase size={14} />
            Oportunidades laborales
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
            Unite a nuestro{" "}
            <span className="text-primary italic">equipo</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-lg mx-auto leading-relaxed">
            Buscamos personas apasionadas por la hospitalidad y el buen café. Completá el formulario y te contactamos.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-[2.5rem] border border-primary/10 shadow-premium overflow-hidden">
            {/* Card top accent */}
            <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent" />

            <div className="p-8 md:p-12">
              {enviado ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-6"
                >
                  <div className="w-20 h-20 bg-gradient-to-tr from-primary to-secondary rounded-full flex items-center justify-center shadow-premium">
                    <CheckCircle size={40} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-foreground mb-3">
                      ¡Muchas gracias! 💓
                    </h3>
                    <p className="text-foreground/60 text-lg leading-relaxed">
                      ¡Gracias por postularte! Tu CV ha sido enviado con éxito.
                    </p>
                  </div>
                  <button
                    onClick={() => setEnviado(false)}
                    className="text-primary/60 hover:text-primary text-sm font-medium underline underline-offset-4 transition-colors"
                  >
                    Enviar otra postulación
                  </button>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  action="https://formsubmit.co/aferreyramansur@gmail.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  className="space-y-6"
                >
                  {/* Hidden FormSubmit fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="Nueva postulación laboral - Pink Café" />
                  <input type="hidden" name="_template" value="table" />

                  {/* Nombre */}
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="flex items-center gap-2 text-sm font-bold text-foreground/70 uppercase tracking-widest">
                      <User size={14} className="text-primary" />
                      Nombre completo <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="nombre"
                        type="text"
                        name="nombre"
                        required
                        placeholder="Tu nombre completo"
                        className="w-full bg-white/80 border border-primary/15 rounded-2xl px-5 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-foreground/70 uppercase tracking-widest">
                      <Mail size={14} className="text-primary" />
                      Correo electrónico <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full bg-white/80 border border-primary/15 rounded-2xl px-5 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                    />
                  </div>

                  {/* Teléfono */}
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="flex items-center gap-2 text-sm font-bold text-foreground/70 uppercase tracking-widest">
                      <Phone size={14} className="text-primary" />
                      Número de teléfono <span className="text-primary">*</span>
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      name="telefono"
                      required
                      placeholder="+54 351 000 0000"
                      className="w-full bg-white/80 border border-primary/15 rounded-2xl px-5 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                    />
                  </div>

                  {/* Puesto */}
                  <div className="space-y-2">
                    <label htmlFor="puesto" className="flex items-center gap-2 text-sm font-bold text-foreground/70 uppercase tracking-widest">
                      <Briefcase size={14} className="text-primary" />
                      Puesto buscado <span className="text-primary">*</span>
                    </label>
                    <select
                      id="puesto"
                      name="puesto"
                      required
                      defaultValue=""
                      className="w-full bg-white/80 border border-primary/15 rounded-2xl px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all appearance-none"
                    >
                      {puestos.map((p) => (
                        <option key={p.value} value={p.value} disabled={p.value === ""}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* CV */}
                  <div className="space-y-2">
                    <label htmlFor="cv" className="flex items-center gap-2 text-sm font-bold text-foreground/70 uppercase tracking-widest">
                      <FileText size={14} className="text-primary" />
                      Adjuntar CV <span className="text-primary">*</span>
                    </label>
                    <label
                      htmlFor="cv"
                      className={`flex flex-col items-center justify-center w-full border-2 border-dashed rounded-2xl py-8 px-6 transition-all cursor-pointer group ${
                        fileName
                          ? "border-primary bg-primary/5"
                          : "border-primary/25 bg-white/50 hover:bg-primary/5 hover:border-primary/40"
                      }`}
                    >
                      <FileText size={32} className={`${fileName ? "text-primary" : "text-primary/40 group-hover:text-primary/60"} transition-colors mb-3`} />
                      <span className="text-sm font-medium text-foreground/50 group-hover:text-foreground/70 transition-colors text-center">
                        {fileName ? fileName : "Hacé clic para subir tu CV"}
                      </span>
                      <span className="text-xs text-foreground/30 mt-1">{fileName ? "Archivo adjuntado correctamente" : "PDF, DOC o DOCX"}</span>
                      <input
                        id="cv"
                        type="file"
                        name="attachment"
                        required
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files.length > 0) {
                            setFileName(e.target.files[0].name);
                          }
                        }}
                      />
                    </label>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={enviando}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-2xl shadow-premium hover:shadow-lg transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed text-lg tracking-wide"
                  >
                    {enviando ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Briefcase size={20} />
                        Enviar Postulación
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-foreground/30 leading-relaxed">
                    Tu información es confidencial y solo será utilizada para el proceso de selección. 💓
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
