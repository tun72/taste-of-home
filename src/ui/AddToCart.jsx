import DeleteItemQuantity from "../features/cart/DeleteItemQuantity";
import UpdateItemQuantity from "../features/cart/UpdateItemQuantity";
import ButtonOrder from "./ButtonOrder";
import { useAddCart } from "../features/cart/useAddCart";

function AddToCart({ name, price, id }) {
  const { addToCart, isLoading } = useAddCart();

  // const count = getCurrentById(id);

  const isIncart = 0;

  function handelAdd() {
    // dispatch({
    //   type: "cart/add",
    //   payload: { name, price, id, quantity: 1, totalPrice: 1 },
    // });

    addToCart({ id, quantity: 1 });
  }

  return (
    <>
      {isIncart && (
        <div className="flex items-center gap-3 sm:gap-8">
          <UpdateItemQuantity id={id} quantity={0} />
          <DeleteItemQuantity id={id} />
        </div>
      )}
      {!0 && <ButtonOrder onClick={handelAdd} size="small">Add to cart</ButtonOrder>}
    </>
  );
}

export default AddToCart;
