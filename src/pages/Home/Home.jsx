import homeImg from "../../assets/images/home.png";
import { Review } from "../../components/Reviews/Review";
import { ProductsCarrousel } from "../../components/Product/ProductsCarrousel";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full px-6 2xl:px-0 2xl:container 2xl:mx-auto">
      {/* Banner */}
      <div className="w-full lg:px-4">
        <div className="flex items-center bg-slate-100 flex-col-reverse md:flex-row rounded-xl ">
          <div className=" w-full flex flex-col items-center p-4 md:w-[75%] lg:w-[60%] md:items-start ">
            <h2 className="text-6xl my-2 md:text-5xl">
              The <b>coolest tech store</b> in the world is arrive
            </h2>
            <p className="text-slate-500 font-semibold my-4 md:my-8">
              In JacsTech, you're our top priority, so we offer you the best
              gaming electronics at low prices. Hurry and grab these unbeatable
              offers!.
            </p>
            <button
              className="bg-slate-900 py-4 px-6 text-white font-bold text-2xl flex items-center gap-2 transition-all duration-300 hover:bg-slate-800"
              onClick={() => navigate("/products")}
            >
              Buy Now
              <ArrowRightIcon className="w-8" />
            </button>
          </div>
          <div className="w-full">
            <img
              src={homeImg}
              alt="Setup Gaming"
              className="object-cover w-full h-[500px] md:h-[600px] lg:h-[400px] 2xl:h-[500px] md:rounded-br-md md:rounded-tr-md"
            />
          </div>
          
        </div>
      </div>

      {/*   Latest Products */}

      <ProductsCarrousel latest={true} />

      {/* Reviews */}
      <Review />
    </div>
  );
};
