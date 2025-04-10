/* eslint-disable @next/next/no-img-element */
type ProductCardProps = {
  image: string;
  title: string;
  price: number | string;
};

export function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <div>
      <div className="flex justify-center items-center bg-white h-72 w-72 rounded-3xl shadow-sm mt-5">
        <img
          src={image}
          alt={title}
          className="h-72 w-72 border-2 object-cover scale-105 border-white rounded-2xl cursor-pointer hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div>
        <div className="flex flex-col mt-5 w-72 text-gray-900 text-xl font-bold">
          <span className="text-xl font-bold line-clamp-2 h-14">{title}</span>
          <button className="bg-gray-900 text-white rounded-lg h-12 w-full justify-center items-center mt-4 text-sm hover:scale-105 transition-transform duration-300">
            SHOP NOW <span className="text-amber-400">-{price}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
