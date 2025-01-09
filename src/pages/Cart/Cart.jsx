import { useDispatch, useSelector } from "react-redux";
import { addCant, restCant } from "../../features/cartSlice";
import { CartEmpty } from "../../components/CartEmpty";

export const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  // dispatch
  const dispatch = useDispatch();

  // rest cant
  const onRestCant = (product) => {
    dispatch(restCant(product));
  };

  // add cant
  const onAddCant = (product) => {
    dispatch(addCant(product));
  };

  return (
    <>
      {items.length > 0 ? (
        <>
          {/* Title page */}
          <div className="p-2 px-8 md:pt-10">
            <h2 className="text-4xl font-semibold text-center pb-4">Cart</h2>
            <hr className="w-[100%]" />
          </div>

          {/*  ItemList */}
          <div className="p-4 md:flex md:gap-5 md:justify-center">
            <div className="border rounded-md mb-2 md:w-[600px] ">
              <h3 className="bg-slate-50 border-b p-3 text-xl font-medium">
                Item List
              </h3>
              {items.map((product, i) => (
                <div key={i} className="px-4">
                  <div className=" flex flex-col items-center">
                    <img
                      src={product.urlImage}
                      alt={product.name}
                      className="w-32 h-32 object-cover"
                    />

                    <h4 className="font-semibold">{product.name}</h4>

                    <div className="flex flex-col justify-evenly">
                      <div className="flex items-center gap-10">
                        <button
                          className="font-semibold text-4xl"
                          onClick={() => onRestCant(product)}
                        >
                          -
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          className="font-semibold text-3xl"
                          onClick={() => onAddCant(product)}
                        >
                          +
                        </button>
                      </div>
                      <span className="text-md font-bold tracking-widest text-center pt-5">
                        {product.quantity} x {product.price}
                      </span>
                    </div>
                  </div>
                  <hr className=" my-4 w-[100%]" />
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div className="border md:w-[280px] h-[220px] rounded-md ">
              <h3 className="bg-slate-50 border-b p-2 text-lg font-medium">
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
    </>
  );
};
