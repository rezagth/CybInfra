export default function TeamPage() {
  return (
    <main className="flex-1 pt-20"> {/* Décalage si tu as une navbar */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-md">
          <h1 className="text-4xl font-bold mb-12 text-center">Notre Équipe</h1>
          <div className="bg-card rounded-lg p-8 text-center shadow-lg">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center text-primary text-6xl font-bold select-none">
              NC
            </div>
            <h3 className="text-2xl font-semibold mb-2">Noam Chemoul</h3>
            <p className="text-muted-foreground text-lg">Fondateur & Expert Sécurité</p>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs mx-auto">
              Passionné par la sécurité informatique et le digital, je mets mon expertise au service de votre transformation numérique avec un accompagnement personnalisé.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
