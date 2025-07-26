import Link from "next/link";
import { products, productsType } from "@/app/data/products";

interface ProductListProps {
  products: productsType[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex flex-col justify-center ">
      {products.map((item) => (
        <div className="mt-1">
          <Link
            key={item.id}
            href={`/products/${item.id}`}
            className="block p-4 border rounded-lg hover:bg-gray-50 transition text-right"
          >
            <div className="flex justify-between items-center ">
              <p className="text-gray-600">{item.price} تومان</p>
              <h2 className="text-xl font-semibold">{item.name}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
