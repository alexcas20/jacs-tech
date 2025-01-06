import React, { useEffect, useState } from "react";
import { ProductsCard } from "../../components/ProductsCard";

export const Home = () => {
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
    <>
      <main>
        <div className="container flex flex-wrap justify-center gap-5 pt-5">
          {products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
};
