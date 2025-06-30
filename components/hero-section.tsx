"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-24 md:pb-32 lg:pt-28 lg:pb-36 min-h-[calc(100vh-64px)] flex items-center">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              Votre Accompagnement Stratégique pour un Avenir Numérique Sécurisé
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-primary mb-6"
            >
              Votre feuille de route personnalisée pour la sécurité et la performance.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Notre expertise vous guide à chaque étape de votre transformation numérique, de l'audit initial à la gestion de crise, en passant par la conformité (RGPD, ISO 27001, NIS2) et la formation de vos équipes. Nous construisons la stratégie digitale et de sécurité avant l'action technique.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/services/strategic-accompaniment">
                  Découvrir l'Accompagnement Stratégique
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Demander un rendez-vous</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative lg:pl-8 flex justify-center"
          >
            <div className="relative w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl aspect-[16/9]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mix-blend-overlay" />
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                alt="Équipe CybInfra travaillant ensemble sur la stratégie numérique et la sécurité"
                fill
                className="object-cover rounded-lg"
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
              />
            </div>

            {/* Floating lights */}
            <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-blue-500/30 blur-xl opacity-70" />
            <div className="absolute bottom-1/4 right-1/4 h-28 w-28 rounded-full bg-cyan-500/30 blur-xl opacity-70" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
