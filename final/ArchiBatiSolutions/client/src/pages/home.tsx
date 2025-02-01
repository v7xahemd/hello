import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Partners from "@/components/sections/partners";
import Stats from "@/components/sections/stats";
import Team from "@/components/sections/team";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <Services />
      <Stats />
      <Team />
      <Partners />
    </div>
  );
}
