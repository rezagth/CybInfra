import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Accompagnement Stratégique en Sécurité et Digital | CybInfra",
  description: "Définissez votre futur numérique avec l'accompagnement stratégique de CybInfra. Audit, diagnostic, planification et suivi pour votre sécurité et stratégie digitale.",
};

export default function StrategicAccompanimentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Retour à l&apos;accueil
          </Link>
        </Button>
      </div>
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-6 md:text-5xl">Accompagnement Stratégique en Sécurité & Informatique</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Notre service phare : Un accompagnement sur-mesure qui définit votre stratégie globale en matière de sécurité et d'informatique. Grâce à notre expertise, nous vous aidons à établir une feuille de route claire et adaptée à vos objectifs.
            </p>

            {/* Section Principale */}
            <section className="mb-16 bg-primary/10 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-extrabold mb-6 text-primary">Notre Approche Stratégique</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Une Méthodologie Complète</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl font-bold">1.</span>
                      <div>
                        <h4 className="font-semibold text-lg">Audit & Diagnostic</h4>
                        <p className="text-muted-foreground text-sm">Analyse approfondie de votre environnement IT, identification des risques et opportunités.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl font-bold">2.</span>
                      <div>
                        <h4 className="font-semibold text-lg">Planification Stratégique</h4>
                        <p className="text-muted-foreground text-sm">Élaboration d'une feuille de route personnalisée avec des objectifs clairs et mesurables.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl font-bold">3.</span>
                      <div>
                        <h4 className="font-semibold text-lg">Suivi & Ajustement</h4>
                        <p className="text-muted-foreground text-sm">Accompagnement continu avec des rapports réguliers et des ajustements en temps réel.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Votre Portail Client Dédié</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Accédez à toutes les informations et ressources importantes via votre portail client personnalisé :
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Rapports détaillés et analyses
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Tableaux de bord personnalisés
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Documentation et ressources
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="text-primary">✓</div>
                      Suivi des actions et recommandations
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section Avantages */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Les Avantages de Notre Accompagnement</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Vision Globale</h3>
                  <p className="text-muted-foreground text-sm">
                    Une approche holistique qui prend en compte tous les aspects de votre système d'information et de votre sécurité.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Suivi Continu</h3>
                  <p className="text-muted-foreground text-sm">
                    Un accompagnement régulier via notre modèle d'abonnement, garantissant une adaptation constante à vos besoins.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Expertise Pointue</h3>
                  <p className="text-muted-foreground text-sm">
                    Bénéficiez de l'expertise de nos consultants spécialisés en sécurité et transformation numérique.
                  </p>
                </div>
              </div>
            </section>

            {/* Section CTA */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-4">Prêt à Définir Votre Stratégie ?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Contactez-nous pour découvrir comment notre accompagnement stratégique peut transformer votre approche de la sécurité et de l'informatique.
              </p>
              <a href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition">
                Démarrer Votre Accompagnement
              </a>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
} 