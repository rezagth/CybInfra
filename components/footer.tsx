import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  ChevronRight,
  Mail
} from "lucide-react";

const footerLinks = {
  company: [
    { title: "À Propos", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ],
  services: [
    { title: "Accompagnement Stratégique", href: "/services/strategic-accompaniment" },
    { title: "Cybersécurité", href: "/services/cybersecurity" },
    { title: "IT Management", href: "/services/it-management" },
    { title: "Automatisation", href: "/services/automation" },
    { title: "Développement", href: "/services/development" },
  ],
  legal: [
    { title: "Mentions Légales", href: "/legal" },
    { title: "Politique de Confidentialité", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                CybInfra
              </span>
            </Link>
            <p className="mt-2 max-w-md text-gray-400 text-sm">
              Leader dans la fourniture de solutions informatiques novatrices et de services de transformation numérique pour les entreprises mondiales.
            </p>
            <div className="mt-6 flex space-x-3">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Notre Équipe
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Carrières
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Accompagnement</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/strategic-accompaniment" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Accompagnement Stratégique Global
                </Link>
              </li>
              <li>
                <Link href="/services/strategic-accompaniment#audit-diagnostic" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Audit & Diagnostic
                </Link>
              </li>
              <li>
                <Link href="/services/strategic-accompaniment#portal" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Portail Client Dédié
                </Link>
              </li>
              <li>
                <Link href="/services/strategic-accompaniment#suivi-rapports" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Suivi & Rapports Personnalisés
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Services Techniques</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/cybersecurity" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cybersécurité
                </Link>
              </li>
              <li>
                <Link href="/services/automation" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Automatisation
                </Link>
              </li>
              <li>
                <Link href="/services/development" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Développement Web
                </Link>
              </li>
              <li>
                <Link href="/services/it-management" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Infogérance
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Abonnez-vous à notre newsletter</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Restez informé de nos dernières actualités et offres.
            </p>
            <div className="mt-4 flex max-w-sm gap-2">
              <Input
                type="email"
                placeholder="En cours de construction"
                className="rounded-md bg-gray-800 border-gray-700 text-white placeholder-gray-500"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-6 flex items-center">
              <Mail className="h-5 w-5 mr-2 text-gray-400" />
              <span className="text-gray-400 text-sm">noam.chemoul@hotmail.com</span>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} CybInfra. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}