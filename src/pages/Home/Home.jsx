import homeImg from "../../assets/images/home.png";
import { Review } from "../../components/Reviews/Review";
import { ProductsCarrousel } from "../../components/Product/ProductsCarrousel";

export const Home = () => {
  return (
    <div className="bg-slate-200 h-full">
      <div className="relative group cursor-pointer ">
        <img
          src={homeImg}
          alt="Setup Gaming"
          className="object-cover opacity-95 w-full h-[500px]"
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
      </div>

      {/*   Latest Products */}

      <ProductsCarrousel latest={true} />

      {/* Reviews */}
      <Review />
    </div>
  );
};
