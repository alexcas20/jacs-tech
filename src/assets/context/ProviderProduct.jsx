import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";

export const ProviderProduct = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart)
  },[cart])

  return (
    <ProductContext.Provider value={{ cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};
