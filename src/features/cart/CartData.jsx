import { useCart } from "../../context/CartContext";
import ButtonOrder from "../../ui/ButtonOrder";
import CartItem from "./CartItem";
import Prevoius from "../../ui/Prevoius";
import { useNavigate } from "react-router-dom";
function CartData() {
  const { ingredients, dispatch } = useCart();
  const navigate = useNavigate();

  function handelOrder() {
    navigate("/order");
  }
  return (
    <div className="px-4 py-3">
      <Prevoius> &larr; Back to menu</Prevoius>

      {ingredients.length ? (
        <>
          <h2 className="mt-7 text-[2rem] font-semibold">
            Your cart, Tun Tun Myint
          </h2>

          <ul className="mt-3 divide-y divide-stone-200 border-b">
            {ingredients.map((item) => (
              <CartItem item={item} />
            ))}
          </ul>

          <div className="mt-6 space-x-2">
            <ButtonOrder onClick={handelOrder}>Order Now</ButtonOrder>

            <ButtonOrder
              type="secondary"
              onClick={() => dispatch({ type: "cart/clear" })}
            >
              Clear cart
            </ButtonOrder>
          </div>
        </>
      ) : (
        <p className="mt-7 font-semibold tracking-wider">
          Your cart is still empty. Start adding some ingredients :)
        </p>
      )}
    </div>
  );
}

export default CartData;
