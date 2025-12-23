import { useState } from "react";
import colorBlack from "@/assets/color-black.png";
import colorWhite from "@/assets/color-white.png";
import colorBeige from "@/assets/color-beige.png";

const colors = [
  { id: "black", name: "Preto Grafite", image: colorBlack, color: "bg-zinc-900" },
  { id: "white", name: "Branco Puro", image: colorWhite, color: "bg-zinc-100" },
  { id: "beige", name: "Bege Elegante", image: colorBeige, color: "bg-amber-100" },
];

const ColorsSection = () => {
  const [selectedColor, setSelectedColor] = useState("black");

  const currentColor = colors.find((c) => c.id === selectedColor) || colors[0];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Escolha Seu Estilo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            3 Cores{" "}
            <span className="text-gradient-gold">Exclusivas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combine com seu estilo pessoal e escolha a cor perfeita para você
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Product image */}
          <div className="relative w-full max-w-lg h-96 flex items-center justify-center mb-12">
            {colors.map((color) => (
              <img
                key={color.id}
                src={color.image}
                alt={color.name}
                className={`absolute max-w-full max-h-full object-contain transition-all duration-500 ${
                  selectedColor === color.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              />
            ))}
          </div>

          {/* Color selector */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-xl font-bold">{currentColor.name}</p>
            <div className="flex gap-4">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`w-14 h-14 rounded-full transition-all duration-300 ${color.color} ${
                    selectedColor === color.id
                      ? "ring-4 ring-primary ring-offset-4 ring-offset-background scale-110"
                      : "hover:scale-105"
                  }`}
                  aria-label={color.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorsSection;
