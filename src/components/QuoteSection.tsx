import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { useState } from "react";

const benefits = [
  "Réponse rapide",
  "Confiance",
  "Livraison internationale 7j/7",
];

const products = [
  "Écrans",
  "PC Portables",
  "PC Fixes",
  "Disques durs",
  "Chargeurs",
  "Accessoires",
  "Pièces détachées",
];

const QuoteSection = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Demande envoyée", description: "Nous vous répondrons dans les plus brefs délais." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const inputClass =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all";

  const labelClass = "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5";

  return (
    <section id="devis" className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Form - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-gradient-to-br from-[#020617] via-[#0b1f3a] to-[#123a63] rounded-2xl border border-white/10 shadow-2xl p-8 md:p-10 overflow-hidden">

  {/* Glow effet premium */}
  <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/20 blur-3xl"></div>

  <h3 className="text-xl font-bold text-white font-heading mb-6">
    Formulaire de devis
  </h3>

  <form onSubmit={handleSubmit} className="space-y-5">

    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="text-sm text-white/70 mb-1 block">Nom *</label>
        <input
          type="text"
          placeholder="Votre nom"
          required
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="text-sm text-white/70 mb-1 block">Société</label>
        <input
          type="text"
          placeholder="Entreprise"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="text-sm text-white/70 mb-1 block">Email *</label>
        <input
          type="email"
          placeholder="email@exemple.com"
          required
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="text-sm text-white/70 mb-1 block">Téléphone</label>
        <input
          type="tel"
          placeholder="+33 6 00 00 00 00"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="text-sm text-white/70 mb-1 block">Produits</label>
        <select
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
          defaultValue=""
        >
          <option value="" disabled className="text-black">
            Sélectionnez
          </option>
          {products.map((p) => (
            <option key={p} value={p} className="text-black">
              {p}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm text-white/70 mb-1 block">Quantité</label>
        <input
          type="text"
          placeholder="ex: 200 pièces"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    <div>
      <label className="text-sm text-white/70 mb-1 block">Message</label>
      <textarea
        placeholder="Décrivez vos besoins..."
        rows={4}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <button
      type="submit"
      disabled={sending}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50"
    >
      {sending ? "Envoi..." : "Envoyer la demande"} <Send size={16} />
    </button>

  </form>
</div>
          </motion.div>

          {/* Text - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em]">Devis gratuit</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 font-heading leading-tight">
              Obtenez votre offre personnalisée
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Décrivez vos besoins et recevez une proposition adaptée sous 24-48h.
            </p>
            <div className="space-y-5">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={18} className="text-accent" />
                  </div>
                  <span className="text-foreground font-semibold">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
