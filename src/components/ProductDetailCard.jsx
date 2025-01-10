import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../features/cartSlice";

export const ProductDetailCard = ({ product }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // add to cart 
  const onAddToCart = (product) => {
   
    dispatch(addItem(product));
    alert("Added Item to cart")
  }

  return (
    <div className="flex flex-col items-center md:flex-row gap-8">
      <div className="w-[320px] h-[350px] md:h-[600px] md:w-[700px]">
        <img
          src={product.urlImage}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* product info */}
      <div>
        <h5 className="uppercase text-xl text-slate-500">Keyboards</h5>
        <h3 className="text-5xl text-slate-800">{product.name}</h3>
        <span>Review</span>
        <p className="tracking-wider text-3xl py-6 text-slate-700">
          ${product.price}
        </p>
        <p className="text-slate-600 text-lg">{product.description}</p>
        <div className="flex gap-6 mt-3">
          <button className=" border border-black py-1 px-2 rounded-md transition-all hover:bg-slate-950 hover:text-slate-50"
          onClick={()=> onAddToCart(product)}>
            Add to cart
          </button>
          <button className="bg-slate-950 py-1 px-3 rounded-md text-slate-50 transition-colors hover:bg-slate-700"
          onClick={() => navigate("/cart")}>
            Go to cart
          </button>
        </div>
      </div>
    </div>
  );
};
