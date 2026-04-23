import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import sectionBg from "@/assets/section-bg.jpg";

const CGV = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${sectionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay pour adoucir l'image de fond */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/90 to-blue-50/85 backdrop-blur-sm"></div>

      {/* Contenu de la page */}
      <div className="relative z-10">
        {/* Retour */}
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Link>
        </div>

        {/* Header avec logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-6 py-16 mt-8"
        >
          {/* Card principale */}
          <div className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/50">
            {/* Contenu header */}
            <div className="relative text-center py-16 px-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-xl mb-6 border-4 border-white/50">
                <img src={logo} alt="PCNET UNIVERS" className="w-16 h-16 object-contain" />
              </div>
              <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-3 tracking-tight">
                PCNET UNIVERS
              </h1>
              <p className="text-slate-500 text-sm uppercase tracking-wider">
                Mentions Légales & Conditions Générales
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sommaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto px-6 mb-12"
        >
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-white/60 shadow-xl">
            <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-6 font-medium">
              Sommaire
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
              <a href="#mentions" className="text-slate-600 hover:text-primary transition-colors text-sm">
                1. Mentions Légales
              </a>
              <a href="#objet" className="text-slate-600 hover:text-primary transition-colors text-sm">
                2. Objet
              </a>
              <a href="#produits" className="text-slate-600 hover:text-primary transition-colors text-sm">
                3. Produits & Services
              </a>
              <a href="#paiement" className="text-slate-600 hover:text-primary transition-colors text-sm">
                4. Tarifs & Paiement
              </a>
              <a href="#responsabilite" className="text-slate-600 hover:text-primary transition-colors text-sm">
                5. Responsabilité
              </a>
              <a href="#confidentialite" className="text-slate-600 hover:text-primary transition-colors text-sm">
                6. Confidentialité
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contenu */}
        <div className="max-w-4xl mx-auto px-6 pb-20 space-y-16">
          
          {/* Section 1 - Mentions Légales */}
          <motion.section
            id="mentions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/60"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">01</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-slate-800 mb-6 tracking-tight">
                  Mentions Légales
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 text-sm">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-3 font-medium">
                      Éditeur
                    </h3>
                    <div className="space-y-1 text-slate-600">
                      <p className="font-medium text-slate-800">PCNET UNIVERS</p>
                      <p>82 rue les Épinettes</p>
                      <p>77600 Bussy-Saint-Georges</p>
                      <p>France</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-3 font-medium">
                      Contact
                    </h3>
                    <div className="space-y-1 text-slate-600">
                      <p>+33 6 25 15 94 52</p>
                      <p>
                        <a href="mailto:pcnetunivers@gmail.com" className="text-primary hover:underline">
                          pcnetunivers@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 2 - Objet */}
          <motion.section
            id="objet"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/60"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">02</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-slate-800 mb-4 tracking-tight">
                  Objet & Positionnement
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Les présentes Conditions Générales de Vente ont pour objet de définir les conditions dans lesquelles 
                  PCNET UNIVERS commercialise, exclusivement en gros, du matériel informatique, accessoires, consommables 
                  et pièces détachées auprès de professionnels situés en France, en Europe et en Afrique.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Notre service est strictement professionnel et non automatisé : chaque étape est validée manuellement 
                  par l'administratrice pour garantir la qualité des prestations.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 3 - Produits */}
          <motion.section
            id="produits"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/60"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">03</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-slate-800 mb-6 tracking-tight">
                  Produits & Services
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-slate-800 mb-3">Catalogue produits</h3>
                    <p className="text-slate-600 leading-relaxed mb-3">
                      PCNET UNIVERS propose notamment : PC fixes, PC portables, écrans, disques durs, chargeurs, 
                      accessoires informatiques, pièces détachées et consommables.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Marques régulièrement distribuées : <span className="font-medium">HP, Dell, Lenovo</span>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-slate-800 mb-3">Réservé aux professionnels</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Les ventes sont exclusivement destinées aux professionnels, revendeurs, administrations et entreprises. 
                      Le Client déclare agir dans le cadre de son activité professionnelle.
                    </p>
                  </div>

                  <div className="bg-primary/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                    <h3 className="text-sm font-medium text-slate-800 mb-2">Quantités minimales</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Vente en gros à partir de <span className="font-semibold text-primary">100 pièces minimum</span>, 
                      sauf accord particulier mentionné sur devis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 4 - Tarifs & Paiement */}
          <motion.section
            id="paiement"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/60"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">04</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-slate-800 mb-6 tracking-tight">
                  Tarifs & Paiement
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-slate-800 mb-3">Prix</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Les prix sont exprimés en euros (€), hors taxes (HT) sauf mention contraire. TVA applicable selon 
                      la réglementation française et intracommunautaire en vigueur.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-slate-800 mb-3">Modalités de paiement</h3>
                    <p className="text-slate-600 leading-relaxed mb-3">
                      Moyens acceptés : virement bancaire, paiement sécurisé convenu entre parties, autres moyens validés par écrit.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      En cas de retard : pénalités légales de retard applicables et indemnité forfaitaire de 40 € 
                      (article L441-10 Code de commerce).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-slate-800 mb-3">Livraison</h3>
                    <p className="text-slate-600 leading-relaxed">
                      PCNET UNIVERS livre en France, Europe et Afrique. Le Client doit vérifier la marchandise à réception 
                      et signaler toute anomalie sous 48 heures par écrit avec justificatifs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 5 - Responsabilité */}
          <motion.section
            id="responsabilite"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/60"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">05</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-slate-800 mb-6 tracking-tight">
                  Responsabilité
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-slate-800 mb-3">Garantie</h3>
                    <p className="text-slate-600 leading-relaxed mb-3">
                      Les produits bénéficient, selon leur nature : garanties constructeur éventuelles et garanties légales 
                      applicables entre professionnels lorsque la loi le prévoit.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Sont exclus : mauvaise utilisation, casse, surtension, installation non conforme, usure normale, 
                      intervention tierce non autorisée.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-slate-800 mb-3">Limitation</h3>
                    <p className="text-slate-600 leading-relaxed">
                      La responsabilité de PCNET UNIVERS est limitée au montant HT de la commande concernée. 
                      Le Vendeur ne pourra être tenu responsable des pertes indirectes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-slate-800 mb-3">Retours</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Aucun retour ne pourra être effectué sans accord préalable écrit de PCNET UNIVERS. 
                      Les retours acceptés devront être complets, non détériorés, correctement emballés et accompagnés de la facture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 6 - Confidentialité */}
          <motion.section
            id="confidentialite"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/60"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">06</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-slate-800 mb-6 tracking-tight">
                  Confidentialité
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-slate-800 mb-3">Protection des données</h3>
                    <p className="text-slate-600 leading-relaxed mb-3">
                      Les données collectées via formulaires (devis, contact, commande) sont utilisées pour : 
                      traitement commercial, relation client, facturation, logistique et obligations légales.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Conformément au RGPD, le Client dispose de droits d'accès, rectification, opposition et suppression 
                      en écrivant à : <a href="mailto:pcnetunivers@gmail.com" className="text-primary hover:underline">pcnetunivers@gmail.com</a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-slate-800 mb-3">Propriété intellectuelle</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Les contenus du site PCNET UNIVERS (logo, textes, visuels, catalogue, structure) demeurent la propriété 
                      exclusive de PCNET UNIVERS sauf droits tiers. Toute reproduction sans autorisation est interdite.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-slate-800 mb-3">Droit applicable</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Les présentes CGV sont soumises au droit français. En cas de litige, les parties rechercheront d'abord 
                      une solution amiable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Footer acceptation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <div className="inline-block bg-white/80 backdrop-blur-md rounded-2xl px-12 py-8 shadow-xl border border-white/60">
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                Toute commande implique l'acceptation pleine et entière des présentes Conditions Générales de Vente.
              </p>
              <p className="text-xs text-slate-400 mt-4">
                Dernière mise à jour : 23 avril 2026
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CGV;
