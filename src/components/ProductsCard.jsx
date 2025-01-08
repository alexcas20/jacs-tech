import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

export const ProductsCard = ({ product }) => {
  // redux
  const dispatch = useDispatch();

  // Add to Cart
  const addToCart = (product) => {
    console.log("se agrego al carrito =>" + product.name);
    dispatch(addItem(product));
  };

  return (
    <>
      <div className=" bg-slate-100 rounded-xl pb-5 w-[340px] md:w-[380px] 2xl:w-[430px] h-[420px] 2xl:h-[450px] cursor-pointer shadow-xl shadow-slate-400 transition-all hover:scale-105">
        <div className="flex items-center justify-center h-56 ">
          <img
            className="w-full h-full object-cover"
            src={product.urlImage}
            alt={product.name}
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
            <button
              className="bg-orange-300 p-1 rounded-md"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
