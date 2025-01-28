import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailCard } from "../../components/Product/ProductDetailCard";

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
    <article className="container mx-auto py-20 px-10">
      <ProductDetailCard product={product} />
    </article>
  );
};
