'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const destinations = [
  {
    name: 'Praia de Coqueirinho',
    description: 'Águas cristalinas e falésias impressionantes',
    image: '/coqueirinho-beach-paraiba-brazil-aerial-view.jpg',
  },
  {
    name: 'Ponta do Seixas',
    description: 'Ponto mais oriental das Américas',
    image: '/ponta-do-seixas-lighthouse-brazil-easternmost-poin.jpg',
  },
  {
    name: 'Farol do Cabo Branco',
    description: 'Vista panorâmica inesquecível',
    image: '/cabo-branco-lighthouse-joao-pessoa-sunset.jpg',
  },
  {
    name: 'Areia Vermelha',
    description: 'Banco de areia no meio do mar',
    image: '/areia-vermelha-red-sand-beach-paraiba-ocean.jpg',
  },
  {
    name: 'Tambaba',
    description: 'Beleza natural preservada',
    image: '/tambaba-beach-paraiba-cliffs-nature.jpg',
  },
  {
    name: 'Centro Histórico',
    description: 'História e cultura paraibana',
    image: '/historic-center-joao-pessoa-colonial-architecture.jpg',
  },
  {
    name: 'Pôr do Sol no Jacaré',
    description: 'Música ao vivo e jacarés',
    image: '/jacare-river-sunset-paraiba-musician-saxophone.jpg',
  },
  {
    name: 'Ilha da Restinga',
    description: 'Paraíso tropical intocado',
    image: '/restinga-island-paraiba-tropical-paradise-clear-wa.jpg',
  },
]

export default function DestinationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length)
  }

  // Auto-play a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const visibleDestinations = [
    destinations[(currentIndex - 1 + destinations.length) % destinations.length],
    destinations[currentIndex],
    destinations[(currentIndex + 1) % destinations.length],
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Organic curve top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-background" style={{
        clipPath: 'ellipse(100% 100% at 50% 0%)'
      }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">
            Destinos <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Incríveis</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Descubra os lugares mais fascinantes da Paraíba
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {/* Previous Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="hidden md:flex h-12 w-12 rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-all z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Carousel Items */}
            <div className="flex items-center gap-4 md:gap-6 overflow-hidden max-w-5xl">
              {visibleDestinations.map((destination, idx) => {
                const isCenter = idx === 1
                return (
                  <div
                    key={`${destination.name}-${idx}`}
                    className={`transition-all duration-500 ease-out ${
                      isCenter
                        ? 'w-full md:w-[500px] opacity-100 scale-100'
                        : 'hidden md:block md:w-[300px] opacity-40 scale-90'
                    }`}
                  >
                    <div className={`glass-card rounded-3xl overflow-hidden hover-lift ${
                      isCenter ? 'shadow-2xl' : ''
                    }`}>
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        <img
                          src={destination.image || "/placeholder.svg"}
                          alt={destination.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-5 h-5 text-accent" />
                            <h3 className="text-2xl font-bold text-balance">{destination.name}</h3>
                          </div>
                          <p className="text-white/90 text-pretty">{destination.description}</p>
                          {isCenter && (
                            <Button
                              variant="secondary"
                              className="mt-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                              asChild
                            >
                              <a href="#passeios">Ver Roteiro</a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Next Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="hidden md:flex h-12 w-12 rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-all z-10"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-center gap-4 mt-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="h-10 w-10 rounded-full glass-card"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {destinations.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                  }`}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="h-10 w-10 rounded-full glass-card"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator - Desktop */}
          <div className="hidden md:flex justify-center gap-2 mt-8">
            {destinations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Organic curve bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{
        clipPath: 'ellipse(100% 100% at 50% 100%)'
      }}></div>
    </section>
  )
}
