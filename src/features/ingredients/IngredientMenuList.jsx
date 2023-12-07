import { useCart } from "../../context/CartContext";
import ButtonOrder from "../../ui/ButtonOrder";
import { formatCurrency } from "../../utils/helper";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import DeleteItemQuantity from "../cart/DeleteItemQuantity";
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
  const { dispatch, getCurrentById, addCart } = useCart();
  const count = getCurrentById(_id);
  const isIncart = count > 0;

  function handelAdd(items) {
    const newItems = {
      name,
      price,
      id: _id,
      quantity: 1,
      totalPrice: price * 1,
    };

    dispatch({ type: "cart/add", payload: newItems });
    addCart();
  }
  return (
    <li className="flex gap-4 py-4">
      <img
        src={imageUrl}
        alt={name}
        className="h-[10rem] w-[10rem] object-cover"
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="text-medium">{name}</p>
        <p>{category}</p>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-stone-500">{formatCurrency(price)}</p>
          <div className="flex flex-col gap-4">
            {isIncart && (
              <div className="flex items-center gap-3 sm:gap-8">
                <UpdateItemQuantity id={_id} quantity={getCurrentById(_id)} />
                <DeleteItemQuantity id={_id} />
              </div>
            )}
            {!count && (
              <ButtonOrder onClick={handelAdd}>Add to cart</ButtonOrder>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default IngredientMenuList;
