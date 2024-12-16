import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../../assets/components/ResponsiveAppBar";
import { ProductsCard } from "../../assets/components/ProductsCard";
import { Grid2 } from "@mui/material";

export const Home = () => {
  //Request products
  const [products, setProducts] = useState([]);
  const URL = "http://localhost:8080/api/v1/products";

  const getProducts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    setProducts(data);

  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ResponsiveAppBar />

      <Grid2 container spacing={2} sx={{padding: "1rem"}}>
        {products.map(product => 
            <ProductsCard product={product} key={product.id}/>
        )}
        {products.map(product => 
            <ProductsCard product={product} key={product.id}/>
        )}
        {products.map(product => 
            <ProductsCard product={product} key={product.id}/>
        )}
        
      </Grid2>
    </>
  );
};
