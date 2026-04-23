import { motion } from "framer-motion";
import { ArrowLeft, FileText, Shield, Truck, CreditCard, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import sectionBg from "@/assets/section-bg-CjdKqotJ.jpg";

const CGV = () => {
  const sections = [
    {
      icon: FileText,
      title: "Article 1 – Objet",
      content: "Les présentes CGV ont pour objet de définir les conditions dans lesquelles PCNET UNIVERS commercialise, exclusivement en gros, du matériel informatique, accessoires, consommables et pièces détachées auprès de professionnels situés en France, en Europe et en Afrique."
    },
    {
      icon: Shield,
      title: "Article 2 – Produits proposés",
      content: "PCNET UNIVERS propose notamment : PC fixes, PC portables, écrans, disques durs, chargeurs, accessoires informatiques, pièces détachées et consommables. Marques régulièrement distribuées : HP, Dell, Lenovo."
    },
    {
      icon: Scale,
      title: "Article 3 – Réservé aux professionnels",
      content: "Les ventes réalisées par PCNET UNIVERS sont exclusivement destinées aux professionnels, revendeurs, administrations, entreprises et organismes. Le Client déclare agir dans le cadre de son activité professionnelle."
    },
    {
      icon: Truck,
      title: "Article 4 – Quantités minimales",
      content: "Les ventes sont réalisées en gros, à partir de 100 pièces minimum, sauf accord particulier mentionné sur devis ou facture."
    },
    {
      icon: CreditCard,
      title: "Article 5 – Commandes et devis",
      content: "Toute commande fait l'objet d'un devis préalable établi selon les besoins du Client. La commande devient ferme uniquement après acceptation écrite du devis, réception de l'acompte éventuel et validation définitive par PCNET UNIVERS."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header avec logo */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Retour</span>
          </Link>
          <img src={logo} alt="PCNET UNIVERS" className="h-10 md:h-12" />
        </div>
      </motion.header>

      {/* Hero Section avec image de fond */}
      <section 
        className="relative section-padding bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${sectionBg})` }}
      >
        {/* Overlay sombre pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary/30 mb-6">
              <FileText className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 drop-shadow-lg">
              Conditions Générales de Vente
            </h1>
            <div className="inline-block bg-card/80 backdrop-blur-sm border border-border rounded-2xl px-8 py-6 shadow-xl">
              <p className="text-xl font-semibold text-foreground mb-2">PCNET UNIVERS</p>
              <p className="text-sm text-muted-foreground">Dernière mise à jour : 23 avril 2026</p>
            </div>
          </motion.div>
        </div>

        {/* Effet de grille technologique */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </section>

      {/* Informations légales avec carte premium */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-3xl p-8 md:p-12 mb-12 shadow-2xl overflow-hidden"
          >
            {/* Décoration d'angle */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <img src={logo} alt="PCNET UNIVERS" className="h-16 md:h-20" />
                <div className="h-12 w-px bg-border"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Le Vendeur</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div className="space-y-3">
                  <p className="text-lg"><strong className="text-foreground">PCNET UNIVERS</strong></p>
                  <p>82 rue les Épinettes<br />77600 Bussy-Saint-Georges<br />France</p>
                </div>
                <div className="space-y-3">
                  <p>
                    <strong className="text-foreground">Email :</strong><br />
                    <a href="mailto:pcnetunivers@gmail.com" className="text-primary hover:underline">
                      pcnetunivers@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Téléphone :</strong><br />
                    <a href="tel:+33625159452" className="text-primary hover:underline">
                      +33 6 25 15 94 52
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sections principales avec icônes */}
          <div className="space-y-6 mb-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <section.icon className="text-primary" size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Autres articles */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-slate max-w-none"
          >
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Article 6 – Prix
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Les prix sont exprimés en euros (€), hors taxes (HT) sauf mention contraire. TVA applicable selon la réglementation française et intracommunautaire en vigueur. Les frais suivants peuvent être facturés en supplément : transport, assurance transport, douanes, taxes locales, frais bancaires internationaux, emballage spécifique.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Article 7 – Paiement
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Les moyens de paiement acceptés sont : virement bancaire, paiement sécurisé convenu entre parties, autres moyens validés par écrit.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    En cas de retard de paiement : pénalités légales de retard applicables et indemnité forfaitaire de recouvrement de 40 € (article L441-10 Code de commerce).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Article 8 – Livraison
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    PCNET UNIVERS livre en France, Europe et Afrique. Les délais de livraison sont indicatifs sauf engagement écrit exprès.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Le Client doit vérifier la marchandise à réception et signaler toute anomalie sous 48 heures par écrit avec justificatifs.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Article 9 – Réserve de propriété
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    PCNET UNIVERS conserve la propriété des marchandises vendues jusqu'au paiement intégral du prix, principal, frais et accessoires.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Article 10 – Garantie et conformité
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Les produits bénéficient, selon leur nature : garanties constructeur éventuelles et garanties légales applicables entre professionnels lorsque la loi le prévoit.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Sont exclus : mauvaise utilisation, casse, surtension, installation non conforme, usure normale, intervention tierce non autorisée.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Article 11 – Retours
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Aucun retour ne pourra être effectué sans accord préalable écrit de PCNET UNIVERS. Les retours acceptés devront être complets, non détériorés, correctement emballés et accompagnés de la facture.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Article 12 – Force majeure
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    PCNET UNIVERS ne pourra être tenue responsable en cas de retard ou inexécution résultant notamment de : pénurie fournisseur, rupture logistique, guerre, grève, catastrophe naturelle, blocage douanier, cyberattaque, pandémie ou décision administrative.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Article 13 – Responsabilité
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    La responsabilité de PCNET UNIVERS est limitée au montant HT de la commande concernée. Le Vendeur ne pourra être tenu responsable des pertes indirectes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Article 14 – Données personnelles
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Les données collectées sont utilisées pour : traitement commercial, relation client, facturation, logistique et obligations légales.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Conformément au RGPD, le Client dispose de droits d'accès, rectification, opposition et suppression en écrivant à : <a href="mailto:pcnetunivers@gmail.com" className="text-primary hover:underline">pcnetunivers@gmail.com</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Article 15 – Propriété intellectuelle
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Les contenus du site PCNET UNIVERS (logo, textes, visuels, catalogue, structure) demeurent la propriété exclusive de PCNET UNIVERS sauf droits tiers. Toute reproduction sans autorisation est interdite.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Article 16 – Droit applicable
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Les présentes CGV sont soumises au droit français.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Article 17 – Litiges
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    En cas de litige, les parties rechercheront d'abord une solution amiable. À défaut, compétence expresse est attribuée aux tribunaux compétents du ressort du siège social de PCNET UNIVERS, sauf disposition légale impérative contraire.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Acceptation avec design premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 relative bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 border-2 border-primary/30 rounded-3xl p-8 md:p-12 text-center overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Acceptation</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Toute commande implique l'acceptation pleine et entière des présentes Conditions Générales de Vente.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CGV;
