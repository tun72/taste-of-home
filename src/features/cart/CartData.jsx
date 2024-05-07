import ButtonOrder from "../../ui/ButtonOrder";
import CartItem from "./CartItem";
import Prevoius from "../../ui/Prevoius";
import { useNavigate } from "react-router-dom";
import { useDeleteCart } from "./useDeleteCart";
import { useSelector } from "react-redux";
import Spinner from "../../ui/Spinner";
import { getCart, getLength } from "./cartSlice";
function CartData() {
  const navigate = useNavigate();
  const { deleteCart, isLoading } = useDeleteCart();
  const { ingredients, isLoading: cartLoading } = useSelector(getCart);
  const cartLength = useSelector(getLength);

  function handelOrder() {
    navigate("/order");
  }

  function handelDelete() {
    deleteCart({ status: "all" });
  }

  if (cartLoading) return <Spinner />;

  if (cartLength <= 0)
    return (
      <p className="mt-7 font-semibold tracking-wider">
        Your cart is still empty. Start adding some ingredients :)
      </p>
    );

  return (
    <div className="">
      <Prevoius> &larr; Back to menu</Prevoius>

      <h2 className="mt-7 text-[2rem] font-semibold">
        Your cart, Tun Tun Myint
      </h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {ingredients.map((item) => (
          <CartItem item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <ButtonOrder onClick={handelOrder} disabled={isLoading}>
          Order Now
        </ButtonOrder>

        <ButtonOrder
          type="secondary"
          onClick={handelDelete}
          disabled={isLoading}
        >
          Clear cart
        </ButtonOrder>
      </div>
    </div>
  );
}

export default CartData;
