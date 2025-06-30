"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "L'accompagnement stratégique de CybInfra a été un véritable tournant pour notre entreprise. Leur approche méthodique, de l'audit initial à la mise en œuvre, nous a permis de transformer notre infrastructure IT en un véritable atout stratégique.",
    author: "Sarah Johnson",
    title: "Directrice Technique, FinancePro Inc.",
    image: "https://images.pexels.com/photos/5081971/pexels-photo-5081971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote: "Le portail client et le suivi mensuel de notre accompagnement stratégique nous donnent une visibilité sans précédent sur notre sécurité IT. La conformité RGPD et ISO 27001 n'est plus un défi mais une réalité quotidienne.",
    author: "Michael Chen",
    title: "Directeur Informatique, HealthCare Solutions",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote: "La feuille de route personnalisée fournie par CybInfra dans le cadre de notre accompagnement stratégique a été déterminante. Elle nous guide pas à pas dans notre transformation numérique, avec des objectifs clairs et mesurables.",
    author: "Emma Rodriguez",
    title: "Directrice des Opérations, RetailGiant",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote: "L'expertise de CybInfra en accompagnement stratégique nous a permis de passer d'une approche réactive à une approche proactive. Leur diagnostic initial et leurs recommandations ont transformé notre vision de la sécurité IT.",
    author: "David Williams",
    title: "PDG, Logistics Pro",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ils Ont Choisi Notre Accompagnement Stratégique</h2>
            <p className="text-xl text-muted-foreground">
              Découvrez comment notre approche a transformé leur vision de la sécurité IT
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-1">
                    <Card className="border border-border bg-background/50 backdrop-blur-sm h-full">
                      <CardContent className="flex flex-col h-full p-6">
                        <div className="mb-4 text-primary">
                          <Quote className="h-8 w-8" />
                        </div>
                        <p className="text-base mb-6 flex-grow">&rdquo;{testimonial.quote}&quot;</p>
                        <div className="flex items-center mt-auto pt-4 border-t border-border">
                          <div className="relative h-12 w-12 overflow-hidden rounded-full mr-4">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:flex justify-end gap-2 mt-8">
              <CarouselPrevious className="relative inset-auto" />
              <CarouselNext className="relative inset-auto" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}