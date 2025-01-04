import React, { useEffect, useState } from "react";
import { ProductsCard } from "../../assets/components/ProductsCard";
import { Grid2 } from "@mui/material";
import { ResponsiveAppBar } from "../../assets/components/ResponsiveAppBar";

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
      <ResponsiveAppBar />

      <main className="bg-slate-900">
        <div className="container flex flex-wrap justify-center gap-5 pt-5">
          {products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
};
