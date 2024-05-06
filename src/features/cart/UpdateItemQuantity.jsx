import SpinnerMini from "../../ui/SpinnerMini";
import ButtonOrder from "../../ui/ButtonOrder";
import { useUpdateCart } from "./useUpdateCart";

function UpdateItemQuantity({ id, quantity }) {
  const { updateCart, isLoading } = useUpdateCart();
  function handelIncrease() {
    updateCart({ id, quantity: quantity + 1 });
  }

  function handeDelete() {
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
