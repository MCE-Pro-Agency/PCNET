import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const info = [
  { icon: MapPin, label: "Adresse", value: "82 rue les Épinettes, 77600 Bussy-Saint-Georges, France" },
  { icon: Phone, label: "Téléphone", value: "+33 6 25 15 94 52", href: "tel:+33625159452" },
  { icon: Mail, label: "Email", value: "pcnetunivers@gmail.com", href: "mailto:pcnetunivers@gmail.com" },
  { icon: Globe, label: "Zone", value: "Europe et Afrique" },
];

const ContactSection = () => (
  <section id="contact" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Nous joindre</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Contactez-nous</h2>
        <p className="text-muted-foreground">Notre équipe est à votre écoute pour répondre à toutes vos demandes.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {info.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl border border-border p-6 text-center hover:border-primary/20 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
              <item.icon size={20} className="text-primary-foreground" />
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{item.label}</div>
            {item.href ? (
              <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                {item.value}
              </a>
            ) : (
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
