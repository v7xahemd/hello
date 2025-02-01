import { Card, CardContent } from "@/components/ui/card";
import { SiGeneralmotors, SiCadillac } from "react-icons/si";

export default function Partners() {
  const partners = [
    {
      name: "General Motors",
      icon: SiGeneralmotors,
      description:
        "Partenaire de confiance pour nos services de facilités",
    },
    {
      name: "Cadillac",
      icon: SiCadillac,
      description:
        "Client premium pour nos services de gestion d'installations",
    },
  ];

  return (
    <section className="container">
      <h2 className="text-3xl font-bold text-center mb-12">
        Nos Partenaires Prestigieux
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {partners.map((partner) => (
          <Card key={partner.name}>
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <partner.icon className="h-16 w-16" />
              <h3 className="text-xl font-semibold">{partner.name}</h3>
              <p className="text-center text-muted-foreground">
                {partner.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
