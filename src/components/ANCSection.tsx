import ancImage from "@/assets/anc-transparent.png";
import { Check } from "lucide-react";

const ANCSection = () => {
  const benefits = [
    "Elimina ruídos externos automaticamente",
    "Som puro sem interferências",
    "Ideal para trabalho e estudos",
    "Ultrabaixa latência para jogos",
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Sound waves decoration */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-32 h-64 opacity-30">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 top-1/2 -translate-y-1/2 border-l-2 border-primary rounded-l-full"
                    style={{
                      width: `${(i + 1) * 20}px`,
                      height: `${(i + 1) * 40}px`,
                      opacity: 1 - i * 0.15,
                      animationDelay: `${i * 200}ms`,
                    }}
                  />
                ))}
              </div>
              <img
                src={ancImage}
                alt="Tecnologia de Cancelamento de Ruído"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Tecnologia ANC
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                Cancelamento{" "}
                <span className="text-gradient-gold">Inteligente</span>
                <br />de Ruído
              </h2>
              <p className="text-lg text-muted-foreground">
                O sistema de cancelamento ativo de ruído do LE209 utiliza 
                algoritmos avançados para eliminar sons indesejados, 
                proporcionando uma experiência sonora imersiva e sem distrações.
              </p>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 bg-card rounded-2xl border border-border">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-black text-primary-foreground">-28</span>
                </div>
                <div>
                  <p className="text-2xl font-bold">dB de Redução</p>
                  <p className="text-muted-foreground">Cancelamento profissional de ruídos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ANCSection;
