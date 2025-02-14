import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailCard } from "../../components/product/ProductDetailCard";
import { AnimateWraper } from "../../components/layout/AnimateWraper";

export const ProductDetail = () => {
  // get item by id
  const { id } = useParams();

  // fetch data product
  const URL = "http://localhost:8080/api/v1/products/";

  const [product, setProduct] = useState([]);

  const getProduct = async (id) => {
    const response = await fetch(URL + id);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  return (
    <AnimateWraper>
      <article className="container mx-auto px-10">
        <ProductDetailCard product={product} />
      </article>
    </AnimateWraper>
  );
};
