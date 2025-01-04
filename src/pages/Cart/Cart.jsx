import React, { useContext } from "react";
import { ProductContext } from "../../assets/context/ProductContext";

export const Cart = () => {
  const { cart } = useContext(ProductContext);

  const sumaTotal = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <>
      <div className="container flex flex-col items-center">
        <h2 className="text-2xl">Cart List</h2>

        {/*  Cards products */}

        {cart.map((product, i) => (
          <div
            key={i}
            className="flex justify-between p-4 bg-slate-100 w-[50%]"
          >
            <img
              className="h-32 w-[40%] mix-blend-darken rounded-md object-cover"
              src={product.urlImage}
              alt={product.name}
            />
            <div className="flex flex-col items-end gap-3">
              <h3 className="font-bold">{product.name}</h3>
              <span className="font-semibold text-slate-800">
                ${product.price}
              </span>
              <div className="p-1 flex gap-2 items-center text-sm font-semibold">
                <button className="bg-blue-500 w-8 p-2 rounded-md transition-all hover:text-slate-200 hover:bg-blue-400">- </button>
                 cant: 1 <button className="bg-blue-500 w-8 p-2 rounded-md  transition-all hover:text-slate-200 hover:bg-blue-400">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-[69%] flex justify-end">
        <span>Total: ${sumaTotal}</span>
      </div>
    </>
  );
};
