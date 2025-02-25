import { useEffect, useState } from "react";

import { Title } from "../common/Title";
import { useFetch } from "../../hooks/useFetch";

export const Review = () => {
  // dataR / reviews
  const [reviews, setReviews] = useState([]);
  const { dataR } = useFetch({ route: "reviews" });

  // Position Review
  const [position, setPosition] = useState(3);

  const ShowMoreReviews = () => {
    if (position < dataR.length) {
      setPosition(dataR.length);
    } else setPosition(3);
  };

  useEffect(() => {
    setReviews(dataR);
    console.log(reviews);
    console.log("pos value", position);
  }, [position, dataR]);

 

  return (
    <article>
      <Title title="Our Reviews" />

      {/*  Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center  mt-24 px-20 gap-8 ">
        {reviews?.slice(0, position).map((review) => (
          <div
            key={review.id}
            className="bg-slate-100 border border-slate-300 rounded-md p-14 flex flex-col items-center justify-between relative mb-12"
          >
            <div className="">
              <img
                src={review.userImage}
                alt={`Image of ${review.userName}`}
                className="absolute bottom-[75%] left-8 rounded-full"
              />
            </div>

            <div className="pt-10 my-4">
              <h3 className="font-bold">{review.userName}</h3>
              <span className="text-slate-500">{review.reviewDate}</span>
            </div>

            <div className="w-[250px]">
              <p className="text-sm">{review.review}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center ">
        <button
          className="border border-slate-950 rounded-md px-3 py-4 w-[310px]"
          onClick={ShowMoreReviews}
        >
          {" "}
          {position === reviews?.length ? "Undo reviews" : "Show more Reviews"}
        </button>
      </div>
    </article>
  );
};
