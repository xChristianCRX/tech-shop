import { useState } from "react";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Area } from "./components/Area";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";

export function App() {
  const areas = [
    "Computadores",
    "Acessórios",
    "Impressoras",
    "Games",
    "Gadgets",
  ];
  const brands = [
    {
      name: "HP",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png",
    },
    {
      name: "Dell",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png",
    },
    {
      name: "Positivo",
      urlImage:
        "https://logodownload.org/wp-content/uploads/2018/09/positivo-logo.png",
    },
    {
      name: "Asus",
      urlImage:
        "https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo-1995-present.png",
    },
    {
      name: "Xing Ling",
      urlImage:
        "https://pm1.aminoapps.com/6959/02a24e5ccbf19cc8c7b8dde55fc2dc996215d25fr1-287-512v2_uhq.jpg",
    },
  ];

  const [products, setProducts] = useState([]);

  return (
    <div className="bg-neutral-900 h-screen">
      <Toaster position="bottom-right" richColors />
      <Header
        areas={areas}
        brands={brands}
        addProduct={(newProduct) =>
          setProducts((prev) => [...prev, newProduct])
        }
      />

      <main className="flex-1 p-6">
        {areas.map((area) => (
          <Area
            key={area}
            products={products.filter((product) => product.area === area)}
            nameArea={area}
          />
        ))}
      </main>
      <ShootingStars starColor="#FFFFF" className="absolute top-0 left-0 w-full min-h-screen z-0 pointer-events-none" />
      <StarsBackground className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" />
    </div>
  );
}
