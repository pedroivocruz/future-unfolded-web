import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, ClipboardCheck, FileCheck, Eye, MapPin } from "lucide-react";
import { PROJECTS, WHATSAPP_URL } from "@/lib/constants";

const badges = [
  "Conformidade Técnica",
  "Certificações LEED/AQUA",
  "Reuso de Água",
  "Eficiência Energética",
  "Redução de Carbono",
];

const methodology = [
  { icon: ClipboardCheck, title: "Método", desc: "Convertemos requisitos legais e de certificação em rotinas práticas e executáveis no canteiro." },
  { icon: CheckCircle, title: "Dono", desc: "Um responsável dedicado para garantir a execução e comprovação de cada requisito ambiental." },
  { icon: FileCheck, title: "Processo", desc: "Fluxos claros de trabalho que se integram ao ritmo da obra, sem travar o cronograma." },
  { icon: Eye, title: "Evidência", desc: "Documentação organizada e rastreável, pronta para auditorias e órgãos ambientais." },
];

const Index = () => {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-accent to-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-sm font-medium text-primary mb-3">Suporte técnico ambiental para a engenharia da sua obra</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            Impactos Ambientais Controlados e Mitigados.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sua engenharia tranquila enquanto cuidamos da gestão ambiental. Certificações <strong>LEED/AQUA</strong>, eficiência operacional, reuso de água, energia e redução de emissões de carbono.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Solicitar Proposta via WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {badges.map((b) => (
              <Badge key={b} variant="secondary" className="text-xs">{b}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <p className="text-sm font-medium text-primary text-center mb-2">Experiência Comprovada</p>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">Projetos de Destaque</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            Conheça alguns dos projetos onde aplicamos nossa metodologia de gestão ambiental
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <Card key={p.title} className="border border-border hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs font-normal">{t}</Badge>
                    ))}
                  </div>
                  <h3 className="font-semibold text-base mb-1">{p.title}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3">
                    <MapPin className="h-3 w-3" /> {p.location}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section id="metodologia" className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <p className="text-sm font-medium text-primary text-center mb-2">Nossa Metodologia</p>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">Gestão ambiental que funciona no canteiro</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            A maior parte dos problemas acontece porque os requisitos legais e certificações <strong>não são convertidos em rotinas simples no canteiro</strong>, nem possuem um responsável dedicado. Nós atuamos exatamente nesse ponto.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((m) => (
              <Card key={m.title} className="text-center border-none shadow-none bg-transparent">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="bg-primary/10 rounded-full p-3 mb-4">
                    <m.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Transforme o ambiental da sua obra em rotina simples e evidência confiável
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            A Agenda do Futuro faz isso com <strong>dono, processo e conformidade auditável</strong> dentro do canteiro.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-base px-8 py-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Solicitar Proposta via WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
