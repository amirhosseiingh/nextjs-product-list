import ProductList from "@/components/productList";

import { products } from "./data/products";

export default function Home() {
  return (
    <main className="container mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">محصولات ما</h1>
      <ProductList products={products} />
    </main>
  );
}
