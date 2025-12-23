import driverImage from "@/assets/driver-section.png";

const DriverSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content - mobile first */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Qualidade de Som
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                Driver Dinâmico
                <br />
                <span className="text-gradient-gold">12mm Hi-Fi</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Experimente cada nota, cada batida, cada detalhe. O driver 
                de 12mm com diafragma de titânio oferece resposta de frequência 
                precisa e graves profundos que você sente, não apenas ouve.
              </p>
            </div>

            {/* Frequency range */}
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Resposta de Frequência</span>
                <span className="text-primary font-semibold">20Hz - 20kHz</span>
              </div>
              <div className="h-3 bg-card rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-gold rounded-full"
                  style={{ width: "95%" }}
                />
              </div>
            </div>

            {/* Sound characteristics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <p className="text-2xl font-black text-gradient-gold">Bass</p>
                <p className="text-xs text-muted-foreground mt-1">Graves Profundos</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <p className="text-2xl font-black text-gradient-gold">Mid</p>
                <p className="text-xs text-muted-foreground mt-1">Vocais Claros</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <p className="text-2xl font-black text-gradient-gold">High</p>
                <p className="text-xs text-muted-foreground mt-1">Agudos Nítidos</p>
              </div>
            </div>
          </div>

          {/* Image - desktop second */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-72 h-72 bg-primary/15 rounded-full blur-[80px]" />
            <img
              src={driverImage}
              alt="Driver Dinâmico de 12mm"
              className="relative z-10 max-w-md w-full drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DriverSection;
