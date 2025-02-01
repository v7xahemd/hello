import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiGeneralmotors, SiCadillac } from "react-icons/si";
import { Building2, Award, Star } from "lucide-react";

export default function References() {
  const mainPartners = [
    {
      name: "General Motors",
      icon: SiGeneralmotors,
      role: "Agent de facility en France",
      description:
        "En tant qu'agent de facility officiel pour General Motors en France, nous assurons la gestion complète des installations et la maintenance de leurs sites.",
    },
    {
      name: "Cadillac",
      icon: SiCadillac,
      role: "Partenaire Premium",
      description:
        "Partenaire privilégié pour les services de facility management, nous garantissons l'excellence opérationnelle pour Cadillac.",
    },
  ];

  const testimonials = [
    {
      company: "Secteur Automobile",
      quote: "Un partenaire fiable et professionnel qui comprend nos besoins.",
      rating: 5,
    },
    {
      company: "Secteur Immobilier",
      quote: "Excellence dans la gestion et la maintenance des installations.",
      rating: 5,
    },
  ];

  return (
    <div className="container py-16 space-y-16">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Ils nous font confiance
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {mainPartners.map((partner) => (
            <Card key={partner.name} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <partner.icon className="h-12 w-12" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{partner.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{partner.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Témoignages de nos clients
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.company} className="hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold">Nos Certifications</h2>
        <div className="flex justify-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Building2 className="h-12 w-12 text-primary" />
            <p>Certification Facility Management</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Award className="h-12 w-12 text-primary" />
            <p>Excellence en Service</p>
          </div>
        </div>
      </section>
    </div>
  );
}