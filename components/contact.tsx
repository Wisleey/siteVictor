import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-balance">
              Pronto Para{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sua Aventura?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Transforme sua viagem em uma experiência inesquecível.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl space-y-8">
            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5564992107079"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 text-center hover-lift group border-2 border-transparent hover:border-accent/50 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">(64) 99210-7079</p>
              </a>

              {/* Email */}
              <a
                href="mailto:hugo.moreira@academico.ifpb.edu.br"
                className="glass-card rounded-2xl p-6 text-center hover-lift group border-2 border-transparent hover:border-primary/50 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">E-mail</h3>
                <p className="text-xs md:text-sm text-muted-foreground break-words px-2">
                  hugo.moreira@academico.ifpb.edu.br
                </p>
              </a>

              {/* Location */}
              <div className="glass-card rounded-2xl p-6 text-center group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Localização</h3>
                <p className="text-sm text-muted-foreground">
                  João Pessoa - PB
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center pt-6">
              <Button
                size="lg"
                className="pulse-btn text-lg px-12 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-2xl"
                asChild
              >
                <a
                  href="https://wa.me/5564992107079"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar Meu Passeio Agora
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Resposta rápida em horário comercial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
