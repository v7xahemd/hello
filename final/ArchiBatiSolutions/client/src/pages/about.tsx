import Team from "@/components/sections/team";
import Stats from "@/components/sections/stats";
import Partners from "@/components/sections/partners";

export default function About() {
  return (
    <div className="container py-16 space-y-16">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Qui sommes-nous</h1>
        <p className="text-lg text-muted-foreground">
          ARCHI BATI est une entreprise leader dans le secteur de la construction et du facility management. 
          Avec plus de 15 ans d'expérience, nous nous sommes imposés comme un partenaire de confiance pour 
          des entreprises de renom, notamment en tant qu'agent de facility pour General Motors en France.
        </p>
      </section>

      <Team />
      <Stats />
      <Partners />
    </div>
  );
}