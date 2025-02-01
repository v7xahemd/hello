import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop')",
          filter: "brightness(0.3)"
        }}
      />
      <div className="relative container flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center gap-8 py-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white animate-in slide-in-from-bottom duration-500">
          Votre partenaire en{" "}
          <span className="text-white">construction et facility</span>
        </h1>
        <p className="text-xl text-gray-100 max-w-[750px] animate-in slide-in-from-bottom duration-700 delay-200">
          Plus de 15 ans d'expertise dans les travaux tous corps d'état et la gestion d'installations
        </p>
        <div className="flex gap-4 animate-in slide-in-from-bottom duration-1000 delay-500">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 transition-all">
            <Link href="/quote">Demander un devis</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10 transition-all">
            <Link href="/about">En savoir plus</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}