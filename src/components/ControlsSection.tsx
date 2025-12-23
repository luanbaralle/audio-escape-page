import controlsImage from "@/assets/controls.png";

const controls = [
  { action: "Aumentar Volume", gesture: "1 toque no fone direito", dots: 1 },
  { action: "Diminuir Volume", gesture: "1 toque no fone esquerdo", dots: 1 },
  { action: "Play/Pausa", gesture: "2 toques em qualquer fone", dots: 2 },
  { action: "Próxima Música", gesture: "3 toques no fone esquerdo", dots: 3 },
  { action: "Música Anterior", gesture: "3 toques no fone direito", dots: 3 },
  { action: "Atender/Encerrar", gesture: "2 toques durante chamada", dots: 2 },
  { action: "Rejeitar Chamada", gesture: "Segurar 2 segundos", dots: 0 },
  { action: "Assistente de Voz", gesture: "Segurar 2 segundos", dots: 0 },
];

const ControlsSection = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Controle Intuitivo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            Tudo no{" "}
            <span className="text-gradient-gold">Toque</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Controle música, chamadas e volume diretamente nos fones com gestos simples e intuitivos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Controls list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {controls.map((control, index) => (
              <div
                key={index}
                className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  {control.dots > 0 ? (
                    <div className="flex gap-1">
                      {[...Array(control.dots)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-primary rounded-full" />
                      ))}
                    </div>
                  ) : (
                    <div className="w-6 h-1.5 bg-primary rounded-full" />
                  )}
                </div>
                <p className="font-bold text-foreground">{control.action}</p>
                <p className="text-sm text-muted-foreground">{control.gesture}</p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative flex items-center justify-center">
            <img
              src={controlsImage}
              alt="Controles Touch Intuitivos"
              className="max-w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlsSection;
