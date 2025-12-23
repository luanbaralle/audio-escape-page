import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import review1 from "@/assets/review-1.avif";
import review2 from "@/assets/review-2.avif";
import review3 from "@/assets/review-3.avif";
import review4 from "@/assets/review-4.avif";
import review5 from "@/assets/review-5.avif";
import review6 from "@/assets/review-6.avif";
import review7 from "@/assets/review-7.avif";
import review8 from "@/assets/review-8.avif";
import review9 from "@/assets/review-9.avif";
import review10 from "@/assets/review-10.avif";

const reviews = [
  {
    name: "Mariana Costa",
    location: "São Paulo, SP",
    content: "Chegou super rápido! Qualidade impressionante, o cancelamento de ruído é real. Uso no metrô e não escuto nada! Super recomendo.",
    rating: 5,
    image: review1,
    date: "há 3 dias",
  },
  {
    name: "Pedro Henrique",
    location: "Rio de Janeiro, RJ",
    content: "Comprei com medo por ser barato, mas me surpreendeu demais! Som muito bom, bateria dura o dia todo. Valeu cada centavo!",
    rating: 5,
    image: review2,
    date: "há 5 dias",
  },
  {
    name: "Juliana Santos",
    location: "Belo Horizonte, MG",
    content: "Melhor fone que já tive! Uso pra trabalhar home office e pra academia. Muito confortável e o som é incrível!",
    rating: 5,
    image: review3,
    date: "há 1 semana",
  },
  {
    name: "Lucas Ferreira",
    location: "Curitiba, PR",
    content: "Fone muito top! O case carrega rápido, o bluetooth conecta na hora. Perfeito pra jogar no celular, zero delay!",
    rating: 5,
    image: review4,
    date: "há 1 semana",
  },
  {
    name: "Amanda Oliveira",
    location: "Salvador, BA",
    content: "Amei! Super leve, nem parece que tô usando. A qualidade do som é muito boa, graves bem definidos. Recomendo demais!",
    rating: 5,
    image: review5,
    date: "há 2 semanas",
  },
  {
    name: "Rafael Almeida",
    location: "Brasília, DF",
    content: "Comprei pra minha esposa e ela amou tanto que tive que comprar outro pra mim. Produto excelente, entrega rápida!",
    rating: 5,
    image: review6,
    date: "há 2 semanas",
  },
  {
    name: "Camila Rodrigues",
    location: "Porto Alegre, RS",
    content: "Estou impressionada com a qualidade! Uso o dia todo no trabalho, muito confortável. O ANC funciona de verdade!",
    rating: 4,
    image: review7,
    date: "há 3 semanas",
  },
  {
    name: "Bruno Martins",
    location: "Fortaleza, CE",
    content: "Produto muito bom! Design bonito, som excelente. Comprei o preto e combina com tudo. Entrega super rápida!",
    rating: 5,
    image: review8,
    date: "há 3 semanas",
  },
  {
    name: "Fernanda Lima",
    location: "Recife, PE",
    content: "Perfeito pra quem quer qualidade sem gastar muito! Uso pra correr e ele não cai. Som muito limpo e claro.",
    rating: 5,
    image: review9,
    date: "há 1 mês",
  },
  {
    name: "Thiago Souza",
    location: "Florianópolis, SC",
    content: "Excelente custo-benefício! Já tive fones de R$500 que não chegavam perto desse. Bateria dura uns 3 dias de uso normal.",
    rating: 5,
    image: review10,
    date: "há 1 mês",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Avaliações Reais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            Clientes{" "}
            <span className="text-gradient-gold">Satisfeitos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Veja o que nossos clientes estão dizendo sobre o Lenovo LE209
          </p>
        </div>

        {/* Reviews Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  {/* Customer Photo */}
                  <div className="relative mb-4 rounded-xl overflow-hidden aspect-square">
                    <img
                      src={review.image}
                      alt={`Avaliação de ${review.name}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < review.rating
                                ? "fill-primary text-primary"
                                : "fill-muted text-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow text-sm">
                    "{review.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="font-bold text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {review.date}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          <div className="text-center">
            <p className="text-3xl font-black text-gradient-gold">4.9</p>
            <p className="text-sm text-muted-foreground">Nota Média</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-3xl font-black text-gradient-gold">2.847</p>
            <p className="text-sm text-muted-foreground">Avaliações</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-3xl font-black text-gradient-gold">98%</p>
            <p className="text-sm text-muted-foreground">Recomendam</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
