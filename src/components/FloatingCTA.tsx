import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCheckout = () => {
    document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div className="bg-card/95 backdrop-blur-lg border border-border rounded-2xl p-4 card-shadow flex items-center gap-4">
        <div className="hidden sm:block">
          <p className="font-bold text-sm">Lenovo LE209</p>
          <p className="text-xl font-black text-gradient-gold">R$ 120,00</p>
        </div>
        <Button variant="cta" size="lg" onClick={scrollToCheckout}>
          <ShoppingCart className="w-4 h-4" />
          Comprar Agora
        </Button>
      </div>
    </div>
  );
};

export default FloatingCTA;
