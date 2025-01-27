import { useEffect, useState } from "react";
import { ProductsCard } from "../../components/Product/ProductsCard";
import { Filter } from "../../components/Filter/Filter";

export const Products = () => {
  //Request products
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const URL = "http://localhost:8080/api/v1/products";

  const getProducts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    const categoryArr = data.map((product) => product.category);
    setCategory([...new Set(categoryArr)]);
    setProducts(data);
    setAllProducts(data); // save all products
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Filter products
  const [category, setCategory] = useState([]);
  const [categorySelected, setCategorySelected] = useState("all");
  const [actionSelected, setActionSelected] = useState("");

  // change category
  const onChangeCategory = (category) => {
    console.log(category);
    setCategorySelected(category);
    setActionSelected("");
    if (category === "all") {
      setProducts([...allProducts]);
    } else {
      const filteredProducts = allProducts.filter(
        (product) => product.category === category
      );
      console.log(filteredProducts);
      setProducts([...filteredProducts]);
    }
  };

   // sort products

   const handleSort = (action) => {
    switch (action) {
      case "low":
        setActionSelected("low");
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
        break;
      case "high":
        setActionSelected("high");
        const sortedProductsMy = [...products].sort(
          (a, b) => b.price - a.price
        );
        setProducts(sortedProductsMy);
        break;

      default:
        console.log("quit");
        console.log(categorySelected);
        setActionSelected("");
        if (categorySelected === "all") {
          setProducts([...allProducts]);
        } else {
          const filteredProducts = allProducts.filter(
            (product) => product.category === categorySelected
          );
          setProducts([...filteredProducts]);
        }

        break;
    }
  };

  return (
    <article className="flex flex-col md:flex-row mt-10 md:gap-10 md:justify-around min-h-screen ">
      {/*   Filters */}
      <Filter
        category={category}
        onChangeCategory={onChangeCategory}
        categorySelected={categorySelected}
        actionSelected={actionSelected}
        handleSort={handleSort}
      />
      <div className=" flex flex-wrap justify-center gap-5 mb-12 w-full">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </article>
  );
};
