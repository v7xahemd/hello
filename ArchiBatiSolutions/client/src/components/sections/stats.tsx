import { Card, CardContent } from "@/components/ui/card";

export default function Stats() {
  const stats = [
    { value: "100+", label: "Clients satisfaits" },
    { value: "15+", label: "Années d'expérience" },
    { value: "500+", label: "Projets réalisés" },
    { value: "98%", label: "Taux de satisfaction" },
  ];

  return (
    <section className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground text-center">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
