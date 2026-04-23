import { motion } from "framer-motion";
import { Battery, Cpu, HardDrive, Laptop, Monitor, Mouse, PlugZap } from "lucide-react";

// Importez les images en haut du fichier
import hpLogo from "@/assets/HP-Logo.png";
import dellLogo from "@/assets/Dell.jpg";
import lenovoLogo from "@/assets/lenovo.png";

const products = [
  { icon: Monitor, name: "Écrans", desc: "Moniteurs professionnels toutes tailles" },
  { icon: Laptop, name: "PC Portables", desc: "Laptops HP, Dell, Lenovo" },
  { icon: Cpu, name: "PC Fixes", desc: "Stations de travail performantes" },
  { icon: HardDrive, name: "Disques durs", desc: "Stockage SSD et HDD" },
  { icon: Battery, name: "Chargeurs", desc: "Alimentations certifiées" },
  { icon: Mouse, name: "Accessoires", desc: "Périphériques et connectique" },
  { icon: PlugZap, name: "Pièces", desc: "Composants et pièces détachées" },
];

const brands = [
  { name: "HP", logo: hpLogo },
  { name: "Dell", logo: dellLogo },
  { name: "Lenovo", logo: lenovoLogo },
];

const ProductsSection = () => (
  <section id="produits" className="section-padding bg-muted/50">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Catalogue</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">Nos produits</h2>
        <p className="max-w-xl mx-auto text-muted-foreground">
          Une gamme complète de matériel informatique pour les professionnels. Vente en gros à partir de 100 pièces.
        </p>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        {products.map((p, i) => (
         {/* Brand logos */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-12 md:gap-20"
            >
              {brands.map((b) => (
                <img
                  key={b.name}
                  src={b.logo}
                  alt={b.name}
                  className="h-12 md:h-16 object-contain brightness-0 saturate-100 invert-[0.4] sepia-[1] saturate-[5] hue-rotate-[190deg] hover:scale-110 transition-all duration-300"
                />
              ))}
            </motion.div>
        ))}
      </div>
      {/* Brand logos */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-12 md:gap-20"
      >
        {brands.map((b) => (
          <img
            key={b.name}
            src={b.logo}
            alt={b.name}
            className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProductsSection;
