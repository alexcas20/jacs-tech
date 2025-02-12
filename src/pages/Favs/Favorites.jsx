import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { deleteFav } from "../../features/favSlice";
import { useNavigate } from "react-router-dom";

import NotFavs from "../../assets/icons/sad_favs.svg";
import toast from "react-hot-toast";
import { Title } from "../../components/shared/Title";

export const Favorites = () => {
  // get data from reducer
  const itemsFav = useSelector((state) => state.fav.favItems);

  // get reducer actions
  const dispatch = useDispatch();

  // delete of fav items
  const handleDeleteFav = ({ id }) => {
    /* show toast */
    toast(
      (t) => (
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold">
            Are you sure of delete this product?
          </span>
          <div className="flex gap-2">
            <button
              className="px-2 py-1 bg-red-600 rounded-md text-slate-50 transition-transform duration-300 hover:hover:scale-105"
              onClick={() => toast.dismiss(t.id)}
            >
              Dismiss
            </button>
            <button
              className="px-2 py-1 bg-green-600 rounded-md text-slate-50 transition-transform duration-300 hover:scale-105"
              onClick={() => {
                dispatch(deleteFav(id)), toast.dismiss(t.id);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      ),
      {
        duration: 5000,
      }
    );
  };

  // navigate
  const navigate = useNavigate();

  return (
    <article
      className={`min-h-screen pb-10 md:pb-0 flex flex-col md:flex-row md:items-start md:px-8 md:justify-evenly ${
        !itemsFav.length ? "md:items-center lg:items-start md:-mt-24 lg:mt-14" : "md:items-center"
      } `}
    >
      <div
        className={`flex justify-center pt-10  ${
          !itemsFav.length ? "items-start md:items-center md:-mt-30 lg:items-start lg:mt-32" : "md:items-center"
        }`}
      >
        <Title title={"my favorites"} />
      </div>

      {/* Favorites List */}
      {itemsFav.length ? (
        <div className="border mb-8 rounded-md mt-6 md:mt-12 w-[90%] lg:w-[55%]">
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
                  alt={`Image of ${item.name}`}
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
        <div className="flex flex-col items-center gap-8 group">
          <img
            className="w-48 pt-10 animate-beat"
            src={NotFavs}
            alt="There aren't any product"
          />
          <p className="text-lg tracking-wider text-slate-600 block text-center">
            There aren't any products added to favorites yet!
          </p>
          <button
            className="text-slate-50 bg-slate-950 px-4 py-2 rounded-lg flex gap-2 items-center shadow-md transition-all duration-300 opacity-0 translate-y-80 hover:bg-slate-800 group-hover:translate-y-0 group-hover:opacity-100 "
            onClick={() => navigate("/products")}
          >
            <ArrowLeftIcon className="w-5" />
            Back To Shop
          </button>
        </div>
      )}
    </article>
  );
};
