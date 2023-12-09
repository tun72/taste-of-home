import { formatCurrency } from "../../utils/helper";
import { Link } from "react-router-dom";
import AddToCart from "../../ui/AddToCart";
function IngredientMenuList({ ingredient }) {
  const {
    _id,
    category,
    description,
    imageUrl,
    name,
    price,
    quantity,
    rating,
  } = ingredient;

  return (
    <li className="flex gap-4 py-4">
      <Link to={"/ingredient/" + _id}>
        <img
          src={imageUrl}
          alt={name}
          className="h-[10rem] w-[10rem] object-cover"
        />
      </Link>
      <div className="flex grow flex-col pt-0.5">
        <Link to={"/ingredient/" + _id}>
          <p className="text-medium">{name}</p>
          <p>{category}</p>
        </Link>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-stone-500">{formatCurrency(price)}</p>
          <div className="flex flex-col gap-4">
            <AddToCart name={name} id={_id} price={price} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default IngredientMenuList;
