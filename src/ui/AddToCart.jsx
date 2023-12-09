import { useCart } from "../context/CartContext";
import DeleteItemQuantity from "../features/cart/DeleteItemQuantity";
import UpdateItemQuantity from "../features/cart/UpdateItemQuantity";
import ButtonOrder from "./ButtonOrder";

function AddToCart({ name, price, id }) {
  const { dispatch, getCurrentById, addCart } = useCart();
  const count = getCurrentById(id);

  const isIncart = count > 0;

  function handelAdd() {
    dispatch({
      type: "cart/add",
      payload: { name, price, id, quantity: 1, totalPrice: 1 },
    });
    addCart();
  }

  return (
    <>
      {isIncart && (
        <div className="flex items-center gap-3 sm:gap-8">
          <UpdateItemQuantity id={id} quantity={count} />
          <DeleteItemQuantity id={id} />
        </div>
      )}
      {!count && <ButtonOrder onClick={handelAdd}>Add to cart</ButtonOrder>}
    </>
  );
}

export default AddToCart;
