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

export const ProductsCarrousel = ({ category, id, latest }) => {
  const [products, setProducts] = useState([]);

  // stop swiper
  const [swiperInstance, setSwiperInstance] = useState(null);

  //Navigate
  const navigate = useNavigate();

  const isMobile = useIsMobile();

  const URL = "http://localhost:8080/api/v1/products";

  const getProducts = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    // get last 10 products
    if (latest) {
      const latestProducts = data
        .sort((a, b) => b.price - a.price)
        .slice(0, 10);
      console.log(latestProducts);
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
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false, 
      }}
      onSwiper={(swiper) => setSwiperInstance(swiper)} 
      slidesPerView={isMobile ? 1 : 2}
      spaceBetween={10}
      className="flex gap-4 bg-slate-50 rounded-2xl w-[350px] md:w-[780px] lg:w-full"
    >
      {products.length > 1 &&
        products.map((product, index) => (
          <SwiperSlide
            key={index}
            className="p-4 cursor-pointer group"
            onMouseEnter={() => swiperInstance?.autoplay.stop()} // Stop autoplay
            onMouseLeave={() => swiperInstance?.autoplay.start()}
          >
            <img
              src={product.urlImage}
              alt={product.name}
              className="w-72 h-64 object-cover mx-auto aspect-[16/9]"
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
  );
};

