"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
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
}

const blogPosts: BlogPost[] = [
  {
    title: "L'Avenir du Cloud Computing : Tendances à Surveiller",
    excerpt: "Découvrez les tendances émergentes du cloud computing qui vont transformer les entreprises dans les années à venir.",
    category: "Cloud",
    date: new Date("2023-12-10"),
    author: "Alex Richards",
    authorRole: "Architecte Cloud",
    authorImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "future-of-cloud-computing",
  },
  {
    title: "Sécuriser Votre Entreprise à l'Ère des Cybermenaces",
    excerpt: "Apprenez les stratégies essentielles de cybersécurité pour protéger votre organisation des menaces numériques en évolution.",
    category: "Sécurité",
    date: new Date("2023-11-28"),
    author: "Maya Patel",
    authorRole: "Spécialiste en Sécurité",
    authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "securing-business-cyber-threats",
  },
  {
    title: "Implémentation de l'IA : Du Concept à la Réalité",
    excerpt: "Un guide pratique pour mettre en œuvre avec succès des solutions d'IA dans vos opérations commerciales.",
    category: "IA",
    date: new Date("2023-11-15"),
    author: "James Wilson",
    authorRole: "Responsable IA",
    authorImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "ai-implementation-guide",
  },
];

export default function BlogPage() {
  return (
    <main className="flex-1">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Blog</h1>
            <p className="text-xl text-muted-foreground">
              Découvrez nos derniers articles, analyses et conseils sur la technologie et l&apos;innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {formatDistanceToNow(post.date, { addSuffix: true, locale: fr })}
                    </span>
                  </div>
                  <CardTitle className="mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center space-x-4">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}