import AddToCart from "../../ui/AddToCart";
import DetailInfo from "../../ui/DetailInfo";
import Rating from "../../ui/Rating";

function IngredientDetailBox({
  data: { name, price, _id, category, description, imageUrl, rating, quantity },
  type = 0,
}) {
  return (
    <>
      {type !== 1 ? (
        <div className="detail-box margin-bottom-sm">
          <div className="detail-box__tag">
            <span>{category}</span>
            <span>{rating > 5 ? "high rated" : "medium rated"}</span>
          </div>
          <h3 className="detail-box__name">{name}</h3>
          <Rating rating={rating} />
          <p className="detail-box__price">
            ${price}
            <span className="detail-box__description ml-4">{description}</span>
          </p>
          <span className="detail-box__span">
            price when you purchsed online
          </span>
          <div className="line"></div>
          <DetailInfo />
          <div className="line"></div>
        </div>
      ) : (
        <div className="detail-box box-1">
          <div className="detail-box__img">
            <img src={imageUrl} alt="" />
          </div>
          <div className="detail-box__data">
            <h3 className="detail-box__name">{name}</h3>
            <span className="detail-box__quantity">
              Only <span>${quantity}</span> items left
            </span>
            <span className="detail-box__quantity">Shop Now 💥</span>
            <AddToCart name={name} price={price} id={_id} />
          </div>
        </div>
      )}
    </>
  );
}

export default IngredientDetailBox;
