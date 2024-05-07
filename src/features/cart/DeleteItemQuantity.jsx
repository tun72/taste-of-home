import { useDispatch, useSelector } from "react-redux";
import ButtonOrder from "../../ui/ButtonOrder";

import { deleteIngredient } from "./cartSlice";

function DeleteItemQuantity({ id }) {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.cart);
  function handelDelete() {
    dispatch(deleteIngredient(id));
  }

  return (
    <ButtonOrder type="delete" onClick={handelDelete} disabled={isLoading}>
      Delete
    </ButtonOrder>
  );
}

export default DeleteItemQuantity;
