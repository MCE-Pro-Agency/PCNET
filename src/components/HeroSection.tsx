import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

const slides = [hero1, hero2, hero3, hero4, hero5];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (

    <section id="accueil" className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current]}
          alt="PCNET UNIVERS"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,7%)/0.85] via-[hsl(220,20%,7%)/0.5] to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="section-padding max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: 'white' }}>
              <span className="whitespace-nowrap">Matériel informatique</span><br />
              <span className="text-accent">d'occasion</span>
            </h1>
            <p className="text-base md:text-lg mb-8" style={{ color: 'hsl(220, 14%, 75%)' }}>
              Produits testés et garantis. Les meilleures marques au meilleur prix, en gros uniquement.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#devis"
                className="gradient-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Demander un devis <ChevronRight size={16} />
              </a>
              <a
                href="#contact"
                className="border border-[hsl(220,14%,40%)] px-7 py-3.5 rounded-lg font-semibold text-sm hover:border-accent/50 transition-colors"
                style={{ color: 'hsl(220, 14%, 80%)' }}
              >
                Nous contacter
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 md:left-12 lg:left-20 xl:left-32 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-accent" : "w-4 bg-[hsl(0,0%,100%/0.3)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
  <WhatsAppButton />
};

export default HeroSection;