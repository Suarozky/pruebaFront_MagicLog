import { ProductCard } from "@/components/card/productCard";

const products = [
  {
    image: "/product/zapato.svg",
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
  },
  {
    image: "/product/zapato2.svg",
    title: "NIKE AIR MAX 270 REACT",
    price: 150,
  },
  {
    image: "/product/zapato3.svg",
    title: "PUMA FUTURE RIDER PLAY ON",
    price: 95,
  },
  {
    image: "/product/zapato4.svg",
    title: "LACOSTE L.12.12 CLASSIC",
    price: 195,
  },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 scale-95 lg:grid-cols-4 gap-6 mt-10 px-4 sm:px-6 md:px-12">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}
