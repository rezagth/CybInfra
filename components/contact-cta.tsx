"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, Mail, Clock, ArrowRight } from "lucide-react";

export function ContactCta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref} 
      className="py-16 md:py-24 relative overflow-hidden"
    >
      
      {/* Éléments d'arrière-plan */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-primary/20 bg-background/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Contenu principal */}
                <div className="col-span-3 p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Prêt à Transformer Votre Entreprise ?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                      Discutons de la façon dont nos solutions informatiques peuvent vous aider à atteindre vos objectifs.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Button size="lg" className="mr-4" asChild>
                      <Link href="/contact">
                        Contactez-nous
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/about">
                        Qui sommes-nous ?
                      </Link>
                    </Button>
                  </motion.div>
                </div>

                {/* Barre latérale des informations de contact */}
                <div className="col-span-2 bg-muted p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-8"
                  >
                    <h3 className="text-xl font-semibold mb-6">Informations de Contact</h3>
                    
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                          <PhoneCall className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Appelez-nous</p>
                          <p className="font-medium">06 62 08 73 76</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Envoyez-nous un email</p>
                          <p className="font-medium">noam.chemoul@hotmail.com</p>
                        </div>
                      </div>
                      
                      {/* <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Chat en Direct</p>
                          <p className="font-medium">A venir</p>
                        </div>
                      </div> */}
                      
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Heures d&apos;Ouverture</p>
                          <p className="font-medium">24/24H 7/7J</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}