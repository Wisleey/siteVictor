"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/aerial-view-of-coqueirinho-beach-paraiba-brazil-tu.jpg"
          alt="Praia de Coqueirinho"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 cinematic-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-32 pb-8 md:py-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white text-balance leading-tight">
            Explore a Paraíba com
            <span className="block bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Experiências Exclusivas
            </span>
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-4xl mx-auto text-pretty leading-relaxed">
            Viajar é mais do que conhecer novos lugares, é uma experiência que
            transforma, inspira e renova. Cada destino traz histórias, culturas
            e paisagens que ampliam nossa visão de mundo e nos conectam com o
            que há de mais genuíno na vida. Em meio à rotina acelerada, viajar
            se torna um respiro necessário: faz bem para o corpo, para a mente e
            para a alma. Pensando nisso, este site de turismo foi criado para
            ajudar você a descobrir destinos incríveis, planejar viagens com
            facilidade e viver momentos inesquecíveis. Aqui, cada roteiro é um
            convite para explorar, sentir e aproveitar o melhor que o mundo tem
            a oferecer
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              size="lg"
              className="pulse-btn text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-2xl"
              asChild
            >
              <a href="#passeios">Agendar Passeio Agora</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <a href="#sobre">Conhecer Victor Hugo</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/80" />
      </div>
    </section>
  );
}
