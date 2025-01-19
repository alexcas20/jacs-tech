import { useEffect, useState } from "react";

export const ProductsCarrousel = ({ category }) => {
  const [productsCat, setProductsCat] = useState([]);

  const URL = "http://localhost:8080/api/v1/products";

  const getProducts = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    // filter for category
    const filterCategory = data.filter(
      (product) => product.category === category
    );
    setProductsCat(filterCategory);
  };

  useEffect(() => {
    getProducts(URL);
  }, [category]);

  return (
    <div>
      <h2 className="font-semibold text-3xl capitalize tracking-wider py-4">
        You may also like
      </h2>
      <hr className="border-b-black" />

      {productsCat.length > 1 &&
        productsCat.map((product, index) => (
          <div key={index}>
            <img src={product.urlImage} alt={product.name} />
          </div>
        ))}
    </div>
  );
};
