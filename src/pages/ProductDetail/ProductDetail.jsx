import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import { ProductDetailCard } from "../../components/product/ProductDetailCard";
import { AnimateWraper } from "../../components/layout/AnimateWraper";
import { useFetch } from "../../hooks/useFetch";

export const ProductDetail = () => {
  // get item by id
  const { id } = useParams();

  const { dataR, loading } = useFetch({ route: `products/${id}` });

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (dataR) {
      setProduct(dataR);
    }
  }, [id, loading, dataR]);
  
  if (loading) return <p>loading product...</p>;
  if (!product) return <p>product not found</p>;
  
  return (
    <AnimateWraper>
      <article className="container mx-auto px-10">
        <ProductDetailCard product={product} />
      </article>
    </AnimateWraper>
  );
};
