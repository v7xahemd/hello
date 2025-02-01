import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const teams = [
  {
    title: "LES FONDATEURS",
    members: [
      {
        name: "SHALAN SHERIF",
        role: "Le fondateur principal et Gérant de la société",
        initials: "SS",
        description: "Fort de plus de 15 ans d'expérience dans le secteur, M. SHALAN SHERIF a fondé ARCHI BATI avec une vision claire : devenir un leader dans les services de construction et de facility management. Son expertise et son leadership ont permis à l'entreprise de se développer et de gagner la confiance de clients prestigieux.",
      },
      {
        name: "SHALAN AHMED",
        role: "Co-fondateur et Manager de gestion des ressources et Directeur Financier",
        initials: "SA",
        description: "M. SHALAN AHMED apporte à ARCHI BATI sa vision stratégique et son savoir-faire en gestion des ressources et direction financière. Son engagement contribue au développement et à la croissance durable de l'entreprise.",
      },
    ],
  },
  {
    title: "NOS ÉQUIPES",
    members: [
      {
        name: "Équipe de TRAVAUX",
        role: "Experts en construction et rénovation",
        initials: "ET",
        description: "Une équipe qualifiée de professionnels du bâtiment, spécialisée dans tous les corps d'état : maçonnerie, peinture, électricité, plomberie. Leur expertise garantit des réalisations de haute qualité.",
      },
      {
        name: "Équipe de FACILITY",
        role: "Spécialistes en gestion d'installations",
        initials: "EF",
        description: "Experts en facility management, assurant une gestion optimale des installations et une maintenance préventive efficace pour nos clients prestigieux.",
      },
      {
        name: "Équipe de NETTOYAGE",
        role: "Professionnels de la propreté",
        initials: "EN",
        description: "Une équipe dédiée à l'entretien et au nettoyage professionnel, garantissant des espaces de travail impeccables et confortables.",
      },
    ],
  }
];

export default function Team() {
  return (
    <section className="container py-16">
      <div className="max-w-7xl mx-auto space-y-24">
        {teams.map((team) => (
          <div key={team.title} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">{team.title}</h2>
            {team.title === "LES FONDATEURS" ? (
              <div className="flex flex-col md:flex-row gap-8 justify-center max-w-5xl mx-auto">
                {team.members.map((member) => (
                  <Card 
                    key={member.name} 
                    className="w-full max-w-lg group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Avatar className="h-16 w-16 bg-primary group-hover:scale-110 transition-transform">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {team.members.map((member) => (
                  <Card 
                    key={member.name} 
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Avatar className="h-12 w-12 bg-primary group-hover:scale-110 transition-transform">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}