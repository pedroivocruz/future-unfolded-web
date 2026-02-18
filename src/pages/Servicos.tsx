import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, AlertTriangle, ShieldX, Trash2, CheckCircle } from "lucide-react";
import { SERVICES, FAQ, WHATSAPP_URL } from "@/lib/constants";

const painPoints = [
  { icon: AlertTriangle, title: "Obra Paralisada", desc: "Embargos e interdições por problemas técnico-ambientais podem paralisar sua obra e comprometer o cronograma inteiro." },
  { icon: ShieldX, title: "Perda de Certificação", desc: "Falta de evidências na reta final pode invalidar meses de trabalho e investimento em sustentabilidade." },
  { icon: Trash2, title: "Caos Operacional", desc: "Resíduos misturados, retrabalho constante e equipes sem treinamento drenam recursos e tempo." },
];

const Servicos = () => {
  return (
    <main className="pt-16">
      {/* Cenário Real */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-destructive/5 to-secondary">
        <div className="container mx-auto px-4">
          <p className="text-sm font-medium text-destructive text-center mb-2">O Cenário Real</p>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">O custo invisível da falta de gestão ambiental</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            Problemas que parecem pequenos no dia a dia podem se transformar em crises milionárias.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {painPoints.map((p) => (
              <Card key={p.title} className="border border-border">
                <CardContent className="p-6 text-center">
                  <div className="bg-destructive/10 rounded-full p-3 mx-auto mb-4 w-fit">
                    <p.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <a href="#solucoes">
                Conheça nossas soluções <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section id="solucoes" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <p className="text-sm font-medium text-primary text-center mb-2">Soluções Completas</p>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">Serviços para Construtoras</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Para cada necessidade da sua construtora, construímos a proposta adequada. Nós colocamos <strong>método, dono, processo e evidência</strong> na sua obra.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {SERVICES.map((s) => (
              <Card key={s.title} className="border border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-base mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.subtitle}</p>
                  <ul className="space-y-1.5 mb-4">
                    {s.items.map((item) => (
                      <li key={item} className="text-sm text-foreground/80 flex items-start gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs font-medium text-primary">{s.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Necessidade única */}
          <Card className="mt-10 max-w-2xl mx-auto border-primary/30 bg-accent">
            <CardContent className="p-8 text-center">
              <h3 className="font-semibold text-lg mb-2">Sua necessidade é única?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Para cada dor da sua construtora, construímos uma proposta personalizada. Conte-nos sobre o seu desafio e receba uma solução sob medida.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Solicitar Proposta Personalizada <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-2xl">
          <p className="text-sm font-medium text-primary text-center mb-2">Perguntas Frequentes</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Tire suas dúvidas</h2>
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-sm font-medium">{f.question}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para estruturar a gestão ambiental da sua obra?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Solicite um diagnóstico gratuito de 30 minutos e receba uma proposta personalizada.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-base px-8 py-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Falar com Especialista via WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Servicos;
