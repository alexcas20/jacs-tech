import { useEffect, useState } from "react";

import { ArrowRightIcon } from "@heroicons/react/24/solid";

export const Review = () => {
  const testimonials = [
    {
      name: "Alice",
      review: "Great service! Highly recommend.",
      image: "https://placehold.co/200", // Reemplaza con una URL real
    },
    {
      name: "Bob",
      review: "Amazing experience, will come back again!",
      image: "https://placehold.co/200", // Reemplaza con una URL real
    },
    {
      name: "Charlie",
      review: "Customer support was fantastic.",
      image: "https://placehold.co/200", // Reemplaza con una URL real
    },
    {
      name: "Diana",
      review: "Super easy to use and very helpful!",
      image: "https://placehold.co/200", // Reemplaza con una URL real
    },
  ];

  const [position, setPosition] = useState(0);
  console.log(testimonials.length);

  const onNextReview = () => {
    if (position < testimonials.length - 1) {
      setPosition((prev) => prev + 1);
    } else setPosition(0);
  };

  useEffect(() => {
    console.log("pos value", position);
  }, [position]);

  return (
    <article className="flex flex-col items-center py-5">
      <div className="mb-4 flex flex-col items-center">
        <h3 className="text-center text-4xl">Our Reviews</h3>
        <hr className="w-[60%] border-black my-2" />
      </div>

      {/* Card */}
      <div className="w-[350px] md:w-[700px] ">
        <div className="bg-slate-50 p-4 flex flex-col items-center gap-8 rounded-lg h-[450px] shadow-xl  ">
          <div>
            <img
              src={testimonials[position].image}
              alt={`Photo of ${testimonials[position].name}`}
              className="rounded-full object-cover border-blue-950 border-2"
            />
          </div>

          <div className="text-center py-4 w-64 h-40 ">
            <h4 className="tracking-wider text-2xl text-slate-950 ">
              {testimonials[position].name}
            </h4>
            <p className="text-lg text-slate-600 break-words">
              {testimonials[position].review}
            </p>
          </div>

          <div className="w-full text-end">
            <button
              onClick={onNextReview}
              className="border-black border px-6 py-1 text-slate-900 rounded-md transition-all hover:scale-105 hover:bg-black hover:text-slate-50 "
            >
              <ArrowRightIcon className="h-6" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
