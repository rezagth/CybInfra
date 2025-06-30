"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Pourquoi l'Accompagnement Stratégique est Essentiel pour Votre Transformation Numérique",
    excerpt: "Découvrez comment notre approche d'accompagnement stratégique transforme la vision IT des entreprises, de l'audit initial à la mise en œuvre réussie.",
    category: "Accompagnement",
    date: new Date("2024-01-15"),
    author: "Alex Richards",
    authorRole: "Directeur Stratégique",
    authorImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "strategic-accompaniment-importance",
  },
  {
    title: "Le Portail Client : Votre Fenêtre sur la Sécurité IT",
    excerpt: "Comment notre portail client dédié révolutionne le suivi de votre sécurité IT et vous donne une visibilité sans précédent sur votre infrastructure.",
    category: "Accompagnement",
    date: new Date("2024-01-10"),
    author: "Maya Patel",
    authorRole: "Responsable Accompagnement",
    authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "client-portal-security",
  },
  {
    title: "De l'Audit à l'Action : Notre Méthodologie d'Accompagnement",
    excerpt: "Un aperçu détaillé de notre approche en 4 étapes : audit, diagnostic, planification et suivi continu pour une transformation IT réussie.",
    category: "Accompagnement",
    date: new Date("2024-01-05"),
    author: "James Wilson",
    authorRole: "Expert en Transformation",
    authorImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "audit-to-action-methodology",
  },
];

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Expertise en Accompagnement</h2>
            <p className="text-xl text-muted-foreground">
              Découvrez nos articles sur l&apos;accompagnement stratégique et la transformation numérique
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0"
          >
            <Button variant="outline" asChild>
              <Link href="/blog">
                Voir Tous les Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={post.title}></Link>
              <Card className="h-full overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-primary/20 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">{post.author}</p>
                      <p className="text-muted-foreground">{formatDistanceToNow(post.date, { addSuffix: true })}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="group px-0 text-primary flex items-center relative z-20 pointer-events-none"
                  >
                    Lire l&apos;Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}