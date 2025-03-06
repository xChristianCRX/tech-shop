import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CardProduct({ product }) {
  // Função para formatar o preço em moeda brasileira
  const formatPrice = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <Card className="w-72 text-center rounded-xl shadow-md border border-gray-200 overflow-hidden transition-transform hover:scale-105">
      <div className="w-full h-40 flex justify-center items-center">
        <img
          src={product.brand.urlImage}
          alt={product.brand.name}
          className="h-full object-contain"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold text-gray-800">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <p className="text-xl font-bold text-green-600">{formatPrice(product.price)}</p>
      </CardContent>
      <CardFooter className="px-4 pb-4">
        <Badge className={`px-3 py-1 mx-auto text-sm ${product.state === "used" ? "bg-red-600 text-white" : "bg-green-600 text-white"}`}>
          {product.state === "used" ? "Usado" : "Novo"}
        </Badge>
      </CardFooter>
    </Card>
  );
}
