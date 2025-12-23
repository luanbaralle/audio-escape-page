import { Volume2, Battery, Headphones, Bluetooth, Mic, Gamepad2 } from "lucide-react";

const features = [
  {
    icon: Volume2,
    title: "ANC Inteligente",
    description: "Cancelamento ativo de ruído para imersão total",
  },
  {
    icon: Battery,
    title: "35h de Bateria",
    description: "Escute o dia inteiro sem se preocupar",
  },
  {
    icon: Headphones,
    title: "Driver 12mm Hi-Fi",
    description: "Som rico e equilibrado em todas frequências",
  },
  {
    icon: Bluetooth,
    title: "Bluetooth 5.3",
    description: "Conexão estável e ultra rápida",
  },
  {
    icon: Mic,
    title: "Duplo Microfone",
    description: "Chamadas cristalinas com IA",
  },
  {
    icon: Gamepad2,
    title: "Modo Gaming",
    description: "Ultra baixa latência para jogos",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Tecnologia de Ponta
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            Por que escolher o{" "}
            <span className="text-gradient-gold">LE209</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Desenvolvido para quem exige o melhor em qualidade sonora e conforto
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2 card-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
