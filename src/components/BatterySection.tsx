import batteryImage from "@/assets/battery-section.png";
import { Battery, Music, Film, Phone } from "lucide-react";

const BatterySection = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Bateria Poderosa
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                <span className="text-gradient-gold">35 Horas</span>
                <br />
                de Reprodução
              </h2>
              <p className="text-lg text-muted-foreground">
                Com a bateria de ultra duração do LE209, você pode passar 
                dias inteiros sem precisar recarregar. Perfeito para viagens 
                longas, maratonas de trabalho ou lazer ininterrupto.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-2xl border border-border">
                <Music className="w-8 h-8 text-primary mb-4" />
                <p className="text-3xl font-black text-gradient-gold">80+</p>
                <p className="text-muted-foreground">Músicas</p>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border">
                <Film className="w-8 h-8 text-primary mb-4" />
                <p className="text-3xl font-black text-gradient-gold">3</p>
                <p className="text-muted-foreground">Filmes completos</p>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border">
                <Phone className="w-8 h-8 text-primary mb-4" />
                <p className="text-3xl font-black text-gradient-gold">20h</p>
                <p className="text-muted-foreground">De chamadas</p>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border">
                <Battery className="w-8 h-8 text-primary mb-4" />
                <p className="text-3xl font-black text-gradient-gold">1.5h</p>
                <p className="text-muted-foreground">Carga completa</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-64 h-64 bg-blue-400/20 rounded-full blur-[60px]" />
            <img
              src={batteryImage}
              alt="Bateria de 35 horas"
              className="relative z-10 max-w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatterySection;
