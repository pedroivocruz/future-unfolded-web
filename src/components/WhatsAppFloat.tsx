import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511976835964?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta.";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg transition-transform hover:scale-110"
    aria-label="Contato via WhatsApp"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);

export default WhatsAppFloat;
