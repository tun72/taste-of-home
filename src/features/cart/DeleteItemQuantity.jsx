import { useCart } from "../../context/CartContext";
import ButtonOrder from "../../ui/ButtonOrder";

function DeleteItemQuantity({ id }) {
  const { dispatch } = useCart();

  console.log(id);
  return (
    <ButtonOrder
      type="delete"
      onClick={() => {
        dispatch({ type: "cart/delete", payload: id });
      }}
    >
      Delete
    </ButtonOrder>
  );
}

export default DeleteItemQuantity;
