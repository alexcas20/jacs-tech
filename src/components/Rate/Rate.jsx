import { Rating, RoundedStar} from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fff",
};

export const Rate = ({ read, width, valueRate , onChange }) => {
  return read ? (
    <Rating
      style={{ maxWidth: width }}
      value={valueRate}
      readOnly
      itemStyles={myStyles}
    />
  ) : (
    <Rating
      style={{ maxWidth: width }}
      value={valueRate}
      onChange={onChange}
      itemStyles={myStyles}
    />
  );
};
