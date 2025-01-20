import { useEffect, useState } from "react";
import {ProductsCard} from "../../components/Product/ProductsCard"

export const Products = () => {
  //Request products
  const [products, setProducts] = useState([]);
  const URL = "http://localhost:8080/api/v1/products";

  const getProducts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <article className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] place-items-center p-4 pt-12 gap-6 md:gap-6 2xl:gap-24 2xl:p-10 mb-8">
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </article>
  );
};
