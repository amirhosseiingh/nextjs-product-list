import { products } from "@/app/data/products";
import Link from "next/link";
import React from "react";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const productId = parseInt(params.id);
  const product = products.find((item) => item.id === productId);
  if (!product) {
    return (
      <main className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold">محصول پیدا نشد</h1>
        <Link
          href="/"
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          بازگشت به صفحه لیست محصولات
        </Link>
      </main>
    );
  }
  return (
    <main className="container mx-auto max-w-xl p-8 text-right">
      <div className="p-8 border rounded-lg shadow-lg bg-white">
        <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
        <p className="text-2xl text-gray-800 mb-4">{product.price} دلار</p>
        <p className="text-gray-600 text-lg">{product.description}</p>
        <Link
          href="/"
          className="text-black hover:bg-red-700 mt-8 flex justify-center items-center bg-red-500 p-2 rounded-lg "
        >
          بازگشت به صفحه همه محصولات
        </Link>
      </div>
    </main>
  );
}
