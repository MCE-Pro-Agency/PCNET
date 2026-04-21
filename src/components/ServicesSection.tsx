import { motion } from "framer-motion";
import { Package, HeadphonesIcon, Search, TruckIcon, BarChart3, HandshakeIcon } from "lucide-react";
import sectionBg from "@/assets/section-bg.jpg";

const services = [
  { icon: Package, title: "Vente en gros", desc: "Matériel informatique à prix compétitifs, à partir de 100 pièces." },
  { icon: HeadphonesIcon, title: "Conseil personnalisé", desc: "Un accompagnement sur mesure pour chaque client." },
  { icon: Search, title: "Analyse des besoins", desc: "Étude approfondie pour des solutions adaptées." },
  { icon: BarChart3, title: "Solutions adaptées", desc: "Recherche des meilleurs équipements pour votre activité." },
  { icon: TruckIcon, title: "Livraison internationale", desc: "Expédition en Europe et en Afrique." },
  { icon: HandshakeIcon, title: "Suivi client", desc: "Relation durable basée sur la confiance." },
];

const ServicesSection = () => (
  <section
    id="services"
    className="section-padding relative overflow-hidden"
    style={{
      backgroundImage: `url(${sectionBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-[hsl(220,30%,5%)]/85 backdrop-blur-sm" />

    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Ce que nous offrons</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">Nos services</h2>
        <p className="max-w-xl mx-auto text-white/70">
          Un accompagnement complet pour des solutions fiables, adaptées et durables.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 overflow-hidden group hover:border-accent/30 hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
              <s.icon size={22} className="text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-white font-heading mb-2">{s.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
