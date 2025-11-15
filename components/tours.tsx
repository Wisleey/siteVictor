import { Button } from "@/components/ui/button";
import { Clock, MapPin, Users } from "lucide-react";

const tours = [
  {
    name: "City Tour João Pessoa",
    description:
      "Conheça os principais pontos históricos e culturais da capital",
    duration: "4 horas",
    groupSize: "Até 6 pessoas",
    image: "/city.jpg",
    highlights: [
      "Casa da pólvora",
      "Hotel Globo",
      "igreja Nossa Sra. das Neves",
      "Igreja de São Frey Pedro Gonçãlves",
      "Lagoa",
      "Museu de João Pessoa",
      "Santuario de São Francisco",
    ],
  },
  {
    name: "Litoral Sul 1",
    description: "Pacote personalizado com praias do litoral sul ",
    duration: "8 horas",
    groupSize: "Até 15 pessoas",
    image: "/sul1.jpg",
    highlights: [
      "Barra do Gramame",
      "Praia do Amor",
      "Mirante de Tambaba",
      "Praia de Tambaba",
      "Mirante de Coqueirinho",
      "Praia de Coqueirinho",
    ],
  },

  {
    name: "Litoral Sul 2",
    description: "Pacote personalizado com praias do litoral sul ",
    duration: "8 horas",
    groupSize: "Até 15 pessoas",
    image: "/sul2.jpg",
    highlights: [
      "Mirante de Carapibus",
      "Praia de Carapibus",
      "Praia de Tabatinga",
      "Shopping Rural",
      "Castelo da Princesa",
      "Praia Bela",
    ],
  },
  {
    name: "Litoral Norte ao Extremo",
    description: "Experiência única e emocionante pelo litoral norte",
    duration: "8 horas",
    groupSize: "Até 15 pessoas",
    image: "/nor.jpg",
    highlights: [
      "Travessia na balsa de Cabedelo",
      "Caminho de Moisés",
      "Peixada do Geraldo",
      "Igreja Nossa Senhora da Guia",
      "Caminhos dos coqueirais",
    ],
  },
  {
    name: "Pôr do Sol no Jacaré",
    description:
      "Acompanhe um lindo pôr do sol com o saxofonista Jurandy do Sax, executando o ‘Bolero de Ravel’.",
    duration: "3 horas",
    groupSize: "Até 15 pessoas",
    image: "/jaca.jpg",
    highlights: [
      "Rio Paraíba",
      "Música ao Vivo",
      "Passeio de Barco",
      "Feira de Aetesanato",
    ],
  },
  {
    name: "Sertão Paraibano",
    description: "Explore as belezas do sertão Paraibano",
    duration: "A Combinar",
    groupSize: "Até 15 pessoas",
    image: "/rol.jpeg",
    highlights: [
      "Cabaçeiras",
      "Roliúde Nordestina",
      "Lagedo de Pai Mateus",
      "Pedrra do Ingá",
      "Alagoa Grande",
      "Areia",
      "Bananeiras",
      "Campina Grande",
    ],
  },
];

export default function Tours() {
  return (
    <section
      id="passeios"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">
            Nossos{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Passeios
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Experiências únicas e personalizadas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tours.map((tour, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl overflow-hidden hover-lift group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-balance">{tour.name}</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  {tour.description}
                </p>

                {/* Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {tour.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
                  asChild
                >
                  <a href="#contato">Reservar</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
