import { Button } from "@/components/ui/button";
import heroProduct from "@/assets/hero-product.png";
import { ShoppingCart, Zap, Shield, Volume2 } from "lucide-react";

const HeroSection = () => {
  const scrollToCheckout = () => {
    document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container relative z-10 pt-8 pb-16">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">L</span>
            </div>
            <span className="text-foreground font-semibold">Lenovo</span>
          </div>
          <Button variant="cta" size="sm" onClick={scrollToCheckout}>
            <ShoppingCart className="w-4 h-4" />
            Comprar Agora
          </Button>
        </div>

        {/* Hero content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium">
                🔥 Oferta por Tempo Limitado
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-foreground">Lenovo LE209</span>
                <br />
                <span className="text-gradient-gold">Som Premium</span>
                <br />
                <span className="text-foreground">Sem Fio</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Fone de ouvido Bluetooth com cancelamento ativo de ruído, 
                35 horas de bateria e qualidade de som Hi-Fi profissional.
              </p>
            </div>

            {/* Features badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl border border-border">
                <Volume2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">ANC Ativo</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl border border-border">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">35h Bateria</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl border border-border">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Garantia</span>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-muted-foreground line-through text-xl">R$ 249,90</span>
                <span className="text-4xl md:text-5xl font-black text-gradient-gold">R$ 120,00</span>
              </div>
              <p className="text-sm text-muted-foreground">
                ou 12x de R$ 10,80 sem juros
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="xl" className="flex-1 sm:flex-none" onClick={scrollToCheckout}>
                  <ShoppingCart className="w-5 h-5" />
                  Comprar com Desconto
                </Button>
                <Button variant="ctaOutline" size="xl" onClick={scrollToCheckout}>
                  Saiba Mais
                </Button>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                127 pessoas estão vendo este produto agora
              </p>
            </div>
          </div>

          {/* Right - Product image */}
          <div className="relative flex items-center justify-center animate-fade-in">
            <div className="absolute w-80 h-80 bg-primary/20 rounded-full blur-[80px] animate-pulse-slow" />
            <img
              src={heroProduct}
              alt="Lenovo LE209 Fone de Ouvido Bluetooth"
              className="relative z-10 max-w-full h-auto animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
