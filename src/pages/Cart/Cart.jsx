import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../features/cartSlice";
import { CartEmpty } from "../../components/CartEmpty";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { QuantitySelector } from "../../components/QuantitySelector";

export const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  // dispatch
  const dispatch = useDispatch();

  // delete Item
  const onDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <article className="pb-16 min-h-screen">
      {items.length > 0 ? (
        <>
          {/* Title page */}
          <div className="py-2 px-8 pt-6 md:pt-10 flex flex-col items-center mb-8">
            <h2 className="text-3xl md:text-[40px] pl-2 my-2 border-l-4  font-sans font-bold border-blue-700  text-slate-950">My Cart</h2>
            <hr className="w-[70%] md:w-[15%] my-2 md:hidden " />
          </div>

          {/*  ItemList */}
          <div className="p-4 md:flex md:gap-5 md:justify-center">
            <div className="border rounded-md mb-2 md:w-[600px] ">
              <h3 className="bg-slate-50 border-b p-3 text-xl font-medium">
                Item List
              </h3>
              {items.map((product, i) => (
                <div key={i} className="px-4 relative">
                  <XMarkIcon
                    className="w-5 absolute right-5 top-3 cursor-pointer"
                    onClick={() => onDeleteItem(product.id)}
                  />

                  <div className=" flex flex-col items-center">
                    <img
                      src={product.urlImage}
                      alt={product.name}
                      className="w-32 h-32 object-cover"
                    />

                    <h4 className="font-semibold">{product.name}</h4>

                    <QuantitySelector product={product} />
                    <span className="text-md font-bold tracking-widest text-center pt-5">
                      {product.quantity} x {product.price}
                    </span>
                  </div>

                  <hr className=" my-4 w-[100%]" />
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div className="border md:w-[280px] h-[220px] rounded-md sticky top-[30%]">
              <h3 className="bg-slate-50 border-b p-3 text-lg font-medium ">
                Order Summary
              </h3>

              <div className="p-6 flex flex-col gap-3 font-semibold text-slate-600">
                <div className="flex justify-between ">
                  <p>Products({items.length})</p>{" "}
                  <span className="text-black">
                    ${parseFloat(totalAmount.toFixed(2))}
                  </span>
                </div>

                <div className="flex justify-between">
                  <p>Shipping</p> <span className="text-black">$42</span>
                </div>

                <div className="flex justify-between">
                  <p>Total ammount</p>{" "}
                  <span className="text-black">
                    ${parseFloat(totalAmount.toFixed(2)) + 42}
                  </span>
                </div>

                <button className="p-2 mt-5 bg-black rounded-md text-slate-100 font-medium">
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <CartEmpty />
      )}
    </article>
  );
};
