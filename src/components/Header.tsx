import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import logo from "@/assets/logo.svg";

const WHATSAPP_URL = "https://wa.me/5511976835964?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta.";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isLP = location.pathname === "/";

  const scrollToSection = (id: string) => {
    setOpen(false);
    if (!isLP) {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Agenda do Futuro" className="h-8" />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("projetos")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Projetos
          </button>
          <button onClick={() => scrollToSection("metodologia")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Metodologia
          </button>
          <Link to="/servicos" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Serviços
          </Link>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Contato</a>
          </Button>
        </nav>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              <button onClick={() => scrollToSection("projetos")} className="text-left text-base font-medium py-2">Projetos</button>
              <button onClick={() => scrollToSection("metodologia")} className="text-left text-base font-medium py-2">Metodologia</button>
              <Link to="/servicos" onClick={() => setOpen(false)} className="text-base font-medium py-2">Serviços</Link>
              <Button asChild className="mt-4 bg-primary">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Contato via WhatsApp</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
