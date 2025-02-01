import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "Qui sommes-nous" },
    { href: "/references", label: "Ils nous font confiance" },
    { href: "/contact", label: "Contactez-nous" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-20 items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="ARCHI BATI" 
              className="h-16 w-auto"
            />
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Button
                    asChild
                    variant={location === item.href ? "default" : "ghost"}
                    className={cn(
                      "h-10",
                      location === item.href &&
                        "bg-primary text-primary-foreground"
                    )}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Button
                  asChild
                  variant="default"
                  className="h-10 bg-blue-600 hover:bg-blue-700 text-white ml-4"
                >
                  <Link href="/quote">Demander un devis</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  );
}