import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../features/cartSlice";
import { QuantitySelector } from "../shared/QuantitySelector";
import { ProductsCarrousel } from "./ProductsCarrousel";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { addFav } from "../../features/favSlice";
import { ReviewsProduct } from "../reviews/ReviewsProduct";
import { Rate } from "../shared/Rate";
import { ScrollRevealEffect } from "../layout/ScrollRevealEffect";

export const ProductDetailCard = ({ product }) => {
  // for while, get itemsFav to know which products are favorites
  const itemsFav = useSelector((state) => state.fav.favItems);

  // Favs state
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    // check if product is in favorites
    const someIsFav = itemsFav.some((item) => item.id === product.id);
    setIsFav(someIsFav);
  }, [itemsFav, product.id]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // add to cart
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  // add to favs
  const handleAddToFavs = ({ id, name, urlImage, price }) => {
    const itemsFav = { id, name, urlImage, price };

    dispatch(addFav(itemsFav));
    setIsFav(!isFav);
  };

  return (
    <>
      <article className="flex flex-col items-center md:flex-row md:justify-center gap-8 ">
        <div className="w-[250px] h-[210px] md:w-[600px] md:h-[500px] lg:w-[350px] lg:h-[320px] 2xl:h-[500px] 2xl:w-[700px] relative">
          <img
            src={product.urlImage}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* product info */}
        <div className="px-1 py-6 rounded-md relative lg:w-[45%]">
          <h5 className="uppercase text-xl text-slate-500">
            {product.category}
          </h5>
          <h3 className="text-5xl text-slate-800">{product.name}</h3>

          <p className="tracking-wider text-3xl py-2 text-slate-700">
            ${product.price}
          </p>

          {/* Rate product */}
          <Rate read={true} valueRate={product.rating} width={120} />

          {/*    Description */}
          <p className="text-slate-600 text-lg pt-2">{product.description}</p>

          {/*   Favorite Button */}
          <div className="cursor-pointer bg-slate-900 w-[200px] my-3 text-slate-50 p-2 rounded-lg">
            <button
              className="flex gap-3 items-center"
              onClick={() => handleAddToFavs(product)}
            >
              <HeartIcon
                className={`w-6 transition-all hover:text-red-600 ${
                  isFav ? "text-red-600 animate-beat " : "text-slate-100"
                }`}
              />

              <div className="flex items-center">
                <span
                  className={`absolute transition-all duration-200 ${
                    isFav
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-[50%]"
                  }`}
                >
                  Added To Favorites
                </span>
                <span
                  className={`absolute transition-all duration-200 ${
                    !isFav
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-[50%]"
                  }`}
                >
                  Add To Favorites
                </span>
              </div>
            </button>
          </div>

          {/*  Quantity selector */}
          <QuantitySelector product={product} onAddToCart={handleAddToCart} />
          <div className="flex gap-6 mt-3">
            {product.quantity !== undefined ? (
              <button
                className=" border border-black py-1 px-2 rounded-md transition-all hover:bg-slate-950 hover:text-slate-50"
                onClick={() => onAddToCart(product)}
              >
                Add to cart
              </button>
            ) : (
              ""
            )}

            <div className="w-full flex justify-center">
              <button
                className="bg-slate-950 py-2 px-3 rounded-md w-full text-slate-50 transition-colors hover:bg-slate-700"
                onClick={() => navigate("/cart")}
              >
                Go to cart
              </button>
            </div>
          </div>
        </div>
      </article>

      {/*  Reviews */}
      <ScrollRevealEffect>
        <ReviewsProduct id={product.id} />
      </ScrollRevealEffect>

      {/* Relationaded products */}
      <ScrollRevealEffect>
        <ProductsCarrousel category={product.category} id={product.id} />
      </ScrollRevealEffect>
    </>
  );
};
