import SpinnerMini from "../../ui/SpinnerMini";
import { useCart } from "../../context/CartContext";
import ButtonOrder from "../../ui/ButtonOrder";
import { useUpdateCart } from "./useUpdateCart";

function UpdateItemQuantity({ id, quantity }) {
  const { dispatch } = useCart();

  const { updateCart, isLoading } = useUpdateCart();
  function handelIncrease() {
    dispatch({ type: "cart/increase", payload: id });
    updateCart({ id, quantity: quantity + 1 });
  }

  function handeDelete() {
    dispatch({ type: "cart/decrease", payload: id });
    updateCart({ id, quantity: quantity - 1 });
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
