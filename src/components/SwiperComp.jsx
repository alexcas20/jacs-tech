import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css"; // Estilos básicos de Swiper
import "swiper/css/navigation"; // Estilos para botones de navegación
import "swiper/css/pagination"; // Estilos para paginación
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export const SwiperComp = ({ items }) => {
  console.log(items);

  // navigate to item
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation // Botones de navegación (prev/next)
        pagination={{ clickable: true }} // Habilita paginación clickeable
        autoplay={{ delay: 4000 }}
        spaceBetween={20} // Espacio entre slides
        slidesPerView={1} // Número de slides visibles
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="px-10">
            <div className="h-80 flex items-center justify-center text-white text-xl font-bold cursor-pointer group">
              <img
                src={item.urlImage}
                alt={item.name}
                className="object-cover w-[50%]  mix-blend-multiply relative   "
              />
              <div className="opacity-0 absolute bottom-6 md:bottom-12 md:right-0 text-black transition-all group-hover:opacity-70 p-4">
                <button className="border border-black px-4 py-2 rounded-md transition-all hover:bg-slate-950 hover:text-slate-50"
                onClick={()=> navigate(`/product/${item.id}`)}>
                  See More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
