import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const ProductsCard = ({ product }) => {
  const { setCart } = useContext(ProductContext);

  // Add to Cart
  const addToCart = (product) => {
    console.log("se agrego al carrito =>" + product.name);
    setCart((prev) => [...prev, product]);
  };

  return (
    <>
      <div className=" bg-slate-200 rounded-xl pb-5 w-[300px] cursor-pointer shadow-md shadow-slate-400 transition-all hover:scale-105">
        <div className="flex items-center justify-center h-56 ">
        <img
          className="w-full h-full object-cover"
          src={product.urlImage}
          alt=""
        />
        </div>
       

        {/* info */}

        <div className="p-3 h-1/2 flex flex-col justify-around ">
          {/*  description */}
          <div>
            <h3 className="font-bold">{product.name}</h3>
            <p className="text-slate-600 text-sm">{product.description}</p>
          </div>

          {/*  price/stock */}
          <div className="flex justify-between items-center ">
            <span className="text-xs font-semibold uppercase bg-green-400 p-2 rounded-md">
              stock: {product.stock}
            </span>
            <span className="font-semibold tracking-wider">
              ${product.price}
            </span>
          </div>

          {/* Actions */}
          <div className="pt-4">
            <button className="bg-orange-300 p-1 rounded-md"
            onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
