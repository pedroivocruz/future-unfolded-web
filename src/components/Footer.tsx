import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const WHATSAPP_URL = "https://wa.me/5511976835964?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta.";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="Agenda do Futuro" className="h-8 mb-4 brightness-0 invert" />
          <p className="text-sm text-primary-foreground/70 max-w-xs">
            Suporte técnico ambiental para a engenharia da sua obra. Método, dono, processo e evidência no canteiro.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Links Rápidos</h4>
          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/#projetos" className="hover:text-primary-foreground transition-colors">Projetos</Link>
            <Link to="/#metodologia" className="hover:text-primary-foreground transition-colors">Metodologia</Link>
            <Link to="/servicos" className="hover:text-primary-foreground transition-colors">Serviços</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Contato</h4>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Agenda do Futuro. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
