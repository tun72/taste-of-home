import { HiEye } from "react-icons/hi2";
import Rating from "../../ui/Rating";
import { Link } from "react-router-dom";

function IngredientSimilarList({
  ingredient: { name, imageUrl, price, rating, _id },
}) {
  return (
    <li  className="similar">
      <Link to={"/ingredient/" + _id}>
        <div className="similar-img">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="similar-detail p-3">
          <p className="similar-detail__price text-green-400">${price}</p>
          <h3 className="similar-detail__name">{name}</h3>
          <Rating rating={rating} />
          <div className="similar-detail__status">
            <span>Pickup</span>
            <span>Delivery</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default IngredientSimilarList;
