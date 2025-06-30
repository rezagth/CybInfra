import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { AboutSection } from '@/components/about-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { BlogSection } from '@/components/blog-section';
import { ContactCta } from '@/components/contact-cta';
import { TableOfContents } from '@/components/table-of-contents';

export const metadata = {
  title: 'CybInfra | Accompagnement Stratégique, Sécurité et Stratégie Digitale',
  description: 'CybInfra offre un accompagnement stratégique sur mesure, des solutions de cybersécurité robustes et une expertise en stratégie digitale pour transformer votre entreprise.',
};

export default function Home() {
  return (
    <div className="w-full relative">
      {/* Dégradé d'arrière-plan très léger */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50/10 via-background to-background -z-10" />
      
      {/* <TableOfContents /> */}
      <section id="hero" className="relative">
        <HeroSection />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      <section id="about" className="relative">
        <AboutSection />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>
      
      <section id="services" className="relative">
        <ServicesSection />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      <section id="testimonials" className="relative">
        <TestimonialsSection />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      <section id="blog" className="relative">
        <BlogSection />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      <section id="contact" className="relative">
        <ContactCta />
      </section>
    </div>
  );
}