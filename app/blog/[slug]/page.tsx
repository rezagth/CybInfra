import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: Date;
  author: string;
  authorRole: string;
  authorImage: string;
  image: string;
  slug: string;
  content?: JSX.Element;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts: BlogPost[] = [
    {
      title: "L'Avenir du Cloud Computing : Tendances à Surveiller",
      excerpt: "Découvrez les tendances émergentes du cloud computing qui vont transformer les entreprises dans les années à venir.",
      category: "Cloud",
      date: new Date("2023-12-10"),
      author: "Alex Richards",
      authorRole: "Architecte Cloud",
      authorImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      slug: "future-of-cloud-computing",
      content: (
        <div className="text-white space-y-4">
          <h1 className="mb-2">L&apos;Avenir du Cloud Computing : Tendances à Surveiller</h1>
          <h2 className="mb-2">Introduction</h2>
          <p className="mb-2">Le cloud computing continue d&apos;évoluer à un rythme sans précédent, transformant la façon dont les entreprises opèrent et innovent. Dans cet article, nous explorerons les tendances majeures qui façonneront l&apos;avenir du cloud computing.</p>
          <h2 className="mb-2">1. L&apos;Essor du Multi-Cloud</h2>
          <p className="mb-2">Les entreprises adoptent de plus en plus une stratégie multi-cloud pour plusieurs raisons :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Réduction des risques de dépendance à un seul fournisseur</li>
            <li>Optimisation des coûts et des performances</li>
            <li>Flexibilité accrue dans le choix des services</li>
          </ul>
          <h2 className="mb-2">2. Edge Computing et Cloud</h2>
          <p className="mb-2">L&apos;edge computing émerge comme un complément essentiel au cloud computing :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Traitement des données plus proche de la source</li>
            <li>Réduction de la latence pour les applications critiques</li>
            <li>Support des applications IoT et temps réel</li>
          </ul>
          <h2 className="mb-2">3. Intelligence Artificielle et Machine Learning</h2>
          <p className="mb-2">L&apos;intégration de l&apos;IA dans le cloud ouvre de nouvelles possibilités :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Automatisation intelligente des processus</li>
            <li>Analyse prédictive avancée</li>
            <li>Personnalisation en temps réel</li>
          </ul>
          <h2 className="mb-2">4. Sécurité et Conformité</h2>
          <p className="mb-2">La sécurité reste une priorité absolue :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Chiffrement de bout en bout</li>
            <li>Authentification Zero Trust</li>
            <li>Conformité aux réglementations (RGPD, etc.)</li>
          </ul>
          <h2 className="mb-2">5. Containers et Microservices</h2>
          <p className="mb-2">L&apos;architecture moderne du cloud s&apos;appuie sur :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Orchestration Kubernetes</li>
            <li>Déploiement automatisé</li>
            <li>Scalabilité dynamique</li>
          </ul>
          <h2 className="mb-2">Conclusion</h2>
          <p className="mb-2">Le cloud computing continue d&apos;évoluer et d&apos;innover, offrant de nouvelles opportunités pour les entreprises qui savent en tirer parti.</p>
          <h2 className="mb-2">Ressources Complémentaires</h2>
          <ul className="list-disc pl-5 mb-2">
            <li>Guides pratiques d&apos;implémentation</li>
            <li>Études de cas</li>
            <li>Meilleures pratiques</li>
          </ul>
        </div>
      )
    },
    {
      title: "Sécuriser Votre Entreprise à l'Ère des Cybermenaces",
      excerpt: "Apprenez les stratégies essentielles de cybersécurité pour protéger votre organisation des menaces numériques en évolution.",
      category: "Sécurité",
      date: new Date("2023-11-28"),
      author: "Maya Patel",
      authorRole: "Spécialiste en Sécurité",
      authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      slug: "securing-business-cyber-threats",
      content: (
        <div className="text-white space-y-4">
          <h1 className="mb-2">Sécuriser Votre Entreprise à l&apos;Ère des Cybermenaces</h1>
          <h2 className="mb-2">Introduction</h2>
          <p className="mb-2">Dans un monde de plus en plus connecté, la cybersécurité est devenue une priorité absolue pour toute organisation. Découvrez les stratégies essentielles pour protéger votre entreprise.</p>
          <h2 className="mb-2">1. Évaluation des Risques</h2>
          <p className="mb-2">Une approche systématique de la sécurité commence par :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Identification des actifs critiques</li>
            <li>Analyse des vulnérabilités</li>
            <li>Évaluation des menaces potentielles</li>
          </ul>
          <h2 className="mb-2">2. Protection des Données</h2>
          <p className="mb-2">Mesures essentielles de protection :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Chiffrement des données sensibles</li>
            <li>Gestion des sauvegardes</li>
            <li>Contrôle d&apos;accès granulaire</li>
          </ul>
          <h2 className="mb-2">3. Sécurité du Réseau</h2>
          <p className="mb-2">Protection de l&apos;infrastructure réseau :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Pare-feu nouvelle génération</li>
            <li>Segmentation du réseau</li>
            <li>Détection des intrusions</li>
          </ul>
          <h2 className="mb-2">4. Formation des Employés</h2>
          <p className="mb-2">L&apos;humain est souvent le maillon faible :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Sensibilisation aux phishing</li>
            <li>Bonnes pratiques de sécurité</li>
            <li>Gestion des mots de passe</li>
          </ul>
          <h2 className="mb-2">5. Plan de Réponse aux Incidents</h2>
          <p className="mb-2">Préparation aux cyberattaques :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Procédures d&apos;urgence</li>
            <li>Équipe de réponse</li>
            <li>Communication de crise</li>
          </ul>
          <h2 className="mb-2">6. Conformité et Réglementation</h2>
          <p className="mb-2">Respect des normes :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>RGPD</li>
            <li>ISO 27001</li>
            <li>Normes sectorielles</li>
          </ul>
          <h2 className="mb-2">Conclusion</h2>
          <p className="mb-2">La cybersécurité est un processus continu qui nécessite vigilance et adaptation constante.</p>
          <h2 className="mb-2">Ressources</h2>
          <ul className="list-disc pl-5 mb-2">
            <li>Outils recommandés</li>
            <li>Guides de configuration</li>
            <li>Audits de sécurité</li>
          </ul>
        </div>
      )
    },
    {
      title: "Implémentation de l'IA : Du Concept à la Réalité",
      excerpt: "Un guide pratique pour mettre en œuvre avec succès des solutions d'IA dans vos opérations commerciales.",
      category: "IA",
      date: new Date("2023-11-15"),
      author: "James Wilson",
      authorRole: "Responsable IA",
      authorImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      slug: "ai-implementation-guide",
      content: (
        <div className="text-white space-y-4">
          <h1 className="mb-2">Implémentation de l&apos;IA : Du Concept à la Réalité</h1>
          <h2 className="mb-2">Introduction</h2>
          <p className="mb-2">L&apos;intelligence artificielle transforme rapidement le paysage des affaires. Voici un guide complet pour implémenter l&apos;IA dans votre entreprise.</p>
          <h2 className="mb-2">1. Évaluation des Besoins</h2>
          <p className="mb-2">Premières étapes cruciales :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Identification des cas d&apos;usage</li>
            <li>Analyse de la faisabilité</li>
            <li>Évaluation des ressources nécessaires</li>
          </ul>
          <h2 className="mb-2">2. Préparation des Données</h2>
          <p className="mb-2">Base de tout projet d&apos;IA :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Collecte et nettoyage</li>
            <li>Structuration et annotation</li>
            <li>Gestion de la qualité</li>
          </ul>
          <h2 className="mb-2">3. Choix des Technologies</h2>
          <p className="mb-2">Sélection des outils adaptés :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Frameworks d&apos;IA</li>
            <li>Infrastructure cloud</li>
            <li>Outils de développement</li>
          </ul>
          <h2 className="mb-2">4. Développement et Test</h2>
          <p className="mb-2">Phases de mise en œuvre :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Prototypage rapide</li>
            <li>Tests itératifs</li>
            <li>Validation des résultats</li>
          </ul>
          <h2 className="mb-2">5. Déploiement</h2>
          <p className="mb-2">Mise en production :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Intégration système</li>
            <li>Monitoring</li>
            <li>Optimisation continue</li>
          </ul>
          <h2 className="mb-2">6. Formation et Adoption</h2>
          <p className="mb-2">Accompagnement des équipes :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>Formation technique</li>
            <li>Gestion du changement</li>
            <li>Support utilisateur</li>
          </ul>
          <h2 className="mb-2">7. Mesure du ROI</h2>
          <p className="mb-2">Évaluation de la réussite :</p>
          <ul className="list-disc pl-5 mb-2">
            <li>KPIs pertinents</li>
            <li>Analyse d&apos;impact</li>
            <li>Ajustements stratégiques</li>
          </ul>
          <h2 className="mb-2">Conclusion</h2>
          <p className="mb-2">L&apos;implémentation réussie de l&apos;IA nécessite une approche méthodique et une vision claire des objectifs.</p>
          <h2 className="mb-2">Ressources</h2>
          <ul className="list-disc pl-5 mb-2">
            <li>Études de cas</li>
            <li>Outils recommandés</li>
            <li>Documentation technique</li>
          </ul>
        </div>
      )
    }
  ];

  return posts.find(post => post.slug === slug) || null;
}

export async function generateStaticParams() {
  // Retourner tous les slugs d'articles disponibles
  return [
    { slug: "future-of-cloud-computing" },
    { slug: "securing-business-cyber-threats" },
    { slug: "ai-implementation-guide" }
  ];
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1">
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link href="/blog" className="inline-flex items-center mb-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Retour
              </Link>
              <Badge variant="secondary" className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

              <div className="flex items-center space-x-4 mb-8">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatDistanceToNow(post.date, { addSuffix: true, locale: fr })}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
