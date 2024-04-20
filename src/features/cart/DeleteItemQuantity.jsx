import { useCart } from "../../context/CartContext";
import ButtonOrder from "../../ui/ButtonOrder";
import { useDeleteCart } from "./useDeleteCart";

function DeleteItemQuantity({ id }) {
  const { dispatch } = useCart();

  const { deleteCart, isLoading } = useDeleteCart();
  function handelDelete() {
    dispatch({ type: "cart/delete", payload: id });
    deleteCart({ id });
  }

  return (
    <ButtonOrder type="delete" onClick={handelDelete} disabled={isLoading}>
      Delete
    </ButtonOrder>
  );
}

export default DeleteItemQuantity;
