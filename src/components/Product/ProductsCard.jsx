import { useNavigate } from "react-router-dom";

export const ProductsCard = ({ product }) => {
  // navigate to product info
  const navigate = useNavigate();

  return (
    <>
      <div className=" bg-slate-100 shadow-sm rounded-lg pb-5 w-[320px] h-[420px] md:w-[270px] lg:w-[280px] 2xl:w-[320px] 2xl:h-[450px] cursor-pointer  transition-all hover:scale-105">
        <div className="flex items-center justify-center h-56 ">
          <img
            className="w-[95%] h-full object-cover"
            src={product.urlImage}
            alt={product.name}
          />
        </div>

        {/* info */}

        <div className="p-3 h-1/2 flex flex-col justify-around ">
          {/*  description */}
          <div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-slate-600 text-xs">{product.description}</p>
          </div>

          {/*  price/stock */}
          <div className="flex justify-end items-center">
            <span className="font-semibold tracking-wider border-b border-black p-1">
              ${product.price}
            </span>
          </div>

          {/* Actions */}
          <div className="pt-4 flex justify-center">
            <button
              className="bg-slate-950 w-[100%] text-slate-50 py-2 px-2 text-sm rounded-md transition-all font-medium hover:-translate-y-1 hover:bg-slate-700"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
