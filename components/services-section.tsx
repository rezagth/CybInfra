"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Shield, Server, FileCheck, HardDrive, Settings, Users, Lock, AlertCircle, ArrowRight, Code, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Accompagnement Stratégique en Sécurité  Informatique",
    description: "Notre service phare : Un accompagnement sur-mesure incluant audit approfondi, diagnostic précis et rapports détaillés via votre portail client dédié. Bénéficiez d'un suivi continu sous forme d'abonnement mensuel pour une stratégie de sécurité proactive et adaptée (RGPD, ISO 27001, NIS2).",
    color: "border-primary/20 hover:border-primary/50 hover:shadow-primary/5",
    iconBg: "bg-primary/10 text-primary",
    cta: true,
    link: "/services/strategic-accompaniment"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Audit de Cybersécurité ",
    description: "Évaluation complète de votre **cybersécurité** et de votre infrastructure IT, identification ponctuelle des vulnérabilités et recommandations de sécurité personnalisées.",
    color: "border-red-500/20 hover:border-red-500/50 hover:shadow-red-500/5",
    iconBg: "bg-red-500/10 text-red-500",
    link: "/services/cybersecurity"
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Infogérance Informatique",
    description: "**Infogérance** complète et gestion proactive de votre infrastructure IT, maintenance préventive et support technique continu pour assurer la continuité de vos activités.",
    color: "border-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/5",
    iconBg: "bg-blue-500/10 text-blue-500",
    link: "/services/it-management"
  },
  {
    icon: <FileCheck className="h-8 w-8" />,
    title: "Conformité et Réglementation",
    description: "Accompagnement dans la mise en conformité RGPD, ISO 27001 et autres normes de sécurité informatique.",
    color: "border-green-500/20 hover:border-green-500/50 hover:shadow-green-500/5",
    iconBg: "bg-green-500/10 text-green-500",
    link: "/services/cybersecurity"
  },
  {
    icon: <HardDrive className="h-8 w-8" />,
    title: "Gestion de Parc Informatique",
    description: "Supervision, maintenance et optimisation de votre **parc informatique** dans le cadre de notre service d'**infogérance** pour garantir performance et disponibilité.",
    color: "border-purple-500/20 hover:border-purple-500/50 hover:shadow-purple-500/5",
    iconBg: "bg-purple-500/10 text-purple-500",
    link: "/services/it-management"
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Automatisation & Intégration",
    description: "Solutions d'automatisation sur mesure pour optimiser vos processus métier et intégrer vos systèmes d'information.",
    color: "border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/5",
    iconBg: "bg-cyan-500/10 text-cyan-500",
    link: "/services/automation"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Développement Web Sur Mesure",
    description: "**Développement web sur mesure** : création d'applications web personnalisées, sites vitrines et solutions e-commerce adaptés à vos besoins spécifiques et alignés sur votre **stratégie digitale**.",
    color: "border-yellow-500/20 hover:border-yellow-500/50 hover:shadow-yellow-500/5",
    iconBg: "bg-yellow-500/10 text-yellow-500",
    link: "/services/development"
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Sécurisation des Données",
    description: "Solutions de **sécurité des données** incluant sauvegarde, chiffrement et protection des données sensibles avec plans de reprise d'activité.",
    color: "border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-indigo-500/5",
    iconBg: "bg-indigo-500/10 text-indigo-500",
    link: "/services/cybersecurity"
  },
  {
    icon: <AlertCircle className="h-8 w-8" />,
    title: "Intervention & Support",
    description: "Service d'assistance et d'intervention rapide pour résoudre vos incidents de **sécurité** et problèmes techniques, en complément de notre **infogérance**.",
    color: "border-orange-500/20 hover:border-orange-500/50 hover:shadow-orange-500/5",
    iconBg: "bg-orange-500/10 text-orange-500",
    link: "/services/it-management"
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="relative py-16 md:py-24">
      {/* Décoration d'arrière-plan améliorée */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 bottom-1/2 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl"></div>
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/5 to-transparent blur-3xl"></div>
        <div className="absolute top-1/4 left-1/3 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div ref={ref} className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Notre Accompagnement Stratégique & Nos Services Techniques
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Une approche holistique combinant expertise stratégique et solutions techniques pour transformer votre entreprise.
          </motion.p>
        </div>

        {/* Section Accompagnement Stratégique */}
        <div className="grid grid-cols-1 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-2 bg-primary/5 backdrop-blur-sm transition-all duration-300 hover:shadow-xl border-primary/20 hover:border-primary/50 hover:shadow-primary/5">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Accompagnement Stratégique en Sécurité & Informatique</h3>
                    <p className="text-muted-foreground">Votre feuille de route personnalisée pour une transformation numérique réussie</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Notre Approche en 4 Étapes</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">1.</span>
                        <span><strong>Audit & Diagnostic</strong> : Analyse approfondie de votre environnement IT</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">2.</span>
                        <span><strong>Planification</strong> : Feuille de route personnalisée</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">3.</span>
                        <span><strong>Suivi Continu</strong> : Accompagnement mensuel via portail client</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">4.</span>
                        <span><strong>Formation & Conformité</strong> : Support RGPD, ISO 27001, NIS2</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Bénéfices Clés</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>Stratégie de sécurité proactive</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>Conformité réglementaire</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>Optimisation des coûts IT</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>Performance accrue</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary" asChild>
                  <Link href="/services/strategic-accompaniment">
                    Découvrir l'accompagnement
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        {/* Section Services Techniques */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Nos Services Techniques
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg text-muted-foreground"
            >
              Des solutions techniques pointues pour concrétiser votre stratégie
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.slice(1).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className={cn(
                  "h-full border-2 bg-card/50 backdrop-blur-sm transition-all duration-500 ease-in-out",
                  "hover:shadow-2xl hover:border-primary/30",
                  "group relative overflow-hidden",
                  service.color
                )}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="relative">
                    <div className={cn(
                      "mb-4 w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110",
                      service.iconBg
                    )}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary">{service.title}</h3>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-base text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="relative">
                    <Button 
                      variant="ghost" 
                      className="text-primary group-hover:bg-primary/10 transition-all duration-300" 
                      asChild
                    >
                      <Link href={service.link} className="flex items-center gap-2">
                        En savoir plus
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}