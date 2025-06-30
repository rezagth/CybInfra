import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings, Target, BarChart3, Zap, Workflow, Gauge, RefreshCw } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Automatisation & Optimisation | CybInfra",
  description: "CybInfra propose des solutions d'automatisation et d'optimisation des processus, intégrées dans une stratégie globale définie par notre accompagnement stratégique.",
};

export default function AutomationPage() {
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
            <h1 className="text-4xl font-bold text-center mb-6 md:text-5xl">Automatisation & Optimisation</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Des solutions d'automatisation intelligentes pour optimiser vos processus
            </p>

            {/* Section Principale */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Nos Solutions d'Automatisation</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <Workflow className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Automatisation des Processus</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Workflows automatisés
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Intégration de systèmes
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Automatisation des tâches
                    </li>
                  </ul>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <Gauge className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Optimisation</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Performance des systèmes
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Efficacité opérationnelle
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Réduction des coûts
                    </li>
                  </ul>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <RefreshCw className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Maintenance & Support</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Maintenance préventive
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Support technique
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Mises à jour automatiques
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
                    Automatisez avec une Vision Stratégique
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Pour maximiser l'efficacité de vos processus, nous vous recommandons de commencer par notre accompagnement stratégique qui définira votre feuille de route d'automatisation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span>Analyse des processus</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span>Stratégie d'automatisation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span>Solutions automatisées</span>
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
                      <span>Identification des processus prioritaires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-blue-600 dark:text-blue-400 mt-1">✓</div>
                      <span>Solutions d'automatisation alignées avec vos objectifs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-blue-600 dark:text-blue-400 mt-1">✓</div>
                      <span>ROI optimisé sur vos investissements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-blue-600 dark:text-blue-400 mt-1">✓</div>
                      <span>Transformation progressive et maîtrisée</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section CTA */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-4">Besoin d'une Solution d'Automatisation ?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Pour une approche complète, nous vous recommandons de commencer par notre accompagnement stratégique qui définira votre feuille de route d'automatisation.
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
