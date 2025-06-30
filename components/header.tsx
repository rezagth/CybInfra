"use client";

import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const mainNavItems = [
  {
    title: "Accueil",
    href: "/",
  },
  {
    title: "Accompagnement Stratégique",
    href: "/services/strategic-accompaniment",
  },
  {
    title: "Services",
    href: "/services",
    items: [
      {
        title: "Cybersécurité",
        href: "/services/cybersecurity",
        description: "Solutions techniques de protection et d'audit",
      },
      {
        title: "IT Management",
        href: "/services/it-management",
        description: "Gestion et maintenance de votre infrastructure",
      },
      {
        title: "Automatisation",
        href: "/services/automation",
        description: "Automatisation de vos processus métier",
      },
      {
        title: "Développement",
        href: "/services/development",
        description: "Solutions sur mesure pour votre entreprise",
      },
    ],
  },
  {
    title: "À Propos",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        {
          "bg-background/80 backdrop-blur-md shadow-sm": scrolled,
          "bg-transparent": !scrolled,
        }
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                CybInfra
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-x-1">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Accueil
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/services/strategic-accompaniment" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Accompagnement Stratégique
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services Techniques</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      <ListItem href="/services/cybersecurity" title="Cybersécurité">
                        Audit, protection et sécurisation complète de votre infrastructure informatique.
                      </ListItem>
                      <ListItem href="/services/automation" title="Automatisation & Intégration">
                        Solutions d&apos;automatisation sur mesure pour optimiser vos processus métier.
                      </ListItem>
                      <ListItem href="/services/development" title="Développement Web Sur Mesure">
                        Création d&apos;applications web personnalisées et solutions e-commerce adaptées à vos besoins.
                      </ListItem>
                      <ListItem href="/services/it-management" title="Infogérance Informatique">
                        Gestion proactive et maintenance de votre infrastructure IT.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    À propos
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <Link href="/case-studies" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Études de cas
                    </NavigationMenuLink>
                  </Link> */}
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden md:flex items-center space-x-4">
              <ModeToggle />
              <Button asChild>
                <Link href="/contact">Contactez-nous</Link>
              </Button>
            </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-4">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  CybInfra
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Accueil
                  </Link>
                  <Link
                    href="/services/strategic-accompaniment"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Accompagnement Stratégique
                  </Link>
                  <Collapsible>
                    <CollapsibleTrigger className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent w-full text-left">
                      Services Techniques
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 space-y-2 pl-6">
                      <Link href="/services/cybersecurity" className="block rounded-lg py-2 text-sm font-semibold leading-7 text-muted-foreground hover:bg-accent" onClick={() => setIsMenuOpen(false)}>Cybersécurité</Link>
                      <Link href="/services/it-management" className="block rounded-lg py-2 text-sm font-semibold leading-7 text-muted-foreground hover:bg-accent" onClick={() => setIsMenuOpen(false)}>IT Management</Link>
                      <Link href="/services/automation" className="block rounded-lg py-2 text-sm font-semibold leading-7 text-muted-foreground hover:bg-accent" onClick={() => setIsMenuOpen(false)}>Automatisation</Link>
                      <Link href="/services/development" className="block rounded-lg py-2 text-sm font-semibold leading-7 text-muted-foreground hover:bg-accent" onClick={() => setIsMenuOpen(false)}>Développement Web Sur Mesure</Link>
                    </CollapsibleContent>
                  </Collapsible>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/case-studies"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="/blog"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
                <div className="py-6">
                  <Button className="w-full" asChild>
                    <Link
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}