import { useSelector } from "react-redux";
import homeImg from "../../assets/images/home.png";
import { SwiperComp } from "../../components/SwiperComp";

export const Home = () => {

  // get Products
  const items = useSelector((state) => state.cart.items);

  console.log(items)
  return (
    <div className="bg-slate-200 h-full">
      <div className="relative group cursor-pointer ">
        <img
          src={homeImg}
          alt="Setup Gaming"
          className="object-cover opacity-95 w-full h-[550px]"
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
      <div className="bg-white p-10">
        <h3 className="text-center text-4xl">Latest Products</h3>
        <hr className="my-5 border-slate-400" />
        <SwiperComp items={items}/>
      </div>


      {/* Evaluations */}
      <div className="p-8">
        <h3 className="text-center text-4xl">Your Opinions</h3>
        <hr className="my-5 border-slate-400" />

        <div className="grid gap-3 md:grid md:grid-cols-2">
          <div className="bg-slate-50 rounded-md">
            <h4 className="bg-slate-100 p-2 rounded-md">Javier</h4>
            <hr className="border-slate-400 pb-2" />
            <p className="px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              laudantium. Rerum vitae molestiae perspiciatis tempora unde
              corporis enim officia. Saepe quibusdam delectus eius dignissimos
              iste, voluptatem eum ab pariatur! Quasi.
            </p>
          </div>

          <div className="bg-slate-50 rounded-md">
            <h4 className="bg-slate-100 p-2 rounded-md">Javier</h4>
            <hr className="border-slate-400 pb-2" />
            <p className="px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              laudantium. Rerum vitae molestiae perspiciatis tempora unde
              corporis enim officia. Saepe quibusdam delectus eius dignissimos
              iste, voluptatem eum ab pariatur! Quasi.
            </p>
          </div>

          <div className="bg-slate-50 rounded-md">
            <h4 className="bg-slate-100 p-2 rounded-md">Javier</h4>
            <hr className="border-slate-400 pb-2" />
            <p className="px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, laudantium. Rerum vitae molestiae perspiciatis tempora unde corporis enim officia. Saepe quibusdam delectus eius dignissimos iste, voluptatem eum ab pariatur! Quasi.</p>
          </div>

          <div className="bg-slate-50 rounded-md">
            <h4 className="bg-slate-100 p-2 rounded-md">Javier</h4>
            <hr className="border-slate-400 pb-2" />
            <p className="px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, laudantium. Rerum vitae molestiae perspiciatis tempora unde corporis enim officia. Saepe quibusdam delectus eius dignissimos iste, voluptatem eum ab pariatur! Quasi.</p>
          </div>

        </div>
      </div>

  

      
    </div>
  );
};
