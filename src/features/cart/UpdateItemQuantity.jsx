import ButtonOrder from "../../ui/ButtonOrder";
import { useDispatch, useSelector } from "react-redux";
import { decreaseIngredient, increaseIngredient } from "./cartSlice";

function UpdateItemQuantity({ id, quantity }) {
  const { isLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handelIncrease() {
    dispatch(increaseIngredient(id, quantity + 1));
  }

  function handeDelete() {
    dispatch(decreaseIngredient(id, quantity - 1));
  }

  return (
    <>
      <ButtonOrder type="rounded" onClick={handeDelete} disabled={isLoading}>
        -
      </ButtonOrder>
      {quantity}
      <ButtonOrder type="rounded" onClick={handelIncrease} disabled={isLoading}>
        +
      </ButtonOrder>
    </>
  );
}

export default UpdateItemQuantity;
