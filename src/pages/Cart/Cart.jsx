import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../features/cartSlice";
import { CartEmpty } from "../../components/cart/CartEmpty";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { QuantitySelector } from "../../components/shared/QuantitySelector";
import toast from "react-hot-toast";
import { Title } from "../../components/common/Title";
import { AnimateWraper } from "../../components/layout/AnimateWraper";

export const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  // dispatch
  const dispatch = useDispatch();

  // delete Item
  const onDeleteItem = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold">
            Are you sure of delete this product?
          </span>
          <div className="flex gap-2">
            <button
              className="px-2 py-1 bg-red-600 rounded-md text-slate-50 transition-transform duration-300 hover:-translate-y-1"
              onClick={() => toast.dismiss(t.id)}
            >
              Dismiss
            </button>
            <button
              className="px-2 py-1 bg-green-600 rounded-md text-slate-50 transition-transform duration-300 hover:-translate-y-1"
              onClick={() => {
                dispatch(deleteItem(id)), toast.dismiss(t.id);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      ),
      {
        duration: 5000,
      }
    );
  };

  return (
    <AnimateWraper>
<div className="pb-12 md:pb-32 lg:pb-0">
      {items.length > 0 ? (
        <>
          {/* Title page */}
          <Title title={"my cart"} />

          {/*  ItemList */}
          <div className="p-4 md:flex md:gap-5 md:justify-center">
            <div className="border rounded-md mb-2 md:w-[600px] ">
              <h3 className="bg-slate-100 border-b p-3 text-xl font-medium">
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
              <h3 className="bg-slate-100 border-b p-3 text-lg font-medium ">
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
    </div>
    </AnimateWraper>
    
  );
};
