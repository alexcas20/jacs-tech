import { useDispatch } from "react-redux";
import { addCant, restCant } from "../../features/cartSlice";
import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

export const QuantitySelector = ({ product, onAddToCart }) => {
  // Local state to manage the quantity if this don't exist
  const [localQuantity, setLocalQuantity] = useState(product.quantity || 1);

  // Determinate if use the local state or the product
  const quantity = product.quantity ?? localQuantity;

  const dispatch = useDispatch();
  // rest cant
  const onRestCant = () => {
    if (product.quantity !== undefined) {
      dispatch(restCant(product));
    } else if (quantity > 1) {
      setLocalQuantity((prev) => prev - 1);
    }
  };

  // add cant
  const onAddCant = () => {
    if (product.quantity !== undefined) {
      dispatch(addCant(product));
    } else {
      setLocalQuantity((prev) => prev + 1);
    }
  };

  // Added to cart (optional, only product detail)
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ ...product, quantity: localQuantity });
    }
  };

  return (
    <div className="py-3">
      <div className="flex items-center gap-4">
        <button
          className="font-semibold text-2xl bg-slate-100 w-[50px] rounded-md shadow-md py-1 transition-colors hover:bg-slate-200"
          onClick={() => onRestCant()}
        >
          <MinusIcon className="w-6 text-slate-900 mx-auto" />
        </button>
        <span className="text-xl font-bold">{quantity}</span>

        <button
          className="font-semibold text-2xl bg-slate-100 w-[50px] rounded-md shadow-md py-1 transition-colors hover:bg-slate-200"
          onClick={() => onAddCant()}
        >
          <PlusIcon className="w-6 text-slate-900 mx-auto" />
        </button>

        {onAddToCart && (
          <button
            className="bg-slate-950 py-1 px-3 rounded-md text-slate-50 transition-colors hover:bg-slate-700"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
