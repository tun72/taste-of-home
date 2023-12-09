import { HiOutlineStar, HiStar } from "react-icons/hi2";

function Rating({ rating }) {
  return (
    <div className="detail-box__rating">
      <span className="category-tag font-semibold flex items-center gap-1">
        {Array.from(Array(10).keys()).map((i) => {
          if (i < rating) return <HiStar className="text-yellow-600" />;
          return <HiOutlineStar className="text-yellow-600" />;
        })}
      </span>
    </div>
  );
}

export default Rating;
