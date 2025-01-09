import { useNavigate } from "react-router-dom";
import cartEmpty from "../assets/images/cart_empty.png";


import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export const CartEmpty = () => {

    const navigate = useNavigate();
  return (
    <div className=" bg-slate-200 flex flex-col items-center h-screen">
      <h2 className="text-4xl text-center font-bold py-16 animate-pulse">
        Ooops! You cart is empty!
      </h2>
      <div className="relative group">
        <img
          src={cartEmpty}
          alt="cart empty"
          className="w-[700px] motion-safe:animate-bounce  "
        />
        <button className="border border-black py-1 px-2 rounded-md absolute top-[60%] left-[45%] md:top-[60%] md:left-[70%] flex items-center gap-1 hover:bg-black hover:text-slate-50 opacity-0 transition-all group-hover:opacity-100"
        onClick={() => navigate("/products")}>
          <ArrowLeftIcon className="w-5"/>Continue Shopping
        </button>
        <a
          className="absolute bottom-[20%] right-4 text-[5px] md:right-0 md:text-[8px]"
          href="https://www.freepik.com/free-vector/market-basket_3854107.htm#fromView=search&page=1&position=17&uuid=2e63c2fd-2a66-4390-8430-8240cf816ae2"
        >
          Image by rawpixel.com on Freepik
        </a>
      </div>
    </div>
  );
};
