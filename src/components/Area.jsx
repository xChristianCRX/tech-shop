import { CardProduct } from "./CardProduct";

export function Area({ nameArea, products }) {
  return (
    (products.length > 0) ? (
      <div className="p-8 shadow-lg rounded-lg mb-8 mx-32">
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">{nameArea}</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="transition-transform transform hover:scale-105">
              <CardProduct product={product} />
            </div>
          ))}
        </div>
      </div>
    ) : null
  );
}