import { useCart } from "../../context/CartContext";
import ButtonOrder from "../../ui/ButtonOrder";

function UpdateItemQuantity({ id, quantity }) {
  const { dispatch } = useCart();

  function handelIncrease() {
    dispatch({ type: "cart/increase", payload: id })
  }

  function handeDelete() {
    dispatch({ type: "cart/decrease", payload: id })
  }
  return (
    <>
      <ButtonOrder type="rounded" onClick={handeDelete}>-</ButtonOrder>
      {quantity}
      <ButtonOrder
        type="rounded"
        onClick={handelIncrease}
      >
        +
      </ButtonOrder>
    </>
  );
}

export default UpdateItemQuantity;
