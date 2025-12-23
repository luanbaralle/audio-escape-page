import { Button } from "@/components/ui/button";
import { ShoppingCart, Shield, Truck, CreditCard, Check } from "lucide-react";
import heroProduct from "@/assets/hero-product.png";

const CTASection = () => {
  const handleBuyClick = () => {
    // Aqui você pode adicionar a lógica de checkout
    window.open("https://wa.me/5511999999999?text=Olá! Quero comprar o Lenovo LE209", "_blank");
  };

  return (
    <section id="comprar" className="py-24 bg-background relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Card */}
          <div className="bg-card rounded-3xl border border-border p-8 md:p-12 card-shadow">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Product image */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-48 h-48 bg-primary/30 rounded-full blur-[60px]" />
                <img
                  src={heroProduct}
                  alt="Lenovo LE209"
                  className="relative z-10 max-w-full h-auto max-h-80"
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold mb-4">
                    🔥 OFERTA LIMITADA - 52% OFF
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black mb-2">
                    Lenovo LE209
                  </h2>
                  <p className="text-muted-foreground">
                    Fone Bluetooth com ANC e 35h de bateria
                  </p>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xl text-muted-foreground line-through">R$ 249,90</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-sm font-bold">
                      -52%
                    </span>
                  </div>
                  <p className="text-5xl font-black text-gradient-gold">R$ 120,00</p>
                  <p className="text-muted-foreground">
                    ou 12x de <span className="text-foreground font-semibold">R$ 10,80</span> sem juros
                  </p>
                </div>

                {/* Benefits */}
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Frete Grátis para todo Brasil</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Garantia de 12 meses</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>7 dias para troca ou devolução</span>
                  </li>
                </ul>

                {/* CTA Button */}
                <Button variant="cta" size="xl" className="w-full animate-pulse-glow" onClick={handleBuyClick}>
                  <ShoppingCart className="w-5 h-5" />
                  Comprar Agora
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Pagamento 100% seguro • Compra protegida
                </p>
              </div>
            </div>
          </div>

          {/* Trust icons */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 bg-card rounded-xl flex items-center justify-center mb-3 border border-border">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <p className="font-semibold text-sm">Frete Grátis</p>
              <p className="text-xs text-muted-foreground">Para todo Brasil</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 bg-card rounded-xl flex items-center justify-center mb-3 border border-border">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <p className="font-semibold text-sm">Compra Segura</p>
              <p className="text-xs text-muted-foreground">Dados protegidos</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 bg-card rounded-xl flex items-center justify-center mb-3 border border-border">
                <CreditCard className="w-7 h-7 text-primary" />
              </div>
              <p className="font-semibold text-sm">Parcelamento</p>
              <p className="text-xs text-muted-foreground">Em até 12x</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 bg-card rounded-xl flex items-center justify-center mb-3 border border-border">
                <Check className="w-7 h-7 text-primary" />
              </div>
              <p className="font-semibold text-sm">Garantia</p>
              <p className="text-xs text-muted-foreground">12 meses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
