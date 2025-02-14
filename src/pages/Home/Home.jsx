import homeImg from "../../assets/images/home.png";
import { Review } from "../../components/reviews/Review";
import { ProductsCarrousel } from "../../components/product/ProductsCarrousel";
import {
  ArrowRightIcon,
  ClockIcon,
  CreditCardIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { AnimateWraper } from "../../components/layout/AnimateWraper";
import { ScrollRevealEffect } from "../../components/layout/ScrollRevealEffect";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <AnimateWraper>
      <div className="h-full md:px-6 lg:px-0 2xl:px-0 2xl:container 2xl:mx-auto overflow-hidden">
        {/* Banner */}
        <div className="w-full lg:px-8 2xl:px-2">
          <div className="flex items-center bg-slate-100 flex-col-reverse md:flex-row rounded-xl ">
            <div className=" w-full flex flex-col items-center p-4 md:w-[75%] lg:w-[65%] md:items-start ">
              <h2 className="text-6xl my-2 md:text-5xl">
                The <b>coolest tech store</b> in the world is arrive
              </h2>
              <p className="text-slate-500 font-semibold my-4 md:my-8">
                In JacsTech, you're our top priority, so we offer you the best
                gaming electronics at low prices. Hurry and grab these
                unbeatable offers!.
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
                className="object-cover w-full h-[550px] md:h-[600px] lg:h-[400px] 2xl:h-[500px] md:rounded-br-md md:rounded-tr-md"
              />
            </div>
          </div>
        </div>

        {/*   Latest Products */}
        <ScrollRevealEffect>
          <ProductsCarrousel latest={true} />
        </ScrollRevealEffect>

        {/* Reviews */}
        <ScrollRevealEffect>
          <Review />
        </ScrollRevealEffect>

        <ScrollRevealEffect>
          <div className="flex gap-3 py-16 mb-16 justify-center flex-wrap lg:px-32 2xl:px-64 ">
            <div className="bg-slate-50 px-2 py-4 rounded-md flex flex-col items-center justify-evenly border border-slate-300  w-[350px] h-[200px]">
              <RocketLaunchIcon className="w-12 bg-slate-200 p-2 rounded-full" />
              <h4 className="font-bold py-2">Fast Delivery</h4>
              <p className="text-sm text-slate-500 text-center py-1 ">
                We offer fast delivery for you.
              </p>
            </div>

            <div className="bg-slate-50 px-2 py-4 rounded-md flex flex-col items-center justify-evenly border border-slate-300 w-[350px] h-[200px]">
              <CreditCardIcon className="w-12 bg-slate-200 p-2 rounded-full" />
              <h4 className="font-bold py-2">Safe Payment</h4>
              <p className="text-sm text-slate-500 text-center py-1 ">
                We offer 100% safe payment on all our products.
              </p>
            </div>

            <div className="bg-slate-50 px-2 py-4 rounded-md flex flex-col items-center justify-evenly border border-slate-300 w-[350px] h-[200px]">
              <ClockIcon className="w-12 bg-slate-200 p-2 rounded-full" />
              <h4 className="font-bold py-2">24 Hours Delivery</h4>
              <p className="text-sm text-slate-500 text-center py-1 ">
                We offer 24 hours delivery on all our products.
              </p>
            </div>

            <div className="bg-slate-50 px-2 py-4 rounded-md flex flex-col items-center justify-evenly border border-slate-300 w-[350px] h-[200px]">
              <ShieldCheckIcon className="w-12 bg-slate-200 p-2 rounded-full" />
              <h4 className="font-bold py-2">Back Guarantee</h4>
              <p className="text-sm text-slate-500 text-center py-1 ">
                We offer back guarantee on all our products.
              </p>
            </div>
          </div>
        </ScrollRevealEffect>
      </div>
    </AnimateWraper>
  );
};
