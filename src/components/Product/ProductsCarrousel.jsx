import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Is Mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export const ProductsCarrousel = ({ category, id }) => {
  const [productsCat, setProductsCat] = useState([]);

  //Navigate
  const navigate = useNavigate();

  const isMobile = useIsMobile();

  const URL = "http://localhost:8080/api/v1/products";

  const getProducts = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    // filter for category
    const filterCategory = data.filter(
      (product) => product.category === category && product.id !== id
    );
    setProductsCat(filterCategory);
  };

  useEffect(() => {
    getProducts(URL);
  }, [category, id]);

  return (
    <div className="md:w-[1200px] px-6">
      <h2 className="font-semibold text-3xl capitalize tracking-wider py-4 text-center">
        You may also like
      </h2>
      <hr className="border-b-slate-900 border-b-2  w-[200px] mx-auto mb-8" />

      {/*   Swiper */}
      <div className="flex gap-4 bg-slate-50 rounded-2xl w-[350px] md:w-[780px] lg:w-full">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2000 }}
          slidesPerView={isMobile ? 1 : 2}
          spaceBetween={10}
        >
          {productsCat.length > 1 &&
            productsCat.map((product, index) => (
              <SwiperSlide key={index} className="p-4 cursor-pointer">
                <img
                  src={product.urlImage}
                  alt={product.name}
                  className=" w-72 h-64 object-cover mx-auto aspect-[16/9]"
                />
                <p className="text-center mt-2 tracking-widest text-slate-700">
                  {product.name}
                </p>
                <button
                  className="w-full border border-slate-600 rounded-md py-2 text-slate-800 my-4 transition-all hover:bg-black hover:text-slate-50 hover:scale-105"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  Buy Now
                </button>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
