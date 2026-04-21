import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="gradient-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      {/* GRID PRINCIPALE */}
      <div className="grid md:grid-cols-3 items-start text-center md:text-left">
        
        {/* GAUCHE */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="PCNET UNIVERS"
            className="h-18 md:h-24 mb-4 brightness-0 invert object-contain"
          />
          <p className="text-sm opacity-70 leading-relaxed max-w-xs">
            Grossiste en matériel informatique. Solutions fiables pour les professionnels depuis plus de 20 ans.
          </p>
        </div>

        {/* MILIEU */}
        <div className="flex flex-col items-center">
          <h4 className="font-semibold font-heading mb-4">Navigation</h4>
          <div className="space-y-2">
            {["Accueil", "À propos", "Produits", "Services", "Devis", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l === "À propos" ? "apropos" : l.toLowerCase()}`}
                className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

  <div className="flex flex-col items-center">

  <h4 className="font-semibold font-heading mb-4 text-center">
    Contact
  </h4>

  <div className="space-y-2 text-sm opacity-70 text-left w-fit">
    <p>82 rue les Épinettes</p>
    <p>77600 Bussy-Saint-Georges</p>
    <p>+33 6 25 15 94 52</p>
    <p>pcnetunivers@gmail.com</p>
  </div>

</div>

</div>

      </div>

      {/* BAS */}
      <div className="border-t border-[hsl(0,0%,100%/0.15)] mt-12 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} PCNET UNIVERS. Tous droits réservés.
      </div>
      
    
  </footer>
);

export default Footer;