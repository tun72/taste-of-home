import DeleteItemQuantity from "../features/cart/DeleteItemQuantity";
import UpdateItemQuantity from "../features/cart/UpdateItemQuantity";
import ButtonOrder from "./ButtonOrder";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredient,
  getCurrentQuantityById,
} from "../features/cart/cartSlice";

function AddToCart({ id }) {
  // const count = getCurrentById(id);
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const { isLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const isIncart = currentQuantity !== 0;

  function handelAdd() {
    dispatch(addIngredient(id, 1));
  }
  return (
    <>
      {isIncart && (
        <div className="flex items-center gap-3 sm:gap-8">
          <UpdateItemQuantity id={id} quantity={currentQuantity} />
          <DeleteItemQuantity id={id} />
        </div>
      )}
      {!isIncart && (
        <ButtonOrder onClick={handelAdd} size="small" disabled={isLoading}>
          Add to cart
        </ButtonOrder>
      )}
    </>
  );
}

export default AddToCart;
