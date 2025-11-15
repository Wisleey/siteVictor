"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo - SP",
    rating: 5,
    text: "Experiência incrível! Victor Hugo conhece cada cantinho da Paraíba e nos proporcionou momentos inesquecíveis. Super recomendo!",
    image: "/nata.jpg",
  },
  {
    name: "João Santos",
    location: "Rio de Janeiro - RJ",
    rating: 5,
    text: "Passeio perfeito! Atendimento premium, pontualidade e conhecimento excepcional. Voltaremos com certeza!",
    image: "/bebe.jpg",
  },
  {
    name: "Ana Costa",
    location: "Belo Horizonte - MG",
    rating: 5,
    text: "Victor transformou nossa viagem em algo especial. Cada detalhe foi pensado com carinho. Simplesmente perfeito!",
    image: "/coqi.jpg",
  },
  {
    name: "Pedro Oliveira",
    location: "Brasília - DF",
    rating: 5,
    text: "Guia excepcional! Conhecimento profundo da região, simpatia e dedicação. As praias são lindas e o atendimento impecável!",
    image: "/ped.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const changeTestimonial = (newIndex: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(true);
    }, 300);
  };

  const nextTestimonial = () => {
    changeTestimonial((currentIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    changeTestimonial(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-play: passa automaticamente a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="depoimentos"
      className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">
            O Que Dizem{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nossos Clientes
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Experiências reais de quem já viveu momentos inesquecíveis
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Carousel */}
          <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <div
              className={`flex flex-col items-center text-center space-y-6 transition-all duration-300 ease-in-out ${
                fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-foreground/90 max-w-2xl text-pretty leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Name and Location */}
              <div>
                <p className="font-bold text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="h-12 w-12 rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => changeTestimonial(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="h-12 w-12 rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
