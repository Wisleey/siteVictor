import { Award, Heart, Users } from "lucide-react";

export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 bg-gradient-to-br from-sand/20 via-background to-muted/20 relative overflow-hidden"
    >
      {/* Organic curved background */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="glass-card rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <img
                src="/vi.jpg"
                alt="Victor Hugo - Guia de Turismo"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm">Guia em formação</p>
                  <p className="text-xs text-muted-foreground">IF-PB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                Quem é{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Victor Hugo?
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              Victor Hugo é guia de turismo em formação, dedicado a oferecer
              experiências autênticas e memoráveis pela Paraíba. Mesmo em
              processo de certificação, ele já se destaca pelo cuidado com cada
              visitante, pela paixão pela história, cultura e natureza
              nordestina, e pela habilidade em transformar passeios em
              descobertas inesquecíveis.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              Com vivência prática no atendimento a turistas e uma profunda
              conexão com os destinos paraibanos, Victor Hugo personaliza cada
              roteiro com sensibilidade e conhecimento local — revelando
              segredos, curiosidades e os cenários mais encantadores da nossa
              terra. Sua missão é simples e verdadeira: fazer você viver a
              Paraíba com emoção, segurança e a originalidade de quem ama este
              lugar.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="glass-card rounded-2xl p-4 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">500+</p>
                <p className="text-xs text-muted-foreground">Turistas</p>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center">
                <Heart className="w-8 h-8 text-secondary mx-auto mb-2" />
                <p className="text-2xl font-bold">15+</p>
                <p className="text-xs text-muted-foreground">Roteiros</p>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center">
                <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-muted-foreground">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
