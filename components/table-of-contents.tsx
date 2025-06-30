"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  {
    title: "Accueil",
    id: "hero",
    description: "Bienvenue sur CybInfra"
  },
  {
    title: "À Propos",
    id: "about",
    description: "Découvrez notre expertise"
  },
  {
    title: "Services",
    id: "services",
    description: "Nos solutions sur mesure"
  },
  {
    title: "Témoignages",
    id: "testimonials",
    description: "Ce que disent nos clients"
  },
  {
    title: "Blog",
    id: "blog",
    description: "Nos derniers articles"
  },
  {
    title: "Contact",
    id: "contact",
    description: "Parlons de votre projet"
  }
];

export function TableOfContents() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculer la progression du défilement
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Déterminer la section active
      const sections = document.querySelectorAll('section[id]');
      let currentSection = "hero";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80; // Ajustez selon votre header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 1500; // Durée en millisecondes
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeInOutQuad(progress);

      window.scrollTo(0, startPosition + distance * easeProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <div 
        className="flex items-center gap-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Menu latéral */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "bg-background/95 backdrop-blur-sm rounded-lg shadow-lg p-2 w-48",
              isHovered ? "pointer-events-auto" : "pointer-events-none invisible"
            )}
          >
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "w-full text-left px-3 py-2 text-sm rounded-md transition-all duration-300",
                  "hover:bg-primary/10 hover:translate-x-1",
                  activeSection === section.id && "text-primary font-medium bg-primary/10"
                )}
              >
                <div className="font-medium">{section.title}</div>
                <div className="text-xs text-muted-foreground">
                  {section.description}
                </div>
              </button>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Barre de progression */}
        <div className="w-1 h-64 bg-gray-200 dark:bg-gray-800 rounded-full relative">
          <motion.div
            className="absolute top-0 left-0 w-full bg-primary rounded-full"
            style={{ height: `${scrollProgress}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
          />
          
          {/* Points de navigation */}
          {sections.map((section, index) => {
            const position = (index / (sections.length - 1)) * 100;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full transition-all duration-300",
                  "hover:scale-125 focus:outline-none",
                  activeSection === section.id 
                    ? "bg-primary scale-125" 
                    : "bg-gray-400 hover:bg-primary/50"
                )}
                style={{ top: `${position}%` }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
} 