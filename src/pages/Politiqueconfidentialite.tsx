import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import sectionBg from "@/assets/section-bg.jpg";

const PolitiqueConfidentialite = () => {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${sectionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/90 to-blue-50/85 backdrop-blur-sm"></div>

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

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-6 py-16 mt-8"
        >
          <div className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/50">
            <div className="relative text-center py-16 px-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-xl mb-6 border-4 border-white/50">
                <img src={logo} alt="PCNET UNIVERS" className="w-16 h-16 object-contain" />
              </div>
              <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-3 tracking-tight">
                PCNET UNIVERS
              </h1>
              <p className="text-slate-500 text-sm uppercase tracking-wider">
                Politique de Confidentialité & Protection des Données
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
              <a href="#responsable" className="text-slate-600 hover:text-primary transition-colors text-sm">1. Responsable du traitement</a>
              <a href="#collecte" className="text-slate-600 hover:text-primary transition-colors text-sm">2. Données collectées</a>
              <a href="#finalites" className="text-slate-600 hover:text-primary transition-colors text-sm">3. Finalités du traitement</a>
              <a href="#conservation" className="text-slate-600 hover:text-primary transition-colors text-sm">4. Durée de conservation</a>
              <a href="#partage" className="text-slate-600 hover:text-primary transition-colors text-sm">5. Partage des données</a>
              <a href="#cookies" className="text-slate-600 hover:text-primary transition-colors text-sm">6. Cookies</a>
              <a href="#droits" className="text-slate-600 hover:text-primary transition-colors text-sm">7. Vos droits (RGPD)</a>
              <a href="#securite" className="text-slate-600 hover:text-primary transition-colors text-sm">8. Sécurité</a>
            </div>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="max-w-4xl mx-auto px-6 pb-20 space-y-16">

          {/* 01 — Responsable */}
          <motion.section
            id="responsable"
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
                  Responsable du traitement
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-sm">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-3 font-medium">Société</h3>
                    <div className="space-y-1 text-slate-600">
                      <p className="font-medium text-slate-800">PCNET UNIVERS</p>
                      <p>82 rue les Épinettes</p>
                      <p>77600 Bussy-Saint-Georges</p>
                      <p>France</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-3 font-medium">Contact</h3>
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

          {/* 02 — Données collectées */}
          <motion.section
            id="collecte"
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
                <h2 className="text-2xl font-light text-slate-800 mb-6 tracking-tight">Données collectées</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-slate-800 mb-3">Via les formulaires du site</h3>
                    <p className="text-slate-600 leading-relaxed mb-3 text-sm">
                      Lors d'une demande de devis, de contact ou de commande, PCNET UNIVERS collecte :
                    </p>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      {[
                        "Raison sociale et nom du contact professionnel",
                        "Adresse e-mail professionnelle",
                        "Numéro de téléphone",
                        "Pays / Zone géographique (France, Europe, Afrique)",
                        "Nature et volume des produits souhaités (PC, portables, accessoires HP, Dell, Lenovo…)",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-800 mb-3">Données de navigation</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Adresse IP, pages visitées, durée de session, type de navigateur — collectées via cookies
                      analytiques avec votre consentement (voir section 6).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 03 — Finalités */}
          <motion.section
            id="finalites"
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
                <h2 className="text-2xl font-light text-slate-800 mb-6 tracking-tight">Finalités du traitement</h2>
                <div className="space-y-3">
                  {[
                    { title: "Traitement commercial", desc: "Répondre aux demandes de devis et valider manuellement chaque commande professionnelle." },
                    { title: "Relation client & logistique", desc: "Assurer le suivi, la facturation et l'expédition des commandes vers la France, l'Europe et l'Afrique." },
                    { title: "Obligations légales", desc: "Respecter les exigences comptables, fiscales et douanières liées aux échanges internationaux." },
                    { title: "Amélioration du service", desc: "Analyser la navigation pour optimiser l'expérience utilisateur du site vitrine PCNET UNIVERS." },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/60 border border-slate-100">
                      <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <div>
                        <p className="text-sm font-medium text-slate-800">{item.title}</p>
                        <p className="text-sm text-slate-600 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* 04 — Conservation */}
          <motion.section
            id="conservation"
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
                <h2 className="text-2xl font-light text-slate-800 mb-6 tracking-tight">Durée de conservation</h2>
                <div className="space-y-4">
                  <div className="bg-primary/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                    <p className="text-slate-700 leading-relaxed text-sm">
                      Données clients (devis, commandes, facturation) : conservées{" "}
                      <span className="font-semibold text-primary">10 ans</span> — obligations comptables françaises
                      (art. L123-22 Code de commerce).
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 p-4 rounded-xl bg-slate-50/60 border border-slate-100 text-sm text-slate-600">
                      <span className="font-medium text-slate-800">Contacts sans suite</span><br />
                      Suppression au bout de <span className="font-medium">3 ans</span> après le dernier échange.
                    </div>
                    <div className="flex-1 p-4 rounded-xl bg-slate-50/60 border border-slate-100 text-sm text-slate-600">
                      <span className="font-medium text-slate-800">Cookies analytiques</span><br />
                      Conservation maximale de <span className="font-medium">13 mois</span>.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 05 — Partage */}
          <motion.section
            id="partage"
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
                <h2 className="text-2xl font-light text-slate-800 mb-6 tracking-tight">Partage des données</h2>
                <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                  PCNET UNIVERS ne vend ni ne loue vos données à des tiers. Elles peuvent être transmises uniquement à :
                </p>
                <div className="space-y-3">
                  {[
                    { who: "Transporteurs & logistique", why: "Acheminement des commandes vers la France, l'Europe et l'Afrique." },
                    { who: "Prestataires techniques", why: "Hébergeur du site et outil de messagerie — agissant en sous-traitants RGPD." },
                    { who: "Autorités compétentes", why: "Douanes, administration fiscale si la loi l'impose expressément." },
                  ].map((item) => (
                    <div key={item.who} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/60 border border-slate-100">
                      <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <div>
                        <p className="text-sm font-medium text-slate-800">{item.who}</p>
                        <p className="text-sm text-slate-600 mt-0.5">{item.why}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-sm mt-4">
                  En cas de transfert hors Union Européenne (notamment vers l'Afrique), des garanties contractuelles
                  sont mises en place conformément au RGPD.
                </p>
              </div>
            </div>
          </motion.section>

          {/* 06 — Cookies */}
          <motion.section
            id="cookies"
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
                <h2 className="text-2xl font-light text-slate-800 mb-6 tracking-tight">Cookies</h2>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  Le site utilise un bandeau de consentement (composant <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">CookieConsent</code>).
                  Trois catégories sont utilisées :
                </p>
                <div className="space-y-3">
                  {[
                    { type: "Cookies essentiels", required: true, desc: "Navigation et sécurité du site. Ne peuvent pas être désactivés." },
                    { type: "Cookies analytiques", required: false, desc: "Mesure d'audience anonyme pour améliorer le contenu et l'ergonomie." },
                    { type: "Cookies de préférences", required: false, desc: "Mémorisation de vos choix (consentement cookies, langue)." },
                  ].map((c) => (
                    <div key={c.type} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/60 border border-slate-100">
                      <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${c.required ? "bg-slate-400" : "bg-primary"}`}></span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="text-sm font-medium text-slate-800">{c.type}</p>
                          {c.required && (
                            <span className="text-xs bg-slate-200 text-slate-500 px-2 py-0.5 rounded-full">Obligatoire</span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-sm mt-4">
                  Vous pouvez modifier vos préférences à tout moment via le bandeau de consentement présent sur le site.
                </p>
              </div>
            </div>
          </motion.section>

          {/* 07 — Droits RGPD */}
          <motion.section
            id="droits"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/60"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">07</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-slate-800 mb-6 tracking-tight">Vos droits RGPD</h2>
                <p className="text-slate-600 leading-relaxed mb-5 text-sm">
                  Conformément au Règlement (UE) 2016/679 (RGPD), vous disposez des droits suivants :
                </p>
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  {[
                    "Droit d'accès à vos données",
                    "Droit de rectification",
                    "Droit à l'effacement (« droit à l'oubli »)",
                    "Droit à la limitation du traitement",
                    "Droit à la portabilité",
                    "Droit d'opposition",
                  ].map((droit) => (
                    <div key={droit} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/60 border border-slate-100 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      {droit}
                    </div>
                  ))}
                </div>
                <div className="p-5 rounded-xl bg-primary/10 border border-primary/20">
                  <p className="text-sm text-slate-700">
                    Pour exercer vos droits :{" "}
                    <a href="mailto:pcnetunivers@gmail.com" className="text-primary hover:underline font-medium">
                      pcnetunivers@gmail.com
                    </a>
                    . En cas de litige non résolu, vous pouvez saisir la{" "}
                    <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                      CNIL
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 08 — Sécurité */}
          <motion.section
            id="securite"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/60"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">08</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light text-slate-800 mb-6 tracking-tight">Sécurité des données</h2>
                <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                  PCNET UNIVERS applique des mesures techniques et organisationnelles pour protéger vos données :
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Chiffrement HTTPS", desc: "Toutes les communications entre votre navigateur et le site sont sécurisées." },
                    { label: "Accès restreint", desc: "Seule l'administratrice de PCNET UNIVERS accède aux données commerciales." },
                    { label: "Validation manuelle", desc: "Chaque commande est traitée manuellement, limitant les risques liés à l'automatisation." },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/60 border border-slate-100">
                      <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <div>
                        <p className="text-sm font-medium text-slate-800">{item.label}</p>
                        <p className="text-sm text-slate-600 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <div className="inline-block bg-white/80 backdrop-blur-md rounded-2xl px-12 py-8 shadow-xl border border-white/60">
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                La présente politique peut être mise à jour à tout moment. La date ci-dessous fait foi.
              </p>
              <p className="text-xs text-slate-400 mt-4">
                Dernière mise à jour :{" "}
                {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
