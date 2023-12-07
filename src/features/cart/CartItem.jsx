import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/helper";
import DeleteItemQuantity from "./DeleteItemQuantity";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { name, id, quantity, totalPrice } = item;
  const { getCurrentById } = useCart();
  return (
    <li className="py-5 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-[1.4rem] font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity id={id} quantity={getCurrentById(id)} />
        <DeleteItemQuantity id={id} />
      </div>
    </li>
  );
}

export default CartItem;
