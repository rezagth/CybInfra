"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { AnimatedGradientText } from "@/components/animated-gradient-text";

const stats = [
  {
    icon: <Users className="h-5 w-5" />,
    value: "1",
    label: "Expert Tech",
  },
  {
    icon: <Award className="h-5 w-5" />,
    value: "5+",
    label: "Année d'Expérience",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    value: "50+",
    label: "Projet Réalisé",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    value: "100%",
    label: "Garantie de Disponibilité",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative -mt-24 md:-mt-32"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl z-10">
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Équipe CybInfra en réunion"
                width={600}
                height={400}
                className="w-full object-cover rounded-lg"
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* Éléments décoratifs */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 border-8 border-muted z-0 rounded-lg"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Notre Service Phare :{" "}
                <AnimatedGradientText text="L'Accompagnement Stratégique" />
              </h2>
              <p className="text-lg text-primary font-semibold mb-6">
                La Fondation de Votre Transformation Numérique
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nous croyons que la transformation numérique réussie commence
                par une stratégie solide. Notre accompagnement stratégique est
                conçu pour guider votre entreprise à travers chaque étape de sa
                transformation numérique, en mettant l'accent sur la sécurité
                et la performance.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <h3 className="text-xl font-semibold mb-4">
                  Notre Approche en 4 Étapes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <span>
                      <strong>Audit & Diagnostic</strong> : Analyse approfondie
                      de votre environnement IT et de vos besoins
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <span>
                      <strong>Planification</strong> : Élaboration d'une feuille
                      de route personnalisée
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <span>
                      <strong>Suivi Continu</strong> : Accompagnement mensuel
                      via votre portail client dédié
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">4.</span>
                    <span>
                      <strong>Formation & Conformité</strong> : Support pour
                      RGPD, ISO 27001, NIS2 et formation des équipes
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="mt-6" asChild>
                <Link href="/services/strategic-accompaniment">
                  Découvrir notre accompagnement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="mt-6" asChild>
                <Link href="/contact">Demander un rendez-vous</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
