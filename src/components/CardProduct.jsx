import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BackgroundGradient } from "./ui/background-gradient";

export function CardProduct({ product }) {
  const formatPrice = (price) => {
    let numericPrice =
      typeof price === "string" ? parseFloat(price.replace(",", ".")) : price;

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(numericPrice);
  };

  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white text-center">
      <div className="w-full h-40 flex justify-center items-center">
        <img
          src={product.brand.urlImage}
          alt={product.brand.name}
          className="h-full object-contain"
        />
      </div>
      <p className="text-base sm:text-xl text-black mt-4 mb-2">
        {product.name}
      </p>
      <CardContent className="px-4">
        <p className="text-xl font-bold text-green-600">
          {formatPrice(product.price)}
        </p>
      </CardContent>
      <CardFooter className="px-4 pb-4 mt-3">
        <Badge
          className={`px-3 py-1 mx-auto text-sm ${
            product.state === "used"
              ? "bg-red-600 text-white"
              : "bg-green-600 text-white"
          }`}
        >
          {product.state === "used" ? "Usado" : "Novo"}
        </Badge>
      </CardFooter>
    </BackgroundGradient>
  );
}
