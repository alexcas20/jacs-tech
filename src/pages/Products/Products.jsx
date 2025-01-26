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
    <article className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]  place-items-center md:px-12 pt-12 gap-6 md:gap-6 lg:px-[108px] 2xl:gap-[43px] 2xl:px-72 mb-8">
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </article>
  );
};
