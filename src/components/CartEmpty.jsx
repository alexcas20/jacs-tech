import { useNavigate } from "react-router-dom";
import cartEmpty from "../assets/icons/cart-empty.svg";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export const CartEmpty = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen">
      <h2 className="text-4xl text-center font-bold py-12">
        Ooops! You cart is empty!
      </h2>
      <div className="flex flex-col items-center group">
        <img src={cartEmpty} alt="cart empty" className="w-60 animate-beat" />
        <button
          className="text-slate-50 bg-slate-950 px-4 py-2 rounded-lg flex gap-2 items-center shadow-md transition-all duration-300 opacity-0 translate-x-80 hover:bg-slate-800 group-hover:translate-x-0 group-hover:opacity-100 "
          onClick={() => navigate("/products")}
        >
          <ArrowLeftIcon className="w-5" />
          Back To Shop
        </button>
      </div>
    </div>
  );
};
