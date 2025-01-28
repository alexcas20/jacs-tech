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
          {/* <img
          src={homeImg}
          alt="Setup Gaming"
          className="object-cover  w-full h-[500px]"
        />
        <div className="absolute bottom-0  bg-slate-950 w-full h-1/4 p-12 md:p-10 transition-all group-hover:h-[35%] group-hover:py-1 md:group-hover:h-1/4 md:group-hover:p-8">
          <h3 className="tracking-wide capitalize text-slate-50 text-xl md:text-4xl text-center font-thin transition-all group-hover:opacity-0 md:group-hover:opacity-100 md:group-hover:text-3xl group-hover:text-start ">
            The coolest tech store in the world is arrive
          </h3>
          <p className="text-slate-400 text-md md:text-lg font-thin opacity-0 transition-opacity group-hover:opacity-100">
            In JacsTech, you're our top priority, so we offer you the best
            gaming electronics at low prices. Hurry and grab these unbeatable
            offers!.{" "}
          </p>
        </div>
        <button className="absolute bottom-[35%] md:bottom-[25%] right-0 border p-4 text-white font-bold text-2xl flex items-center gap-2 transition-all duration-300 hover:bg-slate-900"
        onClick={() => navigate("/products")}>
          Buy Now!
          <ArrowRightIcon className="w-8" />
        </button> */}
        </div>
      </div>

      {/*   Latest Products */}

      <ProductsCarrousel latest={true} />

      {/* Reviews */}
      <Review />
    </div>
  );
};
