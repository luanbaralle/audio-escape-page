import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Gamer",
    content: "Melhor custo-benefício que já comprei! O cancelamento de ruído é impressionante e a latência para jogos é zero.",
    rating: 5,
  },
  {
    name: "Ana Paula S.",
    role: "Designer",
    content: "Uso o dia inteiro no trabalho. Som incrível, bateria dura muito e é super confortável. Recomendo demais!",
    rating: 5,
  },
  {
    name: "Ricardo L.",
    role: "Estudante",
    content: "Perfeito para estudar! O ANC bloqueia todo barulho externo. Qualidade de som surpreendente pelo preço.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Avaliações
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            O Que Nossos{" "}
            <span className="text-gradient-gold">Clientes</span>{" "}
            Dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          <div className="text-center">
            <p className="text-3xl font-black text-gradient-gold">4.9</p>
            <p className="text-sm text-muted-foreground">Nota Média</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-3xl font-black text-gradient-gold">2.847</p>
            <p className="text-sm text-muted-foreground">Vendidos</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-3xl font-black text-gradient-gold">98%</p>
            <p className="text-sm text-muted-foreground">Satisfação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
