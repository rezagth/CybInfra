import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Target, BarChart3, Globe, Smartphone, Layers } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Développement Web & Mobile | CybInfra",
  description: "CybInfra propose des solutions de développement web et mobile sur mesure, intégrées dans une stratégie digitale globale définie par notre accompagnement stratégique.",
};

export default function DevelopmentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/services" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Retour aux services
          </Link>
        </Button>
      </div>

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-6 md:text-5xl">Développement Web & Mobile</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Des solutions digitales sur mesure pour répondre à vos besoins spécifiques
            </p>

            {/* Section Principale */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Nos Solutions de Développement</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Développement Web</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Sites web performants
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Applications web sur mesure
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      E-commerce
                    </li>
                  </ul>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Développement Mobile</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Applications iOS & Android
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Applications hybrides
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      PWA
                    </li>
                  </ul>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Architecture & API</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Architecture cloud-native
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      API REST & GraphQL
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Microservices
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section Accompagnement Stratégique */}
            <section className="mb-16 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Développez avec une Vision Stratégique
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Pour maximiser l'impact de vos solutions digitales, nous vous recommandons de commencer par notre accompagnement stratégique qui définira votre feuille de route technologique.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span>Analyse des besoins et objectifs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span>Stratégie technologique adaptée</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span>Développement sur mesure</span>
                    </div>
                  </div>
                  <Link 
                    href="/services/strategic-accompaniment"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Découvrir l'accompagnement stratégique
                  </Link>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Pourquoi Commencer par l'Accompagnement ?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="text-blue-600 dark:text-blue-400 mt-1">✓</div>
                      <span>Solutions techniques alignées avec vos objectifs business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-blue-600 dark:text-blue-400 mt-1">✓</div>
                      <span>Architecture évolutive et maintenable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-blue-600 dark:text-blue-400 mt-1">✓</div>
                      <span>ROI optimisé sur vos investissements tech</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-blue-600 dark:text-blue-400 mt-1">✓</div>
                      <span>Vision long terme de votre transformation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section CTA */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-4">Besoin d'une Solution Technique ?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Pour une approche complète, nous vous recommandons de commencer par notre accompagnement stratégique qui définira votre feuille de route technologique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services/strategic-accompaniment" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Découvrir l'Accompagnement Stratégique
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  Demander un Devis
                </Link>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}