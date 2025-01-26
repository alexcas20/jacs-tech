import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { deleteFav } from "../../features/favSlice";
import { useNavigate } from "react-router-dom";

import NotFavs from "../../assets/icons/sad_favs.svg";

export const Favorites = () => {
  // get data from reducer
  const itemsFav = useSelector((state) => state.fav.favItems);

  // get reducer actions
  const dispatch = useDispatch();

  // delete of fav items
  const handleDeleteFav = ({ id }) => {
    if (id !== undefined || null) dispatch(deleteFav(id));
    else alert("id not found");
  };

  // navigate
  const navigate = useNavigate();

  return (
    <article className="min-h-screen flex flex-col items-center md:flex-row md:px-8 md:justify-evenly">
      <div className="flex justify-center pt-10 md:h-screen md:items-center ">
        <h2 className="text-3xl md:text-[40px] pl-2 my-2 border-l-4  font-sans font-bold border-blue-700  text-slate-950 sticky top-[40%]">
          My Favorites
        </h2>
      </div>
      <hr className="w-[70%] md:w-[15%] my-2 md:hidden " />

      {itemsFav.length ? (
        <div className="border mb-8 rounded-md mt-12 w-[90%] lg:w-[55%]">
          <h3 className="bg-slate-100 text-xl p-3">Favorites List</h3>
          <hr />

          {itemsFav.map((item, i) => (
            <div
              key={i}
              className="px-6 py-2 relative cursor-pointer h-[260px]"
            >
              <div className="flex flex-col items-center gap-4 group ">
                <img
                  className="w-36 h-30 object-cover"
                  src={item.urlImage}
                  alt={`Imgage of ${item.name}`}
                />
                <div className="text-center flex flex-col -mt-3 w-full ">
                  {/* About product */}
                  <span className="font-semibold">{item.name}</span>
                  <span className="tracking-widest text-slate-800">
                    ${item.price}
                  </span>

                  {/*   Delete of fav list */}
                  <div className="absolute top-3 right-4">
                    <button onClick={() => handleDeleteFav(item)}>
                      <XMarkIcon className="w-6" />
                    </button>
                  </div>

                  {/* Buy now Hover */}
                  <div className="w-[100%] flex justify-center">
                    <button
                      className="p-2 w-[60%] transition-all duration-500 translate-y-12 opacity-0 bg-slate-900 text-slate-50 rounded-lg group-hover:opacity-100 group-hover:translate-y-0 group-hover:mt-1 hover:bg-slate-700"
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
                <hr className="my-0 w-[100%] group-hover:opacity-0" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        // No favs products
        <div className="flex flex-col items-center gap-8 cursor-pointer group">
          <img
            className="w-52 pt-10 invert-0"
            src={NotFavs}
            alt="There aren't any product"
          />
          <p className="text-lg tracking-wider text-slate-600">
            There aren't any products added to favorites yet!
          </p>
          <button className="text-slate-50 bg-slate-950 px-4 py-2 rounded-lg flex gap-2 items-center shadow-md transition-all duration-300 opacity-0 translate-y-80 hover:bg-slate-800 group-hover:translate-y-0 group-hover:opacity-100 "
          onClick={() => navigate("/products")}>
            <ArrowLeftIcon className="w-5" />
            Back To Shop
          </button>
        </div>
      )}
    </article>
  );
};
