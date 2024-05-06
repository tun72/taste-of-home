
import ButtonOrder from "../../ui/ButtonOrder";
import { useDeleteCart } from "./useDeleteCart";

function DeleteItemQuantity({ id }) {
  const { deleteCart, isLoading } = useDeleteCart();
  function handelDelete() {
    deleteCart({ id });
  }

  return (
    <ButtonOrder type="delete" onClick={handelDelete} disabled={isLoading}>
      Delete
    </ButtonOrder>
  );
}

export default DeleteItemQuantity;
