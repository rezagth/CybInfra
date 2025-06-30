import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Position {
  title: string;
  description: string;
}

export default function CareersPage() {
  const openPositions: Position[] = [
    
  ];

  return (
    <main className="flex-1">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Carrières</h1>
          <div className="space-y-8">
            {Array.isArray(openPositions) && openPositions.length > 0 ? (
              openPositions.map((position, index) => (
                <div key={index} className="bg-card rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">{position?.title || ""}</h3>
                  <p className="text-muted-foreground mb-4">{position?.description || ""}</p>
                  <Button>Postuler</Button>
                </div>
              ))
            ) : (
              <div className="bg-card rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Aucun poste disponible actuellement</h3>
                <p className="text-muted-foreground mb-4">
                  Nous n&apos;avons pas de postes ouverts pour le moment, mais n&apos;hésitez pas à nous envoyer votre CV pour de futures opportunités.
                </p>
                <Button asChild>
                  <Link href="/contact">Candidature spontanée</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}