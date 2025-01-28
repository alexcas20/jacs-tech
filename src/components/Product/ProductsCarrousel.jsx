import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Title } from "../shared/Title";

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

// Is Desktop
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
};

export const ProductsCarrousel = ({ category, id, latest }) => {
  const [products, setProducts] = useState([]);

  // stop swiper
  const [swiperInstance, setSwiperInstance] = useState(null);

  //Navigate
  const navigate = useNavigate();

  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();

  const URL = "http://localhost:8080/api/v1/products";

  const getProducts = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    // get last 10 products
    if (latest) {
      const latestProducts = data
        .sort((a, b) => b.price - a.price)
        .slice(0, 10);

      setProducts(latestProducts);
    } else {
      // filter for category
      const filterCategory = data.filter(
        (product) => product.category === category && product.id !== id
      );
      setProducts(filterCategory);
    }
  };

  useEffect(() => {
    getProducts(URL);
  }, [category, id]);

  return (
    <article className="pb-10 px-4 ">
      <div className="py-4">
        <Title title={` ${latest ? "Latest Products" : "You may also like"}`} />
      </div>

      {/* Swiper */}
      <div className="flex justify-center items-center">
        {products.length > 1 && (
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            slidesPerView={isMobile ? 1 : isDesktop ? 3 : 2}
            spaceBetween={10}
            className="max-w-[1200px] w-full"
          >
            {products.map((product, index) => (
              <SwiperSlide
                key={index}
                className="cursor-pointer group bg-slate-100 rounded-lg shadow-md"
                onMouseEnter={() => swiperInstance?.autoplay.stop()}
                onMouseLeave={() => swiperInstance?.autoplay.start()}
              >
                <img
                  src={product.urlImage}
                  alt={product.name}
                  className="w-64 h-64 object-cover mx-auto"
                />
                <p className="text-center mt-2 tracking-widest text-slate-700">
                  {product.name}
                </p>
                <div className="flex justify-center">
                  <button
                    className="w-[250px] lg:w-[350px] border border-slate-600 rounded-md py-2 text-slate-800 my-4 transition-all hover:bg-black hover:text-slate-50 hover:scale-105"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    Buy Now
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </article>
  );
};
