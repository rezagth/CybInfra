import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Code, Settings, Server, Target, BarChart3, Zap, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'Nos Services | CybInfra',
  description: "Découvrez l'accompagnement stratégique et les services techniques de CybInfra en cybersécurité, développement, automatisation et gestion IT pour votre transformation numérique.",
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Bouton Retour */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Link>
        </Button>
      </div>

      <div className="text-center mb-16 md:mb-20">
        <h1 className="text-4xl font-bold mb-4 md:text-5xl">Notre Offre de Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          CybInfra vous guide dans votre transformation digitale avec un accompagnement stratégique sur mesure et des solutions techniques spécialisées pour des résultats concrets.
        </p>
      </div>

      {/* Section Accompagnement Stratégique - Mise en avant */}
      <section className="mb-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-blue-100 dark:border-blue-900">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-md">Service Clé</div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent leading-tight">
              Accompagnement Stratégique <br className="hidden md:inline"/> pour une Vision Claire
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              Plus qu'un simple service, c'est le point de départ essentiel de votre réussite numérique. Nous construisons ensemble la feuille de route adaptée à vos enjeux uniques.
            </p>
            <ul className="space-y-4 text-base text-gray-800 dark:text-gray-100">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span>Audit approfondi et diagnostic précis de votre situation actuelle.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span>Élaboration d'une stratégie numérique et de sécurité sur mesure.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span>Planification claire et priorisation des actions pour un impact maximal.</span>
              </li>
            </ul>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 mt-8 shadow-lg hover:shadow-xl">
              <Link href="/services/strategic-accompaniment">
                Découvrir l'accompagnement stratégique
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
           <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Accompagnement Stratégique - Discussion d'équipe"
                fill
                className="object-cover"
              />
            </div>
        </div>
      </section>

      {/* Section Services Techniques - Grille */}
      <section className="py-12 md:py-16">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold mb-4">Nos Solutions Techniques Spécialisées</h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             Une fois la stratégie définie, nos équipes techniques déploient et gèrent les solutions concrètes pour atteindre vos objectifs.
           </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {/* Carte Cybersécurité */}
          <div className="bg-card p-8 rounded-lg shadow-md flex flex-col border border-border hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-6 flex-shrink-0">
              <Shield className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cybersécurité</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Protégez vos actifs numériques avec nos solutions de défense robustes et proactives.
            </p>
            <Link href="/services/cybersecurity" className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mt-auto font-semibold">
              En savoir plus
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Carte Développement */}
          <div className="bg-card p-8 rounded-lg shadow-md flex flex-col border border-border hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-6 flex-shrink-0">
              <Code className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Développement Web & Mobile</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Créez des expériences digitales sur mesure, performantes et sécurisées.
            </p>
            <Link href="/services/development" className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mt-auto font-semibold">
              En savoir plus
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Carte Automatisation */}
          <div className="bg-card p-8 rounded-lg shadow-md flex flex-col border border-border hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-6 flex-shrink-0">
              <Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Automatisation & Optimisation</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Gagnez en efficacité et réduisez les coûts par l'automatisation intelligente de vos processus.
            </p>
            <Link href="/services/automation" className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mt-auto font-semibold">
              En savoir plus
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Carte Gestion IT */}
          <div className="bg-card p-8 rounded-lg shadow-md flex flex-col border border-border hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-6 flex-shrink-0">
              <Server className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Gestion IT & Infogérance</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Déléguez la gestion de votre infrastructure IT pour vous concentrer sur votre cœur de métier.
            </p>
            <Link href="/services/it-management" className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mt-auto font-semibold">
              En savoir plus
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
} 