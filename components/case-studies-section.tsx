"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Modernisation de la Plateforme FinTech",
    category: "Services Financiers",
    description: "Refonte complète de l'infrastructure numérique d'un grand fournisseur de services financiers, résultant en un traitement des transactions 40% plus rapide et une sécurité renforcée.",
    image: "https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Migration Cloud", "Sécurité", "Performance"],
  },
  {
    title: "Plateforme de Données de Santé",
    category: "Santé",
    description: "Développement d'un système de gestion de données conforme HIPAA qui a amélioré le temps d'accès aux données des patients de 60% tout en maintenant les plus hauts standards de sécurité.",
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Gestion des Données", "Sécurité", "Santé"],
  },
  {
    title: "Transformation E-commerce",
    category: "Commerce de Détail",
    description: "Réinvention de l'expérience numérique pour un détaillant mondial, augmentant les ventes en ligne de 135% et réduisant l'abandon de panier de 28%.",
    image: "https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["E-commerce", "UI/UX", "Performance"],
  },
];

export function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Études de Cas</h2>
            <p className="text-xl text-muted-foreground">
              Découvrez comment nous avons aidé les entreprises à se transformer grâce à la technologie
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <Card className="h-full overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-primary/20 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {study.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground mb-4">
                    {study.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="group px-0 text-primary flex items-center"
                    asChild
                  >
                    <Link href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, "-")}>`}>
                      Lire l&apos;Étude de Cas
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/case-studies">
              Voir Toutes les Études de Cas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}