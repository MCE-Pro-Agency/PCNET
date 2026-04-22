import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Qui suis-je", href: "/qui-suis-je" },
  { label: "À propos", href: "/#apropos" },
  { label: "Produits", href: "/#produits" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isRouteLink = (href: string) =>
    href.startsWith("/") && !href.includes("#");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* LOGO */}
        <Link to="/">
          <img
            src={logo}
            alt="PCNET UNIVERS"
            className="h-10 md:h-8 object-contain scale-125 origin-left"
          />
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            isRouteLink(l.href) ? (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === l.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            )
          )}

          <a
            href="/#devis"
            className="gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Demander un devis
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-6 pb-6 space-y-4">
          {navLinks.map((l) =>
            isRouteLink(l.href) ? (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {l.label}
              </a>
            )
          )}

          <a
            href="/#devis"
            onClick={() => setOpen(false)}
            className="block gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
          >
            Demander un devis
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;