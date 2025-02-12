import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { CustomForm } from "../shared/CustomForm";
import { Rate } from "../Rate/Rate";

export const ReviewsProduct = ({ id }) => {
  const [reviews, setReviews] = useState([]);

  // Don't call if id is undefined
  const { dataR, getData } = useFetch(
    id ? { route: `productReviews/${id}` } : {}
  );

  // open give reviews modal
  const [openForm, setOpenForm] = useState(false);

  const onOpenForm = () => {
    setOpenForm(true);
  };

  const closeModal = () => {
    setOpenForm(false);
    getData();
  };

  useEffect(() => {
    setReviews(dataR);
    console.log("Reseñas actualizadas:", dataR);
  }, [dataR, reviews, openForm]);

  return (
    <article className="bg-slate-50 p-4">
      <h2 className="font-bold text-2xl">Reviews</h2>
      <hr className="my-4" />
      {reviews?.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id}>
            <p className="text-end text-slate-500 font-semibold">
              {review.reviewDate}
            </p>
            <h3 className="text-xl font-semibold text-slate-500">
              {review.user}
            </h3>
            <p className="my-1">{review.review}</p>

            <div className="flex justify-end my-3">
              <Rate read={true} valueRate={review.rating} width={80} />
            </div>

            <hr className="my-4" />
          </div>
        ))
      ) : (
        <div>
          <span>This product isn't any review yet!</span>
        </div>
      )}

      {/* Give review */}
      <div className="flex justify-end">
        <button
          className="border border-black px-2 py-1 rounded-md transition-colors hover:bg-black hover:text-slate-50"
          onClick={onOpenForm}
        >
          Give your review
        </button>
      </div>

      <CustomForm isOpen={openForm} closeModal={closeModal} id={id} />
    </article>
  );
};
