import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Target, BarChart3, Lock, AlertTriangle, Eye } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Solutions de Cybersécurité Techniques | CybInfra",
  description: "CybInfra propose des solutions techniques de cybersécurité robustes (protection des systèmes, surveillance) alignées avec votre stratégie globale.",
};

export default function CybersecurityPage() {
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
            <h1 className="text-4xl font-bold text-center mb-6 md:text-5xl">Cybersécurité : Protection & Surveillance</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Des solutions techniques robustes pour protéger vos systèmes et surveiller vos infrastructures
            </p>

            {/* Section Principale */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Nos Solutions de Cybersécurité</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Protection des Systèmes</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Pare-feu nouvelle génération
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Protection contre les malwares
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Sécurisation des endpoints
                    </li>
                  </ul>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Surveillance & Détection</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Monitoring 24/7
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Détection des intrusions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Analyse des logs
                    </li>
                  </ul>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Gestion des Incidents</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Réponse aux incidents
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Plan de continuité
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Récupération des données
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
                    Une Protection Optimale avec Notre Accompagnement
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Pour maximiser l'efficacité de nos solutions techniques, nous vous recommandons de commencer par notre accompagnement stratégique qui définira votre feuille de route en matière de sécurité.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span>Audit de sécurité complet</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span>Stratégie de protection adaptée</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span>Solutions techniques ciblées</span>
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
                      <span>Identification précise des risques et vulnérabilités</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-blue-600 dark:text-blue-400 mt-1">✓</div>
                      <span>Solutions techniques alignées avec vos objectifs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-blue-600 dark:text-blue-400 mt-1">✓</div>
                      <span>Investissement optimisé dans la sécurité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-blue-600 dark:text-blue-400 mt-1">✓</div>
                      <span>Protection globale et cohérente</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section CTA */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-4">Besoin d'une Protection Technique ?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Pour une approche complète, nous vous recommandons de commencer par notre accompagnement stratégique qui définira votre feuille de route en matière de sécurité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services/strategic-accompaniment" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Découvrir l'Accompagnement Stratégique
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  Demander un Audit
                </Link>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}