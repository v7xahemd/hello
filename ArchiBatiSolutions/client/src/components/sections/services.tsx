import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Building2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Travaux",
      icon: <Wrench className="h-8 w-8" />,
      items: [
        "Travaux tous corps d'état",
        "Construction",
        "Maçonnerie",
        "Peinture",
        "Décoration",
        "Ravalement",
        "Revêtement sol et murs",
        "Plomberie",
        "Électricité",
        "Isolation",
        "Menuiserie",
      ],
    },
    {
      title: "Facility Management",
      icon: <Building2 className="h-8 w-8" />,
      items: [
        "Facility management",
        "Gestion d'immeuble",
        "Nettoyage de bureaux",
        "Service de bricoleur polyvalent",
      ],
    },
  ];

  return (
    <section className="container py-24">
      <h2 className="text-3xl font-bold text-center mb-16 animate-in slide-in-from-bottom">
        Nos Services
      </h2>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}